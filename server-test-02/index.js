const express = require("express");

const app = express();

const users = [
  { id: 1, name: "Het", role: "student" },
  { id: 2, name: "Anshu", role: "mentor" },
  { id: 3, name: "Prashant", role: "student" },
  { id: 4, name: "Tulya", role: "mentor" },
  { id: 5, name: "Sai", role: "student" },
  { id: 6, name: "Krishna", role: "mentor" },
  { id: 7, name: "Aryan", role: "student" },
  { id: 8, name: "Rishi", role: "mentor" }
];

app.get("/", (req, res) => {
  res.send("Express server is running");
});

app.get("/users/:user_id", (req, res) => {
    console.log("User Request is : ",req);
  res.status(200).json(users);
});

app.get("/users/:id", (req, res) => {
  const userId = Number(req.params.id);
  const user = users.find(u => u.id === userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(user);
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});