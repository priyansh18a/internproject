import React, { useState } from 'react';
import fire from '../../custom/Fire';
import firebase from 'firebase';
import Google from '../../Graphics/Google.png'
import './Login.scss'



const Login = () => {
    const [email ,setEmail] = useState('');
    const [password ,setPassword] = useState('');
  

 const emailhandleChange = event => {
    setEmail(event.target.value);
  }
 const passwordhandleChange = event => {
  setPassword(event.target.value);
 }

 const login = e => {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(email,password).then((u)=>{
    }).catch((error) => {
        console.log(error);
      document.getElementById("warning").innerHTML = error.message;
      document.getElementById("warning").style.display = "block";
      });
  }

 const signup = e => {
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(email,password).then((u)=>{
    }).then((u)=>{console.log(u)})
    .catch((error) => {
        console.log(error);
      document.getElementById("warning").innerHTML = error.message;
      document.getElementById("warning").style.display = "block";
      })
  }

const googleLogin = ()=> {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)

    .then (result => {
        const user = result.user;
        console.log(user.displayName);
    })
}

    return (
      
       <div className="col-md-6">
       <div className="alert alert-danger" id="warning" role="alert" >
      </div>
   <form>
       <div className="form-group">
       <label htmlFor="exampleInputEmail1">Email address</label>
       <input value={email} onChange={emailhandleChange} type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
       <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
       <div className="form-group">
      <label htmlFor="exampleInputPassword1">Password</label>
      <input value={password} onChange={passwordhandleChange} type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
      </div>
      <button type="submit" onClick={login} className="btn btn-primary">Login</button>
      <button onClick={signup} style={{marginLeft: '25px'}} className="btn btn-success">Signup</button>
    </form>
    <p className="or">Or</p>
    <div className="google-login">
		<button className="btn btn-info" type="button" onClick={googleLogin}>Login with Google
		<img id="google_logo" src={Google}  alt="noimage"/>
		</button>
   
 </div>
 </div>
 
    );
  
}
export default Login;