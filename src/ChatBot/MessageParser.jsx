import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    console.log(message)
    if (message.includes('hello','hi','hey')){ 
      actions.handleHello();
    }

    if (message.includes('thank')){ 
        actions.handleThanks();
      }

    if (message.length === 0){
        actions.handleEmpty();
    }

    if (message.includes('dog')) {
      actions.handleDog();
    }
    console.log(message);
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