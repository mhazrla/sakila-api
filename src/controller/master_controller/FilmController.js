const model = require("./../../model/film.model");
const api = require("./../../tools/common");

getFilmById = async (req, res) => {
  const { id } = req.params;

  let data = await model.getById(id);

  if (data.length == 0) {
    return api.error(res, "Not Found", 404);
  }

  return api.ok(res, data);
};

getAllFilm = async (req, res) => {
  let data = await model.getAll();
  return api.ok(res, data);
};

insertFilm = async (req, res) => {
  const { form_data } = req.body;
  let data = await model.insert(form_data);
  return api.ok(res, data);
};

updateFilm = async (req, res) => {
  const { form_data } = req.body;
  const { id } = req.params;

  let data = await model.update(id, form_data);
  return api.ok(res, data);
};

deleteFilm = async (req, res) => {
  const { id } = req.params;
  await model.deleteData(id);
  return api.ok(res);
};

module.exports = {
  getFilmById,
  getAllFilm,
  insertFilm,
  updateFilm,
  deleteFilm,
};
