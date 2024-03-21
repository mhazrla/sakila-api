var express = require("express");
var router = express.Router();

const StaffController = require("../../controller/master_controller/StaffController.js");
const AuthService = require("../../services/permission.service.js");

router.get(
  "/",
  AuthService.hasAccess("IVGT-READ"),
  StaffController.getAllStaff
);
router.get(
  "/:id",
  AuthService.hasAccess("IVGT-READ"),
  StaffController.getStaffById
);
router.post(
  "/",
  AuthService.hasAccess("IVGT-ADD"),
  StaffController.insertStaff
);
router.put(
  "/:id",
  AuthService.hasAccess("IVGT-EDIT"),
  StaffController.updateStaff
);
router.delete(
  "/:id",
  AuthService.hasAccess("MSTR-CRUD"),
  StaffController.deleteStaff
);

module.exports = router;
