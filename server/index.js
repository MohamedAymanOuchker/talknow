const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const userRoute = require("./routes/User");
const uploadRoute = require("./routes/Upload");
const cors = require("cors");

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

app.use(cors());
app.use(express.json());
app.use("/user", userRoute);
app.use("/upload", uploadRoute);

app.listen(3001, (req, res) => {
  console.log("Server is running on port 3001");
});
