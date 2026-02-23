const express = require("express");
const router = express.Router();
const db = require("../config/db"); // adjust if your path differs

// GET /api/products
router.get("/", (req, res) => {
  db.query("SELECT * FROM products LIMIT 50", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

module.exports = router;