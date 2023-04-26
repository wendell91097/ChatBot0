import Chatbot from 'react-chatbot-kit'
import config from '../config/config.js';
import MessageParser from '../ChatBot/MessageParser.jsx';
import ActionProvider from '../ChatBot/Actionprovider.jsx';
import chatsize from '../scripts/chatBoxSizer.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons'


const Robocop = () => {
  return (
    <>  
            <button className='chatArrow' onClick= {chatsize}>
            <FontAwesomeIcon icon={faAnglesUp} rotation={180}/>
            </button>
        <div className='botbox'>
            <Chatbot
            className='chatbot'
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
            />
        </div>
    </>
  );
};

export default Robocop