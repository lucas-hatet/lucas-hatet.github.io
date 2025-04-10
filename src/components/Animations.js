"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var framer_motion_1 = require("framer-motion");
var TextFade = function (_a) {
    var children = _a.children;
    return ((0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { initial: {
            opacity: 0,
            translateY: 20
        }, animate: {
            opacity: 1,
            translateY: 0
        }, transition: { duration: 1 }, className: "text-5xl font-bold text-center mt-20", children: children }));
};
exports.default = TextFade;
