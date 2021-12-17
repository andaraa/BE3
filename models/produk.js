const mongoose = require('mongoose');
const { Schema } = mongoose;

const produkSchema = new Schema({
  ImageProduk: { type: String, required: true },
  NamaProduk: { type: String, required: true },
  Harga: { type: String, required: true },
  RincianProduk: { type: String, required: true },
  Stok: { type: String, required: true },
  PenilaianProduk: { type: String, required: true },
});
const produk = mongoose.model('produk', produkSchema);
module.exports = produk;
