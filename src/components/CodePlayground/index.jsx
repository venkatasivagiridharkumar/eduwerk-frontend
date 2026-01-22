import { useState } from "react";
import Editor from "@monaco-editor/react";
import "./index.css";

const CodePlayground = () => {
  const [language, setLanguage] = useState("python");
  const [code, setCode] = useState(`print("Hello World")`);
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const runCode = async () => {
    if (!code.trim()) {
      setOutput("⚠️ Write some code first");
      return;
    }

    setLoading(true);
    setOutput("Running...");

    try {
      const res = await fetch("http://localhost:5000/run", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ language, code })
      });

      const data = await res.json();
      setOutput(
        data.run?.stdout ||
        data.run?.stderr ||
        data.compile?.stderr ||
        "No output"
      );
    } catch {
      setOutput("Execution failed");
    }

    setLoading(false);
  };

  return (
    <div className="playground-root">

      {/* LEFT — PROBLEM */}
      <aside className="problem-panel">
        <h3>Problem</h3>

        <p className="problem-desc">
          Write a program to print <b>Hello World</b>.
        </p>

        <div className="problem-block">
          <h4>Input</h4>
          <p>No input required</p>
        </div>

        <div className="problem-block">
          <h4>Output</h4>
          <p>Hello World</p>
        </div>

        <div className="problem-block">
          <h4>Sample</h4>
          <pre>
Hello World
          </pre>
        </div>
      </aside>

      {/* RIGHT — EDITOR */}
      <section className="editor-panel">

        {/* TOP BAR */}
        <div className="editor-topbar">
          <select
            value={language}
            onChange={e => setLanguage(e.target.value)}
          >
            <option value="python">Python</option>
            <option value="java">Java</option>
          </select>

          <div className="top-actions">
            <button className="ghost-btn">Ask AI</button>
            <button className="ghost-btn">Ask Doubt</button>
          </div>
        </div>

        {/* EDITOR */}
        <div className="editor-wrapper">
          <Editor
            height="100%"
            language={language}
            value={code}
            theme="vs-dark"
            onChange={v => setCode(v || "")}
            options={{
              fontSize: 14,
              minimap: { enabled: false },
              scrollBeyondLastLine: false,
              automaticLayout: true
            }}
          />

          <div className="editor-actions">
            <button className="soft-btn">Save</button>
            <button className="soft-btn">Share</button>
            <button
              className="primary-btn"
              onClick={runCode}
              disabled={loading}
            >
              Run
            </button>
          </div>
        </div>

        {/* OUTPUT */}
        <div className="output-box">
          <span>Output</span>
          <pre>{output}</pre>
        </div>
      </section>
    </div>
  );
};

export default CodePlayground;
