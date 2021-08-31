
import { Profile } from "./profile";

export function Details({editUser,deleteUser,user}) {
 
 // const initial=[{name:"sri",age:21,id:1},{name:"ram",age:2,id:2},{name:"raj",age:221,id:3}];
return (
    <div className="user">
     {user.map((user,index) => <Profile name={user.name} age={user.avatar} id={user.id} avatar ={user.age} deleteUser={deleteUser} editUser={editUser} key={index}/>)}
    </div>
 );
}

