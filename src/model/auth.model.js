const db = require("./../database/sakila.config");

getAccount = async (nik) => await db("mst_user").where("nik", nik);

getUserPermission = async (nik) => await db("v_users").where("nik", nik);

module.exports = {
  getAccount,
  getUserPermission,
};
