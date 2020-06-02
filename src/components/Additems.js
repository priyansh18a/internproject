import React, { useState  } from 'react';
import add from '../image/add.png';
import Modal from '../UIElements/Modal';
import { Link , useHistory} from 'react-router-dom';
import fire from '../custom/Fire'
import './Additems.css'

const Additem = () => {
    const history = useHistory(); 
    const [showConfirmModal , setShowConfirmModal] = useState(false);
    
    const logout = () => {
        fire.auth().signOut();
        history.push("/");

    }

    const cancelDeleteHandler = () => {
        setShowConfirmModal(false);
      };

    const showoptionModel = () => {
        setShowConfirmModal(true);
      };

    return (
        <React.Fragment>
        <nav   className="navbar navbar-light bg-light justify-content-between">
          <Link to='/' className="navbar-brand">TheFeynmanschool</Link>
          <button className="btn btn-outline-success my-2 my-sm-0" onClick={logout} >Logout </button>
        </nav>
        <div className="addform container"> 
            
            <img src={add} id="add_img" alt="add" onClick={showoptionModel}/>
            <button  className="btn btn-primary mt-3" onClick={showoptionModel}>
              Add Media
            </button>
            
            
        </div>
        <Modal
            show={showConfirmModal}
            onCancel={cancelDeleteHandler}
            header="Select Media Type"
            footerClass="abc"
            footer={
           
            <button  className="btn btn-danger ml-3" onClick={cancelDeleteHandler}>
              Go Back
            </button>
           
         }
        >
        <Link className="btn btn-success m-3 " to="/text" >
              Text
            </Link>
            <Link className="btn btn-success m-3" to="/image/0" >
              Image
            </Link>
            <Link className="btn btn-success m-3" to="/question" >
              Question
            </Link>
            <Link className="btn btn-success m-3" to="/code "  >
              Code
            </Link>
      </Modal>
        
    </React.Fragment>
    );
};

export default Additem;
