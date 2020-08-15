module.exports = {root, blogs, users, categories, common};

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

function common() {
    return {
        root: "/common",
        setting: "/setting"
    }
}

function root() {
    return {
        blogs: "/vwe/blogs",
        users: "/vwe/users",
        categories: "/vwe/categories",
        common: "/vwe/common"
    }
}