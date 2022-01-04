const router = require("express").Router();
const { Dog, Temperament } = require("../db.js");
const axios = require("axios");
const { API_KEY } = process.env;

//apiRequest func. defined to require it in other routes.

async function apiRequest() {
	return (
		await axios.get("https://api.thedogapi.com/v1/breeds", {
			headers: { "x-api-key": `${API_KEY}` },
		})
	).data;
}

router.get("/", async (req, res) => {
	const { name } = req.query;
	try {
		//api call to retrieve all dogs
		const apiResponse = await apiRequest();

		//DB call to retrieve all previously saved dogs  - referenced temperaments for every dog are recalled from temperaments table through intermediate table
		const dbResponse = await Dog.findAll({
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
		// console.log(JSON.stringify(dbResponse, null, 2))
		// Data from api and DB are mergerd in unique array
		const mergedData = [...dbResponse, ...apiResponse];

		//required data is formatted
		const result = mergedData.map((e) => {
			//created an aux function to deal with NaN results for weight values that came from API so afterwards sorting by weight is easier
			function helperWeight(el) {
				if (el === "NaN") {
					return "Unknown";
				} else if (el.length < 3) {
					return el;
				} else if (el.split(" - ")[1].includes("NaN")) {
					return el.split(" - ")[0];
				} else if (el.split(" - ")[0].includes("NaN")) {
					return el.split(" - ")[1];
				} else return el;
			}

			return {
				id: e.id,
				img: e.image ? e.image.url : e.img,
				name: e.name,
				//some of the dogs don't have temperaments associated so I have to validate to be able to apply flatmap method to the valid ones.
				temperament: e.temperaments
					? e.temperaments.flatMap((i) => i.name).join(", ")
					: e.temperament,
				weight: e.weight.metric ? helperWeight(e.weight.metric) : e.weight,
			};
		});

		//formatted result is filtered if query name is provided, else every result is sent to FE
		if (req.query.name) {
			const queryResult = result.filter((e) =>
				e.name.toLowerCase().includes(name.toLowerCase())
			);
			queryResult.length > 0 ? res.send(queryResult) : res.throw(Error);
		} else {
			res.send(result);
		}
	} catch (err) {
		res.sendStatus(400);
	}
});

module.exports = {
	getDogs: router,
	apiRequest,
};
