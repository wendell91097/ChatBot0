import React from 'react';

const emptyMessages = ['Looks like you forgot to say something!',
                        '"If you gaze into the abyss, the abyss gazes also into you." -Nietzsche',
                        'Looks like you forgot to say something!',
                        'Sorry, I didn\'t quite get that.',
                        'What did I do to deserve this?',
                        'me. need. words.',
                        'For the love of-',
                        'I admire your dedication.',
                        '*Sigh* No worries champ. I\'ll be here if you need me.',
                        'Right.',
                        'You can do it!',
                        "I believe in you.",]
let emptyMessagePointer = 11

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  
  const handleEmpty = () => {
    if(emptyMessagePointer !== emptyMessages.length -1){
        emptyMessagePointer++
        console.log(`adding`)
    } else {
        emptyMessagePointer=0
        console.log(`reset`)
    }
    const botMessage = createChatBotMessage(emptyMessages[emptyMessagePointer]);

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage]
    }));
  };

  const handleThanks = () => {
    const botMessage = createChatBotMessage("You're welcome! Can I do anything else for you?")

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage]
    }))
  }
  
  const handleHello = () => {
    const botMessage = createChatBotMessage("Hi there! What's up?")

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage]
    }))
  }

  const handleDog = () => {
    const botMessage = createChatBotMessage(
      "Here's a picture of a dog for you.",
      {
        widget: 'dogPicture',
      }
    );
    
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }))
    
  };

  
  
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleThanks,
            handleEmpty,
            handleDog,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;