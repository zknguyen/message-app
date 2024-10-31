import ChatList from './ChatList'
import ChatWindow from './ChatWindow.jsx'
import { useState } from 'react'
import chats from '../../data/Chats.jsx'

const HomePage = () => {
    const [selectedChat, setSelectedChat] = useState(chats[0].name);

    return (
        <>
            <ChatList chats={chats} setSelectedChat={setSelectedChat}/>
            <ChatWindow selectedChat={selectedChat}/>
        </>
    )
}

export default HomePage