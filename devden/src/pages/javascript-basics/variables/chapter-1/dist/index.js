"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var WelcomePage_1 = require("../../../ChaptersComponents/WelcomePage");
var Challenge_1 = require("../../../ChaptersComponents/Challenge");
var TextComponent_1 = require("../../../ChaptersComponents/TextComponent");
var Chapter_module_css_1 = require("../../../../styles/Chapter.module.css");
var Chapter1 = function () {
    var _a = react_1.useState(1), currentStep = _a[0], setCurrentStep = _a[1];
    var _b = react_1.useState(new Array(5).fill(false)), showComponent = _b[0], setShowComponent = _b[1]; // Adjust length as needed
    var _c = react_1.useState(false), welcomeFaded = _c[0], setWelcomeFaded = _c[1];
    var components = [
        {
            type: "welcome",
            title: "The console and introduction to variables",
            description: "Let's make our first steps in JavaScript",
            buttonText: "Start"
        },
        {
            type: "text",
            text: "This is a paragraph of text for the text component."
        },
        {
            type: "challenge"
        },
        {
            type: "text",
            text: "This is another paragraph of text for the text component."
        },
        {
            type: "challenge"
        },
    ];
    react_1.useEffect(function () {
        if (currentStep > 1) {
            setWelcomeFaded(true);
            setShowComponent(function (prev) {
                var newShowComponent = __spreadArrays(prev);
                newShowComponent[currentStep - 2] = true;
                return newShowComponent;
            });
        }
    }, [currentStep]);
    var handleStart = function () {
        setCurrentStep(2);
    };
    var handleContinue = function () {
        if (currentStep < components.length) {
            setCurrentStep(currentStep + 1);
        }
    };
    var renderComponent = function (component) {
        switch (component.type) {
            case "challenge":
                return react_1["default"].createElement(Challenge_1["default"], null);
            case "text":
                // Ensure text is defined or use an empty string
                return component.text ? react_1["default"].createElement(TextComponent_1["default"], { text: component.text }) : null;
            default:
                return null;
        }
    };
    var currentComponent = components[0]; // Safe access
    return (react_1["default"].createElement("div", { className: Chapter_module_css_1["default"].container },
        currentStep === 1 ? (react_1["default"].createElement("div", { className: Chapter_module_css_1["default"]["welcome-container"] + " " + (welcomeFaded ? Chapter_module_css_1["default"]["welcome-fade-out"] : "") },
            react_1["default"].createElement(WelcomePage_1["default"], { title: currentComponent.title || "", description: currentComponent.description || "", buttonText: currentComponent.buttonText || "", onContinue: handleStart }))) : (react_1["default"].createElement("div", { className: Chapter_module_css_1["default"]["content-container"] }, components.slice(1, currentStep).map(function (component, index) { return (react_1["default"].createElement("div", { key: index, className: Chapter_module_css_1["default"]["component-wrapper"] + " " + (showComponent[index] ? Chapter_module_css_1["default"]["slide-up"] : "") }, renderComponent(component))); }))),
        currentStep > 1 && currentStep < components.length && (react_1["default"].createElement("button", { onClick: handleContinue, className: Chapter_module_css_1["default"]["next-button"] }, "Continue"))));
};
exports["default"] = Chapter1;
