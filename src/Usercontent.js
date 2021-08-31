
export function Usercontent({ setname, setage, userage, username,addUser,done,ids,setshow }) {

  return (
<div className="modal" onClick={() => setshow(false)}>
      

<div className="modalcontent" onClick={(event)=>event.stopPropagation()}>
<div className="modalheaders">   
<button onClick={() => setshow(false)} className="crossmark">✖</button>
</div>
<div className="modalarea" >
   <h3>Name:</h3>
      <input type="text" placeholder="Name:" onChange={(event) => setname(event.target.value)} value={username} className="textfield"/>
      <br/>
      <h3>Avatar:</h3>
      <input type="text" placeholder="Avatar:" onChange={(event) => setage(event.target.value)} value={userage} className="textfield"/>
      <div className="showbtn">
     <button onClick={()=>addUser()} className="addbtn">{}add</button>
     <button onClick={()=>done(ids)} className="editbtn">edit</button>
     </div>
</div>
</div>
</div>
  );
}





{/* <div className="modal">
      {/* without crud operations */}
      {/* <button onClick={()=>setuser([... user,{name:username,age:userage}])}>add</button>   */}
      {/* <div className="modheader">
        <p>Add Page</p>
      <div className="modcontent">

      <h3>Name:</h3>
      <input type="text" placeholder="Name:" onChange={(event) => setname(event.target.value)} value={username} className="textfield"/>
      <br/>
      <h3>Avatar:</h3>
      <input type="text" placeholder="Age:" onChange={(event) => setage(event.target.value)} value={userage} className="textfield"/>
     <div>
     <button onClick={() => addUser()}>{}add</button>
     <button onClick={()=>done(ids)}>done</button>
     </div>
      </div>
      </div>
    </div>  */}