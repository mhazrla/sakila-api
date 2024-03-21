const model = require("./../../model/language.model");
const api = require("./../../tools/common");

getLanguageById = async (req, res) => {
  const { id } = req.params;

  if (!isNaN(id)) {
    let data = await model.getById(id);
    return api.ok(res, data);
  } else {
    return api.error(res, "Bad Request", 400);
  }
};

getAllLanguage = async (req, res) => {
  let data = await model.getAll();
  return api.ok(res, data);
};

insertLanguage = async (req, res) => {
  const body = ({ name } = req.body);

  let data = await model.insert(body);
  return api.ok(res, data);
};

updateLanguage = async (req, res) => {
  const { id } = req.params;
  const body = ({ name } = req.body);

  let data = await model.update(id, body);
  return api.ok(res, data);
};

deleteLanguage = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await model.deleteData(id);
    return api.ok(res, data);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getLanguageById,
  getAllLanguage,
  insertLanguage,
  updateLanguage,
  deleteLanguage,
};
