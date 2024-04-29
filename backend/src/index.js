const express = require("express");
const cors = require("cors");
const axios = require("axios");

// HTTP logger
const morgan = require("morgan");
// app.use(morgan('combined'))

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.listen(3001);
