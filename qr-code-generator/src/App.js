import React, { useState } from "react";
import "./App.css";

function App() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  return (
    <>
      <header>
        <h1>QR Code Generator</h1>
      </header>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          placeholder="Enter"
        />
        <button>Generate</button>
      </div>
      <div>{/* <QRCode id="qr-code-value" value="" /> */}</div>
    </>
  );
}

export default App;
