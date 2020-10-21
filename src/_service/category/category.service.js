let CategoryModel = require('../../models/category.model');

module.exports = {
    list,
    getById,
    _delete,
    update,
    create
};

async function list() {
    // get all categories once
    return await CategoryModel.find()
        .exec();
}

async function getById(id) {
    return await CategoryModel.findById(id);
}

async function _delete(id) {
    return await CategoryModel.findByIdAndRemove(id);
}

async function update(id, params) {
    let category = await CategoryModel.findById(id);
    if (!category) throw 'category not found';

    if (category.name !== params.name && await CategoryModel.findOne({name: params.name})) {
        throw 'category name: ' + params.name + 'has been already existed!';
    }

    Object.assign(category, params);
    category.save();
}

async function create(params) {
    let categoryByName = await CategoryModel.findOne({name: params.name});
    if (categoryByName) throw 'category ' + params.name + 'has been already existed';

    let category = new CategoryModel(params);

    //save category
    await category.save();
}