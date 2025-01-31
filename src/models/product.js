import mongoose from "mongoose";

const Schema = new mongoose.Schema(
  {
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
    },
    name: {
      type: String,
      required: true,
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

export default mongoose.model("product", Schema);