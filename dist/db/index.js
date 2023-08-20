"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Url = void 0;
var mongoose = require("mongoose");
var urlSchema_1 = require("./urlSchema");
var config_1 = require("./../config");
var PATH = config_1.config.DB_PATH || 'mongodb://0.0.0.0:27017/file-upload';
mongoose.connect(PATH);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'db connection error:'));
db.once('open', function () { return console.info('connected to db ', PATH); });
exports.Url = mongoose.model('Url', urlSchema_1.urlSchema);
//# sourceMappingURL=index.js.map