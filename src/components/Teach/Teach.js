//React
import React, { useState,useEffect,useContext} from 'react';
import {calculateTimeLeft} from './../Learn/Learn'
import fire from '../../custom/Fire';
import { AuthContext } from '../../custom/auth-context';



//imported the graphics
import logo from './../../Graphics/logo.png';
import cross from './../../Graphics/cross.png';
import dropdown from './../../Graphics/dropdown.png'
import teachMain from './../../Graphics/teachMain.svg'
import gotonext from './../../Graphics/gotonext.png'
import game from './../../Graphics/game.png'
import vr_ar from './../../Graphics/vr_ar.png'
import code from './../../Graphics/code.png'
import video from './../../Graphics/videos.png'
import comics from './../../Graphics/comics.png'
import text from './../../Graphics/text.png'
import tick from './../../Graphics/tick.png';
import menu_icon from './../../Graphics/menu_icon.png'
import analytics from './../../Graphics/analytics.png';
import network from './../../Graphics/network.png';
import multiple from './../../Graphics/multiple.png';
import profile from './../../Graphics/profile.png';
import tools from './../../Graphics/tools.png';
import facebook from './../../Graphics/facebook.svg';
import youtube from './../../Graphics/youtube.svg';


//imported the scss file
import '../Learn/learn.scss'
import './teach.scss';

// module
import Login from '../Login-Signup/Login';


