/*Implement a small command line node app called fetcher.js which should take a URL as a command-line argument as well as a local file path and download the resource to the specified path.*/

const request = require('request');
const fs = require('fs')
const readline = require('readline');
const args = process.argv.slice(2)
const URL = args[0]
const localFilePath = args[1]

console.log('URL===>', URL)
console.log('localFilePath===>', localFilePath)

// const req = request('', (error, res, body) => {
  
//   res.on('data', (d) => {
    
//   })
// })

// request('http://www.example.edu', (error, response, body) => {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });


// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('What do you think of Node.js? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });