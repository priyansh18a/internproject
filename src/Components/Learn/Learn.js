//React
import React from 'react';

//imported the graphics
import logo from './../../Graphics/logo.svg';
import main_learn from './../../Graphics/main_learn.svg';
import pen from './../../Graphics/pen.svg';
import star from './../../Graphics/star.svg';
import torch from './../../Graphics/torch.svg';
import key from './../../Graphics/key.svg';
import mg from './../../Graphics/mg.svg';
import quote_learn from './../../Graphics/quote_learn.svg';
import learn_combined from './../../Graphics/learn_combined.svg';
import p_with_object from './../../Graphics/p_with_object.svg';
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

//imported the scss file
import './style.scss';

//Bootstrap
import { Container, Row, Col, Button } from 'react-bootstrap'

const Homepage = () => {
    return (
        <div className="container1">
            <div className="header">
                <img className="logo" src={logo} alt="Feynman School" />
                <a className="link-txt" href='/#/learn'>Learn</a>
                <a className="link-txt" href='/#/teach'>Teach</a>
            </div>
            <div className="header">
                <Button onclick={() => { console.log('yay') }} className="sign-up-btn"><span className="btn-txt">Sign Up</span></Button>
            </div>
            <div className="text1">
                <img className="pen" src={pen} alt="" />
                <img className="star" src={star} alt="" />
                <img className="torch" src={torch} alt="" />
                <img className="key" src={key} alt="" />
                <img className="p_obj" src={p_with_object} alt="" />
            </div>
            {/* <img className="main_learn" src={main_learn} alt="" /> */}
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
                <a href="https://www.facebook.com/thefeynmanschool/" target="_blank"><img className="facebook" src={facebook} alt="Facebook" /></a>
                <a href="https://www.youtube.com/channel/UCk0jfiNeFKyn3GYxMtHCkcQ" target="_blank"><img className="youtube" src={youtube} alt="Youtube" /></a>
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
        <div className="grid-page-row1">
            <div className="box1">
                <text className="box-head">Games</text>
                <text className="simple-text-grid">Augmented reality in education is not a hoax. Augmented reality in education is</text>
                <img class="game-pic" src={game} alt="" />
            </div>
            <div className="box1">
                <text className="box-head">Text</text>
                <text className="simple-text-grid">Augmented reality in education is not a hoax. Augmented reality in education is</text>
                <img class="text-pic" src={text} alt="" />
            </div>
            <div className="box1">
                <text className="box-head">Code</text>
                <text className="simple-text-grid">Augmented reality in education is not a hoax. Augmented reality in education is</text>
                <img class="code-pic" src={code} alt="" />
            </div>
        </div>
        <div className="grid-page-row2">
            <div className="box1">
                <text className="box-head">AR/VR</text>
                <text className="simple-text-grid">Augmented reality in education is not a hoax. Augmented reality in education is</text>
                <img class="arvr-pic" src={ar_vr} alt="" />
            </div>
            <div className="box1">
                <text className="box-head">Video</text>
                <text className="simple-text-grid">Augmented reality in education is not a hoax. Augmented reality in education is</text>
                <img class="video-pic" src={video} alt="" />
            </div>
            <div className="box1">
                <text className="box-head">Comic</text>
                <text className="simple-text-grid">Augmented reality in education is not a hoax. Augmented reality in education is</text>
                <img class="comic-pic" src={comic} alt="" />
            </div>
        </div>
        </React.Fragment>
    )
}

const Learn = () => {
    return (
        <React.Fragment>
            {/* <Homepage /> */}
            {/* <div className="container2">
                <div className="pg2-txt">
                    <img className="mg" src={quote_learn} alt="" />
                    <img className="mg1" src={mg} alt="" />
                </div>
            </div> */}
            {/* <div className="container2">
                <div className="lft-block">
                    <img class="person" src={person} alt="" />
                </div>
                <div className="lft-block">
                    <img className="learn_combined" src={learn_combined} alt="" />
                </div>
            </div>
            <div className="container2">
                <div className="lft-block">
                    <img className="css_cpp" src={css_cpp} alt="" />
                </div>
                <div className="lft-block">
                    <img class="person" src={person} alt="" />
                </div>
            </div>
            <div className="container2">
                <div className="lft-block">
                    <img class="person" src={person} alt="" />
                </div>
                <div className="lft-block">
                    <img className="practical_for_student" src={practical_for_student} alt="" />
                </div>
            </div>
            <div className="container2">
                <div className="lft-block">
                    <img className="experienced_teachers" src={experienced_teachers} alt="" />
                </div>
                <div className="lft-block">
                    <img class="person" src={person} alt="" />
                </div>
            </div>
            <div className="container2">
                <div className="lft-block">
                    <img src={person} alt="" />
                </div>
                <div className="lft-block">
                    <img class="person" className="scholarship" src={scholarship} alt="" />
                </div>
            </div> */}
            <GridPage />
            <FooterPage />
            <Footer />
        </React.Fragment>
    )

}

export default Learn;