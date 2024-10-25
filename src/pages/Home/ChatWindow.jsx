import UserInfo from './UserInfo';
import './ChatWindow.css'

const ChatWindow = ({ selectedChat }) => {
    const handleInputChanged = (e) => {
        
    }

    return (
        <>
            <div id="chat-window">
                <h1>{selectedChat}</h1>
                <input placeholder="Filler text" onChange={handleInputChanged}/>
            </div>
            <UserInfo selectedChat={selectedChat}/>
        </>
    )
}

export default ChatWindow;