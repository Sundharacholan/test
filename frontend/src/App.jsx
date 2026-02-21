import { useState } from "react";

function App() {

  const [message, setMessage] = useState("Click button to test backend");

  const getMessage = async () => {
    const response = await fetch("http://localhost:5000/message");
    const data = await response.json();
    setMessage(data.message);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>{message}</h2>

      <button onClick={getMessage}>
        Test Backend Connection
      </button>
    </div>
  );
}

export default App;