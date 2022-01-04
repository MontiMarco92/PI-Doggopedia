const { Dog, conn } = require("../../src/db.js");
const { expect } = require("chai");

describe("Dog model", () => {
	before(() =>
		conn.authenticate().catch((err) => {
			console.error("Unable to connect to the database:", err);
		})
	);
	describe("Validators", () => {
		beforeEach(() => Dog.sync({ force: true }));
		describe("name", () => {
			it("should throw an error if dog is null", () => {
				let error = null;
				Dog.create({})
					.then((r) => console.log("esto es r", r))
					.catch((err) => {
						error = err;
					})
					.finally(() => {
						expect(error).to.exist;
					});
			});
			it("should throw an error if name property is null", async () => {
				try {
					const response = await Dog.create({
						height: "20 - 30",
						weight: "25 - 40",
						lifeSpan: "7 - 15",
					});
				} catch {
					(err) => {
						expect(err).to.exist;
					};
				}
			});
			it("should throw an error if height property is null", async () => {
				try {
					const response = await Dog.create({
						name: "pug",
						weight: "25 - 40",
						lifeSpan: "7 - 15",
					});
				} catch {
					(err) => {
						expect(err).to.exist;
					};
				}
			});
			it("should throw an error if weight property is null", async () => {
				try {
					const response = await Dog.create({
						height: "20 - 30",
						name: "pug",
						lifeSpan: "7 - 15",
					});
				} catch {
					(err) => {
						expect(err).to.exist;
					};
				}
			});
			it("should throw an error if lifeSpan property is null", async () => {
				try {
					const response = await Dog.create({
						height: "20 - 30",
						weight: "25 - 40",
						name: "pug",
					});
				} catch {
					(err) => {
						expect(err).to.exist;
					};
				}
			});
			it("should work when all its properties are valid", async () => {
				let response = await Dog.create({
					name: "Pug",
					height: "5 - 15",
					weight: "10 - 25",
					lifeSpan: "8 - 15",
				});
				expect(response).to.exist;
			});
		});
	});
});
