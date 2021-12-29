const router = require("express").Router();
const { Temperament } = require("../db.js");
const { apiRequest } = require("./getDogs.js");

router.get("/", async function (req, res) {
	try {
		//DB check to see if there's already temperaments saved
		const dbCheck = await Temperament.findAll({
			attributes: { exclude: ["createdAt", "updatedAt"] },
		});
		//if not, then all the temperaments are brought from API, formatted and filtered, and then saved in DB
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
			//if temperaments are already in DB I simply return all the list
			res.send(dbCheck);
		}
	} catch (err) {
		res.sendStatus(400);
	}
});

module.exports = router;
