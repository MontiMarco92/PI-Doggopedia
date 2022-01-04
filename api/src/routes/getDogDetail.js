const router = require("express").Router();
const { Dog, Temperament } = require("../db.js");
const { apiRequest } = require("./getDogs");

router.get("/:breedId", async (req, res) => {
	const { breedId } = req.params;
	try {
		//if breedId is a number then comes from API, else comes from DB as id is saved as UUID.
		if (Number(breedId) <= 1000) {
			//request data from API
			const apiResponse = await apiRequest();
			// find the element that matches de provided id through params in api response
			const aux = apiResponse.find((e) => e.id === Number(breedId));
			const result = {
				id: aux.id, //id?
				img: aux.image.url,
				name: aux.name,
				temperament: aux.temperament,
				height: aux.height.metric,
				weight: aux.weight.metric,
				lifeSpan: aux.life_span.replace(" years", ""), // remove the 'years' so it does not repeat afterwards in the front
			};
			res.send(result);
		} else {
			// find the element that matches de provided id through params in database and bring temperament details through intermediate table
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
				id: dbResponse.id,
				img: dbResponse.img,
				name: dbResponse.name,
				temperament: dbResponse.temperaments.flatMap((i) => i.name).join(", "), //flattening or 'de-nesting' array
				height: dbResponse.height,
				weight: dbResponse.weight,
				lifeSpan: dbResponse.lifeSpan,
			};
			res.send(result);
		}
	} catch (err) {
		res.sendStatus(400);
	}
});
module.exports = router;
