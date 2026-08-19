import { useEffect, useState } from "react";
import {
  ArrowLeft,
  Bell,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  GraduationCap,
  Mail,
  Save,
  Settings,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import "./Profile.css";
import { getStudentProfile } from "./api";

function Profile({ onBack }) {
  const defaultProfile = {
    name: "Mohamed Hassan",
    email: "student@nexus.edu",
    program: "Information Systems",
    year: "Second Year",
  };

  const getSavedProfile = () => {
    try {
      const saved = localStorage.getItem("nexusProfile");

      if (saved) {
        return JSON.parse(saved);
      }
    } catch (error) {
      console.error("Profile loading error:", error);
    }

    return defaultProfile;
  };

  const [profile, setProfile] = useState(getSavedProfile);
  const [editing, setEditing] = useState(false);
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(true);
  const [backendConnected, setBackendConnected] = useState(false);

  useEffect(() => {
    getStudentProfile().then((data) => {
      if (data) {
        setProfile((previous) => ({
          ...previous,
          name: data.name,
          email: data.email,
          program: data.program,
          year: data.year,
        }));

        setBackendConnected(true);
      }

      setLoading(false);
    });
  }, []);

  const handleChange = (field, value) => {
    setProfile((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const handleSave = () => {
    try {
      localStorage.setItem(
        "nexusProfile",
        JSON.stringify(profile)
      );

      setEditing(false);
      setSaved(true);

      setTimeout(() => {
        setSaved(false);
      }, 2500);
    } catch (error) {
      console.error("Profile save error:", error);
    }
  };

  const handleCancel = () => {
    setProfile(getSavedProfile());
    setEditing(false);
  };

  return (
    <div className="profile-page">

      {/* HEADER */}

      <header className="profile-header">

        <button
          type="button"
          className="back-button"
          onClick={onBack}
        >
          <ArrowLeft size={18} />
          Back to Dashboard
        </button>

        <div className="logo">
          <span>N</span>
          NEXUS
        </div>

      </header>

      {/* HERO */}

      <section className="profile-hero">

        <div className="profile-avatar-large">
          <UserRound size={48} />
        </div>

        <div className="profile-hero-info">

          <span className="profile-label">
            NEXUS STUDENT ACCOUNT
          </span>

          <h1>
            {loading ? "Loading..." : profile.name}
          </h1>

          <p>
            {profile.program} Student
          </p>

          <div className="profile-status">
            <span />
            {backendConnected
              ? "BACKEND CONNECTED"
              : "ACTIVE STUDENT"}
          </div>

        </div>

      </section>

      {/* CONTENT */}

      <main className="profile-container">

        {/* ACCOUNT */}

        <section className="profile-section">

          <div className="profile-section-heading">

            <div>
              <span className="section-label">
                ACCOUNT
              </span>

              <h2>
                Student Overview
              </h2>
            </div>

            {!editing && (
              <button
                type="button"
                className="profile-edit-button"
                onClick={() => setEditing(true)}
              >
                <Settings size={17} />
                Edit Profile
              </button>
            )}

          </div>

          {/* EDIT FORM */}

          {editing ? (

            <div className="profile-edit-form">

              <div className="profile-field">
                <label>
                  Full Name
                </label>

                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) =>
                    handleChange(
                      "name",
                      e.target.value
                    )
                  }
                />
              </div>

              <div className="profile-field">
                <label>
                  Email
                </label>

                <input
                  type="email"
                  value={profile.email}
                  onChange={(e) =>
                    handleChange(
                      "email",
                      e.target.value
                    )
                  }
                />
              </div>

              <div className="profile-field">
                <label>
                  Program
                </label>

                <input
                  type="text"
                  value={profile.program}
                  onChange={(e) =>
                    handleChange(
                      "program",
                      e.target.value
                    )
                  }
                />
              </div>

              <div className="profile-field">
                <label>
                  Academic Year
                </label>

                <input
                  type="text"
                  value={profile.year}
                  onChange={(e) =>
                    handleChange(
                      "year",
                      e.target.value
                    )
                  }
                />
              </div>

              <div className="profile-form-actions">

                <button
                  type="button"
                  className="profile-cancel-button"
                  onClick={handleCancel}
                >
                  Cancel
                </button>

                <button
                  type="button"
                  className="profile-save-button"
                  onClick={handleSave}
                >
                  <Save size={17} />
                  Save Changes
                </button>

              </div>

            </div>

          ) : (

            <div className="profile-info-grid">

              <div className="profile-info-card">

                <div className="profile-info-icon">
                  <UserRound size={20} />
                </div>

                <span>
                  FULL NAME
                </span>

                <strong>
                  {profile.name}
                </strong>

              </div>

              <div className="profile-info-card">

                <div className="profile-info-icon">
                  <Mail size={20} />
                </div>

                <span>
                  EMAIL
                </span>

                <strong>
                  {profile.email}
                </strong>

              </div>

              <div className="profile-info-card">

                <div className="profile-info-icon">
                  <GraduationCap size={20} />
                </div>

                <span>
                  PROGRAM
                </span>

                <strong>
                  {profile.program}
                </strong>

              </div>

              <div className="profile-info-card">

                <div className="profile-info-icon">
                  <BookOpen size={20} />
                </div>

                <span>
                  YEAR
                </span>

                <strong>
                  {profile.year}
                </strong>

              </div>

            </div>

          )}

        </section>

        {/* SUCCESS MESSAGE */}

        {saved && (

          <div className="profile-success">

            <CheckCircle2 size={21} />

            <div>

              <strong>
                Profile updated
              </strong>

              <span>
                Your student information has been saved successfully.
              </span>

            </div>

          </div>

        )}

        {/* ACADEMICS */}

        <section className="profile-section">

          <div className="profile-section-heading">

            <div>

              <span className="section-label">
                ACADEMICS
              </span>

              <h2>
                Academic Performance
              </h2>

            </div>

          </div>

          <div className="academic-stats">

            <div className="academic-stat">

              <span>
                CURRENT GPA
              </span>

              <strong>
                3.7
              </strong>

              <small>
                Excellent standing
              </small>

            </div>

            <div className="academic-stat">

              <span>
                COURSE PROGRESS
              </span>

              <strong>
                72%
              </strong>

              <small>
                Semester progress
              </small>

            </div>

            <div className="academic-stat">

              <span>
                COMPLETED
              </span>

              <strong>
                18
              </strong>

              <small>
                Academic tasks
              </small>

            </div>

          </div>

        </section>

        {/* SETTINGS */}

        <section className="profile-section">

          <div className="profile-section-heading">

            <div>

              <span className="section-label">
                ACCOUNT SETTINGS
              </span>

              <h2>
                Preferences
              </h2>

            </div>

          </div>

          <div className="profile-settings">

            <button
              type="button"
              className="profile-setting"
              onClick={() => setEditing(true)}
            >

              <div className="setting-icon">
                <Settings size={20} />
              </div>

              <div>

                <strong>
                  Account Settings
                </strong>

                <span>
                  Manage your account information
                </span>

              </div>

              <ChevronRight size={18} />

            </button>

            <button
              type="button"
              className="profile-setting"
            >

              <div className="setting-icon">
                <Bell size={20} />
              </div>

              <div>

                <strong>
                  Notifications
                </strong>

                <span>
                  Manage academic notifications
                </span>

              </div>

              <ChevronRight size={18} />

            </button>

            <button
              type="button"
              className="profile-setting"
            >

              <div className="setting-icon">
                <ShieldCheck size={20} />
              </div>

              <div>

                <strong>
                  Privacy & Security
                </strong>

                <span>
                  Keep your student account secure
                </span>

              </div>

              <ChevronRight size={18} />

            </button>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Profile;