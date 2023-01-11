import Profile from './pofile/profile';
import Statistics from './Statistics/Statistics';
import FriendList from './Friend-list/Friend-list';
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
