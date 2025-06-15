<<<<<<< HEAD
const mongoose = require("mongoose")

const chatSchema = mongoose.Schema({
    from:{
        type: String,
        required: true
    },
    to:{
        type: String,
        required: true
    },
    msg:{
        type: String,
        maxLength: 50
    },
    created_at:{
        type: Date,
        required: true
    }
})

const Chat = mongoose.model("Chat", chatSchema)

module.exports = Chat
=======
const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    from: { type: String, required: true },
    to: { type: String, required: true },
    msg: { type: String, maxLength: 50 },
    created_at: { type: Date, required: true },
});

const Chat = new mongoose.model("Chat", chatSchema);

module.exports = Chat;
>>>>>>> 4d63d5551a940e85243a7766861982e66c5178bb
