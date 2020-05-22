import React, { useState } from 'react';
import add from '../image/add.png';
import Modal from '../UIElements/Modal';
import { Link } from 'react-router-dom';
import './Additems.css'

const Additem = () => {

    const [showConfirmModal , setShowConfirmModal] = useState(false);

    const cancelDeleteHandler = () => {
        setShowConfirmModal(false);
      };

    const showoptionModel = () => {
        setShowConfirmModal(true);
      };

    return (
        <React.Fragment>
        
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
        <Link className="btn btn-success mx-3" to="/text" >
              Text
            </Link>
            <Link className="btn btn-success mx-3" to="/image" >
              Image
            </Link>
            <Link className="btn btn-success mx-3" to="/question" >
              Question
            </Link>
            <Link className="btn btn-success mx-3"  >
              Code
            </Link>
      </Modal>
        
    </React.Fragment>
    );
};

export default Additem;
