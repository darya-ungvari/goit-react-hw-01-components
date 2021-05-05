import PropTypes from 'prop-types'; 
import FriendItem from './FriendItem';


const FriendList = ({ friends }) => (
    <ul>
        {friends.map(friend => (
            <FriendItem 
                key={friend.id}
                isOnline={friend.isOnline}
                avatar={friend.avatar}
                name={friend.name}></FriendItem>
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