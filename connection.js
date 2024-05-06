const mongoose = require("mongoose");

const mongoConnect = (url) =>
	mongoose
		.connect(url)
		.then(() => console.log("mongoDb Connected Successfully"))
		.catch((e) => console.log(e + "Error connecting mongoDb"));

module.exports = mongoConnect;
