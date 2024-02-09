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
  userCount: {
    type: Number,
  },
  // userLimit: {
  //   type: Number,
  // },
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

// communitySchema.pre("save", async function (next) {
//   if (this.isNew || this.isModified("name")) {
//     const url = this.name.toLowerCase().split(" ").join("-");
//     this.url = url;
//   }

//   next();
// });
communitySchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("users")) {
    this.userCount = this.users.length;
  }

  next();
});

communitySchema.virtual("url").get(function () {
  return this.name.toLowerCase().split(" ").join("-");
});

communitySchema.virtual("endeavorCount").get(function () {
  return this.endeavors.length;
});

const Community = model("Community", communitySchema);

module.exports = Community;
