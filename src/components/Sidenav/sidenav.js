import React, {useState, useEffect, useContext,useCallback} from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import {useParams } from 'react-router-dom';
import { AuthContext } from '../../custom/auth-context';
import SideNavListElement from './listelement/sidenavlistelement';
import SideNavCloseButton from './closenav/sidenavclosebutton';
import AddSideNavListElement from './addlistelement/addsidenavlistelement';
import './sidenav.scss'

// Exception to be moved into ./styles.scss
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
    transition: "0.5s", /* 0.5 second transition effect to slide in the sidenav */
    textAlign : "center"
}

const storage = firebase.storage();

export default function SideNav(props) {
    const { currentUser } = useContext(AuthContext);
    const courseName = useParams().courseName;
    // const storedelements = JSON.parse(localStorage.getItem('elements')) || [{key:"0", text: 'Screen 0', href: `/teach/${currentUser.displayName}/${courseName}/0`}];
    // const storedcount = localStorage.getItem('elementCount') || 1 ;
    const [style, setStyle] = useState(sidenavstyle);
    const [elements, updateElements] = useState([]);
    let elementCount = '0' ||localStorage.getItem('elementCount');

    useEffect(() => {
        var newWidth
        props.isHidden ? newWidth = "0px" : newWidth = "250px"
        setStyle(style =>({...style, width: newWidth }))
    }, [props.isHidden])

    useEffect(() => { getscreenlist() }, [] );
    
    const getscreenlist = () => {
        const listRef = storage.ref().child(`users/${currentUser.displayName}/${courseName}`);
        localStorage.clear();
        listRef.listAll().then(function(res){
            if(res.items.length === 0){
                var newElement = {key: 0, text: 'Screen 0', href: `/teach/${currentUser.displayName}/${courseName}/0`}
                updateElements(elements=>([...elements, newElement]));
                elementCount++;
                localStorage.setItem('elementCount',elementCount);
            }res.prefixes.forEach(function(folderRef) {
                    var newElement = {key: `${elementCount}`, text: `Screen ${elementCount}`, href: `/teach/${currentUser.displayName}/${courseName}/${elementCount}`}
                    updateElements(elements=>([...elements, newElement]));
                    elementCount++;
                    localStorage.setItem('elementCount',elementCount);
                });
        }).catch(function(error){
            console.log(error);
        });
    }

    const AddListElement = useCallback( () => {
        const elementNum = localStorage.getItem('elementCount')
        var newElement = {key: `${elementNum }`, text: `Screen ${elementNum }`, href: `/teach/${currentUser.displayName}/${courseName}/${elementNum }`}
        updateElements(elements=>([...elements, newElement]))
        elementCount = elementCount +1;
        localStorage.setItem('elementCount',elementCount);
        console.log(elementCount)
    },[])
    

    const content = (
        <div style={style}>
            <SideNavCloseButton onClick={props.onClick}/>
            <ul>
                {elements.map(element => (<SideNavListElement text={element.text} href={element.href} key={element.key}/>))}
                <AddSideNavListElement onClick={()=>AddListElement()}/>
            </ul>
        </div>

    );

    return ReactDOM.createPortal(content, document.getElementById('modal-hook'));

}
  