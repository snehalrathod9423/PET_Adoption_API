const express = require("express");
const {
  exportPetsCSV,
  exportPetsExcel,
  exportPetsPDF,
} = require("../controllers/exportController.js");

const router = express.Router();

router.get("/pets/csv", exportPetsCSV);
router.get("/pets/excel", exportPetsExcel);
router.get("/pets/pdf", exportPetsPDF);

module.exports = router;

router.get("/pets/csv", (req, res) => {
  console.log("CSV route hit!");
  exportPetsCSV(req, res);
});
