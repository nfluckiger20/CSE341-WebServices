module.exports = (mongoose) => {
    const locationSchema = mongoose.Schema({
      additional: {
        type: String
      },
      Asia_Pacific: {
        type: String
      },
      EMEA: {
        type: String
      },
      Latin_America: {
        type: String
      },
      North_America: {
        type: String
      },
    });
  
    return mongoose.model('location', locationSchema);
  };