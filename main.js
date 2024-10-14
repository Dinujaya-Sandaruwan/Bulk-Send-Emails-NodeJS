const fs = require("fs");
const axios = require("axios");

const jsonData = JSON.parse(fs.readFileSync("data.json", "utf8"));

const BASE_API_ENDPOINT = "http://localhost:3000/api";

async function callAPI(indexNumber) {
  const apiEndpoint = `${BASE_API_ENDPOINT}/${indexNumber}/pdf`;
  try {
    const response = await axios.get(apiEndpoint);
    if (response.data["Send Emails"] === "Done") {
      console.log(`Successfully processed index: ${indexNumber}`);
      return true;
    } else {
      console.error(`Unexpected response for index: ${indexNumber}`);
      return false;
    }
  } catch (error) {
    console.error(`Error processing index ${indexNumber}: ${error.message}`);
    return false;
  }
}
async function processAllIndexNumbers() {
  let lastSuccessfulIndex = null;

  for (const item of jsonData) {
    const success = await callAPI(item.olindexno);
    if (!success) {
      console.error(
        `Stopping due to error. Last successful index: ${lastSuccessfulIndex}`
      );
      break;
    }
    lastSuccessfulIndex = item.olindexno;
  }

  if (lastSuccessfulIndex === jsonData[jsonData.length - 1].olindexno) {
    console.log("All index numbers processed successfully.");
  }
}

processAllIndexNumbers();
