import React from 'react';
import './style.scss'
import { Link } from 'react-router-dom';

const Choose = () => {
    return(
        <div className="container">
            <Link to='/learn'>Want to Learn</Link>
            <Link to='/teach'>Want to Teach</Link>
        </div>
    )

}

export default Choose;