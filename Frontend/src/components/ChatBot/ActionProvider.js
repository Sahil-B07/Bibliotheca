import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
    const handleHello = () => {
        const botMessage = createChatBotMessage('Hello. Nice to meet you.', {delay:1000});
    
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));
      };

      const handleQuery = async (message) =>{
        const book_id = localStorage.getItem('book_id')
        const res = await fetch(`https://0a55-34-80-60-232.ngrok-free.app/chat/${book_id}?query=${message}`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({"data":[{"input":"hi","output":"Your book id is: 10"}]}
        )
        });
        
        const result = await res.json()
        const botMessage = createChatBotMessage(result['data'], {delay:500});
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));
        // return res
      }
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {handleHello,handleQuery},
        });
      })}
    </div>
  );
};

export default ActionProvider;