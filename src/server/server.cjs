const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "NEXUS Backend is running successfully"
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    message: "NEXUS Backend connected successfully"
  });
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

app.listen(PORT, "127.0.0.1", () => {
  console.log(`NEXUS Backend running on http://127.0.0.1:${PORT}`);
});