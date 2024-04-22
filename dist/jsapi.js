// @ts-nocheck
var Jsapi = /** @class */ (function () {
    function Jsapi(apiUrl) {
        this.apiUrl = apiUrl;
    }
    Jsapi.prototype.getData = function () {
        return fetch(this.apiUrl)
            .then(function (response) { return response.json(); })
            .then(function (data) { return data; })["catch"](function (error) { return console.error('Error fetching data:', error); });
    };
    Jsapi.prototype.attach = function (params, type) {
        if (type === void 0) { type = ""; }
        var url = this.apiUrl;
        var queryString = Object.keys(params).map(function (key) { return "".concat(key, "=").concat(params[key]); }).join('&');
        if (queryString) {
            url += '?' + queryString;
        }
        if (type === "simpler") {
            return fetch(url)
                .then(function (response) { return response.json(); })
                .then(function (data) { return data; })["catch"](function (error) { return console.error('Error fetching data with simpler request:', error); });
        }
        else {
            return Promise.resolve(url);
        }
    };
    return Jsapi;
}());
