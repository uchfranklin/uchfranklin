const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "database-1.cgj66y2swn0f.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "admin",
  password: "centerline",
  database: "Test_database"
});

db.connect(err => {
  if (err) throw err;
  console.log("Database Connected");
});

module.exports = db;