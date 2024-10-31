import './ChatList.css'

const ChatList = ({ chats, setSelectedChat }) => {
    const handleChatClicked = (e) => {
        // TODO: Change this to the chat object's ID or something
        const chat = e.target.textContent;
        console.log(e.target);
        setSelectedChat(chat);
    }

    return (
        <div id='chat-list'>
            <h3 id="chat-list-header">Chats</h3>
            <div id="chat-list-chats">
                {chats.map((chat) => <div className='chat-list-chat' key={chat.id} onClick={handleChatClicked}><p>{chat.name}</p></div>)}
            </div>
        </div>
    )
}

export default ChatList