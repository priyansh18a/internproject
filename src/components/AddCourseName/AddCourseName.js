import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";
import { AuthContext } from '../../custom/auth-context';
import firebase from 'firebase';
import close from '../../Graphics/close.png'
import './AddCourseName.scss';

const storage = firebase.storage();



const AddCourseName = props => {
    const { currentUser } = useContext(AuthContext);
    const history = useHistory();

    const createnewcourse = event => {
        event.preventDefault();
        const { courseName } = event.target.elements;
        const listRef = storage.ref().child(`users/${currentUser.displayName}`);
        // Find all the prefixes and items.
        listRef.listAll().then(function(res) {
            res.prefixes.forEach(function(folderRef) {
            });
            console.log(courseName.value);
            localStorage.clear();
            history.push(`/teach/${currentUser.displayName}/${courseName.value}/0`);
        }).catch(function(error) {
            console.log(error);
        });
    }

    return (
        <div className=" login-signup">
        <form onSubmit={createnewcourse}>
          <img onClick={props.onClick} className="closeloginsignup" src={close} alt=""/>
            <div className="form-group">
             <label htmlFor="courseName" id="course-label">Course Name</label>
            <input type="text" name="courseName" className="courseName input" id="courseName" placeholder="Enter Course Name" />
            </div>
            <button type="submit"  className="btn btn-primary">Proceed To Course</button>
        </form>
        </div>
    );
}

export default AddCourseName