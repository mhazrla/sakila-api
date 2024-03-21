var express = require("express");
var router = express.Router();

const FilmController = require("./../../controller/master_controller/FilmController");
const AuthService = require("./../../services/permission.service.js");

router.get("/", AuthService.hasAccess("IVGT-READ"), FilmController.getAllFilm);
router.get(
  "/:id",
  AuthService.hasAccess("IVGT-READ"),
  FilmController.getFilmById
);
router.post("/", AuthService.hasAccess("IVGT-ADD"), FilmController.insertFilm);
router.put(
  "/:id",
  AuthService.hasAccess("IVGT-EDIT"),
  FilmController.updateFilm
);
router.delete(
  "/:id",
  AuthService.hasAccess("MSTR-CRUD"),
  FilmController.deleteFilm
);

module.exports = router;
