//React
import React, {useContext} from 'react';
import fire from '../../custom/Fire';
import { AuthContext } from '../../custom/auth-context';


//imported the graphics
import logo from './../../Graphics/logo.png';
import cross from './../../Graphics/cross.png';
import menu_icon from './../../Graphics/menu_icon.png'
import profilephoto from './../../Graphics/profilephoto.svg'
import dashboard from './../../Graphics/dashboard.svg';
import courses from './../../Graphics/courses.svg';
import drafts from './../../Graphics/drafts.svg';
import analytics from './../../Graphics/analytics.svg';
import profile from './../../Graphics/profile.svg';
import settings from './../../Graphics/settings.svg';
import img1 from './../../Graphics/img1.png';
import img2 from './../../Graphics/img2.png';
import img3 from './../../Graphics/img3.png';



//  imported scss
import '../Learn/learn.scss';
import './TeachProfile.scss';

const TeachProfile = () => {
    const { currentUser } = useContext(AuthContext);


    window.onscroll = () => {
            if(window.scrollY <= 150){
              document.querySelector('#header').className = 'header' ;
              document.querySelector('#header').style.top = '-80px';
              document.getElementById('Create').style.top = '92px';
              document.getElementById('signUp').style.top = '96px'
              document.getElementById('sign-in-mobile').style.marginTop = '79px'
              document.getElementById('menu_icon').style.top = '90px'
              document.getElementById('sidebar').style.marginTop = '-82px';
            } else if(window.scrollY >= 150){ 
                document.querySelector('#header').className = 'header mini' ;
                document.querySelector('#header').style.top = '-10px';
                document.getElementById('Create').style.top = '20px'
                document.getElementById('signUp').style.top = '25px'
                document.getElementById('sign-in-mobile').style.marginTop = '14px'
                document.getElementById('menu_icon').style.top = '21px'
                document.getElementById('sidebar').style.marginTop = '46px';
            
              }; 
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
        <div className="teachprofile">
            <div id="header" className="header">
               <a href="/"><img className="logo" src={logo} alt="Feynman School" /></a> 
               <img src={menu_icon} alt="" id="menu_icon" onClick={opensidebar}/>
                <div className="homepage-head-text">
                    <a className="link-txt" href='/learn' id="learn">Learn</a>
                </div>
                <div className="homepage-head-text">
                    <a className="link-txt" href='/teach' >Teach</a>
                </div>
                <button onClick={() => console.log('work in progress')} id="Create">Create</button>
                <button onClick={() => fire.auth().signOut()} className="sign-up-btn" id="signUp">Sign Out</button>
                <button onClick={() => fire.auth().signOut()} id="sign-in-mobile">Sign Out</button>

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
            <div className="profile-main">
                <div className="profile-sidebar">
                    <img src={profilephoto} alt=""/>
                    <p className="name">{currentUser.displayName}</p>
                    <ul>
                        <li><img src={dashboard} alt=""/><p  className="selected">Dashboard</p></li>
                        <li><img src={courses} alt=""/><p>Courses</p></li>
                        <li><img src={drafts} alt=""/><p>Drafts</p></li>
                        <li><img src={analytics} alt=""/><p>Analytics</p></li>
                        <li><img src={profile} alt=""/><p>Profile</p></li>
                        <li><img src={settings} alt=""/><p>Settings</p></li>
                    </ul>
                </div>
                <div className="profile-main-content">
                    <p className="profile-main-text">Dashboard</p>
                    <div id="create-course" className="drafts-div">
                        <p className="div-head">Create a Course</p>
                        <div className="start-creating">
                            <p>Use our dedicated interface to <br/> create intuitive and interactive <br/>courses.</p>
                            <button>Start Creating</button>
                        </div>
                    </div>
                    <div className="drafts-div">
                        <p className="div-head">Drafts</p>
                        <div className="course-card-container">
                        <div className="course-card">
                            <img src={img1} alt=""/>
                            <p className="course-name">The business Analyst Course</p>
                            <p className="course-author">By Nishant Soni</p>
                        </div>
                        <div className="course-card">
                            <img src={img2} alt=""/>
                            <p className="course-name">The business Analyst Course</p>
                            <p className="course-author">By Nishant Soni</p>
                        </div>
                        <div className="course-card">
                            <img src={img3} alt=""/>
                            <p className="course-name">The business Analyst Course</p>
                            <p className="course-author">By Nishant Soni</p>
                        </div>
                        <div className="course-card">
                            <img src={img1} alt=""/>
                            <p className="course-name">The business Analyst Course</p>
                            <p className="course-author">By Nishant Soni</p>
                        </div>
                        <div className="course-card">
                            <img src={img2} alt=""/>
                            <p className="course-name">The business Analyst Course</p>
                            <p className="course-author">By Nishant Soni</p>
                        </div>
                    </div>  
                    </div>   
                   <div className="drafts-div">
                        <p className="div-head">My Created Courses</p>
                        <div className="course-card-container">
                        <div className="course-card">
                            <img src={img1} alt=""/>
                            <p className="course-name">The business Analyst Course</p>
                            <p className="course-author">By Nishant Soni</p>
                        </div>
                        <div className="course-card">
                            <img src={img2} alt=""/>
                            <p className="course-name">The business Analyst Course</p>
                            <p className="course-author">By Nishant Soni</p>
                        </div>
                        <div className="course-card">
                            <img src={img3} alt=""/>
                            <p className="course-name">The business Analyst Course</p>
                            <p className="course-author">By Nishant Soni</p>
                        </div>
                        <div className="course-card">
                            <img src={img1} alt=""/>
                            <p className="course-name">The business Analyst Course</p>
                            <p className="course-author">By Nishant Soni</p>
                        </div>
                        <div className="course-card">
                            <img src={img2} alt=""/>
                            <p className="course-name">The business Analyst Course</p>
                            <p className="course-author">By Nishant Soni</p>
                        </div>
                    </div>  
                    </div>

                    

                </div>
            </div>

        </div>
    );


}

export default TeachProfile;