const express = require('express');
const app = express();
let cors = require("cors");

app.use(express.json());
app.use('/', cors(),  require('./route/animalsRoute'));
app.listen(3003);
app.use(cors());

app.use(function (error, req, res, next) {
	if (error.message === 'Animal already exists') {
		return res.status(409).send(e.message);
	}
	if (error.message === 'Animal not found') {
		return res.status(404).send(e.message);
	}
	res.status(500).send(e.message);
});
