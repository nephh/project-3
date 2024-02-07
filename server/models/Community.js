const { Schema, model } = require("mongoose");

const communitySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  creator: {
    type: String,
    required: true,
    trim: true,
  },
  userLimit: {
    type: Number,
  },
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  endeavors: [
    {
      type: Schema.Types.ObjectId,
      ref: "Endeavor",
    },
  ],
});

const Community = model("Community", communitySchema);

module.exports = Community;
