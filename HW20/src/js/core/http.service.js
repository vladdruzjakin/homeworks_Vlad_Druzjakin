export class Http {
    post(url, data, options) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-type': 'application/json'
                    }
                })
                .then((response) => response.json())
                .then((data) => resolve(data))
                .catch((err) => reject(err));
        });
    }
    get(url, options = {}) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                    method: 'GET',
                    ...options
                })
                .then((response) => response.json())
                .then((data) => resolve(data))
                .catch((err) => reject(err));
        });
    }
}