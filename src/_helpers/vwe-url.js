module.exports = {root, blogs, users};

function blogs() {
    return {
        root: "/blogs",
        list: "/list",
        getById: "/:id",
        update: "/:id",
        delete: "/:id",
        create: "/"
    };
}

function users() {
    return {
        root: "/users",
        authenticate: "/authenticate",
        register: "/register",
        getAll: "/",
        current: "/current",
        getById: "/:id",
        update: "/:id",
        delete: "/:id"
    };
}

function root() {
    return {
        blogs: "/blogs",
        users: "/users"
    }
}