const express = require("express");
const db = require("./config/db");

const app = express();
app.use(express.json());
app.use(express.static("../frontend"));

const productsRoute = require("./routes/products");
app.use("/api/products", productsRoute);

app.post("/create-order", (req, res) => {
  const { customer_id, total } = req.body;

  const sql = "INSERT INTO orders (customer_id, total_amount) VALUES (?, ?)";
  db.query(sql, [customer_id, total], (err, result) => {
    if (err) throw err;
    res.send("Order Created");
  });
});

app.listen(3000, () => console.log("Server running on port 3000"));

app.get("/", (req, res) => {
  res.send("Backend is running ✅");
});

