import React, { useState, useEffect} from 'react';
import {calculateTimeLeft} from './../Learn/Learn'
//imported the scss file
import './../Learn/learn.scss';
import './ComingSoon.scss';

const ComingSoon = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
     }, 1000);
    });
    return(
        <div className="coming-container">
            
            <div className="coming-soon">
                <p>Congratulations on signing up! We will personally notify you when our app launches</p>
            </div>
            <div id="future-depend">
            <p className="app-release">App release in</p>
            <div className="date-time">
            <div className="time-div"><p>{ Math.floor(timeLeft.days/10)}</p></div>
            <div className="time-div right-time" ><p className="different">{ timeLeft.days%10}</p></div>
            <div className="time-div"><p>{ Math.floor(timeLeft.minutes/10)}</p></div>
            <div className="time-div right-time"><p className="visualisation">{ timeLeft.minutes%10}</p></div>
           <div className="time-div"><p>{ Math.floor(timeLeft.seconds/10)}</p></div>
            <div className="time-div"><p className="practical">{ timeLeft.seconds%10}</p></div>
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