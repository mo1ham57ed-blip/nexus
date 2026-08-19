import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  BrainCircuit,
  CheckCircle2,
  Clock3,
  GraduationCap,
  Sparkles,
  UserRound,
} from "lucide-react";

import "./courses.css";

const courses = [
  {
    code: "CS301",
    name: "Database Systems",
    instructor: "Dr. Ahmed Hassan",
    hours: "3 Hours / Week",
    progress: 78,
    status: "IN PROGRESS",
    color: "#8b5cf6",
    lessons: 18,
  },
  {
    code: "WEB302",
    name: "Web Development",
    instructor: "Dr. Mohamed Ali",
    hours: "4 Hours / Week",
    progress: 65,
    status: "IN PROGRESS",
    color: "#6366f1",
    lessons: 24,
  },
  {
    code: "IS303",
    name: "Information Systems",
    instructor: "Dr. Omar Khaled",
    hours: "3 Hours / Week",
    progress: 84,
    status: "IN PROGRESS",
    color: "#06b6d4",
    lessons: 16,
  },
  {
    code: "SE304",
    name: "Software Engineering",
    instructor: "Dr. Youssef Adel",
    hours: "3 Hours / Week",
    progress: 52,
    status: "IN PROGRESS",
    color: "#ec4899",
    lessons: 20,
  },
];

function Courses({
  onBack,
  onOpenCourse,
  onAIStudy,
}) {
  const handleOpenCourse = (course) => {
    if (typeof onOpenCourse === "function") {
      onOpenCourse(course);
    } else {
      console.error(
        "onOpenCourse is not connected in App.jsx"
      );
    }
  };

  const handleAIStudy = () => {
    if (typeof onAIStudy === "function") {
      onAIStudy();
    }
  };

  return (
    <div className="courses-page premium-courses-page">

      {/* ================= HEADER ================= */}

      <header className="courses-header premium-courses-header">

        <button
          type="button"
          className="back-button"
          onClick={onBack}
        >
          <ArrowLeft size={18} />
          <span>Back to Dashboard</span>
        </button>

        <div className="logo courses-logo">
          <span>N</span>
          <strong>NEXUS</strong>
        </div>

        <div className="courses-header-student">

          <div className="courses-student-avatar">
            <UserRound size={17} />
          </div>

          <div>
            <strong>Student Portal</strong>
            <span>Fall 2026</span>
          </div>

        </div>

      </header>

      {/* ================= HERO ================= */}

      <section className="courses-hero premium-courses-hero">

        <div className="courses-hero-content">

          <div className="courses-label">
            <Sparkles size={15} />
            ACADEMIC INTELLIGENCE
          </div>

          <h1>
            Your
            <br />
            <span>Courses.</span>
          </h1>

          <p>
            Track your academic progress, manage your
            courses and continue your learning journey
            from one intelligent university workspace.
          </p>

          <div className="courses-hero-actions">

            <button
              type="button"
              className="courses-ai-button"
              onClick={handleAIStudy}
            >
              <BrainCircuit size={18} />

              <span>
                Study with NEXUS AI
              </span>

              <ArrowUpRight size={16} />
            </button>

          </div>

        </div>

        {/* HERO VISUAL */}

        <div className="courses-hero-visual">

          <div className="courses-orbit orbit-one" />
          <div className="courses-orbit orbit-two" />

          <div className="courses-hero-core">

            <GraduationCap size={55} />

            <span>NEXUS</span>

          </div>

        </div>

      </section>

      {/* ================= STATS ================= */}

      <section className="courses-stats premium-course-stats">

        <div className="course-stat">

          <div className="course-stat-icon">
            <BookOpen size={20} />
          </div>

          <span>TOTAL COURSES</span>

          <strong>04</strong>

          <small>Current semester</small>

        </div>

        <div className="course-stat">

          <div className="course-stat-icon">
            <Clock3 size={20} />
          </div>

          <span>CREDIT HOURS</span>

          <strong>13</strong>

          <small>Weekly workload</small>

        </div>

        <div className="course-stat">

          <div className="course-stat-icon">
            <CheckCircle2 size={20} />
          </div>

          <span>COMPLETED</span>

          <strong>02</strong>

          <small>Academic milestones</small>

        </div>

        <div className="course-stat">

          <div className="course-stat-icon">
            <GraduationCap size={20} />
          </div>

          <span>SEMESTER</span>

          <strong>04</strong>

          <small>Fall 2026</small>

        </div>

      </section>

      {/* ================= COURSES ================= */}

      <main className="courses-container">

        <div className="courses-title">

          <div>

            <span className="section-label">
              CURRENT SEMESTER
            </span>

            <h2>
              My Courses
            </h2>

            <p>
              Continue where you left off and keep
              improving your academic progress.
            </p>

          </div>

          <div className="semester-badge">

            <span />

            FALL 2026

          </div>

        </div>

        {/* COURSE GRID */}

        <div className="courses-grid premium-courses-grid">

          {courses.map((course) => (

            <article
              className="course-card premium-course-card"
              key={course.code}
              style={{
                "--course-color": course.color,
              }}
            >

              <div className="course-card-glow" />

              {/* TOP */}

              <div className="course-card-top">

                <span className="course-code">
                  {course.code}
                </span>

                <span className="course-status">

                  <span />

                  {course.status}

                </span>

              </div>

              {/* ICON */}

              <div className="course-icon premium-course-icon">

                <BookOpen size={23} />

              </div>

              {/* TITLE */}

              <h3>
                {course.name}
              </h3>

              <p className="course-instructor">
                {course.instructor}
              </p>

              {/* HOURS */}

              <div className="course-hours">

                <Clock3 size={14} />

                <span>
                  {course.hours}
                </span>

                <span>
                  • {course.lessons} Lessons
                </span>

              </div>

              {/* PROGRESS */}

              <div className="progress-header">

                <span>
                  COURSE PROGRESS
                </span>

                <strong>
                  {course.progress}%
                </strong>

              </div>

              <div className="progress-bar premium-progress">

                <div
                  className="progress-fill"
                  style={{
                    width: `${course.progress}%`,
                    backgroundColor:
                      course.color,
                  }}
                />

              </div>

              {/* BUTTONS */}

              <div className="course-card-actions">

                <button
                  type="button"
                  className="course-button"
                  onClick={() =>
                    handleOpenCourse(course)
                  }
                >
                  <span>
                    Open Course
                  </span>

                  <ArrowUpRight size={16} />

                </button>

                <button
                  type="button"
                  className="course-ai-small"
                  onClick={handleAIStudy}
                  title="Study with AI"
                >
                  <BrainCircuit size={17} />
                </button>

              </div>

            </article>

          ))}

        </div>

      </main>

      {/* ================= AI BANNER ================= */}

      <section className="courses-ai-banner premium-ai-banner">

        <div className="courses-ai-banner-icon">
          <BrainCircuit size={32} />
        </div>

        <div className="courses-ai-banner-content">

          <span>
            NEXUS INTELLIGENCE
          </span>

          <h2>
            Your courses just got smarter.
          </h2>

          <p>
            Let NEXUS AI explain difficult concepts,
            generate practice questions and build a
            personalized study plan.
          </p>

        </div>

        <button
          type="button"
          onClick={handleAIStudy}
        >
          <span>
            Open AI Study
          </span>

          <ArrowUpRight size={17} />

        </button>

      </section>

    </div>
  );
}

export default Courses;