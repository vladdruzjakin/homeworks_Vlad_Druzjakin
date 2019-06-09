export class Http {
    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-type': 'application/json'
                    }
                })
                .then((response) => {
                    console.log(response)

                    return response.json()
                })
                .then((data) => resolve(data))
                .catch((err) => reject(err));
        });
    }
}