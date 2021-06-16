import React, { useEffect, useState } from "react";
import UserService from "../services/user.service";
import AdminService from "../services/admin-service";
import AuthService from "../services/auth.service";



const BoardAdmin = (props)=> { 
  const [content, setContent] = useState("");
  const [users, setUsers] = useState([]);
  const[roles, setRoles] = useState([]);
  const[currentUser,setCurrentUser]= useState("");
  const[updatedRole,setUpdatedRole] = useState();
  const[updatedUser,setUpdatedUser] = useState();
  const[updatedDesc,setUpdatedDesc] = useState();

  const getCurrentUser = async()=>{
    const currentUser = AuthService.currentUser();
    setCurrentUser(currentUser.data.map(key=>key.name));
  }

function onChangeRole(event) {
  setUpdatedRole(roles.filter( data => {return data.name === event.target.value}));
}

function onChangeUser(event){
  setUpdatedUser(users.filter( data => {return data.username === event.target.value})); 
  }

function onClick(){
  //let c = updatedUser;
  //c.roles= updatedRole;
  //setUpdatedUser(c);
  updatedUser.roles= JSON.stringify(updatedRole);
  console.log(updatedUser);
  //console.log(c);
  //console.log(updatedUser);
}

console.log(updatedUser);
console.log(updatedRole);

  useEffect(()=>{
    getAllUsers();
    getAllRoles();
    UserService.getAdminBoard().then(
      response => {
        setContent(response.data);
        console.log(JSON.stringify(response.data));
      },
      error => {
        setContent(
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
       );
      }
    );
  }, [])

  const getAllRoles = async()=>{
    const response = await AdminService.getRoles();
    setRoles(response.data.map(key=>key));
  }

  // useEffect(()=>{
  //   AdminService.getUsers().then(
  //     response => {
  //       console.log(response.data);
  //       setUsers(response.data);
  //     }, error => {
  //       setUsers(
  //           (error.response &&
  //             error.response.data &&
  //             error.response.data.message) ||
  //           error.message ||
  //           error.toString()
  //      );
  //     } ); 
  //     console.log(users);
  // }, [])


  const getAllUsers = async()=>{
    const response = await AdminService.getUsers();
    setUsers(response.data.map(key=>key));
  }
  
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>{content}</h3>
        </header>
        <div>
        <form>
        <select onChange={onChangeUser} >
        {users.map(option => <option key={option.username} value={option.username}>{option.username}</option>)}
         </select>
         <select onChange={onChangeRole}>
         {roles.map(option => <option key={option.name} value={option.name}>{option.name}</option>)}
         </select>
         <input type="text" name="name"/>
         <button onClick={onClick}>Edit</button>
         </form>
        </div>
      </div>
    );
  } 

export default BoardAdmin; 