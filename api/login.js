export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  const { email, password } = req.body || {};

  if (
    email !== "student@nexus.edu" ||
    password !== "Nexus2026"
  ) {
    return res.status(401).json({
      success: false,
      message: "Invalid email or password.",
    });
  }

  return res.status(200).json({
    success: true,
    message: "Login successful",
    user: {
      name: "Mohamed Hassan",
      email: "student@nexus.edu",
      program: "Information Systems",
      year: "Second Year",
      gpa: 3.7,
      progress: 72,
      completed: 18,
    },
  });
}