import './App.css';
import Profile from './Components/Profile/Profile';
import Statistics from './Components/Statistics/Statistics';
import user from './Components/Profile/user.json';
import stats from './Components/Statistics/statistical-data.json';
import FriendList from './Components/FriendList/FriendList';
import friends from './Components/FriendList/friends.json';
import TransactionHistory from './Components/TransactionHistory/TransactionHistory';
import transactions from './Components/TransactionHistory/transactions.json';
function App() {
  return (
    <div className="App">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      ></Profile>
      <Statistics title="Upload stats" stats={stats}></Statistics>
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
}

export default App;
