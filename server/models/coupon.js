const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const couponSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      unique: true,
      uppercase: true,
      required: "Name is required",
      minLength: [6, "Too short"],
      maxLength: [12, "Too long"],
    },
    expiry: {
      type: Date,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
      max: [100, "Must be at most 100, got {VALUE}"],
      min: [0, "Must be at least 0, got {VALUE}"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Coupon", couponSchema);
