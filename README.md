# tenthousand
The official code base for 10,000 over Iowa

Web Server
=========
A simple webserver for serving files for 10,000 over Iowa

## Usage
node my_web_server.js


API Server
=========
A simple server for processing REST requests for the server for 10,000 over Iowa

## Usage
node my_api_server.js



Engine
=========

A library providing server utilities for 10,000 over Iowa's backend server

## Usage

  var engine = require('engine')
      currentTimeString = engine.get_time();

  console.log(currentTimeString);

## Tests

  npm test

## Release History

* 0.1.0 Milestone 1 release
