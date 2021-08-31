import './App.css';
import { Details } from './Details';
import {useState} from "react";
import { Navbar } from './Navbar';
import { Showdetails } from './Showdetails';
import {useEffect} from "react";
// import { useHistory } from "react-router";
function App() {
  let [username, setname] = useState("");
  let [userage, setage] = useState("");
  const [user, setuser] = useState([]);
  const[ids,setids]=useState();
  let [show, setshow] = useState(false);


  function getData() {
        fetch('https://60efffbdf587af00179d3c0e.mockapi.io/data')
          .then(data => data.json())
          .then(user => setuser(user));
      }
      
      
      function deleteUser(id) {
        fetch(`https://60efffbdf587af00179d3c0e.mockapi.io/data/${id}`, {
          method: "DELETE",
        })
          .then((data) => data.json())
          .then((user) => getData(user));
    
      }
    
      function addUser() {
        fetch('https://60efffbdf587af00179d3c0e.mockapi.io/data', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({name: username, avatar: userage })
        }
       )
      
          .then(() => getData());
     setshow(false);
      }
    
    
      function done(ids)
    {
    console.log(ids);
     fetch(`https://60efffbdf587af00179d3c0e.mockapi.io/data/${ids}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({name: username, avatar: userage })
      }
     )
    .then(() => getData());
    setshow(false);
    }
    
    
    function editUser(name,age,id) {
     
    setname(name);
    setage(age);
    setshow(!show);
    setids(id);
    
      }
      useEffect(() => {getData()}, []);
    
    
  return (
    <div className="mainbody">
   <Navbar/>
    <Showdetails setname={setname} setage={setage} username={username} userage={userage} show={show} setshow={setshow} addUser={addUser} done={done} ids={ids}/>
   <Details user={user} editUser={editUser} deleteUser={deleteUser}/>
  </div>
  );
}

export default App;
