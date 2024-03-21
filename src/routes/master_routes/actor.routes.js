var express = require("express");
var router = express.Router();

const ActorController = require("../../controller/master_controller/ActorController.js");
const AuthService = require("../../services/permission.service.js");

router.get(
  "/",
  // AuthService.hasAccess("IVGT-READ"),
  ActorController.getAllActor
);
router.get(
  "/:id",
  // AuthService.hasAccess("IVGT-READ"),
  ActorController.getActorById
);
router.post(
  "/",
  // AuthService.hasAccess("IVGT-ADD"),
  ActorController.insertActor
);
router.put(
  "/:id",
  // AuthService.hasAccess("IVGT-EDIT"),
  ActorController.updateActor
);
router.delete(
  "/:id",
  // AuthService.hasAccess("MSTR-CRUD"),
  ActorController.deleteActor
);

module.exports = router;
