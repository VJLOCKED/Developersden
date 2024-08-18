"use strict";
exports.__esModule = true;
var react_1 = require("react");
var link_1 = require("next/link");
var bi_1 = require("react-icons/bi");
var go_1 = require("react-icons/go");
var basic_module_css_1 = require("../../../styles/basic.module.css");
var Breadcrumb_1 = require("@/pages/component/Breadcrumb");
var Variables = function () {
    var items = [
        {
            label: "The console and introduction to variables",
            progress: react_1["default"].createElement(bi_1.BiChevronRightSquare, null),
            description: "Lesson",
            link: "/javascript-basics/variables/chapter-1"
        },
        {
            label: "Reassign a value to a variable",
            progress: react_1["default"].createElement(bi_1.BiChevronRightSquare, null),
            description: "Lesson",
            link: "/chapters/chapter2"
        },
        {
            label: "Assign a value to a variable",
            progress: react_1["default"].createElement(bi_1.BiChevronRightSquare, null),
            description: "Challenge",
            link: "/chapters/chapter3"
        },
        {
            label: "Assign the value of another vaiable",
            progress: react_1["default"].createElement(bi_1.BiChevronRightSquare, null),
            description: "Challenge.",
            link: "/chapters/chapter4"
        },
        {
            label: "Create the missing variable",
            progress: react_1["default"].createElement(bi_1.BiChevronRightSquare, null),
            description: "Challenge.",
            link: "/chapters/chapter5"
        },
        {
            label: "Create variables with const",
            progress: react_1["default"].createElement(bi_1.BiChevronRightSquare, null),
            description: "Challenge.",
            link: "/chapters/chapter6"
        },
        {
            label: "Accessing a vriable(1)",
            progress: react_1["default"].createElement(bi_1.BiChevronRightSquare, null),
            description: "Challenge.",
            link: "/chapters/chapter7"
        },
        {
            label: "Accessing a varable(2)",
            progress: react_1["default"].createElement(bi_1.BiChevronRightSquare, null),
            description: "Challenge.",
            link: "/chapters/chapter8"
        },
        {
            label: "Declare a variable and assign a number",
            progress: react_1["default"].createElement(bi_1.BiChevronRightSquare, null),
            description: "Challenge.",
            link: "/chapters/chapter9"
        },
        {
            label: "Reassign a value to a variable(2)",
            progress: react_1["default"].createElement(bi_1.BiChevronRightSquare, null),
            description: "Challenge.",
            link: "/chapters/chapter10"
        },
        {
            label: "Test: JavaScript variables",
            progress: react_1["default"].createElement(go_1.GoTrophy, null),
            description: "Challenge.",
            link: "/chapters/test"
        },
    ];
    return (react_1["default"].createElement("div", { className: basic_module_css_1["default"].container },
        react_1["default"].createElement(Breadcrumb_1["default"], null),
        items.map(function (item, index) { return (react_1["default"].createElement("div", { key: index, className: basic_module_css_1["default"].item },
            react_1["default"].createElement("div", { className: basic_module_css_1["default"].circleContainer },
                react_1["default"].createElement("div", { className: basic_module_css_1["default"].circle },
                    react_1["default"].createElement("span", null, item.progress)),
                index < items.length - 1 && react_1["default"].createElement("div", { className: basic_module_css_1["default"].line })),
            react_1["default"].createElement("div", { className: basic_module_css_1["default"].content },
                react_1["default"].createElement("h2", null,
                    react_1["default"].createElement(link_1["default"], { href: item.link, key: index, passHref: true, legacyBehavior: true },
                        react_1["default"].createElement("a", { className: basic_module_css_1["default"].navLink }, item.label))),
                react_1["default"].createElement("p", null, item.description)))); })));
};
exports["default"] = Variables;
