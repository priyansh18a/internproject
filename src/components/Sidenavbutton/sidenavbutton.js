import React from 'react'
import './sidenavbutton.scss'
export default function SideNavButton(props) {
    
        return (
            <span 
            className="sidenavbutton mx-3"
            onClick={props.onClick}
            >
                &#9776;
            </span>
        )
}