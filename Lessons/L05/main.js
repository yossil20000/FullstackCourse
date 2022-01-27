const express = require("express");
const app = express();
const cors = require("cors");
const usersModule = require("./users/users");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const data = await usersModule.getUsers();
    res.status(200).send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send("error");
  }
});

app.listen(3005);
