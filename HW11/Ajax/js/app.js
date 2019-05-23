class CustomHttp {
    get(url, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();
        xhr.addEventListener('load', () => {
            const resp = JSON.parse(xhr.responseText)
            callback(resp);
        });
    }
    post(url, data, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.setRequestHeader('Content-type', 'application/json')
        xhr.send(data);
        xhr.addEventListener('load', () => {
            const resp = JSON.parse(xhr.responseText)
            callback(resp);
        });
    }
}