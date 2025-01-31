import mongoose from "mongoose";

const Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
    },
    status: {
      type: Boolean,
      default: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: {currentTime: () => Math.floor(Date.now() / 1000)},
  }
);

Schema.set('toObject', { virtuals: true });
Schema.set('toJSON', { virtuals: true });

export default mongoose.model("category", Schema);