import "./App.css";
import ListUser from "./components/listUser";
// import UserList from "./components/userList";
// import Counter from "./components/counter";
// import ItemList from "./components/itemList";


function App() {
  // const arr = [
  //   {
  //     id: 1,
  //     name: "toyota",
  //   },
  //   {
  //     id: 2,
  //     name: "suzuki",
  //   },
  //   {
  //     id: 3,
  //     name: "honda",
  //   },
  // ];
  return (
    <>
      <div>
        <h1>My Item</h1>
        {/* <ItemList item={arr} /> */}
        {/* <Counter /> */}
        {/* <UserList/> */}
        <ListUser/>
      </div>
    </>
  );
}

export default App;
