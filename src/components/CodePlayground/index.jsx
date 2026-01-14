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

      if (data.run?.stdout) setOutput(data.run.stdout);
      else if (data.run?.stderr) setOutput(data.run.stderr);
      else if (data.compile?.stderr) setOutput(data.compile.stderr);
      else setOutput("No output");
    } catch {
      setOutput("Execution failed");
    }

    setLoading(false);
  };

  const saveCode = () => {
    alert("Code saved successfully 💾");
  };

  const shareCode = () => {
    alert("Share link generated 🔗");
  };

  return (
    <div className="playground">
      {/* LEFT PANEL */}
      <div className="problem-panel">
        <h3>🧩 Problem</h3>
        <p>Write a program to print <b>Hello World</b>.</p>

        <h4>Input</h4>
        <p>No input required</p>

        <h4>Output</h4>
        <p>Hello World</p>

        <h4>Sample Test Case</h4>
        <pre className="testcase">
Input:
None

Output:
Hello World
        </pre>
      </div>

      {/* RIGHT PANEL */}
      <div className="editor-panel">
        {/* TOP TOOLBAR */}
        <div className="editor-toolbar">
          <select
            className="language-select"
            value={language}
            onChange={e => setLanguage(e.target.value)}
          >
            <option value="python">Python</option>
            <option value="java">Java</option>
          </select>

          <div className="toolbar-right">
            <button className="ai-btn">🤖 Ask AI</button>
            <button className="doubt-btn">❓ Ask Doubt</button>
          </div>
        </div>

        {/* EDITOR */}
        {/* EDITOR */}
<div className="editor-wrapper">
  <Editor
    height="100%"
    language={language}
    value={code}
    theme="vs-dark"
    onChange={(value) => setCode(value || "")}
    options={{
      fontSize: 14,
      minimap: { enabled: false },
      scrollBeyondLastLine: false,
      automaticLayout: true,
      quickSuggestions: true,
      tabSize: 2,
      lineNumbers: "on"
    }}
  />

  {/* INSIDE-EDITOR ACTION BAR */}
  <div className="editor-overlay-actions">
    <button className="save-btn" onClick={saveCode}>💾 Save</button>
    <button className="share-btn" onClick={shareCode}>🔗 Share</button>
    <button className="run-btn" onClick={runCode} disabled={loading}>▶ Run</button>
  </div>
</div>


        {/* OUTPUT */}
        <div className="output-box">
          <strong>Output</strong>
          <pre>{output}</pre>
        </div>
      </div>
    </div>
  );
};

export default CodePlayground;
