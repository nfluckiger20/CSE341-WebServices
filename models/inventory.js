// module.exports = (mongoose) => {
//     const Inventory = mongoose.model(
//       'inventory',
//       mongoose.Schema({
//         inventoryName: {
//           type: String
//         },
//         fontSize: {
//           type: Number
//         },
//         fontFamily: {
//           type: String
//         },
//         inspiration: {
//           type: String
//         },
//         colors: {
//           type: [String]
//         }
//       })
//     );
  
//     return Inventory;
//   };

module.exports = (mongoose) => {
  const inventorySchema = mongoose.Schema({

        inventoryName: {
          type: String
        },
        inventoryType: {
          type: Number
        },
        inventoryCount: {
          type: String
        },
        inventoryColor: {
          type: String
        },
        inventoryLocation: {
          type: [String]
        }
      })
    
  return mongoose.model('inventory', inventorySchema);
};