import React from 'react'
import './sidenavclose.scss'

export default function SideNavCloseButton(props) {
    
        return (
            <button 
            onClick={props.onClick}
            className="navclosebutton"
            >
                &times;
            </button>
        )
}