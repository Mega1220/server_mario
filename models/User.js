const aksMongoose = require("mongoose");

const aksSchema = aksMongoose.Schema;

const aksUserSchema = new aksSchema({
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  confirmed: {
    type: Boolean,
    default:false
  },
}, {
  timestamps: true
});

module.exports = aksMongoose.model("User", aksUserSchema);