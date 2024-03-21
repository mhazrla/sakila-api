const aio_cms = require("./../database/sakila.config");

getAccount = async (nik) => await aio_cms("mst_user").where("nik", nik);

module.exports = {
  getAccount,
};
