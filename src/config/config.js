import { createChatBotMessage } from 'react-chatbot-kit';
import DogPicture from '../components/DogPicture.jsx'

const botName = 'Fred'
const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`)],
  widgets: [
    {
      widgetName: 'dogPicture',
      widgetFunc: (props) => <DogPicture {...props} />,
    },
    {
      widgetName: 'help'
    }
  ],

    
  botName : botName,
  customStyles: {
    botMessageBox: {
        backgroundColor: '#000000'
    },
  }  
};

export default config;