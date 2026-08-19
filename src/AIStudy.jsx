import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  BrainCircuit,
  CheckCircle2,
  ChevronDown,
  Clock3,
  FileQuestion,
  Lightbulb,
  MessageCircle,
  Send,
  Sparkles,
  WandSparkles,
} from "lucide-react";
import "./AISTudy.css";
function AIStudy({ onBack }) {
  const [selectedCourse, setSelectedCourse] = useState("Database Systems");
  const [message, setMessage] = useState("");
  const [activeTool, setActiveTool] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "ai",
      text:
        "Hi Mohamed 👋 I'm NEXUS AI. I can help you understand lessons, summarize topics, create practice questions and build a study plan.",
    },
  ]);
  const courses = [
    "Database Systems",
    "Web Development",
    "System Analysis",
  ];
  const suggestions = useMemo(
    () => [
      "Explain this course to me",
      "What should I study first?",
      "Give me 5 quiz questions",
      "Summarize the important topics",
    ],
    []
  );
  const generateResponse = (text) => {
    const lowerText = text.toLowerCase();
    if (
      lowerText.includes("quiz") ||
      lowerText.includes("question")
    ) {
      return `Here is a quick ${selectedCourse} practice quiz:
1. What is the purpose of a primary key?
2. What is the difference between a table and a database?
3. What does normalization help prevent?
4. What is a foreign key?
5. Why are relationships important in a database?
Try answering them without looking at your notes.`;
    }
    if (
      lowerText.includes("summar") ||
      lowerText.includes("important")
    ) {
      return `Here is a focused summary for ${selectedCourse}:
• Understand the main concepts before memorizing details.
• Review the terminology and key definitions.
• Practice with examples.
• Test yourself using questions.
• Review mistakes before moving to the next topic.
For Database Systems, focus especially on relational models, keys, relationships, normalization and SQL.`;
    }
    if (
      lowerText.includes("plan") ||
      lowerText.includes("study")
    ) {
      return `Recommended study plan for ${selectedCourse}:
Day 1 — Review the core concepts.
Day 2 — Study the main terminology.
Day 3 — Practice examples.
Day 4 — Solve questions.
Day 5 — Review your mistakes.
Day 6 — Take a practice quiz.
Day 7 — Final revision.
Keep each session focused and take short breaks between study blocks.`;
    }
    if (
      lowerText.includes("normalization") ||
      lowerText.includes("database")
    ) {
      return `Normalization is a way of organizing database tables to reduce duplicated data and improve consistency.
Think of it like organizing your university information into separate, connected tables instead of putting everything into one huge table.
Common levels include 1NF, 2NF and 3NF.
The main idea: store information in a clean structure and connect related data using keys.`;
    }
    if (
      lowerText.includes("web") ||
      lowerText.includes("react")
    ) {
      return `For Web Development, focus on these areas:
1. HTML — page structure.
2. CSS — design and layout.
3. JavaScript — behavior and logic.
4. React — reusable UI components.
5. State — managing changing data.
6. APIs — connecting your application to external data.
The best way to learn is to build small features instead of only watching tutorials.`;
    }
    return `Good question! 🤖
For ${selectedCourse}, I recommend breaking the topic into smaller concepts, understanding the idea first, then practicing it with examples.
You can ask me to:
• Explain a concept
• Generate a quiz
• Summarize a lesson
• Create a study plan
Try one of the suggestions below.`;
  };
  const sendMessage = (customMessage) => {
    const finalMessage = customMessage ?? message;
    if (!finalMessage.trim() || isTyping) {
      return;
    }
    const userMessage = {
      id: Date.now(),
      type: "user",
      text: finalMessage.trim(),
    };
    setMessages((previous) => [...previous, userMessage]);
    setMessage("");
    setIsTyping(true);
    setTimeout(() => {
      const response = {
        id: Date.now() + 1,
        type: "ai",
        text: generateResponse(finalMessage.trim()),
      };
      setMessages((previous) => [...previous, response]);
      setIsTyping(false);
    }, 700);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };
  const handleTool = (tool) => {
    setActiveTool(tool);
    const toolMessages = {
      explain:
        "Explain the main concepts in this course in a simple way.",
      quiz: "Create 5 practice questions for me.",
      summary: "Summarize the most important topics.",
      plan: "Create a study plan for this course.",
    };
    sendMessage(toolMessages[tool]);
  };
  const quickTools = [
    {
      id: "explain",
      icon: <Lightbulb size={21} />,
      title: "Explain Concept",
      description: "Make difficult topics simple",
    },
    {
      id: "quiz",
      icon: <FileQuestion size={21} />,
      title: "Generate Quiz",
      description: "Practice with smart questions",
    },
    {
      id: "summary",
      icon: <BookOpen size={21} />,
      title: "Summarize",
      description: "Get the important points",
    },
    {
      id: "plan",
      icon: <Clock3 size={21} />,
      title: "Study Plan",
      description: "Build a focused plan",
    },
  ];
  return (
    <div className="ai-study-page">
      <div className="ai-study-background">
        <div className="ai-grid" />
        <div className="ai-glow ai-glow-one" />
        <div className="ai-glow ai-glow-two" />
        <div className="ai-glow ai-glow-three" />
      </div>
      <header className="ai-study-header">
        <button
          type="button"
          className="ai-back-button"
          onClick={onBack}
        >
          <ArrowLeft size={17} />
          <span>Dashboard</span>
        </button>
        <div className="ai-logo">
          <span className="ai-logo-box">N</span>
          <div>
            <strong>NEXUS</strong>
            <small>INTELLIGENCE</small>
          </div>
        </div>
        <div className="ai-status">
          <span className="ai-status-dot" />
          <span>AI ONLINE</span>
        </div>
      </header>
      <main className="ai-study-container">
        <section className="ai-study-hero">
          <div className="ai-hero-content">
            <div className="ai-study-label">
              <Sparkles size={14} />
              NEXUS INTELLIGENCE
            </div>
            <h1>
              Study
              <br />
              <span>smarter.</span>
            </h1>
            <p>
              Your intelligent academic assistant for learning,
              revision, quizzes and exam preparation.
            </p>
            <div className="ai-hero-meta">
              <span>
                <CheckCircle2 size={13} />
                Personalized learning
              </span>
              <span>
                <BrainCircuit size={13} />
                AI powered
              </span>
            </div>
          </div>
          <div className="ai-hero-visual">
            <div className="ai-orbit orbit-one" />
            <div className="ai-orbit orbit-two" />
            <div className="ai-hero-icon">
              <div className="ai-hero-icon-glow" />
              <BrainCircuit size={72} strokeWidth={1.5} />
            </div>
            <div className="ai-hero-orbit-dot" />
            <div className="ai-visual-caption">
              <span />
              NEXUS AI CORE
            </div>
          </div>
        </section>
        <section className="ai-course-selector">
          <div className="ai-course-selector-left">
            <div className="course-icon">
              <BookOpen size={18} />
            </div>
            <div>
              <span>CURRENT COURSE</span>
              <strong>{selectedCourse}</strong>
            </div>
          </div>
          <div className="ai-course-select-wrapper">
            <select
              value={selectedCourse}
              onChange={(event) =>
                setSelectedCourse(event.target.value)
              }
              aria-label="Select course"
            >
              {courses.map((course) => (
                <option key={course} value={course}>
                  {course}
                </option>
              ))}
            </select>
            <ChevronDown size={16} />
          </div>
        </section>
        <section className="ai-tools">
          <div className="ai-section-heading">
            <div>
              <span>QUICK ACTIONS</span>
              <h2>What can I help you with?</h2>
            </div>
            <div className="ai-heading-badge">
              <Sparkles size={13} />
              SMART TOOLS
            </div>
          </div>
          <div className="ai-tools-grid">
            {quickTools.map((tool) => (
              <button
                type="button"
                key={tool.id}
                className={
                  activeTool === tool.id
                    ? "ai-tool active"
                    : "ai-tool"
                }
                onClick={() => handleTool(tool.id)}
              >
                <div className="ai-tool-icon">
                  {tool.icon}
                </div>
                <div className="ai-tool-content">
                  <strong>{tool.title}</strong>
                  <span>{tool.description}</span>
                </div>
                <div className="ai-tool-arrow">
                  <ArrowUpRight size={17} />
                </div>
              </button>
            ))}
          </div>
        </section>
        <section className="ai-chat-section">
          <div className="ai-chat-header">
            <div className="ai-chat-title">
              <div className="ai-chat-avatar">
                <BrainCircuit size={21} />
                <span />
              </div>
              <div>
                <strong>NEXUS AI</strong>
                <span>Your academic assistant</span>
              </div>
            </div>
            <div className="ai-chat-online">
              <CheckCircle2 size={14} />
              Ready
            </div>
          </div>
          <div className="ai-chat-divider" />
          <div className="ai-messages">
            {messages.map((item) => (
              <div
                key={item.id}
                className={
                  item.type === "user"
                    ? "ai-message user-message"
                    : "ai-message"
                }
              >
                {item.type === "ai" && (
                  <div className="message-avatar">
                    <BrainCircuit size={16} />
                  </div>
                )}
                <div className="message-content">
                  {item.type === "ai" && (
                    <span className="message-name">
                      NEXUS AI
                    </span>
                  )}
                  <div className="message-bubble">
                    {item.text}
                  </div>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="ai-message">
                <div className="message-avatar">
                  <BrainCircuit size={16} />
                </div>
                <div className="message-content">
                  <span className="message-name">
                    NEXUS AI
                  </span>
                  <div className="typing-bubble">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="ai-suggestions">
            {suggestions.map((suggestion) => (
              <button
                type="button"
                key={suggestion}
                onClick={() => sendMessage(suggestion)}
              >
                {suggestion}
              </button>
            ))}
          </div>
          <div className="ai-input-area">
            <div className="ai-input-wrapper">
              <MessageCircle size={18} />
              <textarea
                value={message}
                onChange={(event) =>
                  setMessage(event.target.value)
                }
                onKeyDown={handleKeyDown}
                placeholder="Ask NEXUS AI anything about your studies..."
                rows={1}
              />
              <button
                type="button"
                className="ai-send-button"
                onClick={() => sendMessage()}
                disabled={!message.trim() || isTyping}
                aria-label="Send message"
              >
                <Send size={17} />
              </button>
            </div>
            <span className="ai-input-hint">
              Enter to send · Shift + Enter for new line
            </span>
          </div>
        </section>
        <section className="ai-study-tip">
          <div className="ai-tip-icon">
            <WandSparkles size={20} />
          </div>
          <div className="ai-tip-content">
            <span>SMART STUDY TIP</span>
            <p>
              Don't just read your notes. Ask yourself questions
              and explain the concept in your own words.
            </p>
          </div>
          <div className="ai-tip-status">
            <CheckCircle2 size={15} />
            Active learning
          </div>
        </section>
        <footer className="ai-study-footer">
          <span>
            <strong>NEXUS</strong> STUDENT INTELLIGENCE
          </span>
          <span>
            AI ASSISTANT · ACADEMIC MODE
          </span>
        </footer>
      </main>
    </div>
  );
}
export default AIStudy;