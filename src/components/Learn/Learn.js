//React
import React, { useState, useEffect,useContext} from 'react';
import fire from '../../custom/Fire';
import { AuthContext } from '../../custom/auth-context';


//imported the graphics
import logo from './../../Graphics/logo.png';
import cross from './../../Graphics/cross.png';
import dropdown from './../../Graphics/dropdown.png'
import learnMain from './../../Graphics/learnMain.svg'
import gotonext from './../../Graphics/gotonext.png'
import game from './../../Graphics/game.png'
import vr_ar from './../../Graphics/vr_ar.png'
import code from './../../Graphics/code.png'
import video from './../../Graphics/videos.png'
import comics from './../../Graphics/comics.png'
import text from './../../Graphics/text.png'
import path from './../../Graphics/path.png'
import tick from './../../Graphics/tick.png';
import visualisation from './../../Graphics/visualisation.png'
import project from './../../Graphics/project.png'
import teacher from './../../Graphics/teacher.png'
import scholarship from './../../Graphics/scholarship.png'
import menu_icon from './../../Graphics/menu_icon.png'
import facebook from './../../Graphics/facebook.svg';
import youtube from './../../Graphics/youtube.svg';




//imported the scss file
import './learn.scss';
// module
import Login from '../Login-Signup/Login';

