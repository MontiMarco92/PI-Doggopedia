const router = require("express").Router();
const { Dog } = require("../db");

router.delete("/:breedId", async (req, res) => {
	//get dogId through params
	const { breedId } = req.params;

	//delete selected dog from DB
	try {
		dbResponse = await Dog.destroy({
			where: { id: breedId },
		});
		console.log(dbResponse);
		res.sendStatus(200);
	} catch (err) {
		res.sendStatus(400);
	}
});

module.exports = router;
