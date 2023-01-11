import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <>
      <Profile />
      <hr />
      <Statistics />
      <hr />
      <FriendList />
      <hr />
      <TransactionHistory />
    </>
  );
};
