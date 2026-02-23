const express = require("express");

const app = express();

//In memory database
const users = [
  { id: 1, name: "Arjun", role: "student" },
  { id: 2, name: "Priyesha", role: "mentor" },
  { id: 3, name: "Tulya", role: "student" },
  { id: 4, name: "Sai", role: "mentor" }
];

app.get("/", (req, res) => {
  res.send("Het Roy");
});

app.get("/users", (req, res) => {
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

app.use(express.json());

app.post("/users", (req, res) => {
  // console.log(req.body)

  // const user1 = {
  //   id: req.body[0].id,
  //   name: req.body[0].name,
  //   role: req.body[0].role,
  // }
  // console.log("User1 : ", user1);
  // users.push(user1);

  // const user2 = {
  //   id: req.body[1].id,
  //   name: req.body[1].name,
  //   role: req.body[1].role
  // }
  // console.log("User2: ", user2);
  // users.push(user2);

  // const user3 = {
  //   id: req.body[2].id,
  //   name: req.body[2].name,
  //   role: req.body[2].role
  // }
  // console.log("User3: ", user3);
  // users.push(user3);

  // users.forEach(element => {
  //   const user(i + 1)= {
  //     id: element.id,
  //     name: element.name,
  //     role: element.role
  //   }
  // });

  res.send("users added");
});

app.put("/users/:id", (req, res) => {

  console.log(req.body);
  console.log(req.params);
  
  const userId = Number(req.params.id);
  const index = users.findIndex(u => u.id === userId);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users[index] = {
    id: userId,
    name: req.body.name,
    role: req.body.role,
    age : req.body.age
  };

  res.status(200).json({
    message: "User replaced",
    user: users[index]
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});