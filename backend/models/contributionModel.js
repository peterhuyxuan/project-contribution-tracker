const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const contributionSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

const Contribution = mongoose.model("Contribution", contributionSchema);

module.exports = Contribution;
