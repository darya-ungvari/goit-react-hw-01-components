import s from "./friendList.module.css";
import PropTypes from 'prop-types';
const FriendItem = ({ avatar, name, isOnline }) => (
    <>
        <span className={isOnline ? s.online : s.offline}>{isOnline}</span>
        <img className={s.avatar} src={avatar} alt="avatar" width="48" />
        <p className={s.name}>{name}</p>
    </>
)

FriendItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  };

export default FriendItem;