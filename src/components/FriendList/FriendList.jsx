import PropTypes from 'prop-types';
import FriendListItem from 'components/FriendListItem/FriendListItem';
import css from './FriendList.module.css';

const FriendList = ({ friends }) => {
  const elements = friends.map(({ id, avatar, name }) => (
    <FriendListItem key={id} avatar={avatar} name={name} />
  ));

  return <ul className={css.friend_list}>{elements}</ul>;
};

export default FriendList;
// ! isOnline

FriendList.defauitProps = {
  friends: [],
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
