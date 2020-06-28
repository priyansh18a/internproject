import React, { useState , useEffect, useContext} from 'react';
import fire from '../../custom/Fire';
import { AuthContext } from '../../custom/auth-context';
import firebase from 'firebase';
import Google from '../../Graphics/Google.png'
import close from '../../Graphics/close.png'
import './Login.scss'



const Login = props => {
    const auth = useContext(AuthContext);
    const [email ,setEmail] = useState('');
    const [password ,setPassword] = useState('');
    const [name ,setName] = useState('');
    const [phonenum ,setPhonenum] = useState(props.phoneNo);
  
    useEffect(() => { whichtoshow() }, [props.show] );
    useEffect(() => { phoneNumHandler() }, [props.phoneNo] );



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
 const phoneNumHandler = () => {
  setPhonenum(props.phoneNo);
 }

 const login = e => {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(email,password).then((u)=>{
      auth.login();
      console.log(u)
      document.getElementById("warning").innerHTML = 'Login Successful';
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
        photoURL: phonenum    // phone num stored in phoneURL
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

    // const signout = () => {
    //   fire.auth().signOut();
    // }

    // const passwordreset = () => {
    //   fire.auth().sendPasswordResetEmail(email);
    // }

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
    <div className="login-signup">
       <div className="alert alert-danger" id="warning" role="alert" ></div>
       <img onClick={props.onClick} className="closeloginsignup" src={close} alt=""/>
     <div id="login">
       <p className="main-head">Sign In</p>
     <form>
       <div className="form-group">
       <label htmlFor="exampleInputEmail">Email address</label>
       <input value={email} onChange={emailhandleChange} type="email" name="email" className="input" id="exampleInputEmail" aria-describedby="emailHelp"  />
      </div>
       <div className="form-group">
      <label htmlFor="exampleInputPassword">Password</label>
      <input value={password} onChange={passwordhandleChange} type="password" name="password" className="input" id="exampleInputPassword"  />
      </div>
      <button type="submit" onClick={login} className="submit-button">Sign In</button>
    
    </form>
      <p className=" or ">Or</p>
      <div className="google-login">
      
      <button className="google-login-btn" type="button" onClick={googleLogin}>
      <img id="google_logo" src={Google}  alt="noimage"/>Login with Google 
      </button>
     <p className="info" onClick={gotosignup}>DON’T HAVE AN ACCOUNT? SIGN UP</p>
  </div>
  </div>
  <div id="signup"> 
     <p className="main-head">Join Feynman</p>
     <form>
     <div className="form-group">
     <div className="form-group">
      <label htmlFor="phonenum">Phone Number</label>
      <div className="phonediv">
      <select className="country-code-signup">
              <option value="+91" defaultValue>+91</option>
              <option value="+1">+1</option>
              <option value="+92">+92</option>
              <option value="+7">+7</option>
              <option value="+344">+344</option>
              <option value="+672">+672</option>
              <option value="+43">+43</option>
			</select>     
      <input value={phonenum} onChange={phonenumhandleChange} type="number" name="phonenum" className="input" id="phonenum" required  />
      </div>
      </div>
      <label htmlFor="name">Name</label>
      <input value={name} onChange={namehandleChange} type="text" name="name" className="input" id="name" />
      </div>
      <div className="form-group">
       <label htmlFor="exampleInputEmail1">Email address</label>
       <input value={email} onChange={emailhandleChange} type="email" name="email" className="input" id="exampleInputEmail1" aria-describedby="emailHelp" required />
      </div>
      
       <div className="form-group">
      <label htmlFor="exampleInputPassword1">Password</label>
      <input value={password} onChange={passwordhandleChange} type="password" name="password" className="input" id="exampleInputPassword1" required />
      </div>
  
      <button onClick={signup}  className="submit-button">Signup</button>
    </form>
      <p className="or">Or</p>
      <div className="google-login">
      <button className="google-login-btn" type="button" onClick={googleLogin}>
      <img id="google_logo" src={Google}  alt="noimage"/>
        Signup with Google
      </button>
     <p className="info" onClick={gotologin}>I ALREADY HAVE AN ACCOUNT</p>
  </div>
  </div>
 </div>
 
  
    );
  
}
export default Login;