const express = require("express");
const protectedRoute = require("./routes/protected");

const app = express();

app.use(express.json());

app.use("/api", protectedRoute);

app.listen(5000, () => {
    console.log("Server running on port 5000");
});