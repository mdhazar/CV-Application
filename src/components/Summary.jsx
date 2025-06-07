import { useState } from "react";

export default function Summary({ onSubmit }) {
  const [summaries, setSummaries] = useState([""]);
  const [showForm, setShowForm] = useState(false);

  const handleInputChange = (index, value) => {
    const updatedSummaries = [...summaries];
    updatedSummaries[index] = value;
    setSummaries(updatedSummaries);
  };

  const addSummary = () => setSummaries([...summaries, ""]);
  const removeSummary = (index) =>
    setSummaries(summaries.filter((_, i) => i !== index));
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ summary: summaries });
  };
  const handleReset = () => setSummaries([""]);

  return (
    <div>
      <h1 onClick={() => setShowForm(!showForm)} style={{ cursor: "pointer" }}>
        Summary {showForm ? "▼" : "▶"}
      </h1>
      {showForm && (
        <div className="general-info">
          {summaries.map((summary, index) => (
            <div
              key={index}
              style={{ display: "flex", gap: "10px", marginBottom: "10px" }}
            >
              <textarea
                value={summary}
                onChange={(e) => handleInputChange(index, e.target.value)}
                placeholder={`Summary ${index + 1}`}
                rows={4}
              />
              <div
                style={{ display: "flex", flexDirection: "column", gap: "5px" }}
              >
                <button
                  onClick={() => removeSummary(index)}
                  style={{ backgroundColor: "#ff4757", color: "white" }}
                >
                  ✕
                </button>
                <button onClick={addSummary}>＋</button>
              </div>
            </div>
          ))}
          <div style={{ display: "flex", gap: "10px" }}>
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={handleReset}>Reset</button>
          </div>
        </div>
      )}
    </div>
  );
}
