"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_router_dom_1 = require("react-router-dom");
var Navbar = function () {
    return ((0, jsx_runtime_1.jsxs)("nav", { style: { padding: "1rem", borderBottom: "1px solid #ccc" }, children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/", style: { marginRight: "10px" }, children: "Accueil" }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/about", children: "\u00C0 propos" })] }));
};
exports.default = Navbar;
