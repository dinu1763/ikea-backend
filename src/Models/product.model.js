const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    Img: { type: String, required: true },
    hoverImg: { type: String, required: true },
    title: { type: String, required: true },
    dimensions: { type: String, required: true },
    price: { type: Number, required: true },
    sold: { type: Number, required: true },
    varient: [
      {
        img: { type: String, required: true },
      },
    ],
    productDetailPage: [{ img: { type: String, required: true } }],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
module.exports = new mongoose.model("products", productSchema);
