const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://chinu:123@cluster0.fh1jzoa.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected");
  })
  .catch(() => {
    console.log("not connected");
  });
const express = require("express");
const cors = require("cors");
const RegisterModel = require("./models/register");
const app = express();
app.use(express.json());
app.use(cors());
const port = 3001;

app.post("/register", (req, res) => {
  RegisterModel.create(req.body)
    .then((Register) => res.json(Register))
    .catch((err) => res.json(err));
});

app.get("/register", (req, res) => {
  RegisterModel.find()
    .then((Register) => res.json(Register))
    .catch((err) => res.json(err));
});

app.put("/update", async (req, res) => {
  const newName = req.body.name;
  const newEmail = req.body.email;
  const newPassword = req.body.password;
  const id = req.body.id;
  try {
    const registerToUpdate = await RegisterModel.findById(id);
    registerToUpdate.name = newName;
    registerToUpdate.email = newEmail;
    registerToUpdate.password = newPassword;
    await registerToUpdate.save();
  } catch (error) {}
  res.send();
});

app.listen(port, () => {
  console.log("3001 running");
});
