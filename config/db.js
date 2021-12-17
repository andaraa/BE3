const mongoose = require('mongoose');

const connectDB = () => {
  main().catch((err) => console.log(err));

  async function main() {
    await mongoose.connect('mongodb+srv://Andika:andara99@cluster0.ucmvs.mongodb.net/backends3?retryWrites=true&w=majority');

    console.log('DB CONNECTED');
  }
};
module.exports = connectDB;
