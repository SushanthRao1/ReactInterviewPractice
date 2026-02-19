// Form.jsx
import React, { useState } from "react";

export default function Form({ onSubmit }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
