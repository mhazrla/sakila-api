var express = require("express");
var router = express.Router();

const InventoryController = require("../../controller/master_controller/InventoryController.js");
const AuthService = require("../../services/permission.service.js");

router.get(
  "/",
  AuthService.hasAccess("IVGT-READ"),
  InventoryController.getAllInventory
);
router.get(
  "/:id",
  AuthService.hasAccess("IVGT-READ"),
  InventoryController.getInventoryById
);
router.post(
  "/",
  AuthService.hasAccess("IVGT-ADD"),
  InventoryController.insertInventory
);
router.put(
  "/:id",
  AuthService.hasAccess("IVGT-EDIT"),
  InventoryController.updateInventory
);
router.delete(
  "/:id",
  AuthService.hasAccess("MSTR-CRUD"),
  InventoryController.deleteInventory
);

module.exports = router;
