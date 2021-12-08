const router = require("express").Router();
const { Temperament } = require("../db.js");
const { apiRequest } = require("./getDogs.js");

router.get("/", async function (req, res) {
	try {
		const dbCheck = await Temperament.findAll({
			attributes: { exclude: ["createdAt", "updatedAt"] },
		});

		if (dbCheck.length === 0) {
			const response = await apiRequest();
			const aux = response.filter((e) => e.temperament !== undefined);
			const aux2 = aux.map((e) => e.temperament.split(", ")).flat();
			const result = [...new Set(aux2)];
			const promises = result.map((e) => {
				return Temperament.create({ name: e });
			});
			await Promise.all(promises);

			const temperaments = await Temperament.findAll({
				attributes: { exclude: ["createdAt", "updatedAt"] },
			});
			res.send(temperaments);
		} else {
			res.send(dbCheck);
		}
	} catch (err) {
		console.log(err);
	}
});

module.exports = router;
