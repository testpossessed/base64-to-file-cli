# base64-to-file-cli
NodeJS CLI to convert a Base64 string to bytes and save to a file

## Installation
The package is intended to be installed globally under npm so you can use it from anywhere (assuming your path includes npm).  To install it:

```
    npm install -g b64-to-file-cli
```

NB: Sadly include base64 in the name of a package triggers Spam Detection on publish so had to modify the name some how
## Usage
base64-to-file-cli requires two arguments the data to convert and a file path to write the output to.

Running it without any arguments or with the -h or --help option will produce the following output, which tells you pretty much all you need

```
Usage: index [options]

  Converts a base64 string to bytes and saves to a file

  Options:

    -V, --version              output the version number
    -d, --data <required>      The base64 data to be converted (enclosed in quotes)
    -f, --filePath <required>  The file path and name to save the converted data to (enclosed in quotes)
    -h, --help                 output usage information
```

## Example
The following will generate a file in the current directory containing the decoded base64 string.

```
    base64-to-file -d "ABCDEFG==" -f "example.txt"
```

## Why?
As a contractor I recently had to create a version of some AngularJS components that would run in older browsers, specifically IE8 and IE6 (yes apparently some big organisations still use these).  I had to make sure the look and feel was as close as possible, but all of the image assets were embedded in the CSS using data URLS so I needed to extract the images to files to publish with my version of the app.  Google produced some scripts and code, but couldn't find anything that was packaged up to download so I created this utility and published to NPM.  I hope others find it useful.

## Issues
If you have any issues or questions please feel free to post them on GitHub at https://github.com/testpossessed/base64-to-file-cli/issues





