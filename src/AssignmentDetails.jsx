import { useState } from "react";
import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Flag,
  Sparkles,
} from "lucide-react";

function AssignmentDetails({ assignment, onBack, onComplete }) {
  const [completed, setCompleted] = useState(
    assignment?.status === "COMPLETED"
  );

  if (!assignment) {
    return (
      <div style={styles.page}>
        <div style={styles.empty}>
          <h2>No Assignment Selected</h2>
          <button style={styles.backButton} onClick={onBack}>
            <ArrowLeft size={18} />
            Back to Assignments
          </button>
        </div>
      </div>
    );
  }

  const handleComplete = () => {
    setCompleted(true);
    if (onComplete) onComplete();
  };

  return (
    <div style={styles.page}>

      {/* HEADER */}
      <header style={styles.header}>
        <button style={styles.backButton} onClick={onBack}>
          <ArrowLeft size={18} />
          Back to Assignments
        </button>

        <div style={styles.logo}>
          <span style={styles.logoBox}>N</span>
          NEXUS
        </div>
      </header>

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.label}>
          <Sparkles size={15} />
          NEXUS ACADEMIC WORKSPACE
        </div>

        <div style={styles.course}>
          {assignment.course}
        </div>

        <h1 style={styles.title}>
          {assignment.title}
        </h1>

        <p style={styles.heroText}>
          Manage your assignment, track your deadline,
          and complete your academic work from one place.
        </p>
      </section>

      {/* CONTENT */}
      <main style={styles.container}>

        {/* STATUS */}
        <section style={styles.statusCard}>
          <div>
            <span style={styles.smallLabel}>
              CURRENT STATUS
            </span>

            <h2 style={styles.statusTitle}>
              {completed
                ? "Assignment completed."
                : "Assignment in progress."}
            </h2>
          </div>

          <div
            style={{
              ...styles.status,
              ...(completed
                ? styles.completedStatus
                : styles.pendingStatus),
            }}
          >
            {completed ? (
              <CheckCircle2 size={19} />
            ) : (
              <Clock3 size={19} />
            )}

            {completed ? "COMPLETED" : assignment.status}
          </div>
        </section>

        {/* INFO CARDS */}
        <section style={styles.infoGrid}>

          <InfoCard
            icon={<CalendarDays size={25} />}
            label="DUE DATE"
            value={assignment.due}
          />

          <InfoCard
            icon={<Clock3 size={25} />}
            label="DEADLINE"
            value={assignment.time}
          />

          <InfoCard
            icon={<Flag size={25} />}
            label="PRIORITY"
            value={assignment.priority}
          />

        </section>

        {/* DESCRIPTION */}
        <section style={styles.description}>

          <span style={styles.smallLabel}>
            TASK DESCRIPTION
          </span>

          <h2 style={styles.sectionTitle}>
            What you need to do
          </h2>

          <p style={styles.descriptionText}>
            Complete the assigned academic work according
            to the requirements provided by your instructor.
            Make sure your work is organized, reviewed and
            submitted before the deadline.
          </p>

          <div style={styles.checklist}>

            <CheckItem>
              Review the course requirements
            </CheckItem>

            <CheckItem>
              Complete the required work
            </CheckItem>

            <CheckItem>
              Review your final submission
            </CheckItem>

          </div>

        </section>

        {/* ACTION */}
        <div style={styles.action}>

          {completed ? (
            <div style={styles.completedMessage}>
              <CheckCircle2 size={20} />
              This assignment is already completed.
            </div>
          ) : (
            <button
              style={styles.completeButton}
              onClick={handleComplete}
            >
              <CheckCircle2 size={19} />
              Mark as Complete
            </button>
          )}

        </div>

      </main>
    </div>
  );
}

/* =========================
   COMPONENTS
========================= */

function InfoCard({ icon, label, value }) {
  return (
    <div style={styles.infoCard}>
      <div style={styles.infoIcon}>
        {icon}
      </div>

      <span style={styles.infoLabel}>
        {label}
      </span>

      <strong style={styles.infoValue}>
        {value}
      </strong>
    </div>
  );
}

function CheckItem({ children }) {
  return (
    <div style={styles.checkItem}>
      <CheckCircle2 size={18} />
      <span>{children}</span>
    </div>
  );
}

/* =========================
   STYLES
========================= */

