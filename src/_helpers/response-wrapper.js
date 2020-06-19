module.exports = responseHandler;

function responseHandler(err, req, res, next) {
    return res.json(res.body);
}

