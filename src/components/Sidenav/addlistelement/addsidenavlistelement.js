import React from 'react'
import './addsidenavlist.scss'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function AddSideNavListElement(props) {
    
        return (
            <Link
            onClick={props.onClick}
            className="navscreenaddbutton"
            >
            <span className="plus-scene"> + </span> <p>Add new scene</p>
            </Link>
        )
}