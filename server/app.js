const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8000;
const cors = require("cors");
const TaskRequest = require("./TaskRequest");

const app = express();

// Connect to MongoDB database
const URI =
  "mongodb+srv://jw980521:jw980521@cluster0.w00bz.mongodb.net/task?retryWrites=true&w=majority";
mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT))
  .catch((err) => console.log(err));

// Middileware
app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, HEAD");
  next();
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Get all tasks
app.get("/task", async (req, res) => {
  try {
    const tasks = await TaskRequest.find({});
    res.json({ tasks, success: "yes" });
  } catch {
    res.json({ tasks: "", success: "no" });
  }
});

// Post a new task
app.post("/task", async (req, res) => {
  const requestedTask = req.body;
  try {
    const resp = await TaskRequest.create(requestedTask);
    const task = await resp;
    res.json({ task, success: "yes" });
  } catch {
    res.json({ task: "", success: "no" });
  }
});

// Get task by id
app.get("/task/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const resp = await TaskRequest.findById(id);
    const task = await resp;
    res.json({ task, success: "yes" });
  } catch {
    res.json({ task: "", success: "no" });
  }
});
