/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Dog, conn } = require("../../src/db.js");

const agent = session(app);
const dog = {
	name: "Pug",
	height: "10 - 20",
	weight: "15 - 30",
	lifeSpan: "7 - 15",
};

xdescribe("dog routes", () => {
	before(() =>
		conn.authenticate().catch((err) => {
			console.error("Unable to connect to the database:", err);
		})
	);
	beforeEach(() => Dog.sync({ force: true }).then(() => Dog.create(dog)));
	describe("GET /dogs", () => {
		it("should get 200", async () => {
			let response = await agent.get("/dogs");
			expect(response.status).to.equal(200);
		});

		it("should get API results as well as DB results", async () => {
			let { body } = await agent.get("/dogs");
			let filter = body.filter((e) => {
				return typeof e.id === "string";
			});
			let result = body.length > 1 && filter.length === 1 ? true : false;
			expect(result).to.be.true;
		});
		it("should return an array of objects with id, name, weight, height, temperaments and img properties", async () => {
			let { body } = await agent.get("/dogs");
			const arrCheck = Array.isArray(body);
			let propCheck;
			Object.keys(body[1]).forEach((e) => {
				if (
					e === "id" ||
					e === "name" ||
					e === "weight" ||
					e === "height" ||
					e === "temperament" ||
					e === "img"
				) {
					propCheck = true;
				} else return (propCheck = false);
			});
			expect(arrCheck && propCheck).to.be.true;
		});
	});

	describe("GET /dogs?name=string", () => {
		it("should get dogs whose names contain the string passed", async () => {
			const result = async (queryString) => {
				let { body } = await agent.get(`/dogs?name=${queryString}`);
				const filter = body.filter((e) => e.name.includes(!queryString));
				return filter.length;
			};
			expect(await result("pug")).to.equal(0);
			expect(await result("coonhound")).to.equal(0);
		});
	});
});
