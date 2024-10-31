import UserInfo from './UserInfo';
import './ChatWindow.css'
import { useState } from 'react';

const ChatWindow = ({ selectedChat }) => {
    const [displayUserInfo, setDisplayUserInfo] = useState(false);

    const handleMessageSubmitted = (e) => {
        e.preventDefault()

        const messageInput = document.getElementById("message-input");
        const newMessage = document.createElement("p");
        newMessage.setAttribute("id", "message-bubble")
        newMessage.textContent = messageInput.value;
        messageInput.value = "";

        const messageWindow = document.getElementById("messages");
        messageWindow.appendChild(newMessage);
    }

    const handleDisplayUserInfoChanged = () => {
        setDisplayUserInfo(!displayUserInfo);
    }

    return (
        <>
            <div id="chat-window">
                <div id="chat-window-header">
                    <h1>{selectedChat}</h1>
                    <button id="toggle-display-user-info-btn" onClick={handleDisplayUserInfoChanged}>...</button>
                </div>
                <div id="messages">

                </div>
                <form id="chat-window-footer" onSubmit={handleMessageSubmitted}>
                    <input id="message-input" placeholder="Message..." autoComplete="off"/>
                    <button id="message-send-btn" type="submit">Send</button>
                </form>
            </div>
            <UserInfo selectedChat={selectedChat} displayUserInfo={displayUserInfo}/>
        </>
    )
}

export default ChatWindow;