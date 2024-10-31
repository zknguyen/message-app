import './UserInfo.css'

const UserInfo = ({ selectedChat, displayUserInfo }) => {
    if (!displayUserInfo) {
        return null;
    }

    return (
        <div id="user-info">
            <h1>{selectedChat}</h1>
            <p>Chat options go here</p>
            <p>Chat Info</p>
            <p>Attached Media</p>
        </div>
    )
}

export default UserInfo;