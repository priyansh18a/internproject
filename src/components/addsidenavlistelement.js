import React from 'react'

const navscreenaddbutton = {
    top: "0",
    fontSize: "36px",
    padding: "8px 8px 8px 64px",
    display: "block",
    backgroundColor: "#111",
    textDecoration: "none",
    color: "grey" /* Black*/,
    border:"none"
  }

export default function AddSideNavListElement(props) {
    
        return (
            <button
           
            onClick={props.onClick}
            style={navscreenaddbutton}
            >
            +
            </button>
        )
}