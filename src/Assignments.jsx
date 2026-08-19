import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  FileText,
  Sparkles,
} from "lucide-react";

import "./Assignments.css";

function Assignments({
  assignments = [],
  onBack,
  onOpenAssignment,
}) {
  const completed = assignments.filter(
    (item) => item.status === "COMPLETED"
  ).length;

  const pending = assignments.filter(
    (item) => item.status === "PENDING"
  ).length;

  const progress = assignments.filter(
    (item) => item.status === "IN PROGRESS"
  ).length;

  return (
    <div className="nx-assignments">

      {/* HEADER */}
      <header className="nx-a-header">

        <button
          className="nx-a-back"
          onClick={onBack}
        >
          <ArrowLeft size={17} />
          <span>Dashboard</span>
        </button>

        <div className="nx-a-logo">
          <b>N</b>
          <span>NEXUS</span>
        </div>

        <div className="nx-a-term">
          FALL 2026
        </div>

      </header>

      {/* HERO */}
      <section className="nx-a-hero">

        <div className="nx-a-hero-content">

          <div className="nx-a-eyebrow">
            <Sparkles size={14} />
            NEXUS ACADEMIC WORKSPACE
          </div>

          <h1>
            Stay ahead
            <br />
            <em>of every task.</em>
          </h1>

          <p>
            Organize your assignments, track deadlines,
            and keep your academic progress moving forward.
          </p>

        </div>

        <div className="nx-a-hero-card">

          <span>ACTIVE ASSIGNMENTS</span>

          <strong>
            {String(progress + pending).padStart(2, "0")}
          </strong>

          <small>
            tasks need your attention
          </small>

        </div>

      </section>

      {/* STATS */}
      <section className="nx-a-stats">

        <Stat
          label="TOTAL"
          value={assignments.length}
          icon={<FileText size={18} />}
        />

        <Stat
          label="IN PROGRESS"
          value={progress}
          icon={<Clock3 size={18} />}
        />

        <Stat
          label="PENDING"
          value={pending}
          icon={<FileText size={18} />}
        />

        <Stat
          label="COMPLETED"
          value={completed}
          icon={<CheckCircle2 size={18} />}
        />

      </section>

      {/* CONTENT */}
      <main className="nx-a-content">

        <div className="nx-a-title">

          <div>
            <span>FALL 2026 · CURRENT SEMESTER</span>
            <h2>Your assignments</h2>
          </div>

          <div className="nx-a-total">
            {String(assignments.length).padStart(2, "0")} TASKS
          </div>

        </div>

        {/* LIST */}
        <div className="nx-a-list">

          {assignments.map((assignment, index) => {

            const isCompleted =
              assignment.status === "COMPLETED";

            return (
              <article
                className={`nx-a-item ${
                  isCompleted ? "completed" : ""
                }`}
                key={assignment.id}
              >

                <div className="nx-a-index">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="nx-a-icon">
                  {isCompleted ? (
                    <CheckCircle2 size={21} />
                  ) : (
                    <FileText size={21} />
                  )}
                </div>

                <div className="nx-a-info">

                  <div className="nx-a-course-row">

                    <span>
                      {assignment.course}
                    </span>

                    <b
                      className={`priority-${String(
                        assignment.priority
                      ).toLowerCase()}`}
                    >
                      {assignment.priority}
                    </b>

                  </div>

                  <h3>
                    {assignment.title}
                  </h3>

                  <div className="nx-a-meta">

                    <span>
                      <CalendarDays size={14} />
                      {assignment.due}
                    </span>

                    <span>
                      <Clock3 size={14} />
                      {assignment.time}
                    </span>

                  </div>

                </div>

                <div
                  className={`nx-a-status ${String(
                    assignment.status
                  )
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                >
                  <i />
                  {assignment.status}
                </div>

                <button
                  className="nx-a-open"
                  onClick={() =>
                    onOpenAssignment?.(assignment)
                  }
                >
                  <span>
                    {isCompleted ? "View" : "Open"}
                  </span>

                  <ArrowUpRight size={16} />
                </button>

              </article>
            );
          })}

        </div>

        {/* EMPTY */}
        {assignments.length === 0 && (
          <div className="nx-a-empty">
            <FileText size={32} />
            <h3>No assignments yet</h3>
            <p>
              Your assignments will appear here.
            </p>
          </div>
        )}

      </main>

    </div>
  );
}

function Stat({ label, value, icon }) {
  return (
    <div className="nx-a-stat">

      <div className="nx-a-stat-icon">
        {icon}
      </div>

      <div>
        <span>{label}</span>
        <strong>
          {String(value).padStart(2, "0")}
        </strong>
      </div>

    </div>
  );
}

export default Assignments;