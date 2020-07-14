import React, {useState, useEffect, useContext,useCallback} from 'react';
import firebase from 'firebase';
import {useParams } from 'react-router-dom';
import { AuthContext } from '../../custom/auth-context';
import SideNavListElement from './listelement/sidenavlistelement';
import AddSideNavListElement from './addlistelement/addsidenavlistelement';
import './sidenav.scss'



const storage = firebase.storage();

export default function SideNav(props) {
    const { currentUser } = useContext(AuthContext);
    const courseId = useParams().courseId;
    const elements = props.elements;
    
    let elementCount = '0' ||localStorage.getItem('elementCount');

    useEffect(() => { getscreenlist() }, [] );

    
    const getscreenlist = () => {
        const listRef = storage.ref().child(`courses/${courseId}`);
        localStorage.removeItem('elementCount');
        listRef.listAll().then(function(res){
            if(res.items.length === 0){
                var newElement = {key: 0, text: 'Scene 0', href: `/teach/${currentUser.uid}/${courseId}/0`}
                props.updateElements(elements=>([...elements, newElement]));
                elementCount++;
                localStorage.setItem('elementCount',elementCount);
            }res.prefixes.forEach(function(folderRef) {
                    var newElement = {key: `${elementCount}`, text: `Scene ${elementCount}`, href: `/teach/${currentUser.uid}/${courseId}/${elementCount}`}
                    props.updateElements(elements=>([...elements, newElement]));
                   
                    elementCount++;
                    localStorage.setItem('elementCount',elementCount);
                });
        }).catch(function(error){
            console.log(error);
        });
    }

    const AddListElement = useCallback( () => {
        const elementNum = localStorage.getItem('elementCount')
        var newElement = {key: `${elementNum }`, text: `Scene ${elementNum }`, href: `/teach/${currentUser.uid}/${courseId}/${elementNum }`}
        props.updateElements(elements=>([...elements, newElement]))
        elementCount = elementCount +1;
        localStorage.setItem('elementCount',elementCount);
        console.log(elementCount)
    },[])


    return (
        <div className="sidenav">
        <AddSideNavListElement onClick={()=>AddListElement()}/> 
        <hr/>
       <ul>
           <li>{elements.map(element => (<SideNavListElement text={element.text} href={element.href} key={element.key}/>))}</li> 
        </ul>
        </div>

    );


}
  