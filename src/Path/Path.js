import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Components/Home/Home";
import Details from "../Components/Details/Details";
export default function Path() {
    return (_jsx(BrowserRouter, { children: _jsxs(Routes, { children: [_jsx(Route, { element: _jsx(_Fragment, { children: _jsx(Home, {}) }), path: "/" }), _jsx(Route, { element: _jsx(Details, {}), path: "/details" })] }) }));
}
