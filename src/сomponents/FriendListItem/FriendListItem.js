import PropTypes from "prop-types";
import s from "./FriendListItem.module.css";

function FriendListItem({name, status, avatar}) {
    return (
        <li className={s.item}>
            <span className={`${s.status} ${s[status]}`}></span>
            <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={s.name}>{name}</p>
        </li>
    )
}

FriendListItem.propTypes = {
    name: PropTypes.string.isRequired,
    status: PropTypes.oneOf([false, true]).isRequired,
    avatar: PropTypes.string.isRequired,
}

export default FriendListItem;