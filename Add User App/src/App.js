import React, {useState} from 'react';
import AddUser from './Components/User/AddUser';
import UserList from './Components/User/UserList';


function App() {
  const [usersList, setUsersList] = useState([])
  const addUserHandler = (uname, uage)=>{
    setUsersList((prevList)=>{
      return [...prevList,{name: uname, age: uage, id: Math.random().toString()}]
    })
  }
  return (
    <div>
      <AddUser onAddUsers={addUserHandler}/>
      <UserList users={usersList}/>

    </div>
  );
}

export default App;
