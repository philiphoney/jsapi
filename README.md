# Jsapi

The `Jsapi` class is a JavaScript/TypeScript class designed to simplify the usage of the Fetch API for HTTP requests. Here's an explanation of its key components and functionalities:

1. **Constructor**: When creating an instance of the `Jsapi` class, the API URL must be passed as a parameter. This sets the base URL to be used for all requests.

2. **getData() Method**: This method executes an HTTP GET request to the specified API URL. It utilizes the `fetch` function to retrieve data from the API. The received data is then interpreted as JSON and returned. If an error occurs, an error message is logged to the console.

3. **attach(params, type) Method**: This method allows optional parameters to be appended to the API URL. The parameters are passed as an object, where the key represents the parameter name and the value represents its value. The method also accepts an optional second parameter `type`, which can be either empty or `"simpler"`. When `"simpler"` is specified, a simplified request is made, where the parameters are directly appended to the URL. Otherwise, the URL with the parameters is returned as a string.

4. **Functionality**: When calling the `getData()` method, a simple GET request is sent to the API URL, and the received data is returned. When using the `attach()` method, the optional parameters are appended to the API URL, and depending on the `type` parameter, either a standard or simplified request is made. The method returns either the modified URL or the received data.

The `Jsapi` class thus enables easy and flexible usage of the Fetch API for HTTP requests in JavaScript/TypeScript by simplifying common operations such as fetching data and appending parameters.

example:
```ts
function main() {
    // Create an instance of the Jsapi class with the API URL
    var apiUrl = "https://jsonplaceholder.typicode.com/comments";
    var jsapi = new Jsapi(apiUrl);
    // Fetch data from the API and log it in the console
    jsapi.getData()
        .then(function (responseData) { return console.log(responseData); });
    // Add optional parameters and fetch data with appended parameters
    var optionalParams = {
        postId: "2"
    };
    jsapi.attach(optionalParams)
        .then(function (responseWithParams) { return console.log(responseWithParams); });
    // Use the "simpler" method for a simplified request
    jsapi.attach(optionalParams, "simpler")
        .then(function (simplerResponse) { return console.log(simplerResponse); });
}
```
