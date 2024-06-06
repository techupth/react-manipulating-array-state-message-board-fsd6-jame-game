import { useState } from "react";

function MessageBoard() {
  const [message, setMessage] = useState([
    "Hello all! This is the first message.",
  ]);

  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMessage = [...message];
    newMessage.push(input);
    setMessage(newMessage);
    setInput("");
  };

  const deleteMessage = (index) => {
    const newMessage = [...message];
    newMessage.splice(index, 1);
    setMessage(newMessage);
  };

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            value={input}
            onChange={handleInput}
          />
        </label>
        <button className="submit-message-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <div class="board">
        {message.map((item, index) => (
          <div key={index} className="message">
            <h1>{item}</h1>
            <button
              className="delete-button"
              onClick={() => deleteMessage(index)}
            >
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MessageBoard;
