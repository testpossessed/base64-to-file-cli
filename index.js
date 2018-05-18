#!/usr/bin/env node
"use strict";
const app = require("commander");
const fs = require("fs");
const isBase64 = require("is-base64");
const path = require("path");
const logAndExit = (message, exitCode = 0) => {
    console.log(message);
    process.exit(exitCode);
};
app.version("1.0.0")
    .description("Converts a base64 string to bytes and saves to a file")
    .option("-d, --data <required>", "The base64 data to be converted")
    .option("-f, --filePath <required>", "The file path and name to save the converted data to")
    .parse(process.argv);
if (!app.data || !app.filePath) {
    app.help();
}
if (!isBase64(app.data)) {
    logAndExit("Data value is not a valid base64 string");
}
const filePath = path.normalize(app.filePath);
let buf;
if (typeof Buffer.from === "function") {
    buf = Buffer.from(app.data, "base64");
}
else {
    buf = new Buffer(app.data, "base64");
}
fs.writeFile(filePath, buf, (err) => {
    if (err) {
        console.log("Error saving the file: " + err);
    }
    else {
        console.log("File successfully saved.");
    }
});
//# sourceMappingURL=index.js.map