const router = require("express").Router();
const { Op } = require("sequelize");
const { Dog, Temperament } = require("../db.js");

router.post("/", async (req, res) => {
	const { name, height, weight, img, lifeSpan, temperamentName } = req.body;
	// add the breed in the DB with the info passed through req.body
	try {
		const addedBreed = await Dog.create({
			name: name,
			height: height,
			weight: weight,
			img: img,
			lifeSpan: lifeSpan,
		});
		// search in the temperaments table the ones that correspond to the names of the temperaments passed as an array through req.body
		let temperamentsDB = await Temperament.findAll({
			where: {
				name: temperamentName,
			},
		});
		//add the fetched temperaments to the intermediate table to associate the dog being created with the selected temperaments.
		const promises = temperamentsDB.map((e) => {
			return addedBreed.addTemperament(e);
		});
		res.send("Dog Added");
	} catch (err) {
		res.sendStatus(400);
	}
});

module.exports = router;
