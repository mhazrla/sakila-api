var express = require("express");
var router = express.Router();

const CountryController = require("../../controller/master_controller/CountryController.js");
const AuthService = require("../../services/permission.service.js");

router.get(
  "/",
  AuthService.hasAccess("IVGT-READ"),
  CountryController.getAllCountry
);
router.get(
  "/:id",
  AuthService.hasAccess("IVGT-READ"),
  CountryController.getCountryById
);
router.post(
  "/",
  AuthService.hasAccess("IVGT-ADD"),
  CountryController.insertCountry
);
router.put(
  "/:id",
  AuthService.hasAccess("IVGT-EDIT"),
  CountryController.updateCountry
);
router.delete(
  "/:id",
  AuthService.hasAccess("MSTR-CRUD"),
  CountryController.deleteCountry
);

module.exports = router;
