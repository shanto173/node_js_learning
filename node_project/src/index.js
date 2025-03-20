const express = require("express");
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables

const app = express();
app.use(express.json()); // Parse JSON requests

// Sample route
app.get("/", (req, res) => {
    res.send("Welcome to my Node.js backend!");
});

// Import user routes
const userRoutes = require("./routes/user");
app.use("/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
