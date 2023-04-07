export class Router {

    routes = {}

    add(routeName, page) {
        this.routes[routeName] = page
    }

    route(event){
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, "", event.target.href)

    this.handle()
    }

    handle() {
        const { pathname } = window.location // <= Isso é a mesma coisa que isso e se chama desestruturar pathname = window.location.pathname
        const route = this.routes[pathname] || this.routes[404]
        console.log(route)
        fetch(route)
        .then(data => data.text())
        .then(html => document.querySelector('#app').innerHTML = html)
}
}