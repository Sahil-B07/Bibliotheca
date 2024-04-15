import { createChatBotMessage } from "react-chatbot-kit";
import "./bot.css";

const config = {
  lang: "no",
  botName: "Quillo",
  initialMessages: [
    createChatBotMessage(`📚✨ Welcome to Bibliotheca`),
    createChatBotMessage("I'm Quiillo, your bookish companion.", {
      withAvatar: true,
      delay: 500,
    }),
    createChatBotMessage(
      "📖💬 Feel free to ask me anything about the book. I'm here to help you explore its pages and uncover its secrets! 🌟",
      {
        withAvatar: true,
        delay: 600,
      },
    ),
  ],
};

export default config;
