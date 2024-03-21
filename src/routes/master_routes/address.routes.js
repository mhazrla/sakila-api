var express = require("express");
var router = express.Router();

const CategoryController = require("./../../controller/master_controller/CategoryController");
const AuthService = require("./../../services/permission.service.js");

router.get(
  "/",
  AuthService.hasAccess("IVGT-READ"),
  CategoryController.getAllCategory
);
router.get(
  "/:id",
  AuthService.hasAccess("IVGT-READ"),
  CategoryController.getCategoryById
);
router.post(
  "/",
  AuthService.hasAccess("IVGT-ADD"),
  CategoryController.insertCategory
);
router.put(
  "/:id",
  AuthService.hasAccess("IVGT-EDIT"),
  CategoryController.updateCategory
);
router.delete(
  "/:id",
  AuthService.hasAccess("MSTR-CRUD"),
  CategoryController.deleteCategory
);

module.exports = router;
