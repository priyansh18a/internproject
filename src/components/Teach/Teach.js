//React
import React from 'react';
import { Topsection, LearnMethod, FooterPage, Footer } from '../Learn/Learn'
import '../Learn/learn.scss'

import tick from './../../Graphics/tick.png';
import analytics from './../../Graphics/analytics.png';
import network from './../../Graphics/network.png';
import multiple from './../../Graphics/multiple.png';
import profile from './../../Graphics/profile.png';
import tools from './../../Graphics/tools.png';


const MiddlePage1 = () => {
    return (
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
    )
}

const MiddlePage1Mobile = () => {
    return (
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
    )
}

const MiddlePage2 = () => {
    return (
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
    )
}

const MiddlePage3 = () => {
    return (
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
    )
}

const MiddlePage3Mobile = () => {
    return (
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
    )
}

const MiddlePage4 = () => {
    return (
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
    )
}

const MiddlePage5 = () => {
    return (
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
    )
}

const MiddlePage5Mobile = () => {
    return (
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
    )
}

const Teach = () => {
    return (
        <React.Fragment>
            <Topsection />
            <LearnMethod />
            <MiddlePage1 />
            <MiddlePage1Mobile />
            <MiddlePage2 />
            <MiddlePage3 />
            <MiddlePage3Mobile />
            <MiddlePage4 />
            <MiddlePage5/>
            <MiddlePage5Mobile />
            <FooterPage />
            <Footer />
        </React.Fragment>
    )
}
 
export default Teach;