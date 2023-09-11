const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const fs = require("fs");
const jsonFilePath = "../injuries.json";

app.get("/injuries", async (req, res) => {
  try {
    // Reading the JSON data from the file
    const injuriesData = JSON.parse(fs.readFileSync(jsonFilePath, "utf8"));

    // Createing a list of maps where each map contains Dos and Don'ts for an injury
    const injuriesList = Object.keys(injuriesData).map((injury) => ({
      injury,
      Dos: injuriesData[injury].Dos,
      Donts: injuriesData[injury].Donts,
    }));
    res.send(injuriesList);
  } catch (error) {
    console.error("Error reading injuries data:", error);
    return [];
  }
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
