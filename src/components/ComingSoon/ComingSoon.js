import React, { useState, useEffect, useContext} from 'react';
import {calculateTimeLeft} from './../Learn/Learn';
import fire from '../../custom/Fire';

import { AuthContext } from '../../custom/auth-context';

//imported the scss file
import './../Learn/learn.scss';
import './ComingSoon.scss';

import logo from './../../Graphics/logo.png';
import cross from './../../Graphics/cross.png';
import menu_icon from './../../Graphics/menu_icon.png'

const ComingSoon = () => {
    const { currentUser } = useContext(AuthContext);
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
     }, 60000);
    });

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


       
    return(
        <div className="coming-container">
             <div id="header" className="header">
           <a href="/"><img className="logo" src={logo} alt="Feynman School" /></a> 
           <img src={menu_icon} alt="" id="menu_icon" onClick={opensidebar}/>
            <div className="homepage-head-text">
                <a className="link-txt" href='/learn'>Learn</a>
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
            
            <div className="coming-soon">
                <p>Congratulations {currentUser.displayName} for signing up! We will personally notify you when our app launches</p>
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


        </div>
    )

}
export default ComingSoon;