import React from 'react'
import './sidenavclose.scss'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function SideNavCloseButton(props) {
    
        return (
            <Link 
            onClick={props.onClick}
            className="navclosebutton"
            >
                &times;
            </Link>
        )
}