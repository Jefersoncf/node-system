const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const db = await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to database');
  }catch (e) {
    console.log(e);
    process.exit(1);
  }
}
module.exports = connectDB;