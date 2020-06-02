import React from 'react'

const sidenavlistelement = {
    padding: "8px 8px 8px 32px",
    textDecoration: "none",
    fontSize: "25px",
    color: "#818181",
    display: "block",
    transition: "0.3s",
  }
  
export default function SideNavListElement(props) {
    
        return (
               <a href={props.href}
                onClick={props.onClick}
                style={sidenavlistelement}>
                {props.text}
                </a> 
        )
}
  