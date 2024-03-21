const sakila = require("./../database/sakila.config");

getAll = async () =>
  await sakila.select("*").from("actor").where("isDeleted", false);

getById = async (id) =>
  await sakila.select("*").from("actor").where("actor_id", id);

getWhere = async (column, value) =>
  await sakila.select("*").from("actor").where(column, value);

insert = async (data) => await sakila("actor").insert(data);

update = async (id, data) =>
  await sakila("actor").where("actor_id", id).update(data);

deleteData = async (id) => {
  try {
    const result = await sakila("actor")
      .where("actor_id", id)
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
  deleteData,
};
