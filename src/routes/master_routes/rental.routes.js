var express = require("express");
var router = express.Router();

const RentalController = require("../../controller/master_controller/RentalController.js");
const AuthService = require("../../services/permission.service.js");

router.get(
  "/",
  // AuthService.hasAccess("IVGT-READ"),
  RentalController.getAllRental
);
router.get(
  "/:id",
  // AuthService.hasAccess("IVGT-READ"),
  RentalController.getRentalById
);
router.post(
  "/",
  // AuthService.hasAccess("IVGT-ADD"),
  RentalController.insertRental
);
router.put(
  "/:id",
  // AuthService.hasAccess("IVGT-EDIT"),
  RentalController.updateRental
);
router.delete(
  "/:id",
  // AuthService.hasAccess("MSTR-CRUD"),
  RentalController.deleteRental
);

module.exports = router;
