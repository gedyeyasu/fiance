import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import "./ChatScreen.css";

function ChatScreen() {
  const [inputs, setInputs] = useState([]);
  const [messages, setMessages] = useState([
    {
      name: "Allie",
      image: "https://www.famousbirthdays.com/headshots/asmrwithallie-5.jpg",
      message: "Whats up gedy \u{2764}",
    },
    {
      name: "Allie",
      image: "https://www.famousbirthdays.com/headshots/asmrwithallie-5.jpg",
      message: "Are you free tonight?",
    },
    {
      message: "yeah will pick you at 7",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();

    setMessages([...messages, { message: inputs }]);
    setInputs("");
  };

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU MATCHED WITH ALLIE ON 14/08/20
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__avatar"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}

      <form action="" className="chatScreen__input">
        <input
          value={inputs}
          onChange={(e) => setInputs(e.target.value)}
          className="chatScreen__inputField"
          type="text"
          placeholder="Type a message..."
        />
        <button
          type="submit"
          onClick={handleSend}
          className="chatScreen__inputButton"
        >
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
