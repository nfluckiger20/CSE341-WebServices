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
      profile: {
        experience: {
          type: [mongoose.SchemaTypes.Mixed]
        },
        education: {
          type: [mongoose.SchemaTypes.Mixed]
        },
        projects: {
          type: [mongoose.SchemaTypes.Mixed]
        },
        skills: {
          type: [String]
        },
        references: {
          type: [mongoose.SchemaTypes.Mixed]
        }
      }
    });
  
    return mongoose.model('location', locationSchema);
  };