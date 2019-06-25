export class ActiveRoute {
    parseRequestUrl() {
        const url = location.hash.slice(1).toLowerCase()
        const routes = url.split('/')

        return {
            resource: routes[1],
            id: routes[2],
            url
        }

    }
}