const express = require("express");
const cors = require("cors");

const skillsRoute = require("./routes/skills");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", skillsRoute);

app.get("/", (req, res) => {
  res.send("Growth Stack Server Running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});