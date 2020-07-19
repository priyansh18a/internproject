import React, { useContext ,useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import { AuthContext } from '../../custom/auth-context';
import firebase from 'firebase';
import fire, {db} from '../../custom/Fire';

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
    const uid = currentUser.uid;
    const random = Math.floor(Math.random() * 10001);  
    const coursesRef = db.collection("courses");
    const [courseName ,setCourseName] = useState('');
    const [courseDescription, setCourseDescription] = useState('');
    const [coursetags ,setCoursetags] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [fileurl, setFileurl] = useState('');
    const [courseId, setCourseId] = useState(uid+random);
    const preview = document.getElementById('add-thumbnail') ;

    useEffect(() => { getuserdetails() }, [] );
    
    const getuserdetails = () => {
     db.collection("users").where("uid", "==", uid )
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                setDisplayName(doc.data().displayName);
            });
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
    }

    
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

    const createnewcourse = event => {
        event.preventDefault();
        coursesRef.doc(courseId).set({
                name: courseName ,
                courseid:courseId ,
                authorname: displayName ,
                authoruid:uid,
                description: courseDescription , 
                thumbnail: fileurl,
                publish: false,
                tags : coursetags
        }).catch(function(error){
            console.log(error);
        });
            console.log(courseName.value);
            localStorage.clear();
            history.push(`/teach/${uid}/${courseId}/0`);
    }

    const updatecoursetitle = event => {
        setCourseName(event.target.value);
    }

    const updatecoursedescription = event => {
        setCourseDescription(event.target.value);
    }

    const updatecoursetags = event => {
        setCoursetags(event.target.value);
    }

    const updatecoursethumbnail = event => {
        const file = event.target.files[0];
        coursesRef.add({
            name: 'test' 
        }).then(function(docRef) {
            setCourseId(docRef.id);
            const uploadTask = storage.ref().child(`courses/${docRef.id}/${file.name}`).put(file);
            uploadTask.on('state_changed', function(snapshot){
                const progress = 
                      ((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                preview.innerHTML = '<p>Uploading '+  Math.floor(progress) + '% </p>';
         }, function(error) {
            preview.innerHTML = '<p>Uploading Fail Try Again by refreshing page and uploading again</p>';
        }, function() {
            uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                setFileurl(downloadURL); 
                const img = document.createElement("img");
                img.classList.add("thumbnail");
                img.file = file;  
                preview.appendChild(img); // Assuming that "preview" is the div output where the content will be displayed.
                const reader = new FileReader();
                reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
                if (file && file.type.match('image.*')) {
                       reader.readAsDataURL(file);
                }
              
            });
        })
        }).catch(function(error){
            console.log(error);
    });
        
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
                <button onClick={() => fire.auth().signOut()} className="sign-up-btn" id="signUp">Sign Out</button>
                <button onClick={() => fire.auth().signOut()} id="sign-in-mobile">Sign Out</button>

            </div>
            <div  id="sidebar">
                <img src={cross} alt="" id="cross" onClick={closesidebar}/>
                <ul>
                    <li><a href='/learn'>Learn</a></li>
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
                <form onSubmit={createnewcourse} >
                <div className="course-heads">
                    <p>My course</p>
                    <button type="submit">Proceed to Course</button>
                </div>
                 <div className="course-center">
                <div className="course-center-right">
                    <p className="course-info-head">Course Info</p>
                    <p className="add-course-info">Add course information to help students better discover your course</p>
                    <label htmlFor="courseTitle" className="course-label" >COURSE TITLE <img src={question} alt=""/></label>
                    <input type="text" name="courseTitle" className="courseInput" id="courseTitle" onChange={updatecoursetitle}/>
                    <label htmlFor="courseDescription" className="course-label">COURSE DESCRIPTION<img src={question} alt=""/></label>
                    <textarea type="text" name="courseDescription" className="courseInput" id="courseDescription" rows="5" onChange={updatecoursedescription} ></textarea>
                    <label  className="course-label">COURSE IMAGE<img src={question} alt=""/></label>
                    <div className="form-group add-media" id="add-thumbnail" >
                        <label htmlFor="courseImage" className="upload-media">
                        <img src={scene} alt=""/><p>Add Media</p>
                        </label>
                        <input type="file" name="courseImage" className="courseInput " id="courseImage" onChange={updatecoursethumbnail} required/>
                    </div>
                    <label htmlFor="courseTags" className="course-label">COURSE TAGS<img src={question} alt=""/></label>
                    <input type="text" name="courseTags" className="courseInput" id="courseTags" onChange={updatecoursetags}/>
                    <div className="tags-list">
                        <div onClick={() => {document.getElementById('courseTags').value = " Design "} }><p>Design</p></div>
                        <div onClick={() => {document.getElementById('courseTags').value = " Product "} }><p>Product</p></div>
                        <div onClick={() => {document.getElementById('courseTags').value = " HTML "} }><p>HTML</p></div>
                    </div>
               </div>
          </div>
          </form>
      </div>
    </div>  
    );
}

export default AddCourseDetails;