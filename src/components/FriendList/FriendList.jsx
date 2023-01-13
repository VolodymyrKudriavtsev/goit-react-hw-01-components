import FriendListItem from 'components/FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
  const elements = friends.map(({ id, avatar, name }) => (
    <FriendListItem key={id} avatar={avatar} name={name} />
  ));

  return <ul className="friend-list">{elements}</ul>;
};

export default FriendList;
// ! isOnline

FriendList.defauitProps = {
  friends: [],
};
