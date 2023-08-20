"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Get dependencies
var express = require("express");
var http = require("http");
var cors = require("cors");
var config_1 = require("./config");
var aws_1 = require("./routes/aws");
var file_1 = require("./routes/file");
try {
    var app = express();
    app.use(cors());
    // Parsers for POST data
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use('/aws', new aws_1.AwsRouter().router);
    app.use('/file', new file_1.FileRouter().router);
    app.get('/ram', function (req, res) {
        res.send('working fine!');
    });
    /**
     * Get port from environment and store in Express.
     */
    var port_1 = config_1.config.PORT || '8000';
    app.set('port', port_1);
    /**
     * Create HTTP server.
     */
    var server = http.createServer(app);
    server.listen(port_1, function () { return console.info("API running on localhost:".concat(port_1)); });
    module.exports = app;
}
catch (error) {
    console.log('error:', error);
    process.exit(1);
}
//# sourceMappingURL=index.js.map