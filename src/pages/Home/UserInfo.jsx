import './UserInfo.css'

const UserInfo = ({ selectedChat }) => {
    return (
        <div id="user-info">
            <h1>{selectedChat}</h1>
        </div>
    )
}

export default UserInfo;