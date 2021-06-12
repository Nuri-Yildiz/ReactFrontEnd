import React, { useEffect, useState } from "react";
import UserService from "../services/user.service";
import AdminService from "../services/admin-service";



const BoardAdmin = (props)=> { 
  const [content, setContent] = useState("");
  const [users, setUsers] = useState([]);
  const[usernames, setUsernames] = useState([]);

  

  useEffect(()=>{
    getAllUsers();
    UserService.getAdminBoard().then(
      response => {
        setContent(response.data);
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
    setUsernames(response.data.map(key=>key.username));
  }
  console.log(users[0]);
  
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>{content}</h3>
        </header>
        <div>
        <select id='template-select'>
        {usernames.map(option => <option key={option} value={option}>{option}</option>)}
         </select>
        </div>
      </div>
    );

  } 

export default BoardAdmin; 