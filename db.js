const mongoose = require('mongoose');

module.exports = async function connection() {
  try {
    const connectionParams = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    };
    await mongoose.connection(process.env.DB, connectionParams);
    console.log('connected db');
  } catch (error) {
    console.log(error);
    console.log('could not connect db');
  }
};
