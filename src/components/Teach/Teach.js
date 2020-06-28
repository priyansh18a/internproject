//React
import React, { useState} from 'react';
import { Link } from 'react-router-dom';


//imported the graphics
import logo from './../../Graphics/logo.png';
import cross from './../../Graphics/cross.png';
import dropdown from './../../Graphics/dropdown.png'
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
    const [show , setShow] = useState('');
    const [phoneNum ,setPhoneNum] = useState('');

    const openlogin = whattoshow => {
        document.getElementById('login-container').style.display = "block";
        setShow(whattoshow);
        document.getElementById('sidebar').style.display = "none";
        document.getElementById('menu_icon').style.display = "block";
        document.getElementById('cross').style.display = "none";
        var elmnt = document.getElementById("login-container");
        elmnt.scrollIntoView();
    }

    const phonehandleChange = event => {
        setPhoneNum(event.target.value);
    }

    const closeloginsignup = () => {
        document.getElementById('login-container').style.display = "none"; 
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
        <React.Fragment>
        <div className="container1">
            <div className="header">
               <a href="/"><img className="logo" src={logo} alt="Feynman School" /></a> 
               <img src={menu_icon} alt="" id="menu_icon" onClick={opensidebar}/>
                <div className="homepage-head-text">
                    <a className="link-txt" href='/learn'>Learn</a>
                </div>
                <div className="homepage-head-text">
                    <a className="link-txt" href='/teach'>Teach</a>
                </div>
                <Link onClick={() => openlogin('login')} className="sign-in-btn">Sign In</Link>
                <button onClick={() => openlogin('signup')} className="sign-up-btn" id>Sign Up</button>
                <button onClick={() => openlogin('login')} id="sign-in-mobile">Sign In</button>

            </div>
            <div  id="sidebar">
                <img src={cross} alt="" id="cross" onClick={closesidebar}/>
                <ul>
                    <li><a href='/learn'>Learn</a></li>
                    <li><a href='/teach'>Teach</a></li>
                    <li>News</li>
                    <li>Blog</li>
                    <li>About us</li>

                </ul>

            </div>
            <div id="login-container">
            <Login show={show} onClick={closeloginsignup} phoneNo={phoneNum}/>
            </div>

            <div className="home-main" >                                                             
                <div className="l-main-para-cont">
                    <div className="text-para">
                        <p className="main-para"onClick={closeloginsignup} >Better education? <br/> All you will need is your imagination.</p>
                        <div className="phone-num" onClick={closeloginsignup}>
                        <select className="country-code">
                            <option value="+91" selected>+91</option>
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
                    <p className="privacy">*You will be notified of updates on upcoming courses of Feynman on your phone.</p>
                    </div>
                </div>
                <div className="main-image-cont" onClick={closeloginsignup}>
                    {/* <img className="l-main-learn" src={} alt="" /> */}
                </div>
              
            </div>
              <div className="goto-div"><img className="gotonextbox" src={gotonext} alt="" onClick={gotonextbox}/></div>
        </div>
        <div id="future-depend">
          <p>The future depend on <br/> what we do in present</p>
        </div>
        
        <div className="learn-container">
            <div className="learn-left">
            <p className="left-main-text">Learn as you <br/> <span className="build">build</span></p>
            <p className="left-sub-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tellus vel id sapien bibendum turpis.</p>
            </div>
            <div className="learn-right">
              <div className="type-card">
                  <img src={game} alt=""/>
                  <p className="card-head">Games</p>
                  <p className="card-subhead">Play games to understand what it takes to grasp a subject Multiple levels and adaptive difficulty</p>
             </div>
             <div className="type-card">
                  <img src={vr_ar} alt=""/>
                  <p className="card-head">AR/VR</p>
                  <p className="card-subhead">Play games to understand what it takes to grasp a subject Multiple levels and adaptive difficulty</p>
             </div> 
             <div className="type-card">
                  <img src={code} alt=""/>
                  <p className="card-head">Code</p>
                  <p className="card-subhead">Play games to understand what it takes to grasp a subject Multiple levels and adaptive difficulty</p>
             </div> 
             <div className="type-card">
                  <img src={video} alt=""/>
                  <p className="card-head">Video</p>
                  <p className="card-subhead">Play games to understand what it takes to grasp a subject Multiple levels and adaptive difficulty</p>
             </div> 
             <div className="type-card">
                  <img src={comics} alt=""/>
                  <p className="card-head">Comics</p>
                  <p className="card-subhead">Play games to understand what it takes to grasp a subject Multiple levels and adaptive difficulty</p>
             </div> 
             <div className="type-card">
                  <img src={text} alt=""/>
                  <p className="card-head">Text</p>
                  <p className="card-subhead">Play games to understand what it takes to grasp a subject Multiple levels and adaptive difficulty</p>
             </div> 
               
            </div>
        </div>

        <div className="middle-pg-1 not-for-mobile">
             
            <div className="middle-pg-1-lft">
                <p className="middle-pg1-head"><span className="different">Multiple learning path</span><br/>for customised education</p>
                <p className="middle-pg1-simple">Use a variety of mediums to teach the most difficult of concepts with ease.</p>
                <div className="middle-pg1-list">
                    <img src={tick} alt="" />
                    <p className="middle-pg1-simple">Use a variety of mediums to teach the most difficult of concepts with ease.</p>
                </div>
                <div className="middle-pg1-list">
                    <img src={tick} alt="" />
                    <p className="middle-pg1-simple">Use a variety of mediums to teach the most difficult of concepts with ease.</p>
                </div>
            </div>
            <div className="middle-pg-1-rgt">
                <img src={multiple} alt="" />
            </div>
        </div>

        <div className="mobile-div">
             <hr className="break" style={{margin:'8px 5vw'}}/>
            <div className="middle-pg-2-lft">
                <img src={multiple} alt="" />
            </div>
            <div className="middle-pg-2-rgt">
    
                <p className="middle-pg1-head"><span className="different">Multiple learning path</span><br/>for customised education</p>
                <p className="middle-pg1-simple">Use a variety of mediums to teach the most difficult of concepts with ease.</p>
                <div className="middle-pg1-list">
                    <img src={tick} alt="" />
                    <p className="middle-pg1-simple">Use a variety of mediums to teach the most difficult of concepts with ease.</p>
                </div>
                <div className="middle-pg1-list">
                    <img src={tick} alt="" />
                    <p className="middle-pg1-simple">Use a variety of mediums to teach the most difficult of concepts with ease.</p>
                </div>
            </div>
        </div>

        <div className="middle-pg-1">
            <div className="middle-pg-2-lft">
                <img src={tools} alt="" />
            </div>
            <div className="middle-pg-2-rgt">
    
                <p className="middle-pg1-head">Built-in next generation <span className="visualisation"> visualisation tools</span></p>
                <p className="middle-pg1-simple">Use a variety of mediums to teach the most difficult of concepts with ease.</p>
                <div className="middle-pg1-list">
                    <img src={tick} alt="" />
                    <p className="middle-pg1-simple">Use a variety of mediums to teach the most difficult of concepts with ease.</p>
                </div>
                <div className="middle-pg1-list">
                    <img src={tick} alt="" />
                    <p className="middle-pg1-simple">Use a variety of mediums to teach the most difficult of concepts with ease.</p>
                </div>
            </div>
        </div>
 
        <div className="middle-pg-1 not-for-mobile">
            <div className="middle-pg-1-lft">
                <p className="middle-pg1-head"><span className="practical">Individual Profile</span> for<br/>  every instructor</p>
                <p className="middle-pg1-simple">Use a variety of mediums to teach the most difficult of concepts with ease.</p>
                <div className="middle-pg1-list">
                    <img src={tick} alt="" />
                    <p className="middle-pg1-simple">Use a variety of mediums to teach the most difficult of concepts with ease.</p>
                </div>
                <div className="middle-pg1-list">
                    <img src={tick} alt="" />
                    <p className="middle-pg1-simple">Use a variety of mediums to teach the most difficult of concepts with ease.</p>
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
                <p className="middle-pg1-simple">Use a variety of mediums to teach the most difficult of concepts with ease.</p>
                <div className="middle-pg1-list">
                    <img src={tick} alt="" />
                    <p className="middle-pg1-simple">Use a variety of mediums to teach the most difficult of concepts with ease.</p>
                </div>
                <div className="middle-pg1-list">
                    <img src={tick} alt="" />
                    <p className="middle-pg1-simple">Use a variety of mediums to teach the most difficult of concepts with ease.</p>
                </div>
            </div>
        </div>

        <div className="middle-pg-1">
            <div className="middle-pg-2-lft">
                <img src={analytics} alt="" />
            </div>
            <div className="middle-pg-2-rgt">
    
                <p className="middle-pg1-head"><span className="different">Course Analytics<br/></span>to stay a step ahead</p>
                <p className="middle-pg1-simple">Use a variety of mediums to teach the most difficult of concepts with ease.</p>
                <div className="middle-pg1-list">
                    <img src={tick} alt="" />
                    <p className="middle-pg1-simple">Use a variety of mediums to teach the most difficult of concepts with ease.</p>
                </div>
                <div className="middle-pg1-list">
                    <img src={tick} alt="" />
                    <p className="middle-pg1-simple">Use a variety of mediums to teach the most difficult of concepts with ease.</p>
                </div>
            </div>
        </div>

        <div className="middle-pg-1 not-for-mobile">
            <div className="middle-pg-1-lft">
                <p className="middle-pg1-head">Feynman <span className="scholarship"> network</span> for better engagement</p>
                <p className="middle-pg1-simple">Use a variety of mediums to teach the most difficult of concepts with ease.</p>
                <div className="middle-pg1-list">
                    <img src={tick} alt="" />
                    <p className="middle-pg1-simple">Use a variety of mediums to teach the most difficult of concepts with ease.</p>
                </div>
                <div className="middle-pg1-list">
                    <img src={tick} alt="" />
                    <p className="middle-pg1-simple">Use a variety of mediums to teach the most difficult of concepts with ease.</p>
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
                <p className="middle-pg1-simple">Use a variety of mediums to teach the most difficult of concepts with ease.</p>
                <div className="middle-pg1-list">
                    <img src={tick} alt="" />
                    <p className="middle-pg1-simple">Use a variety of mediums to teach the most difficult of concepts with ease.</p>
                </div>
                <div className="middle-pg1-list">
                    <img src={tick} alt="" />
                    <p className="middle-pg1-simple">Use a variety of mediums to teach the most difficult of concepts with ease.</p>
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
                            <option value="+91" selected>+91</option>
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
        
                    <p className="privacy">*You will be notified of updates on upcoming courses of Feynman on your phone.</p>
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
        </React.Fragment>
    )
}
 
export default Teach;