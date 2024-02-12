const { Schema, model } = require("mongoose");

const endeavorSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: false,
    trim: true,
    minlength: 1,
    maxlength: 280,
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  community: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String
  },
  userCount: {
    type: Number,
  },
  communityUrl: {
    type: String,
  },
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      commentAuthor: {
        type: String,
        required: true,
      },
      // Need to add this to typeDefs if we add
      //
      // createdAt: {
      //   type: Date,
      //   default: Date.now,
      //   get: (timestamp) => dateFormat(timestamp),
      // },
    },
  ],
});

endeavorSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("users")) {
    this.userCount = this.users.length;
  }

  next();
});

endeavorSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("users")) {
    this.communityUrl = this.community.toLowerCase().split(" ").join("-");
  }

  next();
});

endeavorSchema.virtual("commentCount").get(function () {
  return this.comments.length;
});

const Endeavor = model("Endeavor", endeavorSchema);

module.exports = Endeavor;
