// import friends from '../../data/friends.json';
import FriendListItem from 'components/FriendListItem/FriendListItem';

export default function FriendList() {
  return (
    <ul className="friend-list">
      <FriendListItem />
      <FriendListItem />
      <FriendListItem />
      <FriendListItem />
      <FriendListItem />
    </ul>
  );
}
