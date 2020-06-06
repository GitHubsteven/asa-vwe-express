let CommentModel = require('../../models/comment.model');

module.exports = {
    list,
    getById,
    _delete,
    update,
    create
};

async function list(searchOpt) {
    let data = {
        count: 0,
        items: []
    };
    let params = searchOpt.title ? {title: {$regex: searchOpt.title}} : {};
    //先找出符合条件的所有数量
    data.count = await CommentModel.estimatedDocumentCount(params);
    //在按页来查找数量
    data.items = await CommentModel.find(params)
      .sort({modifiedTime: -1})
      .skip((searchOpt.curPage - 1) * searchOpt.pageSize)
      .limit(searchOpt.pageSize)
      .exec();
    return data;
}

async function getById(id) {
    return await CommentModel.findById(id);
}

async function _delete(id) {
    return await CommentModel.findByIdAndRemove(id);
}

async function update(id, params) {
    let blog = await CommentModel.findById(id);
    if (!blog) throw 'blog not found';

    if (blog.title !== params.title && await CommentModel.findOne({title: params.title})) {
        throw 'blog name: ' + params.title + 'has been already existed!';
    }

    Object.assign(blog, params);
    blog.save();
}

async function create(params) {
    let blogByName = await CommentModel.findOne({title: params.title});
    if (blogByName) throw 'blog ' + params.title + 'has been already existed';

    let blog = new CommentModel(params);

    //save blog
    await blog.save();
}