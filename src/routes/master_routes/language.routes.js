var express = require("express");
var router = express.Router();

const LanguageController = require("../../controller/master_controller/LanguageController.js");
const AuthService = require("../../services/permission.service.js");

router.get(
  "/",
  // AuthService.hasAccess("IVGT-READ"),
  LanguageController.getAllLanguage
);
router.get(
  "/:id",
  // AuthService.hasAccess("IVGT-READ"),
  LanguageController.getLanguageById
);
router.post(
  "/",
  // AuthService.hasAccess("IVGT-ADD"),
  LanguageController.insertLanguage
);
router.put(
  "/:id",
  // AuthService.hasAccess("IVGT-EDIT"),
  LanguageController.updateLanguage
);
router.delete(
  "/:id",
  // AuthService.hasAccess("MSTR-CRUD"),
  LanguageController.deleteLanguage
);

module.exports = router;
