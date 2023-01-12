import FriendListItem from 'components/FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
  console.log(friends);
  {
    friends.map(friend => (
      <FriendListItem avatar={friend.avatar} name={friend.name} />
    ));
  }
  <ul className="friend-list"></ul>;
};

export default FriendList;
