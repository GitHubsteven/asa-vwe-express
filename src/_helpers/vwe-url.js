module.exports = {root, blogs, users, categories, common, statistics};

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

function statistics() {
    return {
        root: "/statistics",
        blogByCategory: "/blogByCategory",
        blogByTag: "/blogByTag",
        blogByCreateTime: "/blogByCreateTime"
    };
}


function root() {
    return {
        blogs: "/vwe/blogs",
        users: "/vwe/users",
        categories: "/vwe/categories",
        common: "/vwe/common",
        statistics: "/vwe/statistics"
    }
}