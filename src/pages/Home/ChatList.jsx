import './ChatList.css'

const ChatList = ({ chats, setSelectedChat }) => {
    const handleChatClicked = (e) => {
        // TODO: Change this to the chat object's ID or something
        const chat = e.target.textContent;
        setSelectedChat(chat);
    }

    return (
        <div id='chat-list'>
            <h3>Chats</h3>
            {chats.map((chat) => <div className='chat-list-item' key={chat.id} onClick={handleChatClicked}><p>{chat.name}</p></div>)}
        </div>
    )
}

export default ChatList