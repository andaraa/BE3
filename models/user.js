const mongoose = require('mongoose');
const { Schema } = mongoose;

const userschema = new Schema({
  name: { type: String }, // String is shorthand for {type: String}
  username: String,
  password: String,
  email: String,
  telp: { type: String },

  Produk: [{ type: Schema.Types.ObjectId, ref: 'produk' }],
});
const user = mongoose.model('user', userschema);
module.exports = user;
