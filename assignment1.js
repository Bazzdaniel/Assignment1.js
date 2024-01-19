console.log('WEB700 - Web Server Simulator');

'use strict';

// Predefined arrays
var serverVerbs = ["GET", "GET", "GET", "POST", "GET", "POST"];
var serverPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout"];
var serverResponses = [
    "Welcome to WEB700 Assignment 1",
    "This assignment was prepared by chukwudima daniel obaze",
    "[obazedaniel]: [cdobaze@myseneca.ca]",
    "User Logged In",
    "Main Panel",
    "Logout Complete"
];

// The httpRequest function
function httpRequest(httpVerb, path) {
    for (var i = 0; i < serverVerbs.length; i++) {
        if (serverVerbs[i] === httpVerb && serverPaths[i] === path) {
            return `200: ${serverResponses[i]}`;
        }
    }
    return `404: Unable to process ${httpVerb} request for ${path}`;
}

// Manual Testing
console.log(httpRequest("GET", "/contact")); // Should return "200: Welcome to WEB700 Assignment 1"
console.log(httpRequest("GET", "/about")); // Should return "200: This assignment was prepared by Oluwademilade Salami"

// Add more tests as needed

// Additional arrays for testing
var testVerbs = ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD"];
var testPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout", "/invalid", "/test"];

// Utility function to generate random integers
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

// Function to automate tests
function automateTests() {
    function randomRequest() {
        var randomVerb = testVerbs[getRandomInt(testVerbs.length)];
        var randomPath = testPaths[getRandomInt(testPaths.length)];
        var response = httpRequest(randomVerb, randomPath);
        console.log(`Request: ${randomVerb} ${randomPath} - Response: ${response}`);
    }

    setInterval(randomRequest, 1000); // Calls randomRequest every second
}

// Running automated tests
automateTests();
