const express = require("express");
const mongoConnect = require("./connection");
const urlRouter = require("./routes/url");
const redirectRouter = require("./routes/redirect");

const app = express();
const PORT = 8000;
mongoConnect("mongodb://localhost:27017/URL-shortner");

app.use(express.json());
app.use("/url", urlRouter);
app.use("/", redirectRouter);

app.listen(PORT, () => {
	console.log("Server Running on : " + "http://localhost:" + PORT + "/");
});
