//React
import React, {useState , useContext, useEffect} from 'react';
import { useHistory} from "react-router-dom";
import fire from '../../custom/Fire';
import { AuthContext } from '../../custom/auth-context';
import firebase from 'firebase';

//imported the graphics
import logo from './../../Graphics/logo.png';
import cross from './../../Graphics/cross.png';
import menu_icon from './../../Graphics/menu_icon.png'
import profilephoto from './../../Graphics/profilephoto.png'
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

const storage = firebase.storage();

const TeachProfile = () => {
    const { currentUser } = useContext(AuthContext);
    const history = useHistory();
    const [course, setCourse] = useState([]);
    // console.log(course)
   
    useEffect(() => { fetchcourse() }, [] );

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

    const fetchcourse = () => {
            const listRef = storage.ref().child(`users/${currentUser.displayName}`);
            // Find all the prefixes and items.
            listRef.listAll().then(function(res) {
                res.prefixes.forEach(function(folderRef) {
                 setCourse(prevState => [...prevState , folderRef]);
                });
            }).catch(function(error) {
                console.log(error);
            });
    }
    
    return (
        <div className="teachprofile">
            <div id="backdisable"></div>
            <div id="header" className="header">
               <a href="/"><img className="logo" src={logo} alt="Feynman School" /></a> 
               <img src={menu_icon} alt="" id="menu_icon" onClick={opensidebar}/>
                <div className="homepage-head-text">
                    <a className="link-txt" href='/learn' >Learn</a>
                </div>
                <div className="homepage-head-text">
                    <a className="link-txt" href='/teach' style={{color:"#0099FF"}}>Teach</a>
                </div>
                <button onClick={() => history.push(`/teach/${currentUser.displayName}/course`)} id="Create">Create</button>
                <button onClick={() => fire.auth().signOut()} className="sign-up-btn" id="signUp">Sign Out</button>
                <button onClick={() => fire.auth().signOut()} id="sign-in-mobile">Sign Out</button>

            </div>
            <div  id="sidebar">
                <img src={cross} alt="" id="cross" onClick={closesidebar}/>
                <ul>
                    <li ><a href='/learn'>Learn</a></li>
                    <li><a href='/teach' style={{color:"#0099FF"}}>Teach</a></li>
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
                            <button onClick={() => history.push(`/teach/${currentUser.displayName}/course`)}>Start Creating</button>
                        </div>
                    </div>
                    <div className="drafts-div">
                        <p className="div-head">Your Courses</p>
                        <div className="course-card-container">
                        {course.map(element => (
                        <div className="course-card" key={element.name} onClick={() => history.push(`/teach/${currentUser.displayName}/${element.name}/0`)}>
                            <img src={img1} alt=""/>
                            <p className="course-name">{element.name}</p>
                            <p className="course-author">By {element.parent.name}</p>
                        </div>
                        ))}
                    </div>  
                    </div>   
                </div>
            </div>

        </div>
    );


}

export default TeachProfile;