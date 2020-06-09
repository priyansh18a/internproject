import React from 'react'
import './addsidenavlist.scss'

export default function AddSideNavListElement(props) {
    
        return (
            <button
            onClick={props.onClick}
            className="navscreenaddbutton"
            >
            +
            </button>
        )
}