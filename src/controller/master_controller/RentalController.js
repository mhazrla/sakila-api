const moment = require("moment-timezone");
const model = require("../../model/Rental.model");
const api = require("../../tools/common");

getRentalById = async (req, res) => {
  const { id } = req.params;

  if (!isNaN(id)) {
    let data = await model.getById(id);
    return api.ok(res, data);
  } else {
    return api.error(res, "Bad Request", 400);
  }
};

getAllRental = async (req, res) => {
  let data = await model.getAll();
  return api.ok(res, data);
};

insertRental = async (req, res) => {
  let { customer_id, inventory_id, rental_date, return_date, staff_id } =
    req.body;

  rental_date = moment().format("YYYY-MM-DD HH:mm:ss");
  if (return_date) {
    return_date = moment().format("YYYY-MM-DD HH:mm:ss");
  }

  const body = {
    customer_id,
    inventory_id,
    rental_date,
    return_date,
    staff_id,
  };

  try {
    let data = await model.insert(body);
    return api.ok(res, data);
  } catch (error) {
    console.error("Error inserting rental:", error);
    return api.error(res, "Error inserting rental", 500);
  }
};

updateRental = async (req, res) => {
  const { id } = req.params;
  const body = ({ name } = req.body);

  let data = await model.update(id, body);
  return api.ok(res, data);
};

deleteRental = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await model.deleteData(id);
    return api.ok(res, data);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getRentalById,
  getAllRental,
  insertRental,
  updateRental,
  deleteRental,
};
