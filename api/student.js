export default function handler(req, res) {
  return res.status(200).json({
    name: "Mohamed Hassan",
    email: "student@nexus.edu",
    program: "Information Systems",
    year: "Second Year",
    gpa: 3.7,
    progress: 72,
    completed: 18,
  });
}