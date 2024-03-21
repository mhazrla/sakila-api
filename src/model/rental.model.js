const sakila = require('../database/sakila.config');

getAll = async () => await sakila.select('*').from('rental').where("isDeleted", false);;

getById = async ( id) => await sakila.select('*').from('rental').where('rental_id', id);

getWhere = async (column, value) => await sakila.select('*').from('rental').where(column, value);

insert = async (data) => await sakila('rental').insert(data);

update = async (id, data) => await sakila('rental').where('rental_id', id).update(data);

deleteData = async (id) => {
    try {
      const result = await sakila("rental")
        .where("rental_id", id)
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