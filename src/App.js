import Container from "./сomponents/Container";
import Profile from "./сomponents/Profile";
import Statistics from "./сomponents/Statistics";
import FriendList from "./сomponents/FriendList";
import TransactionHistory from "./сomponents/TransactionHistory";
import userData from "./data/user.json";
import statisticsData from "./data/data.json";
import friendsData from "./data/friends.json";
import transactions from "./data/transactions.json";

function App() {
  return (
    <Container>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics statisticsData={statisticsData} title=''/>
      <FriendList friends={friendsData}/>
      <TransactionHistory transactions={transactions}/>
    </Container>
  )
}

export default App;
