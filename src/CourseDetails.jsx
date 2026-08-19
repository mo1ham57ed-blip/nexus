import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  BrainCircuit,
  CalendarDays,
  CheckCircle2,
  Clock3,
  FileText,
  GraduationCap,
  PlayCircle,
  Sparkles,
  UserRound,
} from "lucide-react";
import "./CourseDetails.css";

function CourseDetails({
  course,
  assignments = [],
  onBack,
  onAIStudy,
  onOpenAssignment,
}) {
  const currentCourse = course || {
    code: "IS201",
    name: "Database Systems",
    instructor: "Dr. Ahmed Hassan",
    hours: "3 Hours / Week",
    progress: 78,
  };

  const [lessons, setLessons] = useState([
    {
      id: 1,
      title: "Introduction to Database Systems",
      duration: "42 min",
      completed: true,
      content:
        "Learn the basic concepts of databases, database systems and how organizations use data.",
    },
    {
      id: 2,
      title: "Database Architecture",
      duration: "35 min",
      completed: true,
      content:
        "Understand database architecture, servers, clients and the main components of a database system.",
    },
    {
      id: 3,
      title: "Entity Relationship Model",
      duration: "48 min",
      completed: true,
      content:
        "Learn entities, attributes, relationships and how to design an ER model.",
    },
    {
      id: 4,
      title: "Relational Database Model",
      duration: "39 min",
      completed: false,
      content:
        "Understand tables, rows, columns, primary keys and foreign keys. Learn how relational databases organize information into connected tables.",
    },
    {
      id: 5,
      title: "SQL Fundamentals",
      duration: "51 min",
      completed: false,
      content:
        "Learn the fundamentals of SQL including SELECT, INSERT, UPDATE and DELETE commands.",
    },
  ]);

  const [activeLesson, setActiveLesson] = useState(null);

  const completedLessons = useMemo(
    () =>
      lessons.filter(
        (lesson) => lesson.completed
      ).length,
    [lessons]
  );

  const remainingLessons =
    lessons.length - completedLessons;

  const lessonProgress =
    lessons.length > 0
      ? Math.round(
          (completedLessons / lessons.length) * 100
        )
      : 0;

  const visibleProgress = Math.max(
    currentCourse.progress || 0,
    lessonProgress
  );

  const openLesson = (lesson) => {
    setActiveLesson(lesson);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const completeLesson = () => {
    if (!activeLesson) return;

    setLessons((previous) =>
      previous.map((lesson) =>
        lesson.id === activeLesson.id
          ? {
              ...lesson,
              completed: true,
            }
          : lesson
      )
    );

    setActiveLesson((previous) =>
      previous
        ? {
            ...previous,
            completed: true,
          }
        : previous
    );
  };

  const closeLesson = () => {
    setActiveLesson(null);

    setTimeout(() => {
      document
        .getElementById("course-lessons")
        ?.scrollIntoView({
          behavior: "smooth",
        });
    }, 100);
  };

  /* =========================
     LESSON VIEW
  ========================= */

  if (activeLesson) {
    return (
      <div className="course-details-page">

        <header className="course-details-header">
          <button
            type="button"
            className="course-details-back"
            onClick={closeLesson}
          >
            <ArrowLeft size={18} />
            Back to Lessons
          </button>

          <div className="course-details-logo">
            <span>N</span>
            NEXUS
          </div>

          <div className="course-details-student">
            <div className="course-details-avatar">
              <UserRound size={17} />
            </div>

            <div>
              <strong>
                Student Portal
              </strong>

              <span>
                Fall 2026
              </span>
            </div>
          </div>
        </header>

        <main className="course-details-content">

          <section
            className="course-details-hero"
            style={{
              marginBottom: "28px",
            }}
          >
            <div className="course-details-hero-content">

              <div className="course-details-label">
                <PlayCircle size={14} />
                LESSON {String(activeLesson.id).padStart(2, "0")}
              </div>

              <div className="course-details-code">
                {currentCourse.code}
              </div>

              <h1>
                {activeLesson.title}
              </h1>

              <p>
                {activeLesson.content}
              </p>

              <div className="course-details-meta">
                <span>
                  <Clock3 size={14} />
                  {activeLesson.duration}
                </span>

                <span>
                  <BookOpen size={14} />
                  {currentCourse.name}
                </span>

                <span>
                  <GraduationCap size={14} />
                  Fall 2026
                </span>
              </div>
            </div>

            <div className="course-details-hero-orb">
              <BookOpen size={58} />
              <div className="course-details-orb-ring" />
            </div>
          </section>

          <section className="course-details-section">

            <div className="course-details-section-head">
              <div>
                <span>
                  LESSON CONTENT
                </span>

                <h2>
                  {activeLesson.title}
                </h2>
              </div>
            </div>

            <div
              className="assignment-details-card"
              style={{
                display: "block",
                padding: "32px",
              }}
            >
              <div
                className="assignment-details-icon"
                style={{
                  marginBottom: "20px",
                }}
              >
                <BookOpen size={22} />
              </div>

              <h3
                style={{
                  fontSize: "24px",
                  marginBottom: "14px",
                }}
              >
                What you will learn
              </h3>

              <p
                style={{
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                {activeLesson.content}
              </p>

              <div
                style={{
                  padding: "20px",
                  borderRadius: "16px",
                  background:
                    "rgba(255,255,255,0.04)",
                  border:
                    "1px solid rgba(255,255,255,0.08)",
                  marginBottom: "24px",
                }}
              >
                <strong>
                  Study Tip
                </strong>

                <p
                  style={{
                    marginTop: "8px",
                    lineHeight: 1.7,
                  }}
                >
                  Read the lesson carefully, review
                  the important concepts and then
                  mark the lesson as completed.
                </p>
              </div>

              {activeLesson.completed ? (
                <div
                  className="completed-message"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <CheckCircle2 size={20} />
                  Lesson completed successfully.
                </div>
              ) : (
                <button
                  type="button"
                  className="complete-button"
                  onClick={completeLesson}
                >
                  <CheckCircle2 size={19} />
                  Mark Lesson as Complete
                </button>
              )}
            </div>

          </section>

          <section className="course-details-ai">

            <div className="course-details-ai-icon">
              <BrainCircuit size={32} />
            </div>

            <div>
              <span>
                NEXUS INTELLIGENCE
              </span>

              <h2>
                Need help with this lesson?
              </h2>

              <p>
                Ask NEXUS AI to explain this lesson,
                summarize it or generate practice
                questions.
              </p>
            </div>

            <button
              type="button"
              onClick={onAIStudy}
            >
              Study with AI
              <ArrowUpRight size={17} />
            </button>

          </section>

        </main>
      </div>
    );
  }

  /* =========================
     COURSE DETAILS
  ========================= */

  return (
    <div className="course-details-page">

      {/* HEADER */}
      <header className="course-details-header">

        <button
          type="button"
          className="course-details-back"
          onClick={onBack}
        >
          <ArrowLeft size={18} />
          Back to Courses
        </button>

        <div className="course-details-logo">
          <span>N</span>
          NEXUS
        </div>

        <div className="course-details-student">

          <div className="course-details-avatar">
            <UserRound size={17} />
          </div>

          <div>
            <strong>
              Student Portal
            </strong>

            <span>
              Fall 2026
            </span>
          </div>

        </div>

      </header>

      {/* HERO */}
      <section className="course-details-hero">

        <div className="course-details-hero-content">

          <div className="course-details-label">
            <Sparkles size={14} />
            COURSE DETAILS
          </div>

          <div className="course-details-code">
            {currentCourse.code}
          </div>

          <h1>
            {currentCourse.name}
          </h1>

          <p>
            Master the fundamentals of data,
            databases and intelligent information
            management.
          </p>

          <div className="course-details-meta">

            <span>
              <UserRound size={14} />
              {currentCourse.instructor}
            </span>

            <span>
              <Clock3 size={14} />
              {currentCourse.hours}
            </span>

            <span>
              <GraduationCap size={14} />
              Fall 2026
            </span>

          </div>

        </div>

        <div className="course-details-hero-orb">
          <BookOpen size={58} />
          <div className="course-details-orb-ring" />
        </div>

      </section>

      {/* PROGRESS */}
      <section className="course-details-progress">

        <div className="course-progress-main">

          <div>
            <span>
              YOUR PROGRESS
            </span>

            <strong>
              {visibleProgress}%
            </strong>
          </div>

          <div className="course-progress-track">
            <div
              style={{
                width: `${visibleProgress}%`,
              }}
            />
          </div>

          <p>
            {completedLessons === lessons.length
              ? "Excellent! You completed every lesson."
              : "You're making great progress. Keep going."}
          </p>

        </div>

        <div className="course-progress-stat">

          <CheckCircle2 size={21} />

          <strong>
            {completedLessons}
          </strong>

          <span>
            Completed
          </span>

        </div>

        <div className="course-progress-stat">

          <PlayCircle size={21} />

          <strong>
            {remainingLessons}
          </strong>

          <span>
            Remaining
          </span>

        </div>

        <button
          type="button"
          className="course-ai-button"
          onClick={onAIStudy}
        >
          <BrainCircuit size={18} />
          Study with AI
          <ArrowUpRight size={16} />
        </button>

      </section>

      {/* MAIN */}
      <main className="course-details-content">

        {/* LESSONS */}
        <section
          id="course-lessons"
          className="course-details-section"
        >

          <div className="course-details-section-head">

            <div>

              <span>
                01 — LEARNING
              </span>

              <h2>
                Course Lessons
              </h2>

            </div>

            <span className="course-details-count">
              {completedLessons} / {lessons.length} Completed
            </span>

          </div>

          <div className="lessons-list">

            {lessons.map(
              (lesson, index) => (

                <article
                  className={`lesson-card ${
                    lesson.completed
                      ? "completed"
                      : ""
                  }`}
                  key={lesson.id}
                >

                  <div className="lesson-number">
                    {String(
                      index + 1
                    ).padStart(2, "0")}
                  </div>

                  <div className="lesson-icon">

                    {lesson.completed ? (
                      <CheckCircle2 size={19} />
                    ) : (
                      <PlayCircle size={19} />
                    )}

                  </div>

                  <div className="lesson-info">

                    <h3>
                      {lesson.title}
                    </h3>

                    <span>
                      <Clock3 size={12} />
                      {lesson.duration}
                    </span>

                  </div>

                  <button
                    type="button"
                    className="lesson-open"
                    onClick={() =>
                      openLesson(lesson)
                    }
                  >
                    {lesson.completed
                      ? "Review"
                      : "Start"}

                    <ArrowUpRight size={15} />
                  </button>

                </article>

              )
            )}

          </div>

        </section>

        {/* ASSIGNMENTS */}
        <section className="course-details-section">

          <div className="course-details-section-head">

            <div>

              <span>
                02 — ACADEMIC WORK
              </span>

              <h2>
                Assignments
              </h2>

            </div>

            <span className="course-details-count">
              {assignments.length} Tasks
            </span>

          </div>

          <div className="assignments-details-list">

            {assignments.length === 0 ? (

              <div className="assignment-details-card">

                <div className="assignment-details-icon">
                  <FileText size={20} />
                </div>

                <div>

                  <h3>
                    No assignments yet
                  </h3>

                  <span>
                    Your course assignments will appear here.
                  </span>

                </div>

              </div>

            ) : (

              assignments
                .filter(
                  (assignment) =>
                    !assignment.course ||
                    assignment.course ===
                      currentCourse.name
                )
                .map(
                  (assignment) => (

                    <article
                      className="assignment-details-card"
                      key={assignment.id}
                    >

                      <div className="assignment-details-icon">
                        <FileText size={20} />
                      </div>

                      <div>

                        <h3>
                          {assignment.title}
                        </h3>

                        <span>
                          <CalendarDays size={12} />
                          Due {assignment.due}
                        </span>

                      </div>

                      <div className="assignment-status">
                        {assignment.status}
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          onOpenAssignment?.(
                            assignment
                          )
                        }
                        aria-label={`Open ${assignment.title}`}
                      >
                        <ArrowUpRight size={16} />
                      </button>

                    </article>

                  )
                )

            )}

          </div>

        </section>

        {/* AI */}
        <section className="course-details-ai">

          <div className="course-details-ai-icon">
            <BrainCircuit size={32} />
          </div>

          <div>

            <span>
              NEXUS INTELLIGENCE
            </span>

            <h2>
              Need help understanding this course?
            </h2>

            <p>
              Ask NEXUS AI to explain concepts,
              summarize lessons or generate practice
              questions for this course.
            </p>

          </div>

          <button
            type="button"
            onClick={onAIStudy}
          >
            Open AI Study
            <ArrowUpRight size={17} />
          </button>

        </section>

      </main>

    </div>
  );
}

export default CourseDetails;