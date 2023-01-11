import Profile from './Profile/Profile';
import user from '../user.json';

import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <hr />
      <Statistics />
      <hr />
      <FriendList />
      <hr />
      <TransactionHistory />
    </>
  );
};

export default App;
