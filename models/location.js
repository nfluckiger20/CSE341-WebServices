module.exports = (mongoose) => {
    const locationSchema = mongoose.Schema({
      locate: {
        type: String
      },
      password: {
        type: String
      },
      displayName: {
        type: String
      },
      email: {
        type: String
      },
      phoneNumber: {
        type: String
      },
      currentLocation: {
        type: String
      },
      openToNewOpportunities: {
        type: Boolean
      },
      profileIsPublic: {
        type: Boolean
      },
      inventory_name: {
        type: String
      },
    });
  
    return mongoose.model('location', locationSchema);
  };