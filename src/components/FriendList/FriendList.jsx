import FriendListItem from 'components/FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(({ id, avatar, name }) => (
        <FriendListItem key={id} avatar={avatar} name={name} />
      ))}
    </ul>
  );
};

export default FriendList;
// ! isOnline
