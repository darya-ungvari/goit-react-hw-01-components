import s from "./friendList.module.css";
import PropTypes from 'prop-types'; 
import FriendItem from './FriendItem';


const FriendList = ({ friends }) => (
    <ul>
        {friends.map(friend => (
        <li className={s.item} key={friend.id}>
            <FriendItem isOnline={friend.isOnline}
            avatar={friend.avatar}
            name={friend.name}></FriendItem>
        </li>
    ))}

    </ul>
)

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
        }),
      ),
}


export default FriendList;