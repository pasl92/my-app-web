"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.MyProfile = void 0;
var styled_components_1 = require("styled-components");
var ProfileSection_1 = require("../MyProfile/Components/ProfileSection");
var ExpertiseSection_1 = require("../MyProfile/Components/ExpertiseSection");
var PanelInformations_1 = require("../MyProfile/Components/PanelInformations");
var Colors_1 = require("../../styledHelpers/Colors");
var Wrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background-color: whitesmoke;\n    display: flex;\n    flex-direction: column;\n    width: 40%;\n    margin: 1%;\n    box-shadow: 0px 4px 4px ", ";\n"], ["\n    background-color: whitesmoke;\n    display: flex;\n    flex-direction: column;\n    width: 40%;\n    margin: 1%;\n    box-shadow: 0px 4px 4px ", ";\n"])), Colors_1.Colors.black);
exports.MyProfile = function () {
    return (React.createElement(Wrapper, null,
        React.createElement(ProfileSection_1.ProfileSections, null),
        React.createElement(ExpertiseSection_1.ExpertiseSections, null),
        React.createElement(PanelInformations_1.PanelInformations, null)));
};
var templateObject_1;
