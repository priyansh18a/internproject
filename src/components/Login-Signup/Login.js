import React, { useCallback, useState , useEffect} from 'react';
import { useHistory } from "react-router-dom";
import fire from '../../custom/Fire';
// import { AuthContext } from '../../custom/auth-context';
import firebase from 'firebase';
import Google from '../../Graphics/Google.png'
import close from '../../Graphics/close.png'
import './Login.scss'



const Login = props=> {
    const history = useHistory();
    const [phonenum ,setPhonenum] = useState(props.phoneNo);
  
    useEffect(() => { whichtoshow() }, [props.show] );
    useEffect(() => { phoneNumHandler() }, [props.phoneNo] );

    const phonenumhandleChange = event => {
        setPhonenum(event.target.value);
    }
    const phoneNumHandler = () => {
        setPhonenum(props.phoneNo);
    }
    
    const login = useCallback(
      async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
          await fire
            .auth()
            .signInWithEmailAndPassword(email.value, password.value);
          history.push("/teach/user");
        } catch (error) {
          document.getElementById("warning-msg").innerHTML = error.message;
          document.getElementById("warning").style.display = "flex";
        }
      },
      [history]
    );

  const signup = useCallback(async event => {
      event.preventDefault();
      const { email, password, phonenum, name } = event.target.elements;
      try {
        await fire
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        const user = firebase.auth().currentUser;
        user.updateProfile({
          displayName: name.value,
          photoURL: phonenum.value    // phone num stored in phoneURL
          }).then(function() {
          // Update successful.
        console.log(user.displayName); 
        history.push("/comingsoon");
        })
      } catch (error) {
        document.getElementById("warning-msg").innerHTML = error.message;
        document.getElementById("warning").style.display = "flex";
      }
    }, [history]);



  const googleLogin = ()=> {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then (result => {
        const user = result.user;
        console.log(user.displayName);
        history.push("/comingsoon");
    }).catch((error) => {
      console.log(error);
    }
    );
  }
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

  const closewarning = () => {
    document.getElementById("warning").style.display = "none";
  }

  return (
    <div className="login-signup">
       <div className="alert alert-danger" id="warning" role="alert"
        ><p id="warning-msg"></p><span id="closewarning" aria-label="img" role="img" onClick={closewarning}>&#x274C;</span></div>
       <img onClick={props.onClick} className="closeloginsignup" src={close} alt=""/>
     <div id="login">
       <p className="main-head">Sign In</p>
     <form onSubmit={login}>
       <div className="form-group">
       <label htmlFor="exampleInputEmail" >Email address</label>
       <input  type="email" name="email" className="input" id="exampleInputEmail" aria-describedby="emailHelp"  />
      </div>
       <div className="form-group">
      <label htmlFor="exampleInputPassword">Password</label>
      <input  type="password" name="password" className="input" id="exampleInputPassword"  />
      </div>
      <button type="submit"  className="submit-button">Sign In</button>
    
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
     <form onSubmit={signup}> 
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
      <input type="text" name="name" className="input" id="name" />
      </div>
      <div className="form-group">
       <label htmlFor="exampleInputEmail1">Email address</label>
       <input  type="email" name="email" className="input" id="exampleInputEmail1" aria-describedby="emailHelp" required />
      </div>
      
       <div className="form-group">
      <label htmlFor="exampleInputPassword1">Password</label>
      <input  type="password" name="password" className="input" id="exampleInputPassword1" required />
      </div>
  
      <button className="submit-button">Signup</button>
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