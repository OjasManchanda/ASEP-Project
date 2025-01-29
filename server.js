// Example of MySQL queries for food level and health alerts
const express = require("express");
const mysql = require("mysql2");
const app = express();
const PORT = 5001;

// Database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "street_dog_feeder",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
    return;
  }
  console.log("Connected to MySQL database.");
});

// Route for food level
app.get("/dashboard/food-level", (req, res) => {
  const query = "SELECT level FROM food WHERE id = 1";  // Adjust as per your table
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Failed to retrieve food level." });
    }
    res.json(results[0]); // Assuming results contains the food level
  });
});

// Route for health alerts
app.get("/dashboard/health-alerts", (req, res) => {
  const query = "SELECT alerts FROM health WHERE dog_id = 1";  // Adjust as per your table
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Failed to retrieve health alerts." });
    }
    res.json(results[0]); // Assuming results contains the health alert data
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
