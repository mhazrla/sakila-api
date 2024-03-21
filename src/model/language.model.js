const sakila = require('../database/sakila.config');

getAll = async () => await sakila.select('*').from('language').where("isDeleted", false);;

getById = async ( id) => await sakila.select('*').from('language').where('language_id', id);

getWhere = async (column, value) => await sakila.select('*').from('language').where(column, value);

insert = async (data) => await sakila('language').insert(data);

update = async (id, data) => await sakila('language').where('language_id', id).update(data);

deleteData = async (id) => {
    try {
      const result = await sakila("language")
        .where("language_id", id)
        .update({
          deleted_at: sakila.raw("NOW()"),
          isDeleted: true,
        });
      return result;
    } catch (error) {
      throw error;
    }
  };
  

module.exports = {
    getAll,
    getById,
    getWhere,
    insert,
    update,
    deleteData
};