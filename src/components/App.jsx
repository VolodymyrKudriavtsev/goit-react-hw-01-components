import Profile from './Profile/Profile';
import user from '../user.json';

import Statistics from './Statistics/Statistics';
import data from '../data.json';

import FriendList from './FriendList/FriendList';
import friends from '../friends.json';

import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../transactions.json';

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
      <Statistics stats={data} />
      <hr />
      <FriendList friends={friends} />
      <hr />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
