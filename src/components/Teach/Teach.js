//React
import React, { useState,useEffect} from 'react';
// import calculateTimeLeft from './../Learn/Learn'



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

const calculateTimeLeft = () => {
    const difference = +new Date("2020-7-15") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

const Teach = () => {
    const [show , setShow] = useState('');
    const [phoneNum ,setPhoneNum] = useState('');

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
     }, 1000);
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
            document.getElementById('sign-in-mobile').style.marginTop = '13px'
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
                <p onClick={() => openlogin('login')} className="sign-in-btn" id="signIn">Sign In</p>
                <button onClick={() => openlogin('signup')} className="sign-up-btn" id="signUp" >Sign Up</button>
                <button onClick={() => openlogin('login')} id="sign-in-mobile">Sign In</button>

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
                        <p className="main-para" onClick={closeloginsignup} >Be a<br/> teacher of<br/> the future.</p>
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
                        <button className="submit-btn"  onClick={() => openlogin('signup')}><p>Join Now</p></button>
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
            <div className="time-div"><p>{ Math.floor(timeLeft.minutes/10)}</p></div>
            <div className="time-div mr-4"><p className="visualisation">{ timeLeft.minutes%10}</p></div>
           <div className="time-div"><p>{ Math.floor(timeLeft.seconds/10)}</p></div>
            <div className="time-div"><p className="practical">{ timeLeft.seconds%10}</p></div>
            </div>
            <div id="notation">
                <p id="days">Days</p>
                <p>Hours</p>
                <p>Minutes</p>
            </div>
        </div>
        
        
        <div className="learn-container">
            <div className="learn-left">
            <p className="left-main-text">Build the next <br/> <span className="build">generation of course.</span></p>
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
                  <p className="card-subhead">Help your students visualise concept better by making augmented immersive courses</p>
             </div>
             <div className="type-card">
                  <img src={code} alt=""/>
                  <p className="card-head">Code</p>
                  <p className="card-subhead">Create and add coding challenges in your course for practical learning</p>
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
                  <p className="card-subhead">Make concise notes for your sttudents to revise from with our inbuilt templates.</p>
             </div> 
               
            </div>
        </div>

        <div className="middle-pg-1 not-for-mobile">
             
            <div className="middle-pg-1-lft">
                <p className="middle-pg1-head"><span className="different">Multiple learning paths</span><br/>for customised education</p>
                <div className="middle-pg1-list">
                    <img src={tick} alt="" />
                    <p className="middle-pg1-simple">Create adaptive courses so that every student of yours learns at his/her own pace.</p>
                </div>
                <div className="middle-pg1-list">
                    <img src={tick} alt="" />
                    <p className="middle-pg1-simple">We are the world's first courses making platform to offer custom learning paths for students. </p>
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
                    <p className="middle-pg1-simple">Create adaptive courses so that every student of yours learns at his/her own pace.</p>
                </div>
                <div className="middle-pg1-list">
                    <img src={tick} alt="" />
                    <p className="middle-pg1-simple">We are the world's first courses making platform to offer custom learning paths for students. </p>
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
                    <p className="middle-pg1-simple">Our platform will help you make courses more fun and immersive.</p>
                </div>
                <div className="middle-pg1-list">
                    <img src={tick} alt="" />
                    <p className="middle-pg1-simple">Imagine if your students could pick your content apart with their own hands and interact with it.</p>
                </div>
            </div>
        </div>
 
        <div className="middle-pg-1 not-for-mobile">
            <div className="middle-pg-1-lft">
                <p className="middle-pg1-head"><span className="practical">Individual Profile</span> for<br/>  every instructor</p>
                <div className="middle-pg1-list">
                    <img src={tick} alt="" />
                    <p className="middle-pg1-simple">Build  a following by mentoring your students one on one and helping them understand your journey so far.</p>
                </div>
                <div className="middle-pg1-list">
                    <img src={tick} alt="" />
                    <p className="middle-pg1-simple">We offer you an opportunity to be a life coach to all of our students.</p>
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
    
                <p className="middle-pg1-head"><span className="practical">Individual Profile</span> for<br/>  every instructor</p>
                <div className="middle-pg1-list">
                    <img src={tick} alt="" />
                    <p className="middle-pg1-simple">Build  a following by mentoring your students one on one and helping them understand your journey so far.</p>
                </div>
                <div className="middle-pg1-list">
                    <img src={tick} alt="" />
                    <p className="middle-pg1-simple">We offer you an opportunity to be a life coach to all of our students.</p>
                </div>
            </div>
        </div>

        <div className="middle-pg-1">
            <div className="middle-pg-2-lft">
                <img src={analytics} alt="" />
            </div>
            <div className="middle-pg-2-rgt">
    
                <p className="middle-pg1-head"><span className="different">Course Analytics<br/></span>to stay a step ahead</p>
                <div className="middle-pg1-list">
                    <img src={tick} alt="" />
                    <p className="middle-pg1-simple">Get automated feedback metrics which help you understand how your students are faring in your courses.</p>
                </div>
                <div className="middle-pg1-list">
                    <img src={tick} alt="" />
                    <p className="middle-pg1-simple">We will use our intelligent systems to provide you with suggestions on how you can improve your course.</p>
                </div>
            </div>
        </div>

        <div className="middle-pg-1 not-for-mobile">
            <div className="middle-pg-1-lft">
                <p className="middle-pg1-head">Feynman <span className="scholarship"> network</span> for better engagement</p>
                <div className="middle-pg1-list">
                    <img src={tick} alt="" />
                    <p className="middle-pg1-simple">We will ensure that your course reaches thousand of students who are trying to learn the topics which you will be teaching.</p>
                </div>
                <div className="middle-pg1-list">
                    <img src={tick} alt="" />
                    <p className="middle-pg1-simple">Focus on the course, leave the marketing to us.</p>
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
    
                <p className="middle-pg1-head">Feynman <span className="scholarship"> network</span> for better engagement</p>
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
                <p className="head-text">FEYNMAN</p>
                <p className="Simple-Text">&copy;2010—2020</p>
                <p className="Simple-Text mb-4">Privacy—Terms</p>
                <a href="https://www.facebook.com/thefeynmanschool/" target="_blank" rel="noopener noreferrer"><img className="facebook" src={facebook} alt="Facebook" /></a>
                <a href="https://www.youtube.com/channel/UCk0jfiNeFKyn3GYxMtHCkcQ" target="_blank" rel="noopener noreferrer"><img className="youtube" src={youtube} alt="Youtube" /></a>
            </div>
            <div className="About">
                <p className="head-text">About</p>
                <a href="/learn"><p className="Simple-Text">Timeline</p></a>
                <a href="/learn"><p className="Simple-Text">Testimonials</p></a>
                <a href="/learn"><p className="Simple-Text">Feynman in News</p></a>
                <a href="/learn"><p className="Simple-Text">Team</p></a>
            </div>
            <div className="Contact">
                <p className="head-text">Contact Us</p>
                <p className="Simple-Text">Phone: 1800 2255 02</p>
                <p className="Simple-Text">Email: info@feynman.com</p>
            </div>
        </div>
        </div>
      
    )
}
 
export default Teach;