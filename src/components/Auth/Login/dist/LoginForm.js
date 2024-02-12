"use strict";
exports.__esModule = true;
var react_1 = require("react");
var image_1 = require("next/image");
var link_1 = require("next/link");
var gbitem_png_1 = require("../../../../public/img/auth/login/gbitem.png");
var OpenEyeSvg_1 = require("./OpenEyeSvg");
var ExitSvg_1 = require("./ExitSvg");
var LoginForm = function () {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "mt-24 mb-[170px] max-w-[530px]" },
            react_1["default"].createElement("input", { className: "w-[502px] h-[80px] bg-transparent mt-[30px] pr-[24px] text-2xl rounded-[8px] font-bold pl-[24px] border-[1.5px] border-white", type: "text", id: "phone", placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430" }),
            react_1["default"].createElement("input", { className: "w-[502px] h-[80px] bg-transparent mt-[30px] pr-[24px] text-2xl rounded-[8px] font-bold pl-[24px] border-[1.5px] border-white", id: "password", placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C" }),
            react_1["default"].createElement("form", { className: "relative" },
                react_1["default"].createElement("button", { className: "absolute top-[-40px] right-[32px] transform -translate-x-1/2 -translate-y-1/2" },
                    react_1["default"].createElement(OpenEyeSvg_1.OpenEye, null))),
            react_1["default"].createElement(image_1["default"], { className: "absolute top-0 right-0 opacity-60 z-10 pointer-events-none", src: gbitem_png_1["default"], width: 995, height: 900, alt: "gbitem" })),
        react_1["default"].createElement("div", { className: "flex flex-col" },
            react_1["default"].createElement("button", { className: "w-[256px] h-[68px] bg-gradient-to-r from-custom-purple to-custom-blue rounded-[8px] font-semibold text-2xl mb-[52px]" }, "\u0412\u043E\u0439\u0442\u0438"),
            react_1["default"].createElement("label", { className: "flex items-center cursor-pointer" },
                react_1["default"].createElement("input", { className: "w-[27px] h-[27px] mr-[8px]", type: "checkbox" }),
                react_1["default"].createElement("span", { className: "text-[14px] " },
                    "\u042F \u0441\u043E\u0433\u043B\u0430\u0441\u0435\u043D \u0441",
                    react_1["default"].createElement("span", { className: "underline underline-offset-4 ml-[4px]" }, "\u0443\u0441\u043B\u043E\u0432\u0438\u044F\u043C\u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0434\u0430\u043D\u043D\u044B\u0445")))),
        react_1["default"].createElement("div", { className: "flex mt-[40px] justify-center pb-[20px]" },
            react_1["default"].createElement("p", { className: "mr-[23px] font-semibold text-[24px]" }, "\u041D\u0435\u0442 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430?"),
            react_1["default"].createElement("div", { className: "flex items-center" },
                react_1["default"].createElement(ExitSvg_1.ExitSvg, null),
                react_1["default"].createElement(link_1["default"], { href: "#", className: "pdl-[3px] font-semibold text-[24px] cursor-pointer" }, "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F")))));
};
exports["default"] = LoginForm;
