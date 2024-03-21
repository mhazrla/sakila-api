const model = require("./../../model/actor.model");
const api = require("./../../tools/common");

getActorById = async (req, res) => {
  const { id } = req.params;

  if (!isNaN(id)) {
    let data = await model.getById(id);
    return api.ok(res, data);
  } else {
    return api.error(res, "Bad Request", 400);
  }
};

getAllActor = async (req, res) => {
  let data = await model.getAll();
  return api.ok(res, data);
};

insertActor = async (req, res) => {
  const body = ({ first_name, last_name } = req.body);
  let data = await model.insert(body);
  return api.ok(res, data);
};

updateActor = async (req, res) => {
  const { id } = req.params;
  const body = ({ first_name, last_name } = req.body);
  let data = await model.update(id, body);
  return api.ok(res, data);
};

deleteActor = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await model.deleteData(id);
    return api.ok(res, data);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getActorById,
  getAllActor,
  insertActor,
  updateActor,
  deleteActor,
};
