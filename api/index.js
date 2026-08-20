داexport default function handler(req, res) {
  if (req.method === "GET") {
    if (req.url === "/api/health") {
      return res.status(200).json({
        status: "OK",
        message: "NEXUS Backend connected successfully",
      });
    }

    if (req.url === "/api/student") {
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
  }

  if (req.method === "POST" && req.url === "/api/login") {
    const { email, password } = req.body || {};

    if (
      email === "student@nexus.edu" &&
      password === "Nexus2026"
    ) {
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

    return res.status(401).json({
      success: false,
      message: "Invalid email or password.",
    });
  }

  return res.status(404).json({
    success: false,
    message: "NEXUS API route not found",
  });
}