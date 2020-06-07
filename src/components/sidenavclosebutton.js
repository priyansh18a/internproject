import React from 'react'

const navclosebutton = {
    position: "absolute",
    top: "0",
    right: "25px",
    fontSize: "36px",
    marginLeft: "50px",
    backgroundColor: "#111",
    textDecoration: "none",
    color: "grey" /* Black*/,
    border:"none"
  }

export default function SideNavCloseButton(props) {
    
        return (
            <button 
           
            onClick={props.onClick}
            style={navclosebutton}
            >
                &times;
            </button>
        )
}