"use strict";
exports.__esModule = true;
var router_1 = require("next/router");
var link_1 = require("next/link");
var react_1 = require("react");
var Breadcrumb_module_css_1 = require("../../styles/Breadcrumb.module.css");
var Breadcrumb = function () {
    var router = router_1.useRouter();
    var pathArray = router.pathname.split("/").filter(function (path) { return path; });
    return (react_1["default"].createElement("nav", { className: Breadcrumb_module_css_1["default"].breadcrumb },
        react_1["default"].createElement("ol", { className: Breadcrumb_module_css_1["default"].breadcrumbList },
            react_1["default"].createElement("li", null,
                react_1["default"].createElement(link_1["default"], { href: "/" }, "Home")),
            pathArray.map(function (path, index) {
                var href = "/" + pathArray.slice(0, index + 1).join("/");
                var isLast = index === pathArray.length - 1;
                return (react_1["default"].createElement("li", { key: href }, isLast ? (react_1["default"].createElement("span", null, path.replace(/-/g, " "))) : (react_1["default"].createElement(link_1["default"], { href: href }, path.replace(/-/g, " ")))));
            }))));
};
exports["default"] = Breadcrumb;
