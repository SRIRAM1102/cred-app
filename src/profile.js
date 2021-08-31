import { Usercontent } from "./Usercontent";
export function Profile({ name, age, id, deleteUser, editUser,avatar,show}) {
  // const history=useHistory();
  
  return (
    // onClick={()=>history.push("/added/"+ id)}------- "to change url"
    <div className="userdetail">
      <div >
      <img src={age} className="image" alt="profilepic"/>
      </div>
     <div>
     <p className="heading">Name:<span>{name}</span></p>
      <p className="heading">Description:<span>{avatar}</span></p>     
      <div className="btn">
      <button onClick={() => deleteUser(id)} className="delbtn">DELETE</button>
      <button onClick={() => editUser(name,age,id)} className="editbtn">EDIT</button>
      {show ? <Usercontent /> : " "}
      
      </div>
    
    </div>
     </div>
   
  );


}
