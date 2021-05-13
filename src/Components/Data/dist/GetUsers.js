"use strict";
exports.__esModule = true;
exports.Users = void 0;
exports.Users = function () {
    return (fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(function (response) { return response.json(); })
        .then(function (json) { return console.log(json); }));
};
