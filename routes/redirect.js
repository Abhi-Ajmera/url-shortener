const express = require("express");
const URL = require("../model/url");
const router = express.Router();

router.get("/:shortId", async (req, res) => {
	const shortId = req.params.shortId;
	const data = await URL.findOneAndUpdate(
		{
			shortId,
		},
		{
			$push: {
				visitHistory: {
					timeStamp: Date.now(),
				},
			},
		}
	);
	res.redirect(data.redirectUrl);
});

module.exports = router;
