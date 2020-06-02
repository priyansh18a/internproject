import React from 'react'

const navbutton = {
    fontSize: "30px",
    cursor: "pointer",
    margin: "10px"
}

export default function SideNavButton(props) {
    
        return (
            <span 
            style={navbutton}
            onClick={props.onClick}
            className="m-3">
                &#9776;
            </span>
        )
}