const Teach = () => {
    const { currentUser } = useContext(AuthContext);
    const [show , setShow] = useState('');
    const [phoneNum ,setPhoneNum] = useState('');

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
     }, 60000);
    });

    const openlogin = whattoshow => {
        document.getElementById('login-container').style.display = "flex";
        setShow(whattoshow);
        document.getElementById('sidebar').style.display = "none";
        document.getElementById('menu_icon').style.display = "block";
        document.getElementById('cross').style.display = "none";
        document.getElementById('backdisable').style.display = 'block';
        // var elmnt = document.getElementById("login-container");
        // elmnt.scrollIntoView();
    }

    window.onscroll = () => {
        if(window.scrollY <= 150){
          document.querySelector('#header').className = 'header' ;
          document.querySelector('#header').style.top = '-80px';
          document.getElementById('signIn').style.top = '104px';
          document.getElementById('signUp').style.top = '96px'
          document.getElementById('sign-in-mobile').style.marginTop = '79px'
          document.getElementById('menu_icon').style.top = '90px'
          document.getElementById('sidebar').style.marginTop = '-82px';
        } else if(window.scrollY >= 150){ 
            document.querySelector('#header').className = 'header mini' ;
            document.querySelector('#header').style.top = '-10px';
            document.getElementById('signIn').style.top = '32px'
            document.getElementById('signUp').style.top = '25px'
            document.getElementById('sign-in-mobile').style.marginTop = '11px'
            document.getElementById('menu_icon').style.top = '21px'
            document.getElementById('sidebar').style.marginTop = '46px';
        
          }; 
   }

    const phonehandleChange = event => {
        setPhoneNum(event.target.value);
    }

    const closeloginsignup = () => {
        document.getElementById('login-container').style.display = "none"; 
        document.getElementById('backdisable').style.display = 'none';
        setShow('');
    }
    const gotonextbox = () => {
        // document.getElementById('future-depend').scrollBy(0, window.innerHeight);
        // console.log('abc');
        
    }
    const opensidebar = () => {
        document.getElementById('sidebar').style.display = "block";
        document.getElementById('menu_icon').style.display = "none";
        document.getElementById('cross').style.display = "block";
    }
    const closesidebar = () => {
        document.getElementById('sidebar').style.display = "none";
        document.getElementById('menu_icon').style.display = "block";
        document.getElementById('cross').style.display = "none";
    }
    
    return (
        <div id="teach">
        <div id="backdisable"></div>
        <div className="container1">
            <div id="header" className="header">
               <a href="/"><img className="logo" src={logo} alt="Feynman School" /></a> 
               <img src={menu_icon} alt="" id="menu_icon" onClick={opensidebar}/>
                <div className="homepage-head-text">
                    <a className="link-txt" href='/learn'>Learn</a>
                </div>
                <div className="homepage-head-text">
                    <a className="link-txt" href='/teach'id="teach">Teach</a>
                </div>
            { !currentUser && (
                <React.Fragment>
                <p onClick={() => openlogin('login')} className="sign-in-btn" id="signIn">Sign In</p>
                <button onClick={() => openlogin('signup')} className="sign-up-btn" id="signUp">Sign Up</button>
                <button onClick={() => openlogin('login')} id="sign-in-mobile">Sign In</button>
                </React.Fragment>
          )}
          { currentUser && (
                <React.Fragment>
                <p onClick={() => openlogin('login')} className="sign-in-btn" id="signIn" style={{display:'none'}}>Sign In</p>
                <button onClick={() => fire.auth().signOut()} className="sign-up-btn" id="signUp">Sign Out</button>
                <button onClick={() => fire.auth().signOut()} id="sign-in-mobile">Sign Out</button>
                </React.Fragment>
          )}

            </div>
            <div  id="sidebar">
                <img src={cross} alt="" id="cross" onClick={closesidebar}/>
                <ul>
                    <li><a href='/learn'>Learn</a></li>
                    <li><a href='/teach' style={{color:"#0099FF"}}>Teach</a></li>
                    <li>News</li>
                    <li>Blog</li>
                    <li>About us</li>

                </ul>

            </div>
            <div id="login-container">
            <Login show={show} onClick={closeloginsignup} phoneNo={phoneNum}/>
            </div>

            <div className="home-main" >                                                             
                <div className="l-main-para-cont" id="teach-main-left">
                    <div className="text-para">
                    <img className="l-main-learn" src={teachMain} alt="" id="teachMainMobile"/>
                        <p className="main-para" onClick={closeloginsignup} >Join the<br/> teachers of<br/> the future</p>
                        <div className="phone-num" onClick={closeloginsignup}>
                        <select className="country-code">
                            <option value="+91" defaultValue>+91</option>
                            <option value="+1">+1</option>
                            <option value="+92">+92</option>
                            <option value="+7">+7</option>
                            <option value="+344">+344</option>
                            <option value="+672">+672</option>
                            <option value="+43">+43</option>
			            </select>
                        <img src={dropdown} className="dropdown" alt=""/>
                        
                        <input type="number" className="phoneno" name="phoneno" placeholder="Phone number" onChange={phonehandleChange}/>
                        </div>
                        <button className="submit-btn"  onClick={() => openlogin('signup')}><p>Get free demo</p></button>
                    </div>
                </div>
                <div className="main-image-cont" onClick={closeloginsignup}>
                    <img className="l-main-learn" src={teachMain} alt="" id="teachMain"/>
                </div>
              
            </div>
              <div className="goto-div"><img className="gotonextbox" src={gotonext} alt="" onClick={gotonextbox}/></div>
        </div>
        <div id="future-depend">
            <p className="app-release">App release in</p>
            <div className="date-time">
            <div className="time-div"><p>{ Math.floor(timeLeft.days/10)}</p></div>
            <div className="time-div mr-4 " ><p className="different">{ timeLeft.days%10}</p></div>
            <div className="time-div"><p>{ Math.floor(timeLeft.hours/10)}</p></div>
            <div className="time-div mr-4"><p className="visualisation">{ timeLeft.hours%10}</p></div>
           <div className="time-div"><p>{ Math.floor(timeLeft.minutes/10)}</p></div>
            <div className="time-div"><p className="practical">{ timeLeft.minutes%10}</p></div>
            </div>
            <div id="notation">
                <p id="days">Days</p>
                <p>Hours</p>
                <p>Minutes</p>
            </div>
        </div>
        
        
        <div className="learn-container">
            <div className="learn-left">
            <p className="left-main-text">Build the next <br/> <span className="build">generation of courses</span></p>
            <p className="left-sub-heading">Express yourself in ways you had never imagined.</p>
            </div>
            <div className="learn-right teach-right">
              <div className="type-card">
                  <img src={game} alt=""/>
                  <p className="card-head">Games</p>
                  <p className="card-subhead">Create missions to challenge your learners and make learning fun</p>
             </div>
             <div className="type-card">
                  <img src={vr_ar} alt=""/>
                  <p className="card-head">AR/VR</p>
                  <p className="card-subhead">Help your students visualise concepts faster by making immersive courses</p>
             </div>
             <div className="type-card">
                  <img src={code} alt=""/>
                  <p className="card-head">Code</p>
                  <p className="card-subhead">Create and add coding challenges in your courses for practical learning</p>
             </div> 
             <div className="type-card">
                  <img src={video} alt=""/>
                  <p className="card-head">Video</p>
                  <p className="card-subhead">Make videos interactive and customised to engage your students better</p>
             </div> 
             <div className="type-card">
                  <img src={comics} alt=""/>
                  <p className="card-head">Comics</p>
                  <p className="card-subhead">Inbuilt templates to convert your courses into interactive comics</p>
             </div> 
             <div className="type-card">
                  <img src={text} alt=""/>
                  <p className="card-head">Text</p>
                  <p className="card-subhead">Make concise notes for your students to revise from so that they never forget</p>
             </div> 
               
            </div>
        </div>

        <div className="middle-pg-1 not-for-mobile">
             
            <div className="middle-pg-1-lft">
                <p className="middle-pg1-head"><span className="different">Multiple learning paths</span><br/>for customised education</p>
                <div className="middle-pg1-list">
                    <img src={tick} alt="" />
                    <p className="middle-pg1-simple">Create adaptive courses so that every student of yours learns at their own pace</p>
                </div>
                <div className="middle-pg1-list">
                    <img src={tick} alt="" />
                    <p className="middle-pg1-simple">This is the world's first course making platform to offer custom learning paths for every student</p>
                </div>
            </div>
            <div className="middle-pg-1-rgt teach-multiple">
                <img src={multiple} alt="" />
            </div>
        </div>

        <div className="mobile-div">
             <hr className="break" style={{margin:'8px 5vw'}}/>
            <div className="middle-pg-2-lft">
                <img src={multiple} alt="" />
            </div>
            <div className="middle-pg-2-rgt">
    
                <p className="middle-pg1-head"><span className="different">Multiple learning paths</span><br/>for customised education</p>
                <div className="middle-pg1-list">
                    <img src={tick} alt="" />
                    <p className="middle-pg1-simple">Create adaptive courses so that every student of yours learns at their own pace</p>
                </div>
                <div className="middle-pg1-list">
                    <img src={tick} alt="" />
                    <p className="middle-pg1-simple">This is the world's first course making platform to offer custom learning paths for every student</p>
                </div>
            </div>
        </div>

        <div className="middle-pg-1">
            <div className="middle-pg-2-lft">
                <img src={tools} alt="" />
            </div>
            <div className="middle-pg-2-rgt">
    
                <p className="middle-pg1-head">Built-in next generation <span className="visualisation"> visualisation tools</span></p>
                <div className="middle-pg1-list">
                    <img src={tick} alt="" />
                    <p className="middle-pg1-simple">Your students will be able to pick your content apart with their own hands and interact with it</p>
                </div>
                <div className="middle-pg1-list">
                    <img src={tick} alt="" />
                    <p className="middle-pg1-simple">Our platform will help you make courses more immersive than you can ever imagine</p>
                </div>
            </div>
        </div>
 
        <div className="middle-pg-1 not-for-mobile">
            <div className="middle-pg-1-lft">
                <p className="middle-pg1-head"><span className="practical">Public profile</span> for<br/>  every instructor</p>
                <div className="middle-pg1-list">
                    <img src={tick} alt="" />
                    <p className="middle-pg1-simple">Build a following by mentoring your students one on one and helping them tackle the journey ahead</p>
                </div>
                <div className="middle-pg1-list">
                    <img src={tick} alt="" />
                    <p className="middle-pg1-simple">Our tutors become life coaches to the next generation of prodigies</p>
                </div>
            </div>
            <div className="middle-pg-1-rgt">
                <img src={profile} alt="" />
            </div>
        </div>

        <div className="mobile-div">
            <div className="middle-pg-2-lft">
                <img src={profile} alt="" />
            </div>
            <div className="middle-pg-2-rgt">
    
                <p className="middle-pg1-head"><span className="practical">Public profile</span> for<br/>  every instructor</p>
                <div className="middle-pg1-list">
                    <img src={tick} alt="" />
                    <p className="middle-pg1-simple">Build a following by mentoring your students one on one and helping them tackle the journey ahead</p>
                </div>
                <div className="middle-pg1-list">
                    <img src={tick} alt="" />
                    <p className="middle-pg1-simple">Our tutors become life coaches to the next generation of prodigies</p>
                </div>
            </div>
        </div>

        <div className="middle-pg-1">
            <div className="middle-pg-2-lft">
                <img src={analytics} alt="" />
            </div>
            <div className="middle-pg-2-rgt">
    
                <p className="middle-pg1-head"><span className="different">Course analytics<br/></span>to stay a step ahead</p>
                <div className="middle-pg1-list">
                    <img src={tick} alt="" />
                    <p className="middle-pg1-simple">Get automated feedback metrics which help you understand how your students are faring in courses</p>
                </div>
                <div className="middle-pg1-list">
                    <img src={tick} alt="" />
                    <p className="middle-pg1-simple">We use intelligent systems to provide you with suggestions on how you can improve your course</p>
                </div>
            </div>
        </div>

        <div className="middle-pg-1 not-for-mobile">
            <div className="middle-pg-1-lft">
                <p className="middle-pg1-head"><span className="scholarship">Feynman network</span> for better outreach</p>
                <div className="middle-pg1-list">
                    <img src={tick} alt="" />
                    <p className="middle-pg1-simple">Focus on the course, leave the marketing to our expert marketing team</p>
                </div>
                <div className="middle-pg1-list">
                    <img src={tick} alt="" />
                    <p className="middle-pg1-simple">We ensure that your course reaches thousand of students who are trying to learn the topics that you are teaching</p>
                </div>
            </div>
            <div className="middle-pg-1-rgt">
                <img src={network} alt="" />
            </div>
        </div>

        <div className="mobile-div">
            <div className="middle-pg-2-lft">
                <img src={network} alt="" />
            </div>
            <div className="middle-pg-2-rgt">
    
                <p className="middle-pg1-head"><span className="scholarship">Feynman network</span> for better outreach</p>
                <div className="middle-pg1-list">
                    <img src={tick} alt="" />
                    <p className="middle-pg1-simple">We will ensure that your course reaches thousand of students who are trying to learn the topics which you will be teaching.</p>
                </div>
                <div className="middle-pg1-list">
                    <img src={tick} alt="" />
                    <p className="middle-pg1-simple">Focus on the course, leave the marketing to us.</p>
                </div>
            </div>
        </div>
        <div className="footer-page">
            <hr className="break"/>
            <div className="main-content">
                    <div className="text-para">
                        <p className="main-para">Coming Soon, <br/>Join Now</p>
                        <div className="phone-num">
                        <select className="country-code">
                            <option value="+91" defaultValue>+91</option>
                            <option value="+1">+1</option>
                            <option value="+92">+92</option>
                            <option value="+7">+7</option>
                            <option value="+344">+344</option>
                            <option value="+672">+672</option>
                            <option value="+43">+43</option>
			            </select>
                        <img src={dropdown} className="dropdown" alt=""/>
                        
                        <input type="text" className="phoneno" name="phoneno" placeholder="Phone number" onChange={phonehandleChange}/>
                        </div>
                        <button className="submit-btn" onClick={() => openlogin('signup')}><p>Join Now</p></button>
                    </div>

            </div>
            <hr className="break"/>
        </div>
        
        <div className="footer">
            <div className="Feynman">
                <p className="head-text">THE FEYNMAN SCHOOL</p>
                <p className="Simple-Text">&copy;2010—2020</p>
                <p className="Simple-Text mb-4">Privacy—Terms</p>
                <a href="https://www.facebook.com/thefeynmanschool/" target="_blank" rel="noopener noreferrer"><img className="facebook" src={facebook} alt="Facebook" /></a>
                <a href="https://www.youtube.com/channel/UCk0jfiNeFKyn3GYxMtHCkcQ" target="_blank" rel="noopener noreferrer"><img className="youtube" src={youtube} alt="Youtube" /></a>
            </div>
            <div className="About">
                <p className="head-text">About</p>
                <a href="/learn"><p className="Simple-Text">Blog</p></a>
                <a href="/learn"><p className="Simple-Text">News</p></a>
                <a href="/learn"><p className="Simple-Text">Testimonials</p></a>
                <a href="/learn"><p className="Simple-Text">Team</p></a>
            </div>
            <div className="Contact">
                <p className="head-text">Contact Us</p>
                <p className="Simple-Text">Phone: 9637842074</p>
                <p className="Simple-Text">Email: support@thefeynmanschool.com</p>
            </div>
        </div>
        </div>
      
    )
}
 
export default Teach;