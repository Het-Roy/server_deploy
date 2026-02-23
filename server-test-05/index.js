const express = require("express");

const app = express();

const products = [
    {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    "rating": {
        "rate": 3.9,
        "count": 120
    }
    },
    {
    "id": 2,
    "title": "Mens Casual Premium Slim Fit T-Shirts ",
    "price": 22.3,
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
    "rating": {
        "rate": 4.1,
        "count": 259
    }
    },
    {
    "id": 3,
    "title": "Cotton Jacket",
    "price": 55.99,
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
    "rating": {
        "rate": 4.7,
        "count": 500
    }
    }]

app.use(express.json());


app.get("/all", (req, res) => {
  res.send(products);
});

app.get("/product/:id", (req, res) => {
  const id = Number(req.params.id);
  console.log(req.params)
  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(product);
});

app.post("/product", (req, res) => {
  const newPro = {
    id: products.length + 1,
    title: req.body.title,
    price: req.body.price,
    category: req.body.category
  };

  products.push(newPro);

  res.status(201).json({
    message: "User created",
    user: newPro
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});