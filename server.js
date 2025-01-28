const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL Database Connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root", // Replace with your MySQL username
    password: "PRINTpack1", // Replace with your MySQL password
    database: "street_dog_feeder", // Replace with your database name
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error("Error connecting to MySQL:", err.message);
        process.exit(1); // Exit the process if the database connection fails
    } else {
        console.log("Connected to MySQL database!");
    }
});

// API Endpoint to Add a Dog Profile
app.post("/add-dog", (req, res) => {
    const { name, rfid, breed } = req.body;

    // Validate input
    if (!name || !rfid || !breed) {
        return res.status(400).json({ message: "All fields are required." });
    }

    // Insert the dog profile into the database
    const query = "INSERT INTO dogs (name, rfid_tag, breed) VALUES (?, ?, ?)";
    db.query(query, [name, rfid, breed], (err) => {
        if (err) {
            if (err.code === "ER_DUP_ENTRY") {
                return res
                    .status(409)
                    .json({ message: "RFID tag must be unique. Please try again." });
            }
            console.error("Database error:", err.message);
            return res.status(500).json({ message: "Database error. Try again later." });
        }

        res.status(201).json({ message: "Dog profile added successfully!" });
    });
});

// API Endpoint to Fetch All Dog Profiles
app.get("/get-dog-profiles", (req, res) => {
    const query = "SELECT * FROM dogs";
    db.query(query, (err, results) => {
        if (err) {
            console.error("Database error:", err.message);
            return res.status(500).json({ message: "Failed to fetch profiles. Try again later." });
        }
        res.status(200).json(results);
    });
});

// Start the Server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
