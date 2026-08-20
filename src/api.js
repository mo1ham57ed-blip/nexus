const API_URL = "/api";

export async function checkBackend() {
  try {
    const response = await fetch(`${API_URL}/health`);

    if (!response.ok) {
      throw new Error("Backend health check failed");
    }

    return await response.json();
  } catch (error) {
    console.error("Backend connection error:", error);
    return null;
  }
}

export async function loginStudent(email, password) {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message:
          data?.message ||
          "Invalid email or password.",
      };
    }

    return data;
  } catch (error) {
    console.error("Login error:", error);

    return {
      success: false,
      message:
        "Unable to connect to NEXUS server.",
    };
  }
}

export async function getStudentProfile() {
  try {
    const response = await fetch(
      `${API_URL}/student`
    );

    if (!response.ok) {
      throw new Error(
        "Student profile request failed"
      );
    }

    return await response.json();
  } catch (error) {
    console.error(
      "Student profile error:",
      error
    );

    return null;
  }
}