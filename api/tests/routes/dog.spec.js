/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Dog, conn } = require("../../src/db.js");

const agent = session(app);
const dog = {
	name: "perrito malvado",
	height: "10 - 20",
	weight: "15 - 30",
	lifeSpan: "7 - 15",
};

describe("dog routes", () => {
	before(() =>
		conn.authenticate().catch((err) => {
			console.error("Unable to connect to the database:", err);
		})
	);
	beforeEach(() => Dog.sync({ force: true }).then(() => Dog.create(dog)));
	afterEach(() => Dog.sync({ force: true }));
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
		it("should return an array of objects with id, name, weight, temperaments and img properties", async () => {
			let { body } = await agent.get("/dogs");
			//check if received info is an array
			const arrCheck = Array.isArray(body);
			//check the object within array has 6 properties
			let countPropCheck = Object.keys(body[1]).length === 5 ? true : false;
			//check if the object contain the mentioned properties
			const aux = ["id", "name", "weight", "height", "temperament", "img"];
			let namePropCheck;
			aux.forEach((e) => {
				if (Object.keys(body[1]).includes(e)) {
					namePropCheck = true;
				} else {
					return (propCheck = false);
				}
			});

			expect(arrCheck && countPropCheck && namePropCheck).to.be.true;
		});
	});

	describe("GET /dogs?name=string", () => {
		it("should get only the dogs whose names contain the string passed", async () => {
			const search = async (queryString) => {
				let { body } = await agent.get(`/dogs?name=${queryString}`);
				return body;
			};

			const result1 = await search("perrito malvado");
			expect(result1.length).to.equal(1);
			expect(result1[0].name).to.equal("perrito malvado");

			const result2 = await search("Coonhound");
			const filter = result2.filter((e) => {
				return e.name.includes("Coonhound");
			});
			expect(result2.length).to.equal(filter.length);
		});
	});
});
