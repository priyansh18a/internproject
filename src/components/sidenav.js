import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom';
import SideNavListElement from './sidenavlistelement'
import SideNavCloseButton from './sidenavclosebutton'
import AddSideNavListElement from './addsidenavlistelement'

const sidenavstyle = {
    height: "100%", /* 100% Full-height */
    width: "0", /* 0 width - change this with JavaScript */
    position: "fixed", /* Stay in place */
    zIndex: "1", /* Stay on top */
    top: "0", /* Stay at the top */
    left: "0",
    backgroundColor: "#111", /* Black*/
    overflowX: "hidden", /* Disable horizontal scroll */
    paddingTop: "60px", /* Place content 60px from the top */
    transition: "0.5s" /* 0.5 second transition effect to slide in the sidenav */
}

export default function SideNav(props) {
    const storedelements = JSON.parse(localStorage.getItem('elements')) || [{key:0, text: 'Screen 0', href: '/0'}];
    const storedcount = localStorage.getItem('elementCount') || 1 ;
    const [style, setStyle] = useState(sidenavstyle)
    const [elements, updateElements] = useState(storedelements)
    const [elementCount, updateElementCount]  = useState(storedcount)
    

    useEffect(() => {
        var newWidth
        props.isHidden ? newWidth = "0px" : newWidth = "250px"
        setStyle(style =>({...style, width: newWidth }))
    }, [props.isHidden])
    

    function AddListElement() {
        updateElementCount(prevCount => (++prevCount));
        localStorage.setItem('elementCount',elementCount);
        console.log(elementCount)
        var newElement = {key: `${elementCount}`, text: `Screen ${elementCount}`, href: `/${elementCount}`}
        updateElements(elements=>([...elements, newElement])
        )
         localStorage.setItem('elements',JSON.stringify(elements));
    }
    

    const content = (
        <div style={style}>
            <SideNavCloseButton onClick={props.onClick}/>
            <ul>
                {storedelements.map(element => (<SideNavListElement text={element.text} href={element.href}/>))}
                <AddSideNavListElement onClick={()=>AddListElement()}/>
            </ul>
        </div>

    );

    return ReactDOM.createPortal(content, document.getElementById('modal-hook'));

}
  