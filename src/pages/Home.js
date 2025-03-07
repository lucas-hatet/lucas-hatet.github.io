"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("../style/Home.css");
var TextAnimations_1 = __importDefault(require("../components/TextAnimations"));
var Home = function () {
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(TextAnimations_1.default, { children: (0, jsx_runtime_1.jsx)("h2", { children: "Bienvenue sur la page d'accueil !" }) }) }));
};
exports.default = Home;
