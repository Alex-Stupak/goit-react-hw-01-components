import PropTypes from "prop-types";
import FriendListItem from "../FriendListItem"
import s from "./FriendList.module.css";

function FriendList({friends}) {
    return (
        <ul className={s.friend_list}>
            {friends.map(({ id, name, isOnline, avatar }) => (
                <FriendListItem
                    key={id}
                    name={name}
                    status={isOnline}
                    avatar={avatar}
                />
            ))}
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    }))
        
}

export default FriendList;