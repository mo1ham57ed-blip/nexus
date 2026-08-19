import {
  Bell,
  BookOpen,
  BrainCircuit,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  GraduationCap,
  LayoutDashboard,
  Menu,
  MessageCircle,
  Search,
  Sparkles,
  Target,
  UserRound,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";
import "./dashboard.css";
function Dashboard({ onNavigate, backendStatus }) {
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = (page) => {
    if (onNavigate) {
      onNavigate(page);
    }
    setMobileMenu(false);
  };
  const navigation = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      id: "ai-study",
      label: "AI Study",
      icon: BrainCircuit,
    },
    {
      id: "courses",
      label: "Courses",
      icon: BookOpen,
    },
    {
      id: "assignments",
      label: "Assignments",
      icon: ClipboardList,
    },
    {
      id: "schedule",
      label: "Schedule",
      icon: CalendarDays,
    },
    {
      id: "notifications",
      label: "Notifications",
      icon: Bell,
    },
  ];
  return (
    <div className="nexus-dashboard">
      {/* MOBILE TOP BAR */}
      <div className="mobile-topbar">
        <button
          className="mobile-menu-button"
          onClick={() => setMobileMenu(true)}
          type="button"
        >
          <Menu size={22} />
        </button>
        <div className="mobile-logo">
          <span>N</span>
          NEXUS
        </div>
        <button
          className="mobile-profile-button"
          onClick={() => navigate("profile")}
          type="button"
        >
          <UserRound size={19} />
        </button>
      </div>
      {/* SIDEBAR */}
      <aside
        className={`nexus-sidebar ${
          mobileMenu ? "sidebar-open" : ""
        }`}
      >
        <div className="sidebar-top">
          <div className="nexus-brand">
            <div className="brand-symbol">
              N
            </div>
            <div>
              <strong>NEXUS</strong>
              <span>INTELLIGENT CAMPUS</span>
            </div>
          </div>
          <button
            className="sidebar-close"
            onClick={() => setMobileMenu(false)}
            type="button"
          >
            <X size={20} />
          </button>
        </div>
        <div className="sidebar-section-label">
          WORKSPACE
        </div>
        <nav className="sidebar-navigation">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                type="button"
                className={`sidebar-link ${
                  item.id === "dashboard"
                    ? "active"
                    : ""
                }`}
                onClick={() => navigate(item.id)}
              >
                <Icon size={18} />
                <span>
                  {item.label}
                </span>
                {item.id === "notifications" && (
                  <small>3</small>
                )}
              </button>
            );
          })}
        </nav>
        <div className="sidebar-bottom">
          <div className="sidebar-ai-card">
            <div className="sidebar-ai-icon">
              <Sparkles size={18} />
            </div>
            <div>
              <strong>NEXUS AI</strong>
              <span>Your intelligent study assistant.</span>
            </div>
            <button
              type="button"
              onClick={() => navigate("ai-study")}
            >
              Open AI
              <ChevronRight size={14} />
            </button>
          </div>
          <div className="sidebar-status">
            <span className="status-dot" />
            <div>
              <strong>
                SYSTEM ONLINE
              </strong>
              <small>
                {backendStatus === "connected"
                  ? "Backend connected"
                  : "Local mode active"}
              </small>
            </div>
          </div>
        </div>
      </aside>
      {mobileMenu && (
        <div
          className="sidebar-overlay"
          onClick={() => setMobileMenu(false)}
        />
      )}
      {/* MAIN */}
      <main className="dashboard-main">
        {/* TOP NAV */}
        <header className="dashboard-header">
          <div className="header-left">
            <span className="header-badge">
              <span />
              NEXUS / STUDENT
            </span>
            <span className="header-divider">
              /
            </span>
            <span className="header-page">
              Dashboard
            </span>
          </div>
          <div className="header-actions">
            <button
              className="header-icon-button"
              type="button"
              onClick={() => navigate("notifications")}
              aria-label="Notifications"
            >
              <Bell size={19} />
              <span className="notification-dot">
                3
              </span>
            </button>
            <button
              className="header-profile"
              type="button"
              onClick={() => navigate("profile")}
            >
              <div className="header-avatar">
                M
              </div>
              <div className="header-profile-info">
                <strong>
                  MOHAMED HASSAN
                </strong>
                <span>
                  Information Systems
                </span>
              </div>
              <ChevronRight size={16} />
            </button>
          </div>
        </header>
        {/* CONTENT */}
        <div className="dashboard-content">
          {/* HERO */}
          <section className="nexus-hero">
            <div className="hero-grid" />
            <div className="hero-glow hero-glow-one" />
            <div className="hero-glow hero-glow-two" />
            <div className="hero-content">
              <div className="hero-eyebrow">
                <Sparkles size={15} />
                NEXUS INTELLIGENCE
              </div>
              <h1>
                Your campus.
                <br />
                <span>Smarter than ever.</span>
              </h1>
              <p>
                Manage your studies, assignments, schedule
                and AI-powered learning assistant from one
                intelligent workspace.
              </p>
              <div className="hero-actions">
                <button
                  type="button"
                  className="primary-action"
                  onClick={() => navigate("ai-study")}
                >
                  <BrainCircuit size={18} />
                  Ask NEXUS AI
                  <ChevronRight size={16} />
                </button>
                <button
                  type="button"
                  className="secondary-action"
                  onClick={() => navigate("courses")}
                >
                  Explore Courses
                </button>
              </div>
              <div className="hero-meta">
                <div>
                  <CheckCircle2 size={15} />
                  Personalized learning
                </div>
                <div>
                  <Zap size={15} />
                  AI powered
                </div>
                <div>
                  <Target size={15} />
                  Goal focused
                </div>
              </div>
            </div>
            {/* AI ORB */}
            <div className="hero-orb-area">
              <div className="orb-ring orb-ring-one" />
              <div className="orb-ring orb-ring-two" />
              <div className="orb-ring orb-ring-three" />
              <div className="ai-orb">
                <div className="orb-core">
                  <BrainCircuit size={62} />
                </div>
                <div className="orb-pulse" />
              </div>
              <div className="orb-label">
                <span />
                AI READY
              </div>
            </div>
          </section>
          {/* STATS */}
          <section className="stats-grid">
            <article className="stat-card">
              <div className="stat-card-top">
                <div className="stat-icon">
                  <BookOpen size={19} />
                </div>
                <span>
                  COURSES
                </span>
              </div>
              <strong>
                03
              </strong>
              <p>
                Active courses
              </p>
              <div className="stat-line">
                <span style={{ width: "72%" }} />
              </div>
            </article>
            <article className="stat-card">
              <div className="stat-card-top">
                <div className="stat-icon">
                  <ClipboardList size={19} />
                </div>
                <span>
                  ASSIGNMENTS
                </span>
              </div>
              <strong>
                03
              </strong>
              <p>
                Pending tasks
              </p>
              <div className="stat-line">
                <span style={{ width: "48%" }} />
              </div>
            </article>
            <article className="stat-card">
              <div className="stat-card-top">
                <div className="stat-icon">
                  <Target size={19} />
                </div>
                <span>
                  PROGRESS
                </span>
              </div>
              <strong>
                72%
              </strong>
              <p>
                Semester progress
              </p>
              <div className="stat-line">
                <span style={{ width: "72%" }} />
              </div>
            </article>
            <article className="stat-card">
              <div className="stat-card-top">
                <div className="stat-icon">
                  <GraduationCap size={19} />
                </div>
                <span>
                  GPA
                </span>
              </div>
              <strong>
                3.7
              </strong>
              <p>
                Current GPA
              </p>
              <div className="stat-line">
                <span style={{ width: "92%" }} />
              </div>
            </article>
          </section>
          {/* LOWER GRID */}
          <section className="dashboard-lower-grid">
            {/* AI STUDY CARD */}
            <article className="study-card">
              <div className="card-heading">
                <div>
                  <span className="card-label">
                    AI STUDY CENTER
                  </span>
                  <h2>
                    Learn smarter.
                  </h2>
                  <p>
                    Let NEXUS build a personalized
                    study path around your goals.
                  </p>
                </div>
                <div className="mini-ai-icon">
                  <BrainCircuit size={22} />
                </div>
              </div>
              <div className="study-features">
                <div>
                  <CheckCircle2 size={16} />
                  Smart study plans
                </div>
                <div>
                  <CheckCircle2 size={16} />
                  Course assistance
                </div>
                <div>
                  <CheckCircle2 size={16} />
                  Instant explanations
                </div>
              </div>
              <button
                type="button"
                className="study-button"
                onClick={() => navigate("ai-study")}
              >
                Start AI Study
                <ChevronRight size={17} />
              </button>
            </article>
            {/* QUICK ACCESS */}
            <article className="quick-card">
              <div className="card-heading compact">
                <div>
                  <span className="card-label">
                    QUICK ACCESS
                  </span>
                  <h2>
                    Your workspace
                  </h2>
                </div>
                <Search size={19} />
              </div>
              <div className="quick-list">
                <button
                  type="button"
                  onClick={() => navigate("courses")}
                >
                  <span>
                    <BookOpen size={17} />
                  </span>
                  <div>
                    <strong>
                      Courses
                    </strong>
                    <small>
                      View active courses
                    </small>
                  </div>
                  <ChevronRight size={16} />
                </button>
                <button
                  type="button"
                  onClick={() => navigate("assignments")}
                >
                  <span>
                    <ClipboardList size={17} />
                  </span>
                  <div>
                    <strong>
                      Assignments
                    </strong>
                    <small>
                      3 pending tasks
                    </small>
                  </div>
                  <ChevronRight size={16} />
                </button>
                <button
                  type="button"
                  onClick={() => navigate("schedule")}
                >
                  <span>
                    <CalendarDays size={17} />
                  </span>
                  <div>
                    <strong>
                      Schedule
                    </strong>
                    <small>
                      Check your timetable
                    </small>
                  </div>
                  <ChevronRight size={16} />
                </button>
                <button
                  type="button"
                  onClick={() => navigate("notifications")}
                >
                  <span>
                    <MessageCircle size={17} />
                  </span>
                  <div>
                    <strong>
                      Notifications
                    </strong>
                    <small>
                      3 new updates
                    </small>
                  </div>
                  <ChevronRight size={16} />
                </button>
              </div>
            </article>
          </section>
          {/* FOOTER */}
          <footer className="dashboard-footer">
            <div>
              <strong>
                NEXUS
              </strong>
              <span>
                Intelligent Student Platform
              </span>
            </div>
            <span>
              Built for smarter learning.
            </span>
          </footer>
        </div>
      </main>
    </div>
  );
}
export default Dashboard;