import React from 'react';
import './sidenavlist.scss';

export default function SideNavListElement(props) {
    
        return (
               <a href={props.href}
                onClick={props.onClick}
                className="listelement">
                {props.text}
                </a> 
        );
};
  