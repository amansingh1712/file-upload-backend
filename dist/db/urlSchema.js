"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlSchema = void 0;
var mongoose = require("mongoose");
var ObjectId = mongoose.Schema.Types.ObjectId;
exports.urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true,
    },
    redirectUrl: {
        type: String,
        required: true,
    },
}, { timestamps: true });
//# sourceMappingURL=urlSchema.js.map