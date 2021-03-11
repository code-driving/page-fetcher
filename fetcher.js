/*Implement a small command line node app called fetcher.js which should take a URL as a command-line argument as well as a local file path and download the resource to the specified path.*/

const request = require("request");
const fs = require("fs");
const readline = require("readline");
const { on } = require("node:events");
const args = process.argv.slice(2);
const URL = args[0];
const localFilePath = args[1];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// console.log('URL===>', URL)
// console.log('localFilePath===>', localFilePath)

request
  .get(URL)
  .on("error", (err) => {
    console.log(err);
  })
  .on("response", (response) => {
    // fs.lstatSync(localFilePath).isDirectory();
    fs.writeFile(
      localFilePath,
      response,
      {
        encoding: "utf8",
      },
      (err) => {
        if (err) {
          //if THE GIVEN PATH IS INVALID
          if (err.code == "ENOENT") {
            //let the user know about this issue
          }
          if (response.statusCode !== 200) {
            //terminate the app explaining to the user what went wrong, and not write the response body to the file.
            rl.write("Sorry, the connection was interrupted.");
            rl.close();
          }
          // if (/*file already exists */) {
          //     //overwrite the file without prompting ||
          //     //let the user know and prompt them to type in Y(followed by the enter key) to overwrite the file, otherwise skip and exit the app.
          //     //USE HERE READLINE
          // }
        }
      }
    );
  });
