import React,{useState} from 'react'
import { auth } from './firebase';
const UserAuth = () => {
   const [data,setData] = useState({
    email:" ",
    password:" "
   })
 const {email,password} = data;
   const changeHandler = e => {
    setData({...data,[e.target.name]:e.target.value})
   }

   const SignIn = e =>{
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email,password).then(
       user => console.log(user) 
    ).catch(err => console.log(err))
   }
   const LogIn = e =>{
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password).then(
       user => console.log(user) 
    ).catch(err => console.log(err))
   }
  return (
    <div>
       <center>
       <input type="email" name="email" value={email} placeholder="Email" onChange={changeHandler}/> <br/>
       <input type="password" name="password" value={password} placeholder="password" onChange={changeHandler}/> <br/>
        <button onClick={SignIn}>SignIn</button> &nbsp;&nbsp;
        <button onClick={LogIn}>LogIn</button>
       </center>
    </div>
  )
}

export default UserAuth