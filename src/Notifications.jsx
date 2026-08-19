import {
  ArrowLeft,
  Bell,
  CheckCircle2,
  Clock3,
  FileText,
  Sparkles,
  CalendarDays,
  AlertCircle,
} from "lucide-react";

import "./Notifications.css";

function Notifications({ onBack }) {
  const notifications = [
    {
      id: 1,
      type: "assignment",
      icon: FileText,
      title: "New Assignment",
      message:
        "Database Project has been added to your upcoming assignments.",
      time: "10 minutes ago",
      unread: true,
    },
    {
      id: 2,
      type: "deadline",
      icon: Clock3,
      title: "Assignment Deadline",
      message:
        "React Landing Page is due Friday at 11:59 PM.",
      time: "1 hour ago",
      unread: true,
    },
    {
      id: 3,
      type: "course",
      icon: CalendarDays,
      title: "Schedule Update",
      message:
        "Your Web Development class schedule has been updated.",
      time: "3 hours ago",
      unread: true,
    },
    {
      id: 4,
      type: "success",
      icon: CheckCircle2,
      title: "Assignment Completed",
      message:
        "Your previous academic task was successfully marked as completed.",
      time: "Yesterday",
      unread: false,
    },
    {
      id: 5,
      type: "ai",
      icon: Sparkles,
      title: "NEXUS AI Suggestion",
      message:
        "Your AI Study Assistant has a new study recommendation for you.",
      time: "Yesterday",
      unread: false,
    },
    {
      id: 6,
      type: "alert",
      icon: AlertCircle,
      title: "Academic Reminder",
      message:
        "You have upcoming academic deadlines this week.",
      time: "2 days ago",
      unread: false,
    },
  ];

  const unreadCount = notifications.filter(
    (item) => item.unread
  ).length;

  return (
    <div className="notifications-page">
      {/* HEADER */}
      <header className="notifications-header">
        <button
          type="button"
          className="notifications-back"
          onClick={onBack}
        >
          <ArrowLeft size={18} />
          Back to Dashboard
        </button>

        <div className="notifications-logo">
          <span>N</span>
          NEXUS
        </div>

        <div className="notifications-header-icon">
          <Bell size={19} />

          {unreadCount > 0 && (
            <span>{unreadCount}</span>
          )}
        </div>
      </header>

      {/* HERO */}
      <section className="notifications-hero">
        <div className="notifications-hero-label">
          <Bell size={15} />
          NEXUS NOTIFICATIONS
        </div>

        <h1>
          Stay
          <br />
          <span>informed.</span>
        </h1>

        <p>
          Keep track of assignments, deadlines,
          academic updates and important
          notifications from your campus.
        </p>
      </section>

      {/* CONTENT */}
      <main className="notifications-container">
        <div className="notifications-title-row">
          <div>
            <span className="notifications-section-label">
              STUDENT CENTER
            </span>

            <h2>
              Recent Notifications
            </h2>
          </div>

          <div className="notifications-count">
            <Bell size={14} />
            {unreadCount} unread
          </div>
        </div>

        {/* NOTIFICATIONS LIST */}
        <div className="notifications-list">
          {notifications.map((notification) => {
            const Icon = notification.icon;

            return (
              <article
                key={notification.id}
                className={`notification-card ${
                  notification.unread
                    ? "unread"
                    : ""
                }`}
              >
                <div className="notification-icon">
                  <Icon size={21} />
                </div>

                <div className="notification-content">
                  <div className="notification-top">
                    <h3>
                      {notification.title}
                    </h3>

                    {notification.unread && (
                      <span className="notification-new">
                        NEW
                      </span>
                    )}
                  </div>

                  <p>
                    {notification.message}
                  </p>

                  <div className="notification-time">
                    <Clock3 size={13} />
                    {notification.time}
                  </div>
                </div>

                <button
                  type="button"
                  className="notification-action"
                  aria-label="Open notification"
                >
                  →
                </button>
              </article>
            );
          })}
        </div>

        {/* INFO */}
        <section className="notifications-info">
          <div className="notifications-info-icon">
            <Sparkles size={23} />
          </div>

          <div>
            <span>
              NEXUS INTELLIGENCE
            </span>

            <h2>
              Your academic assistant is watching.
            </h2>

            <p>
              NEXUS keeps you updated about
              important academic activities,
              assignments and upcoming deadlines.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Notifications;