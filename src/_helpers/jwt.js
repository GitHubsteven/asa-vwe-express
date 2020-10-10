const expressJwt = require('express-jwt');
const config = require('../../config.json');
const userService = require('../_service/user/user.service');

module.exports = jwt;

function jwt() {
    const secret = config.secret;
    return expressJwt({secret, isRevoked}).unless(filter);
}

let filter = function (req) {
    let publicPaths = ['/vwe/users/authenticate',
        '/vwe/users/register',
        '/vwe/blogs/list',
        '/vwe/common/setting'
    ];
    if (publicPaths.includes(req.url)) return true;
    let regex = /\/blogs\/.+/;
    let isBlogQuery = regex.exec(req.url);
    return req.method === 'GET' && isBlogQuery;
};


async function isRevoked(req, payload, done) {

    const user = await userService.getById(payload.sub);
    // revoke token if user no longer exists
    if (!user) {
        return done(null, true);
    }
    done();
}