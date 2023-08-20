"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileRouter = void 0;
var express = require("express");
var routes_1 = require("./routes");
var FileRouter = /** @class */ (function () {
    function FileRouter() {
        this.router = express.Router();
        this.router.post('/create-short-url', routes_1.FileRoutes.createShortUrl);
        this.router.get('/:shortId', routes_1.FileRoutes.downloadFile);
    }
    return FileRouter;
}());
exports.FileRouter = FileRouter;
//# sourceMappingURL=index.js.map