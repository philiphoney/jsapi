// @ts-nocheck

class Jsapi {
    private apiUrl: string;

    constructor(apiUrl: string) {
        this.apiUrl = apiUrl;
    }

    getData() {
        return fetch(this.apiUrl)
            .then(response => response.json())
            .then(data => data)
            .catch(error => console.error('Error fetching data:', error));
    }

    attach(params, type = "") {
        let url = this.apiUrl;
        const queryString = Object.keys(params).map(key => `${key}=${params[key]}`).join('&');
        if (queryString) {
            url += '?' + queryString;
        }

        if (type === "simpler") {
            return fetch(url)
                .then(response => response.json())
                .then(data => data)
                .catch(error => console.error('Error fetching data with simpler request:', error));
        } else {
            return Promise.resolve(url);
        }
    }
}