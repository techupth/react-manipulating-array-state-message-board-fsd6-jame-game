import { useState } from "react";

function MessageBoard() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);

  const handleInput = (event) => {
    setInput(event.target.value);
  };
  const addMessage = () => {
    const newMessage = [...output];
    newMessage.push(input);
    setOutput(newMessage);
    setInput("");
  };
  const deleteMessage = (index) => {
    const newMessage = [...output];
    newMessage.splice(index, 1);
    setOutput(newMessage);
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
        <button className="submit-message-button" onClick={addMessage}>
          Submit
        </button>
      </div>
      {output.map((item, index) => {
        return (
          <div class="board">
            <div className="message">
              <h1>{item}</h1>
              <button
                className="delete-button"
                onClick={() => {
                  deleteMessage(index);
                }}
              >
                x
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MessageBoard;
