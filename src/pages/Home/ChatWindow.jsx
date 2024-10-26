import UserInfo from './UserInfo';
import './ChatWindow.css'
import { useState } from 'react';

const ChatWindow = ({ selectedChat }) => {
    const [displayUserInfo, setDisplayUserInfo] = useState(false);

    const handleInputChanged = (e) => {
        
    }

    const handleDisplayUserInfoChanged = (e) => {
        setDisplayUserInfo(!displayUserInfo);
    }

    return (
        <>
            <div id="chat-window">
                <div id="chat-window-header">
                    <h1>{selectedChat}</h1>
                    <button id="toggle-display-user-info-btn" onClick={handleDisplayUserInfoChanged}>...</button>
                </div>
                <input id="message-input" placeholder="Filler text" onChange={handleInputChanged}/>
            </div>
            <UserInfo selectedChat={selectedChat} displayUserInfo={displayUserInfo}/>
        </>
    )
}

export default ChatWindow;