const styles = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at 10% 10%, #17152d 0%, #080b12 35%, #080b12 100%)",
    color: "#f8fafc",
    fontFamily: "Arial, sans-serif",
  },

  header: {
    height: "76px",
    padding: "0 40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "1px solid #202531",
    background: "rgba(8,11,18,0.95)",
    boxSizing: "border-box",
  },

  logo: {
    display: "flex",
    alignItems: "center",
    gap: "9px",
    fontSize: "18px",
    fontWeight: "800",
    letterSpacing: "2px",
  },

  logoBox: {
    width: "36px",
    height: "36px",
    display: "grid",
    placeItems: "center",
    borderRadius: "11px",
    background: "linear-gradient(135deg,#6366f1,#8b5cf6)",
  },

  backButton: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "11px 16px",
    border: "1px solid #2b3240",
    borderRadius: "11px",
    background: "#111722",
    color: "#cbd5e1",
    cursor: "pointer",
    fontSize: "13px",
  },

  hero: {
    width: "min(1100px, calc(100% - 40px))",
    margin: "0 auto",
    padding: "75px 0 55px",
    boxSizing: "border-box",
  },

  label: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "9px 14px",
    border: "1px solid #34305b",
    borderRadius: "999px",
    background: "#131429",
    color: "#a78bfa",
    fontSize: "10px",
    fontWeight: "800",
    letterSpacing: "1.5px",
  },

  course: {
    marginTop: "25px",
    color: "#818cf8",
    fontSize: "13px",
    fontWeight: "800",
    letterSpacing: "1px",
    textTransform: "uppercase",
  },

  title: {
    margin: "10px 0 18px",
    maxWidth: "850px",
    fontSize: "clamp(40px, 6vw, 68px)",
    lineHeight: "1.05",
    letterSpacing: "-2px",
  },

  heroText: {
    maxWidth: "650px",
    margin: 0,
    color: "#94a3b8",
    fontSize: "16px",
    lineHeight: "1.8",
  },

  container: {
    width: "min(1100px, calc(100% - 40px))",
    margin: "0 auto",
    paddingBottom: "80px",
  },

  statusCard: {
    padding: "28px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "20px",
    border: "1px solid #242b38",
    borderRadius: "20px",
    background: "#0d121b",
    boxSizing: "border-box",
  },

  smallLabel: {
    color: "#667085",
    fontSize: "10px",
    fontWeight: "800",
    letterSpacing: "1.6px",
  },

  statusTitle: {
    margin: "8px 0 0",
    fontSize: "23px",
  },

  status: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "11px 16px",
    borderRadius: "999px",
    fontSize: "11px",
    fontWeight: "800",
  },

  completedStatus: {
    color: "#86efac",
    background: "#102219",
    border: "1px solid #1d5a34",
  },

  pendingStatus: {
    color: "#fbbf24",
    background: "#211b0c",
    border: "1px solid #604b13",
  },

  infoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: "16px",
    marginTop: "16px",
  },

  infoCard: {
    minHeight: "145px",
    padding: "24px",
    border: "1px solid #242b38",
    borderRadius: "18px",
    background: "#0d121b",
    boxSizing: "border-box",
  },

  infoIcon: {
    color: "#8b5cf6",
    marginBottom: "22px",
  },

  infoLabel: {
    display: "block",
    color: "#667085",
    fontSize: "10px",
    fontWeight: "800",
    letterSpacing: "1.5px",
  },

  infoValue: {
    display: "block",
    marginTop: "8px",
    fontSize: "17px",
  },

  description: {
    marginTop: "16px",
    padding: "32px",
    border: "1px solid #242b38",
    borderRadius: "20px",
    background: "#0d121b",
    boxSizing: "border-box",
  },

  sectionTitle: {
    margin: "9px 0 12px",
    fontSize: "28px",
  },

  descriptionText: {
    maxWidth: "850px",
    color: "#94a3b8",
    fontSize: "15px",
    lineHeight: "1.8",
  },

  checklist: {
    display: "grid",
    gap: "10px",
    marginTop: "25px",
  },

  checkItem: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "16px",
    borderRadius: "12px",
    background: "#111722",
    color: "#cbd5e1",
    fontSize: "14px",
  },

  action: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "20px",
  },

  completeButton: {
    display: "flex",
    alignItems: "center",
    gap: "9px",
    padding: "15px 23px",
    border: "none",
    borderRadius: "13px",
    background: "linear-gradient(135deg,#6366f1,#8b5cf6)",
    color: "#fff",
    fontSize: "14px",
    fontWeight: "800",
    cursor: "pointer",
  },

  completedMessage: {
    display: "flex",
    alignItems: "center",
    gap: "9px",
    padding: "15px 20px",
    borderRadius: "13px",
    color: "#86efac",
    background: "#102219",
    border: "1px solid #1d5a34",
    fontSize: "13px",
    fontWeight: "700",
  },

  empty: {
    minHeight: "100vh",
    display: "grid",
    placeItems: "center",
    alignContent: "center",
    gap: "20px",
  },
};

export default AssignmentDetails;