import React from 'react'

const navbutton = {
    fontSize: "30px",
    cursor: "pointer",
}

export default function SideNavButton(props) {
    
        return (
            <span 
            style={navbutton}
            onClick={props.onClick}
            className="mx-3">
                &#9776;
            </span>
        )
}