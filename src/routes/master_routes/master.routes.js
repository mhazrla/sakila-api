var express = require("express");
var router = express.Router();

const film_routes = require("./film.routes.js");
const actor_routes = require("./actor.routes.js");
const address_routes = require("./address.routes.js");
const category_routes = require("./category.routes.js");
const country_routes = require("./country.routes.js");
const inventory_routes = require("./inventory.routes.js");
const language_routes = require("./language.routes.js");
const staff_routes = require("./staff.routes.js");

router.use("/film/", film_routes);
router.use("/actor/", actor_routes);
router.use("/address/", address_routes);
router.use("/category/", category_routes);
router.use("/country/", country_routes);
router.use("/inventory/", inventory_routes);
router.use("/language/", language_routes);
router.use("/staff/", staff_routes);

module.exports = router;
