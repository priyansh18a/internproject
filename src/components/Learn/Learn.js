//React
import React from 'react';

//imported the graphics
import logo from './../../Graphics/logo.svg';
import main_learn from './../../Graphics/main_learn.svg';
import pen from './../../Graphics/pen.svg';
import star from './../../Graphics/star.svg';
import torch from './../../Graphics/torch.svg';
import key from './../../Graphics/key.svg';
import learn_combined from './../../Graphics/learn_combined.svg';
import person from './../../Graphics/person.svg';
import css_cpp from './../../Graphics/css_cpp.svg';
import practical_for_student from './../../Graphics/practical_for_student.svg';
import experienced_teachers from './../../Graphics/experienced_teachers.svg';
import scholarship from './../../Graphics/scholarship.svg';
import astronaut from './../../Graphics/astronaut.svg';
import facebook from './../../Graphics/facebook.svg';
import youtube from './../../Graphics/youtube.svg';
import game from './../../Graphics/game.svg';
import text from './../../Graphics/text.svg';
import code from './../../Graphics/code.svg';
import ar_vr from './../../Graphics/ar_vr.svg';
import video from './../../Graphics/video.svg';
import comic from './../../Graphics/comic.svg';
import tick from './../../Graphics/tick.svg';


//imported the scss file
import './learn.scss';
// module
import Login from '../Login-Signup/Login';

const Homepage = () => {

    const openlogin = () => {
        console.log('this works');
        document.getElementById('login-container').style.display = "block";
    }

    return (
        <div className="container1">
            <div className="header">
                <div className="homepage-logo">
                    <img className="logo" src={logo} alt="Feynman School" />
                </div>
                <div className="homepage-head-text">
                    <a className="link-txt" href='/learn'><text>Learn</text></a>
                </div>
                <div className="homepage-head-text">
                    <a className="link-txt" href='/teach'>Teach</a>
                </div>
                <div className="signin-btn-homepage">
                    <button onClick={openlogin} className="sign-in-btn"><span className="signin-btn-txt">Sign In</span></button>
                </div>
                <div className="signup-btn-homepage">
                    <button onClick={openlogin} className="sign-up-btn"><span className="signup-btn-txt">Sign Up</span></button>
                </div>
            </div>
            <div id="login-container">
            <Login/>
            </div>
            <div className="home-main">                                                             
                <div className="l-main-para-cont">
                    <div className="text-para">
                        <text className="main-text">Now, medium </text><img className="pen" src={pen} alt="" /><text className="main-text"> wont be a restriction to teach </text><img className="star" src={star} alt="" /><text className="main-text"> concepts.</text><text className="main-text-light"> Better education? </text><img className="torch" src={torch} alt="" /><text className="main-text"> All you will need is your imagination. </text><img className="key" src={key} alt="" />
                    </div>
                    {/* <form>
                        <input type="text" id="phoneno" name="phoneno" placeholder="Phone Number"></input>
                        <input className="submit-btn"type="submit" value="Submit"/>
                    </form> */}
                </div>
                <div className="main-image-cont">
                    <img className="l-main-learn" src={main_learn} alt="" />
                </div>
            </div>
        </div>
    )
}

const Footer = () => {
    return (
        <div className="footer">
            <div className="Feynman">
                <text className="head-text">FEYNMAN</text>
                <br />
                <text className="Simple-Text">&copy;2010—2020</text>
                <text className="Simple-Text">Privacy—Terms</text>
                <a href="https://www.facebook.com/thefeynmanschool/" target="_blank" rel="noopener noreferrer"><img className="facebook" src={facebook} alt="Facebook" /></a>
                <a href="https://www.youtube.com/channel/UCk0jfiNeFKyn3GYxMtHCkcQ" target="_blank" rel="noopener noreferrer"><img className="youtube" src={youtube} alt="Youtube" /></a>
            </div>
            <div className="About">
                <text className="head-text">About</text>
                <a href="/#/teach"><text className="Simple-Text">Timeline</text></a>
                <a href="/#/teach"><text className="Simple-Text">Testimonials</text></a>
                <a href="/#/teach"><text className="Simple-Text">Feynman in News</text></a>
                <a href="/#/teach"><text className="Simple-Text">Team</text></a>
            </div>
            <div className="Contact">
                <text className="head-text">Contact Us</text>
                <text className="Simple-Text">Phone: 1800 2255 02</text>
                <text className="Simple-Text">Email: info@feynman.com</text>
            </div>
        </div>
    )
}

const FooterPage = () => {
    return (
        <div className="footer-page">
            <div className="upper-half">
                <img class="astronaut" src={astronaut} alt="" />
            </div>
            <div className="lower-half">
                <text className="big-text-footer-pg">Coming Soon</text>
                <text className="small-text-footer-pg">Sign up to stay notified</text>
                <div className="footer-submit-btn">
                    <button className="button-footer-pg" type="button"><text className="button-text-footer-pg">Sign Up for Demo</text></button>
                </div>
            </div>
        </div>
    )
}

