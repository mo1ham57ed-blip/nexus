import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  MapPin,
} from "lucide-react";

import "./Schedule.css";

const schedule = [
  {
    day: "MON",
    date: "18",
    subject: "Database Systems",
    time: "09:00 AM — 11:00 AM",
    room: "Lecture Hall A — Room 204",
    type: "LECTURE",
  },
  {
    day: "MON",
    date: "18",
    subject: "Web Development",
    time: "12:30 PM — 02:30 PM",
    room: "Computer Lab — Room 108",
    type: "LAB",
  },
  {
    day: "TUE",
    date: "19",
    subject: "Information Systems",
    time: "10:00 AM — 12:00 PM",
    room: "Lecture Hall B — Room 301",
    type: "LECTURE",
  },
  {
    day: "WED",
    date: "20",
    subject: "Software Engineering",
    time: "09:30 AM — 11:30 AM",
    room: "Lecture Hall C — Room 102",
    type: "LECTURE",
  },
  {
    day: "THU",
    date: "21",
    subject: "Computer Networks",
    time: "01:00 PM — 03:00 PM",
    room: "Network Lab — Room 205",
    type: "LAB",
  },
];

function Schedule({ onBack }) {
  const lectures = schedule.filter(
    (item) => item.type === "LECTURE"
  ).length;

  const labs = schedule.filter(
    (item) => item.type === "LAB"
  ).length;

  return (
    <div className="nx-schedule">

      {/* HEADER */}
      <header className="nx-s-header">

        <button
          type="button"
          className="nx-s-back"
          onClick={onBack}
        >
          <ArrowLeft size={17} />
          <span>Dashboard</span>
        </button>

        <div className="nx-s-logo">
          <b>N</b>
          <span>NEXUS</span>
        </div>

        <div className="nx-s-term">
          FALL 2026
        </div>

      </header>

      {/* HERO */}
      <section className="nx-s-hero">

        <div className="nx-s-hero-content">

          <div className="nx-s-eyebrow">
            <CalendarDays size={14} />
            SMART ACADEMIC SCHEDULE
          </div>

          <h1>
            Your week,
            <br />
            <em>organized.</em>
          </h1>

          <p>
            Everything happening this week, organized
            into one simple academic timetable.
          </p>

        </div>

        <div className="nx-s-date-card">

          <span>CURRENT WEEK</span>

          <strong>
            18—21
          </strong>

          <small>
            AUGUST 2026
          </small>

        </div>

      </section>

      {/* STATS */}
      <section className="nx-s-stats">

        <ScheduleStat
          label="TOTAL CLASSES"
          value={schedule.length}
          icon={<CalendarDays size={18} />}
        />

        <ScheduleStat
          label="LECTURES"
          value={lectures}
          icon={<Clock3 size={18} />}
        />

        <ScheduleStat
          label="LAB SESSIONS"
          value={labs}
          icon={<MapPin size={18} />}
        />

        <ScheduleStat
          label="SEMESTER"
          value="04"
          icon={<ArrowUpRight size={18} />}
        />

      </section>

      {/* CONTENT */}
      <main className="nx-s-content">

        <div className="nx-s-title">

          <div>
            <span>WEEKLY TIMETABLE</span>
            <h2>Your classes</h2>
          </div>

          <div className="nx-s-range">
            AUG 18 — AUG 21
          </div>

        </div>

        {/* SCHEDULE */}
        <div className="nx-s-list">

          {schedule.map((item, index) => (

            <article
              className="nx-s-item"
              key={`${item.subject}-${index}`}
            >

              {/* DATE */}
              <div className="nx-s-date">

                <span>
                  {item.day}
                </span>

                <strong>
                  {item.date}
                </strong>

                <small>
                  AUG
                </small>

              </div>

              {/* ICON */}
              <div className="nx-s-icon">
                {item.type === "LAB" ? (
                  <MapPin size={21} />
                ) : (
                  <CalendarDays size={21} />
                )}
              </div>

              {/* DETAILS */}
              <div className="nx-s-details">

                <div className="nx-s-type">
                  {item.type}
                </div>

                <h3>
                  {item.subject}
                </h3>

                <div className="nx-s-meta">

                  <span>
                    <Clock3 size={14} />
                    {item.time}
                  </span>

                  <span>
                    <MapPin size={14} />
                    {item.room}
                  </span>

                </div>

              </div>

              {/* NUMBER */}
              <div className="nx-s-number">
                {String(index + 1).padStart(2, "0")}
              </div>

            </article>

          ))}

        </div>

      </main>

    </div>
  );
}

function ScheduleStat({
  label,
  value,
  icon,
}) {
  return (
    <div className="nx-s-stat">

      <div className="nx-s-stat-icon">
        {icon}
      </div>

      <div>
        <span>{label}</span>

        <strong>
          {typeof value === "number"
            ? String(value).padStart(2, "0")
            : value}
        </strong>
      </div>

    </div>
  );
}

export default Schedule;