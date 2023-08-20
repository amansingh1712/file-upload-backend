"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
var dotenv = require("dotenv");
dotenv.config();
var Config = /** @class */ (function () {
    function Config() {
        this.DB_PATH = process.env.DB_PATH;
        this.PORT = process.env.PORT;
        this.HOST = process.env.HOST;
        this.FRONTEND_HOST = process.env.FRONTEND_HOST;
        this.S3_USER_KEY = process.env.S3_USER_KEY;
        this.S3_USER_SECRET = process.env.S3_USER_SECRET;
        this.S3_BUCKET_NAME = process.env.S3_BUCKET_NAME;
        this.S3_BUCKET_REGION = process.env.S3_BUCKET_REGION;
    }
    return Config;
}());
exports.config = new Config();
//# sourceMappingURL=config.js.map