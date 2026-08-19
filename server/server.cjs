const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "NEXUS Backend is running successfully ??"
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    message: "NEXUS Backend connected successfully ?"
  });
});

app.listen(PORT, () => {
  console.log(`NEXUS Backend running on http://localhost:${PORT}`);
});

app.get("/api/student", (req, res) => {
  res.json({
    name: "Mohamed Hassan",
    email: "student@nexus.edu",
    program: "Information Systems",
    year: "Second Year",
    gpa: 3.7,
    progress: 72,
    completed: 18
  });
});
