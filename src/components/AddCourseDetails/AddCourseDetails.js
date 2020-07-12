import React, { useContext ,useState} from 'react';
import { useHistory } from "react-router-dom";
import { AuthContext } from '../../custom/auth-context';
import firebase from 'firebase';
import fire from '../../custom/Fire';

//imported the graphics
import logo from './../../Graphics/logo.png';
import cross from './../../Graphics/cross.png';
import menu_icon from './../../Graphics/menu_icon.png'
import question from './../../Graphics/question.png'
import scene from './../../Graphics/scene.png'
import './AddCourseDetails.scss';

const storage = firebase.storage();



const AddCourseDetails = () => {
    const { currentUser } = useContext(AuthContext);
    const history = useHistory();
    const [courseName ,setCourseName] = useState('');


    const opensidebar = () => {
        document.getElementById('sidebar').style.display = "block";
        document.getElementById('menu_icon').style.display = "none";
        document.getElementById('cross').style.display = "block";
    }

    const closesidebar = () => {
        document.getElementById('sidebar').style.display = "none";
        document.getElementById('menu_icon').style.display = "block";
        document.getElementById('cross').style.display = "none";
    }

    const createnewcourse = () => {
        const listRef = storage.ref().child(`users/${currentUser.displayName}`);
        // Find all the prefixes and items.
        listRef.listAll().then(function(res) {
            res.prefixes.forEach(function(folderRef) {
            });
            console.log(courseName.value);
            localStorage.clear();
            history.push(`/teach/${currentUser.displayName}/${courseName}/0`);
        }).catch(function(error) {
            console.log(error);
        });
    }

    const updatecoursetitle = event => {
        setCourseName(event.target.value);
    }

    return (
        <div className="course-details-container">
            <div id="header" className="header">
               <a href="/"><img className="logo" src={logo} alt="Feynman School" /></a> 
               <img src={menu_icon} alt="" id="menu_icon" onClick={opensidebar}/>
                <div className="homepage-head-text">
                    <a className="link-txt" href='/learn' >Learn</a>
                </div>
                <div className="homepage-head-text">
                    <a className="link-txt" href='/teach' style={{color:"#0099FF"}}>Teach</a>
                </div>
                <button onClick={() => history.push(`/teach/${currentUser.displayName}/course`)} id="Create">Create</button>
                <button onClick={() => fire.auth().signOut()} className="sign-up-btn" id="signUp">Sign Out</button>
                <button onClick={() => fire.auth().signOut()} id="sign-in-mobile">Sign Out</button>

            </div>
            <div  id="sidebar">
                <img src={cross} alt="" id="cross" onClick={closesidebar}/>
                <ul>
                    <li ><a href='/learn'>Learn</a></li>
                    <li><a href='/teach' style={{color:"#0099FF"}}>Teach</a></li>
                    <li>News</li>
                    <li>Blog</li>
                    <li>About us</li>
                </ul>

            </div>
            <div className="Course-details">
                <p className="create-a-course">Create a course</p>
                <p className="view-all">VIEW ALL DRAFTS </p>
                <hr className="break"/>
                <div className="course-heads">
                    <p>My course</p>
                    <button onClick={createnewcourse}>Proceed to Course</button>
                </div>
                 <div className="course-center">
                <div className="course-center-left">
                <p className="edit">EDIT</p>
                <p className="course-info active">Course Info</p>
                <p className="course-info">Course Lab</p>
                <p className="edit" style={{marginTop: '50px'}}>HELP</p>
                </div>
                <div className="course-center-right">
                    <p className="course-info-head">Course Info</p>
                    <p className="add-course-info">Add course information to help students better discover your course</p>
                    <label htmlFor="courseTitle" className="course-label" >COURSE TITLE <img src={question} alt=""/></label>
                    <input type="text" name="courseTitle" className="courseInput" id="courseTitle" onChange={updatecoursetitle}/>
                    <label htmlFor="courseDescription" className="course-label">COURSE DESCRIPTION<img src={question} alt=""/></label>
                    <textarea type="text" name="courseDescription" className="courseInput" id="courseDescription" rows="5" ></textarea>
                    <label  className="course-label">COURSE IMAGE<img src={question} alt=""/></label>
                    <div className="form-group add-media" >
                        <label htmlFor="courseImage" className="upload-media">
                        <img src={scene} alt=""/><p>Add Media</p>
                        </label>
                        <input type="file" name="courseImage" className="courseInput " id="courseImage" />
                    </div>
                    <label htmlFor="courseTags" className="course-label">COURSE TAGS<img src={question} alt=""/></label>
                    <input type="text" name="courseTags" className="courseInput" id="courseTags" />
                    <div className="tags-list">
                        <div><p>Design</p></div>
                        <div><p>Product</p></div>
                        <div><p>HTML</p></div>
                    </div>
               </div>
          </div>
      </div>
    </div>  
    );
}

export default AddCourseDetails;