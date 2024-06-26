import React from 'react';

const MessageParser = ({ children, actions, props }) => {
  const parse = (message) => {
    if (message.includes('hello')) {
        actions.handleHello();
      }
    else{
      actions.handleQuery(message);
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;