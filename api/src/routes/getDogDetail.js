const router = require("express").Router();
const { Dog, Temperament } = require("../db.js");
const { apiRequest } = require("./getDogs");

router.get("/:breedId", async (req, res) => {
	const { breedId } = req.params;

	try {
		//if breedId is a number then comes from API, else comes from DB as id is saved as UUID.
		if (breedId <= 1000) {
			const apiResponse = await apiRequest();

			const aux = apiResponse.find((e) => e.id === Number(breedId));
			const result = {
				id: aux.id, //id?
				img: aux.image,
				name: aux.name,
				temperament: aux.temperament,
				height: aux.height,
				weight: aux.weight,
				lifeSpan: aux.life_span,
			};

			res.send(result);
		} else {
			const dbResponse = await Dog.findByPk(breedId, {
				attributes: { exclude: ["createdAt", "updatedAt"] },
				include: [
					{
						model: Temperament,
						attributes: ["name"],
						through: {
							attributes: [],
						},
					},
				],
			});
			const result = {
				id: dbResponse.id, //id?
				img: dbResponse.image,
				name: dbResponse.name,
				temperament: dbResponse.temperaments.flatMap((i) => i.name).join(", "),
				height: dbResponse.height,
				weight: dbResponse.weight,
				lifeSpan: dbResponse.lifeSpan,
			};
			res.send(result);
		}
	} catch (err) {
		console.log(err);
	}
});
module.exports = router;
