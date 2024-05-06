const URL = require("../model/url");
const shortid = require("shortid");

async function handleGenerateShortUrl(req, res) {
	const body = req.body;
	if (!body.url) return res.status(404).json({ message: "URL is required" });
	const shortId = shortid();

	await URL.create({
		shortId: shortId,
		redirectUrl: body.url,
		visitHistory: [],
	});

	return res.status(200).json({ message: "success", shortUrl: shortId });
}

async function handleAnalytics(req, res) {
	const shortId = req.params.shortId;
	if (!shortId) return res.status(400).json({ message: "url required" });
	const data = await URL.findOne({shortId});

	return res.json({ totalClicks: data.visitHistory.length, analytics: data.visitHistory });
}

module.exports = { handleGenerateShortUrl, handleAnalytics };
