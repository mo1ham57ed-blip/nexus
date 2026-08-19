const API_URL = "http://localhost:5000";

export async function checkBackend() {
  try {
    const response = await fetch(`${API_URL}/api/health`);

    if (!response.ok) {
      throw new Error("Backend health check failed");
    }

    return await response.json();
  } catch (error) {
    console.error("Backend connection error:", error);
    return null;
  }
}

export async function getStudentProfile() {
  try {
    const response = await fetch(`${API_URL}/api/student`);

    if (!response.ok) {
      throw new Error("Student profile request failed");
    }

    return await response.json();
  } catch (error) {
    console.error("Student profile error:", error);
    return null;
  }
}