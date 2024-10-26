import './UserInfo.css'

const UserInfo = ({ selectedChat, displayUserInfo }) => {
    if (!displayUserInfo) {
        return null;
    }

    return (
        <div id="user-info">
            <h1>{selectedChat}</h1>
        </div>
    )
}

export default UserInfo;