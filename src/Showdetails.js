import { Usercontent } from "./Usercontent";
                       
export function Showdetails({ setname, setage, userage, username,show,setshow,addUser,editUser,done,ids}) {

  return (
    <div>
      <button onClick={() => setshow(true)} className="mainbtn">Adduser</button>
      {show ? <Usercontent setname={setname} setage={setage} username={username} userage={userage} setshow={setshow} addUser={addUser} editUser={editUser} done={done}  ids={ids}/> : " "}
    </div>
  );
}
