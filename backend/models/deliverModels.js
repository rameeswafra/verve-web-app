const mongoose = require("mongoose");

const deliverySchema = mongoose.Schema(
  {
    date: {
      type: Date,
      required: true,
    },

    process: {
      type: String,
      required: true,
    },

  
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
 
);

const Delivery = mongoose.model("Delivery", deliverySchema);
module.exports = Delivery;
