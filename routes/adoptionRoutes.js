const express = require("express");
const router = express.Router();

const {
  createRequest,
  updateRequestStatus,
  getAllRequests,
} = require("../controllers/adoptionController");

const { protect, admin } = require("../middleware/authMiddleware");

/* User sends request */
router.post("/:petId", protect, createRequest);

/* Admin actions */
router.get("/", protect, admin, getAllRequests);
router.put("/:id", protect, admin, updateRequestStatus);

module.exports = router;
