/*Implement a small command line node app called fetcher.js which should take a URL as a command-line argument as well as a local file path and download the resource to the specified path.*/

const request = require("request");
const fs = require("fs");
const readline = require("readline");
// const { on } = require("node:events");
const args = process.argv.slice(2);
const URL = args[0];
const localFilePath = args[1];

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// console.log('URL===>', URL)
// console.log('localFilePath===>', localFilePath)

//function to get the size of the received data
const getDataSize = (data) => {
  return fs.statSync(data).size;
};

const getResponse = (url) => {
  request(url, (error, response, receivedData) => {
    // if (error) throw error;

    try {
      fs.writeFile(localFilePath, receivedData, { encoding: "utf8" }, (error) => {
        if (error) throw error;
        if (response.statusCode !== 200) {
          console.log("Sorry. Connection was interrupted");
        }
      });
      console.log(
        `Downloaded and saved ${getDataSize(
          receivedData
        )} bytes to ${localFilePath}`
      );
    } catch (error) {
      console.log(error)
    }
  });
};

getResponse(URL);
