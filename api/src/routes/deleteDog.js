const router = require("express").Router();
const { Dog } = require("../db");

router.delete("/:breedId", async (req, res) => {
	const { breedId } = req.params;

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
