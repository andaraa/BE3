const produkSchema = require('../models/produk');
const userSchema = require('../models/user');

class produk {
  static findAll = async (req, res, next) => {
    try {
      const result = await produkSchema.find();
      res.status(200).json({ Message: 'Berhasil menampilkan produk ', result });
    } catch (error) {
      next(error);
    }
  };
  static findById = async (req, res, next) => {
    const { idProduk } = req.body;

    try {
      const result = await produkSchema.findById(idProduk);
      res.status(200).json({ Message: 'Berhasil Melihat detail barang', result });
    } catch (error) {
      next(error);
    }
  };
  static listProduct = async (req, res, next) => {
    try {
      const result = await produkSchema.find();
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };
  static create = async (req, res, next) => {
    const protocol = req.protocol;
    const host = req.get('host');
    const url = protocol + '://' + host;
    const { NamaProduk, Harga, RincianProduk, Stok, PenilaianProduk } = req.body;
    console.log(req.file);
    try {
      const result = await produkSchema.create({
        ImageProduk: url + '/uploads/' + req.file.filename,
        NamaProduk,
        Harga,
        RincianProduk,
        Stok,
        PenilaianProduk,
      });
      res.status(201).json({ Message: 'develop Berhasil membuat produk', result });
    } catch (error) {
      next(error);
    }
  };
  static delete = async (req, res, next) => {
    const { idProduk } = req.body;

    try {
      const result = await produkSchema.findOneAndDelete({ _id: idProduk });
      res.status(200).json({ Message: 'Berhasil Membatalkan produk', result });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = produk;
