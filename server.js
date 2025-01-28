const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;


app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root", 
    password: "PRINTpack1", 
    database: "street_dog_feeder",
});

db.connect((err) => {
    if (err) {
        console.error("Error connecting to MySQL:", err.message);
        process.exit(1); 
    } else {
        console.log("Connected to MySQL database!");
    }
});

app.post("/add-dog", (req, res) => {
    const { name, rfid, breed } = req.body;


    if (!name || !rfid || !breed) {
        return res.status(400).json({ message: "All fields are required." });
    }

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

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
