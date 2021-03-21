const dotenv = require("dotenv");
const path = require("path");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mockAPIResponse = require("./mockAPI.js");
const axios = require("axios");

const PORT = 8081;
dotenv.config();
const BASE_API_URL = "https://api.meaningcloud.com/sentiment-2.1";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.static("dist"));

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});
app.post("/analyse-document", async (req, res) => {
  try {
    const url = req.body.url;
    try {
      const response = await axios.get(BASE_API_URL, {
        params: {
          lang: "en",
          key: process.env.API_KEY,
          of: "json",
          url,
        },
      });
      const sample = {
        agreement: response.data.agreement,
        confidence: response.data.confidence,
        irony: response.data.irony,
        subjectivity: response.data.subjectivity,
        score_tag: response.data.score_tag,
        text: response.data.sentence_list[0].text,
      };
      res.send(sample);
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal server error!");
    }
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});

// designates what port the app will listen to for incoming requests
app.listen(PORT, (error) => {
  if (error) throw new Error(error);
  console.log(`Server listening on port ${PORT}!`);
});

// TODO: export app to use it in the unit testing
module.exports = app;
