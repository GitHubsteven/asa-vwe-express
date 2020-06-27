module.exports = {root, blogs, users, categories};

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

function categories() {
    return {
        root: "/categories",
        list: "/",
        getById: "/:id",
        update: "/:id",
        delete: "/:id",
        create: "/"
    };
}

function root() {
    return {
        blogs: "/blogs",
        users: "/users",
        categories: "/categories"
    }
}