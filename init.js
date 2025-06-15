<<<<<<< HEAD
const mongoose = require("mongoose")
const Chat = require("./models/chat")

main().then(()=>{
    console.log('connection successful');
    
}).catch((err)=>{
    console.log(err);
    
})

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp")
}

let allChats = [
    {
        from: "neha",
        to: "priya",
        msg: "sends me notes for exams",
        created_at: new Date()
    },
    {
        from: "rohit",
        to: "mohit",
        msg: "teach me JS callback",
        created_at: new Date()
    },
    {
        from: "amit",
        to: "sumit",
        msg: "all the best",
        created_at: new Date()
    },
    {
        from: "amita",
        to: "ramesh",
        msg: "bring me some fruits",
        created_at: new Date()
    },
    {
        from: "tony",
        to: "peter",
        msg: "love you 3000",
        created_at: new Date()
    }
]

Chat.insertMany(allChats)
=======
const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
     .then(() => console.log("connection successful"))
     .catch((err) => console.log("err"));
 
 async function main() {
     await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp");
 }

let allChats = [
    {
        to: "Neha",
        from: "Priya",
        msg: "send me your chem notes",
        created_at: new Date(),
    }, 
    {
        to: "Meet",
        from: "Divy",
        msg: "let's watch a movie",
        created_at: new Date(),
    },
    {
        to: "Ishikha",
        from: "Karma",
        msg: "do you want to walk around?",
        created_at: new Date(),
    },
    {
        to: "Jetlin",
        from: "Karma",
        msg: "the exam was pretty tough",
        created_at: new Date(),
    },
    {
        to: "Sanya",
        from: "Aakriti",
        msg: "the teacher was super strict",
        created_at: new Date(),
    },
];

 Chat.insertMany(allChats);
>>>>>>> 4d63d5551a940e85243a7766861982e66c5178bb
