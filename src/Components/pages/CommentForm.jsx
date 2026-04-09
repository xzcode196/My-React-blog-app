import { useState } from "react";

const CommentForm = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (!name || !text) return;

    onAdd({ name, text });
    setName("");
    setText("");
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />

      <textarea
        placeholder="Your comment"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default CommentForm;