export const calculateTimeLeft = () => {
    const difference = +new Date(2020, 7, 15, 12, 0, 0) - +new Date();
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

const Learn = () => {
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
       
        <div id="learn">
        <div id="backdisable"></div>
        <div className="container1">
            <div id="header" className="header">
               <a href="/"><img className="logo" src={logo} alt="Feynman School" /></a> 
               <img src={menu_icon} alt="" id="menu_icon" onClick={opensidebar}/>
                <div className="homepage-head-text">
                    <a className="link-txt" href='/learn' id="learn">Learn</a>
                </div>
                <div className="homepage-head-text">
                    <a className="link-txt" href='/teach' >Teach</a>
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
                    <li ><a href='/learn' style={{color:"#0099FF"}}>Learn</a></li>
                    <li><a href='/teach'>Teach</a></li>
                    <li>News</li>
                    <li>Blog</li>
                    <li>About us</li>

                </ul>

            </div>
            <div id="login-container">
            <Login show={show} onClick={closeloginsignup} phoneNo={phoneNum}/>
            </div>
        </div>
            <div className="home-main" >                                                             
                <div className="l-main-para-cont">
                    <div className="text-para">
                    <img className="l-main-learn" src={learnMain} alt="" id="learnMainMobile" />
                        <p className="main-para"onClick={closeloginsignup} >Bringing to you the next generation of education</p>
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
                    <img className="l-main-learn" src={learnMain} alt="img not loaded" id="learnMain" />
                </div>
              
            </div>
              <div className="goto-div"><img className="gotonextbox" src={gotonext} alt="" onClick={gotonextbox}/>
              {/* <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_sBpd53.json"  background="transparent"  speed="1"  style={{width: 'Auto', height: '30px'}}  loop controls autoplay></lottie-player> */}
              </div>
              
        <div id="future-depend">
            <p className="app-release">App release in</p>
            <div className="date-time">
            <div className="time-div"><p>{ Math.floor(timeLeft.days/10)}</p></div>
            <div className="time-div right-time" ><p className="different">{ timeLeft.days%10}</p></div>
            <div className="time-div"><p>{ Math.floor(timeLeft.hours/10)}</p></div>
            <div className="time-div right-time"><p className="visualisation">{ timeLeft.hours%10}</p></div>
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
            <p className="left-main-text">Learning is <br/> <span className="build">fun again</span></p>
            <p className="left-sub-heading">Our palette of interactive media makes sure you enjoy your studies</p>
            </div>
            <div className="learn-right">
              <div className="type-card">
                  <img src={game} alt=""/>
                  <p className="card-head">Games</p>
                  <p className="card-subhead">If you can complete the missions, you will pass the course</p>
             </div>
             <div className="type-card">
                  <img src={vr_ar} alt=""/>
                  <p className="card-head">AR/VR</p>
                  <p className="card-subhead">Keep forgetting the reaction? Mix the chemicals with your own hands!</p>
             </div> 
             <div className="type-card">
                  <img src={code} alt=""/>
                  <p className="card-head">Code</p>
                  <p className="card-subhead">Create mini-computers to automate your daily tasks</p>
             </div> 
             <div className="type-card">
                  <img src={video} alt=""/>
                  <p className="card-head">Video</p>
                  <p className="card-subhead">We bring to you videos 2.0! Better immersive videos helping you study faster </p>
             </div> 
             <div className="type-card">
                  <img src={comics} alt=""/>
                  <p className="card-head">Comics</p>
                  <p className="card-subhead">Cartoons and an amazing story will teach you what scientists couldn't</p>
             </div> 
             <div className="type-card">
                  <img src={text} alt=""/>
                  <p className="card-head">Text</p>
                  <p className="card-subhead">Skip through the details and revise with the help of short, crisp topic summaries</p>
             </div> 
               
            </div>
        </div>
        
        <div className="middle-pg-1 not-for-mobile">
             <div className="middle-pg-1-lft">
                <p className="middle-pg1-head">Every person learns<br/> through a<span className="different"> different path</span></p>
                <div className="middle-pg1-list">
                    <img src={tick} alt="" />
                    <p className="middle-pg1-simple">We are the world's first platform to provide customised courses for every individual</p>
                </div>
                <div className="middle-pg1-list">
                    <img src={tick} alt="" />
                    <p className="middle-pg1-simple">We understand that you are different, you are unique and you have your own way of learning</p>
                </div>
            </div>
            <div className="middle-pg-1-rgt">
                <img src={path} alt="" />
            </div>
        </div>

        <div className="mobile-div">
             <hr className="break" style={{margin:'8px 5vw'}}/>
            <div className="middle-pg-2-lft">
                <img src={path} alt="" />
            </div>
            <div className="middle-pg-2-rgt">
                <p className="middle-pg1-head">Every person learns through a<span className="different"> different path</span></p>
                <div className="middle-pg1-list">
                    <img src={tick} alt="" />
                    <p className="middle-pg1-simple">We are the world's first platform to provide customised courses for every individual</p>
                </div>
                <div className="middle-pg1-list">
                    <img src={tick} alt="" />
                    <p className="middle-pg1-simple">We understand that you are different, you are unique and you have your own way of learning</p>
                </div>
            </div>
        </div>

        <div className="middle-pg-1">
            <div className="middle-pg-2-lft">
                <img src={visualisation} alt="" />
            </div>
            <div className="middle-pg-2-rgt">
    
                <p className="middle-pg1-head">Interact with the content for <span className="visualisation">better visualisation</span></p>
                <div className="middle-pg1-list">
                    <img src={tick} alt="" />
                    <p className="middle-pg1-simple">Imagine if you could dive deep into the content and explore the areas that interest you</p>
                </div>
                <div className="middle-pg1-list">
                    <img src={tick} alt="" />
                    <p className="middle-pg1-simple">We bring to you a playground where you can choose your own toys, play with them and build your own picture of how they work</p>
                </div>
            </div>
        </div>

        <div className="middle-pg-1 not-for-mobile">
            <div className="middle-pg-1-lft">
                <p className="middle-pg1-head"><span className="practical"> Practical projects</span> for<br/>  every student</p>
                <div className="middle-pg1-list">
                    <img src={tick} alt="" />
                    <p className="middle-pg1-simple">The best way to learn is by implementing what you study</p>
                </div>
                <div className="middle-pg1-list">
                    <img src={tick} alt="" />
                    <p className="middle-pg1-simple">Every course of ours helps you add a project to your portfolio</p>
                </div>
            </div>
            <div className="middle-pg-1-rgt">
                <img src={project} alt="" />
            </div>
        </div>
 
        <div className="mobile-div">
            <div className="middle-pg-2-lft">
                <img src={project} alt="" />
            </div>
            <div className="middle-pg-2-rgt">
    
                <p className="middle-pg1-head"><span className="practical"> Practical projects</span> for<br/>  every student</p>
                <div className="middle-pg1-list">
                    <img src={tick} alt="" />
                    <p className="middle-pg1-simple">The best way to learn is by implementing what you study</p>
                </div>
                <div className="middle-pg1-list">
                    <img src={tick} alt="" />
                    <p className="middle-pg1-simple">Every course of ours helps you add a project to your portfolio</p>
                </div>
            </div>
        </div>

        <div className="middle-pg-1">
            <div className="middle-pg-2-lft">
                <img src={teacher} alt="" />
            </div>
            <div className="middle-pg-2-rgt">
    
                <p className="middle-pg1-head"><span className="different">Experienced teachers<br/></span> for perfect learning</p>
                <div className="middle-pg1-list">
                    <img src={tick} alt="" />
                    <p className="middle-pg1-simple">Our teachers, will also be your personal mentors and life coaches</p>
                </div>
                <div className="middle-pg1-list">
                    <img src={tick} alt="" />
                    <p className="middle-pg1-simple">They are the best because they have been through everything you are going through</p>
                </div>
            </div>
        </div>

        <div className="middle-pg-1 not-for-mobile">
            <div className="middle-pg-1-lft">
                <p className="middle-pg1-head">Feynman<span className="scholarship"> scholarship</span> for the brightest talents</p>
                <div className="middle-pg1-list">
                    <img src={tick} alt="" />
                    <p className="middle-pg1-simple">Work hard, leave the finances to us. We believe that education should be accessible to everyone</p>
                </div>
                <div className="middle-pg1-list">
                    <img src={tick} alt="" />
                    <p className="middle-pg1-simple">To promote our beliefs, we will pay our students to learn. Our scholarships let you focus on your studies</p>
                </div>
            </div>
            <div className="middle-pg-1-rgt">
                <img src={scholarship} alt="" />
            </div>
        </div>

        <div className="mobile-div">
            <div className="middle-pg-2-lft">
                <img src={scholarship} alt="" />
            </div>
            <div className="middle-pg-2-rgt">
    
                <p className="middle-pg1-head">Feynman<span className="scholarship"> scholarship</span> for the brightest talents</p>
                <div className="middle-pg1-list">
                    <img src={tick} alt="" />
                    <p className="middle-pg1-simple">Education should be accessible to everyone , but not everyone can afford education.</p>
                </div>
                <div className="middle-pg1-list">
                    <img src={tick} alt="" />
                    <p className="middle-pg1-simple">Therefore we, at the Feynman school, pay you to learn.</p>
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
                        <button className="submit-btn" onClick={() => openlogin('signup')} ><p>Join Now</p></button>
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

export default Learn;