"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.exportJSONToFile = void 0;
const fs_1 = __importDefault(require("fs"));
const exportJSONToFile = (json) => {
    let jsonFile = '';
    if (typeof json === 'object') {
        jsonFile = JSON.stringify(json);
    }
    fs_1.default.writeFileSync('jsonFile.json', jsonFile);
};
exports.exportJSONToFile = exportJSONToFile;
