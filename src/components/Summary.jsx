import { useState} from "react";

export default function Summary({ onSubmit }) {
  const [summary, setSummary] = useState([""]);
  const [showForm, setShowForm] = useState(false);

  const handleInputChange = (index, value) => {
    const updatedSummary = [...summary];
    updatedSummary[index] = value;
    setSummary(updatedSummary);
  };

  const addSummary = () => {
    setSummary([...summary, ""]);
  };

  const removeSummary = (index) => {
    const updatedSummary = summary.filter((_, i) => i !== index);
    setSummary(updatedSummary);
  };

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit({ summary });
  }

  const handleReset = () => {
    setSummary([""]);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  

  return (
    <div>
      <div>
        <h1 onClick={toggleForm} style={{ cursor: "pointer" }}>
          Summary
        </h1>
      </div>
      {showForm && (
        <div className="general-info">
          <div>
            {summary.map((summary, index) => (
              <div key={index} >
                <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <textarea
                    rows={4}
                    cols={40}
                    type="text"
                    value={summary}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    placeholder={`Enter summary ${index + 1}`}
                  />
                    <button 
                      type="button"
                      onClick={() => removeSummary(index)}
                      style={{ 
                        backgroundColor: "#ff4757", 
                        color:"white",
                        fontSize:"1rem"
                      }}
                    >
                      -
                    </button>
                    <button 
                      type="button"
                      onClick={addSummary}
                    >
                      +
                    </button>
                </div>
              </div>
            ))}
            <div style={{ marginTop: "20px", display:"flex", gap:"10px"}}>
              
              <button onClick={handleSubmit}>Submit</button>
              <button onClick={handleReset} >
                Reset
              </button>
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
