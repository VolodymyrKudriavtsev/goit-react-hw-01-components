const FriendListItem = ({ id, avatar, name }) => {
  return (
    <li className="item" key={id}>
      <span className="status"></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

export default FriendListItem;
// ! isOnline
