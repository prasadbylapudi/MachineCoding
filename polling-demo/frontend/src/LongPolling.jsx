import React, { useEffect, useState } from "react";
import axios from "axios";

const LongPollingComponent = () => {
  const [messages, setMessages] = useState([]);
  const [lastMessageIndex, setLastMessageIndex] = useState(0);

  useEffect(() => {
    const longPoll = async () => {
      try {
        const response = await axios.get(
          `/poll?lastMessage=${lastMessageIndex}`
        );
        if (response.data.success) {
          setMessages((prev) => [...prev, ...response.data.messages]);
          setLastMessageIndex(response.data.lastMessage);
        }
        longPoll(); // Poll again after getting response
      } catch (error) {
        console.error(error);
        setTimeout(longPoll, 1000); // Retry after error
      }
    };
    longPoll();
  }, [lastMessageIndex]);

  return (
    <div>
      <h2>Messages</h2>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
};

export default LongPollingComponent;