const GridPage = () => {
    return (
        <React.Fragment>
            <div className="grid-head">
                {/* <img src={person} alt="" /> */}
                <text className="grid-head-bold-text">Learn as you build</text>
            </div>
            <div className="grid-page-row1">
                <div className="box1">
                    <text className="box-head">Games</text>
                    <div className="grid-img-container"><img class="game-pic" src={game} alt="" /></div>
                </div>
                <div className="box1">
                    <text className="box-head">Text</text>
                    <div className="grid-img-container"><img class="text-pic" src={text} alt="" /></div>
                </div>
                <div className="box1">
                    <text className="box-head">Code</text>
                    <div className="grid-img-container"><img class="code-pic" src={code} alt="" /></div>
                </div>
            </div>
            <div className="grid-page-row2">
                <div className="box1">
                    <text className="box-head">AR/VR</text>
                    <div className="grid-img-container"><img class="arvr-pic" src={ar_vr} alt="" /></div>
                </div>
                <div className="box1">
                    <text className="box-head">Video</text>
                    <div className="grid-img-container"><img class="video-pic" src={video} alt="" /></div>
                </div>
                <div className="box1">
                    <text className="box-head">Comic</text>
                    <div className="grid-img-container"><img class="comic-pic" src={comic} alt="" /></div>
                </div>
            </div>
        </React.Fragment>
    )
}

const Middle_Page1 = () => {
    return (
        <div className="middle-pg-1">
            <div className="middle-pg-1-lft">
                <img src={person} alt="" />
                <text className="middle-pg1-head">Every person learns through a different path</text>
                <text className="middle-pg1-simple">Use a variety of mediums to teach the most difficult of concepts with ease.</text>
                <div className="middle-pg1-list">
                    <img src={tick} alt="" />
                    <text className="middle-pg1-simple">Use a variety of mediums to teach the most difficult of concepts with ease.</text>
                </div>
                <div className="middle-pg1-list">
                    <img src={tick} alt="" />
                    <text className="middle-pg1-simple">Use a variety of mediums to teach the most difficult of concepts with ease.</text>
                </div>
            </div>
            <div className="middle-pg-1-rgt">
                <img src={learn_combined} alt="" />
            </div>
        </div>
    )
}

const Middle_Page2 = () => {
    return (
        <div className="middle-pg-2">
            <div className="middle-pg-2-lft">
                <img src={css_cpp} alt="" />
            </div>
            <div className="middle-pg-2-rgt">
                <img src={person} alt="" />
                <text className="middle-pg2-head">Interact with the content for better visualisation</text>
                <text className="middle-pg2-simple">Use a variety of mediums to teach the most difficult of concepts with ease.</text>
                <div className="middle-pg1-list">
                    <img src={tick} alt="" />
                    <text className="middle-pg1-simple">Use a variety of mediums to teach the most difficult of concepts with ease.</text>
                </div>
                <div className="middle-pg1-list">
                    <img src={tick} alt="" />
                    <text className="middle-pg1-simple">Use a variety of mediums to teach the most difficult of concepts with ease.</text>
                </div>
            </div>
        </div>
    )
}

const Middle_Page3 = () => {
    return (
        <div className="middle-pg-1">
            <div className="middle-pg-1-lft">
                <img src={person} alt="" />
                <text className="middle-pg1-head">Pratical projects for every student</text>
                <text className="middle-pg1-simple">Use a variety of mediums to teach the most difficult of concepts with ease.</text>
                <div className="middle-pg1-list">
                    <img src={tick} alt="" />
                    <text className="middle-pg1-simple">Use a variety of mediums to teach the most difficult of concepts with ease.</text>
                </div>
                <div className="middle-pg1-list">
                    <img src={tick} alt="" />
                    <text className="middle-pg1-simple">Use a variety of mediums to teach the most difficult of concepts with ease.</text>
                </div>
            </div>
            <div className="middle-pg-1-rgt">
                <img src={practical_for_student} alt="" />
            </div>
        </div>
    )
}

const Middle_Page4 = () => {
    return (
        <div className="middle-pg-2">
            <div className="middle-pg-2-lft">
                <img src={experienced_teachers} alt="" />
            </div>
            <div className="middle-pg-2-rgt">
                <img src={person} alt="" />
                <text className="middle-pg2-head">Experienced teachers for perfect learning</text>
                <text className="middle-pg2-simple">Use a variety of mediums to teach the most difficult of concepts with ease.</text>
                <div className="middle-pg1-list">
                    <img src={tick} alt="" />
                    <text className="middle-pg1-simple">Use a variety of mediums to teach the most difficult of concepts with ease.</text>
                </div>
                <div className="middle-pg1-list">
                    <img src={tick} alt="" />
                    <text className="middle-pg1-simple">Use a variety of mediums to teach the most difficult of concepts with ease.</text>
                </div>
            </div>
        </div>
    )
}

const Middle_Page5 = () => {
    return (
        <div className="middle-pg-1">
            <div className="middle-pg-1-lft">
                <img src={person} alt="" />
                <text className="middle-pg1-head">Feynman scholarship for the brightest talents</text>
                <text className="middle-pg1-simple">Use a variety of mediums to teach the most difficult of concepts with ease.</text>
                <div className="middle-pg1-list">
                    <img src={tick} alt="" />
                    <text className="middle-pg1-simple">Use a variety of mediums to teach the most difficult of concepts with ease.</text>
                </div>
                <div className="middle-pg1-list">
                    <img src={tick} alt="" />
                    <text className="middle-pg1-simple">Use a variety of mediums to teach the most difficult of concepts with ease.</text>
                </div>
            </div>
            <div className="middle-pg-1-rgt">
                <img src={scholarship} alt="" />
            </div>
        </div>
    )
}

const Learn = () => {
    return (
        <React.Fragment>
            <Homepage />
            
            <GridPage />
            <Middle_Page1 />
            <Middle_Page2 />
            <Middle_Page3 />
            <Middle_Page4 />
            <Middle_Page5 />
            <FooterPage />
            <Footer />
        </React.Fragment>
    )

}

export default Learn;