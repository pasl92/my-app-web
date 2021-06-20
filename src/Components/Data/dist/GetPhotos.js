"use strict";
exports.__esModule = true;
exports.Photos = void 0;
exports.Photos = function () {
    return (fetch('https://jsonplaceholder.typicode.com/photos/')
        .then(function (response) { return response.json(); })
        .then(function (json) { return console.log(json); }));
};
