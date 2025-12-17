const AdoptionRequest = require("../models/AdoptionRequest");
const Pet = require("../models/Pet");

/* User sends adoption request */
exports.createRequest = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.petId);

    if (!pet) {
      return res.status(404).json({ message: "Pet not found" });
    }

    // Prevent adoption if pet already adopted
    if (pet.adopted) {
      return res.status(400).json({ message: "Pet already adopted" });
    }

    // Prevent duplicate requests by same user
    const existingRequest = await AdoptionRequest.findOne({
      pet: pet._id,
      user: req.user.id,
    });

    if (existingRequest) {
      return res.status(400).json({
        message: "You have already requested adoption for this pet",
      });
    }

    const request = await AdoptionRequest.create({
      pet: pet._id,
      user: req.user.id,
    });

    res.status(201).json(request);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* Admin approves or rejects request */
exports.updateRequestStatus = async (req, res) => {
  try {
    const request = await AdoptionRequest.findById(req.params.id).populate("pet");

    if (!request) {
      return res.status(404).json({ message: "Request not found" });
    }

    request.status = req.body.status;

    // Mark pet as adopted if request approved
    if (req.body.status === "approved") {
      request.pet.adopted = true;
      await request.pet.save();
    }

    await request.save();
    res.json(request);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* Admin views all adoption requests */
exports.getAllRequests = async (req, res) => {
  try {
    const requests = await AdoptionRequest.find()
      .populate("pet")
      .populate("user", "name email");

    res.json(requests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
