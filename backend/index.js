const express = require("express")
const {chats} = require("./data/dummy");
const dotenv = require ("dotenv");
const connectDB = require("./config/database");
const userRoutes = require('./routes/userRoutes');
const {notFound , errorHandler} = require('./middlewares/errorMiddleware');
const chatRoutes = require('./routes/chatRoutes');

const app = express();

dotenv.config({path : "./.env"});
connectDB();

const PORT = process.env.PORT ;

app.use(express.json());

app.get("/", (req, res) =>{
    res.send("<h1>hello world</h1>");
});

app.use('/api/user' , userRoutes);
app.use('/api/chat' , chatRoutes);

app.use(notFound)
app.use(errorHandler)

// app.get("/api/chat" , (req ,res) =>{
//     //console.log(chats)
//     res.send(chats)
// })

// app.get("/api/chat/:id" , (req ,res)=>{
//     const singleChat = chats.find((c)=> c._id === req.params.id);
//     res.send(singleChat);
//     console.log(singleChat);
//     // console.log(req.params.id);
// });

app.listen(PORT, () =>{
    console.log(`server is running at port ${PORT}`);
});