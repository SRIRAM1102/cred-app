import './App.css';
import { Details } from './Details';
import { Zen } from './Zen';
import {useState} from "react";
// import { useHistory } from "react-router";
function App() {
  let [username, setname] = useState("");
  let [userage, setage] = useState("");
  return (
    <div className="app">
    <Navbar setname={setname} setage={setage}/>
   <Details setname={setname} setage={setage} username={username} userage={userage}/>
  </div>
  );
}

function Navbar()
{
  let [show,setshow]=useState(false);
  return(
    <div className="navbar">
    <p>Connect</p>
    <button onClick={()=>setshow(!show)}>Adduser</button>
    {show ? <Usercontent/> : " "}
    </div>
  );
}
function Usercontent({setname,setage,userage,username})
{

  return(
    <div>
          {/* without crud operations */}
      {/* <button onClick={()=>setuser([... user,{name:username,age:userage}])}>add</button>   */}
    <input type="text" placeholder="Name:" onChange={(event) => setname(event.target.value)} value={username}/>
      <input type="text" placeholder="Age:" onChange={(event) => setage(event.target.value)} value={userage} />
  
    </div>
  );
}
export default App;
