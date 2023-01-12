const FriendListItem = props => (
  <li class="item">
    <span class="status"></span>
    <img class="avatar" src={props.avatar} alt="User avatar" width="48" />
    <p class="name">{props.name}</p>
  </li>
);

export default FriendListItem;
