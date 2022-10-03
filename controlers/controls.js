const knex = require('../models/knex');

async function getArticles(){
    const data = await knex('blog').select('*');
    return data;
}

async function getArticle(id){
    const data = await knex('blog').where({id : id});
    return data;
}

async function addArticle(obj){
    const data = await knex('blog').insert(obj);
    console.log(obj);
    return data;
}

async function deleteArticle(id){
    const data = await knex('blog').where({id:id}).del();
    return data;
}

async function updateArticle(id,blog){
    const data = await knex('blog').where({id:id}).update(blog);
    return data;
}

module.exports = {
    getArticles,
    getArticle,
    addArticle,
    deleteArticle,
    updateArticle
};