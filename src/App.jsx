import { useEffect, useState } from "react";
import { checkBackend } from "./api";

import Dashboard from "./dashboard";
import Notifications from "./Notifications";
import AIStudy from "./AIStudy";
import Profile from "./profile";
import Courses from "./Courses";
import CourseDetails from "./CourseDetails";
import Assignments from "./Assignments";
import AssignmentDetails from "./AssignmentDetails";
import Schedule from "./Schedule";
import Login from "./Login";

function App() {
  const [page, setPage] = useState("dashboard");

  const [backendStatus, setBackendStatus] =
    useState("Checking...");

  const [loggedIn, setLoggedIn] = useState(true);

  // الكورس الذي اختاره المستخدم
  const [selectedCourse, setSelectedCourse] =
    useState(null);

  // الـ Assignment الذي اختاره المستخدم
  const [selectedAssignment, setSelectedAssignment] =
    useState(null);

  // =========================================
  // BACKEND CHECK
  // =========================================

  useEffect(() => {
    checkBackend()
      .then((data) => {
        if (data) {
          console.log(
            "BACKEND RESPONSE:",
            data
          );

          setBackendStatus("connected");
        } else {
          console.error(
            "Backend connection failed"
          );

          setBackendStatus("failed");
        }
      })
      .catch((error) => {
        console.error(
          "Backend error:",
          error
        );

        setBackendStatus("failed");
      });
  }, []);

  // =========================================
  // NAVIGATION
  // =========================================

  const goToPage = (nextPage) => {
    setPage(nextPage);
  };

  const goToDashboard = () => {
    setSelectedCourse(null);
    setSelectedAssignment(null);
    setPage("dashboard");
  };

  // =========================================
  // LOGIN
  // =========================================

  const handleLogin = () => {
    setLoggedIn(true);
    setPage("dashboard");
  };

  // =========================================
  // OPEN COURSE
  // =========================================

  const handleOpenCourse = (course) => {
    console.log(
      "OPEN COURSE:",
      course
    );

    setSelectedCourse(course);
    setPage("course-details");
  };

  // =========================================
  // BACK TO COURSES
  // =========================================

  const handleBackToCourses = () => {
    setSelectedAssignment(null);
    setPage("courses");
  };

  // =========================================
  // OPEN ASSIGNMENT
  // =========================================

  const handleOpenAssignment = (assignment) => {
    console.log(
      "OPEN ASSIGNMENT:",
      assignment
    );

    setSelectedAssignment(assignment);
    setPage("assignment-details");
  };

  // =========================================
  // COMPLETE ASSIGNMENT
  // =========================================

  const handleCompleteAssignment = () => {
    if (!selectedAssignment) return;

    setSelectedAssignment({
      ...selectedAssignment,
      status: "COMPLETED",
    });
  };

  // =========================================
  // LOGIN PAGE
  // =========================================

  if (!loggedIn) {
    return (
      <Login
        onLogin={handleLogin}
      />
    );
  }

  // =========================================
  // APP
  // =========================================

  return (
    <>
      {/* =====================================
          DASHBOARD
      ===================================== */}

      {page === "dashboard" && (
        <Dashboard
          onNavigate={goToPage}
          backendStatus={backendStatus}
        />
      )}

      {/* =====================================
          NOTIFICATIONS
      ===================================== */}

      {page === "notifications" && (
        <Notifications
          onBack={goToDashboard}
        />
      )}

      {/* =====================================
          AI STUDY
      ===================================== */}

      {page === "ai-study" && (
        <AIStudy
          onBack={goToDashboard}
        />
      )}

      {/* =====================================
          PROFILE
      ===================================== */}

      {page === "profile" && (
        <Profile
          onBack={goToDashboard}
        />
      )}

      {/* =====================================
          COURSES
      ===================================== */}

      {page === "courses" && (
        <Courses
          onBack={goToDashboard}

          onOpenCourse={
            handleOpenCourse
          }

          onAIStudy={() =>
            setPage("ai-study")
          }
        />
      )}

      {/* =====================================
          COURSE DETAILS
      ===================================== */}

      {page === "course-details" && (
        <CourseDetails
          course={selectedCourse}

          onBack={
            handleBackToCourses
          }

          onAIStudy={() =>
            setPage("ai-study")
          }

          onOpenAssignment={
            handleOpenAssignment
          }

          assignments={[
            {
              id: 1,
              course:
                selectedCourse?.name ||
                "Database Systems",
              title:
                "Database Design Project",
              due: "Aug 25, 2026",
              time: "11:59 PM",
              priority: "HIGH",
              status: "PENDING",
            },
            {
              id: 2,
              course:
                selectedCourse?.name ||
                "Database Systems",
              title:
                "SQL Practice Assignment",
              due: "Aug 28, 2026",
              time: "10:00 PM",
              priority: "MEDIUM",
              status: "IN PROGRESS",
            },
          ]}
        />
      )}

      {/* =====================================
          ASSIGNMENTS
      ===================================== */}

      {page === "assignments" && (
        <Assignments
          onBack={goToDashboard}
          onOpenAssignment={
            handleOpenAssignment
          }

          assignments={[
            {
              id: 1,
              course: "Database Systems",
              title:
                "Database Design Project",
              due: "Aug 25, 2026",
              time: "11:59 PM",
              priority: "HIGH",
              status: "PENDING",
            },
            {
              id: 2,
              course: "Web Development",
              title:
                "React Website Project",
              due: "Aug 27, 2026",
              time: "10:00 PM",
              priority: "HIGH",
              status: "IN PROGRESS",
            },
            {
              id: 3,
              course:
                "Information Systems",
              title:
                "Information Systems Report",
              due: "Aug 30, 2026",
              time: "09:00 PM",
              priority: "MEDIUM",
              status: "COMPLETED",
            },
          ]}
        />
      )}

      {/* =====================================
          ASSIGNMENT DETAILS
      ===================================== */}

      {page === "assignment-details" && (
        <AssignmentDetails
          assignment={
            selectedAssignment
          }

          onBack={() => {
            setPage(
              selectedCourse
                ? "course-details"
                : "assignments"
            );
          }}

          onComplete={
            handleCompleteAssignment
          }
        />
      )}

      {/* =====================================
          SCHEDULE
      ===================================== */}

      {page === "schedule" && (
        <Schedule
          onBack={goToDashboard}
        />
      )}
    </>
  );
}

export default App;