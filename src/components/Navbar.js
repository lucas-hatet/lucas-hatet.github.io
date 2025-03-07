import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (_jsxs("nav", { style: { padding: "1rem", borderBottom: "1px solid #ccc" }, children: [_jsx(Link, { to: "/", style: { marginRight: "10px" }, children: "Accueil" }), _jsx(Link, { to: "/about", children: "\u00C0 propos" })] }));
};
export default Navbar;
