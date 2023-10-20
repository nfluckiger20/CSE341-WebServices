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
      Locations: {
        USA: {
          States: [mongoose.SchemaTypes.Mixed]
        },
        Canada: {
          Provinces: [mongoose.SchemaTypes.Mixed]
        },
        USA_outlets: {
          type: [mongoose.SchemaTypes.Mixed]
        },
        Canada_outlets: {
          type: [String]
        },
        Additional: {
          None: [mongoose.SchemaTypes.Mixed]
        }
      }
    });
  
    return mongoose.model('location', locationSchema);
  };