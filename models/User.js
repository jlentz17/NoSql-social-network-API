const { Schema, model, Types } = require("mongoose")

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: ["Username is required!"],
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+\@.+\..+/]
    },
    thoughts: [
        {
          type: Schema.Types.ObjectId,
          ref: "Thought",
        }
      ],
    friends: [
        {
          type: Schema.Types.ObjectId,
          ref: "User",
        }
      ]
})