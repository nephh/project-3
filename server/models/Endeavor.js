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
      // createdAt: {
      //   type: Date,
      //   default: Date.now,
      //   get: (timestamp) => dateFormat(timestamp),
      // },
    },
  ],
});

const Endeavor = model("Endeavor", endeavorSchema);

module.exports = Endeavor;
