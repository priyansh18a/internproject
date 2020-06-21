import React, { useState , useEffect} from 'react';
import fire from '../../custom/Fire';
import firebase from 'firebase';
import { Link} from 'react-router-dom';
import Google from '../../Graphics/Google.png'
import './Login.scss'



const Login = props => {
    const [email ,setEmail] = useState('');
    const [password ,setPassword] = useState('');
    const [name ,setName] = useState('');
    const [phonenum ,setPhonenum] = useState('');
  
    useEffect(() => { whichtoshow() }, [props.show] );

 const emailhandleChange = event => {
    setEmail(event.target.value);
  }
 const passwordhandleChange = event => {
  setPassword(event.target.value);
 }
 const namehandleChange = event => {
  setName(event.target.value);
}
  const phonenumhandleChange = event => {
  setPhonenum(event.target.value);
  }

 const login = e => {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(email,password).then((u)=>{
      console.log(u);
      document.getElementById("warning").innerHTML = "Login Successful";
    }).catch((error) => {
        console.log(error);
    
      document.getElementById("warning").innerHTML = error.message;
      document.getElementById("warning").style.display = "block";
      });
  }

  const signup = e => {
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(email,password).then((u)=>{
      const user = firebase.auth().currentUser;
      user.updateProfile({
        displayName: name,
        photoURL: phonenum
        }).then(function() {
        // Update successful.
      
       console.log(user.displayName);
       console.log(user.photoURL);
      }).catch(function(error) {
        // An error happened.
      });
     console.log(u);
    }).catch((error) => {
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
  const whichtoshow = () => {
    
    if( props.show === 'login' ){
      document.getElementById("signup").style.display  = "none";
      document.getElementById("login").style.display  = "block";
    }else  if( props.show === 'signup' ){
      document.getElementById("signup").style.display  = "block";
      document.getElementById("login").style.display  = "none";
    }else{
      document.getElementById("signup").style.display  = "none";
      document.getElementById("login").style.display  = "none";
    }
  }

  const gotosignup = () => {
      document.getElementById("login").style.display  = "none";
      document.getElementById("signup").style.display  = "block";
    }

  const gotologin = () => {
      document.getElementById("signup").style.display  = "none";
      document.getElementById("login").style.display  = "block";
    }

  return (
      
  <div>
       <div className="alert alert-danger" id="warning" role="alert" ></div>
       <Link onClick={props.onClick} className="closeloginsignup"> &times; </Link>
    <div id="login">
     <form>
       <div className="form-group">
       <label htmlFor="exampleInputEmail">Email address</label>
       <input value={email} onChange={emailhandleChange} type="email" name="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter email" />
       <small id="emailHelp" className="form-text text-muted">We'll never share your email and phone number with anyone else.</small>
      </div>
       <div className="form-group">
      <label htmlFor="exampleInputPassword">Password</label>
      <input value={password} onChange={passwordhandleChange} type="password" name="password" className="form-control" id="exampleInputPassword" placeholder="Password" />
      </div>
      <button type="submit" onClick={login} className="btn btn-primary">Login</button>
    
    </form>
      <p className="or">Or</p>
      <div className="google-login">
      <button className="btn btn-info" type="button" onClick={googleLogin}>Login with Google
      <img id="google_logo" src={Google}  alt="noimage"/>
      </button>
     <p>Does not have account? <Link onClick={gotosignup}>Click here to Signup</Link></p>
  </div>
  </div>
  <div id="signup">
     <form>
     <div className="form-group">
      <label htmlFor="name">Name</label>
      <input value={name} onChange={namehandleChange} type="text" name="name" className="form-control" id="name" placeholder="Your name" />
      </div>
      <div className="form-group">
       <label htmlFor="exampleInputEmail1">Email address</label>
       <input value={email} onChange={emailhandleChange} type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
      </div>
      <div className="form-group">
      <label htmlFor="phonenum">Phone Number</label>
      <input value={phonenum} onChange={phonenumhandleChange} type="number" name="phonenum" className="form-control" id="phonenum" placeholder="Enter Your Phone Number" />
      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>

      </div>
       <div className="form-group">
      <label htmlFor="exampleInputPassword1">Password</label>
      <input value={password} onChange={passwordhandleChange} type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
      </div>
  
      <button onClick={signup}  className="btn btn-success">Signup</button>
    </form>
      <p className="or">Or</p>
      <div className="google-login">
      <button className="btn btn-info" type="button" onClick={googleLogin}>Signup with Google
      <img id="google_logo" src={Google}  alt="noimage"/>
      </button>
     <p>Already Registered? <Link onClick={gotologin}>Click here to Login</Link></p>
  </div>
  </div>
 </div>
 
  
    );
  
}
export default Login;