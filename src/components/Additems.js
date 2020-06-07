import React, { useState  } from 'react';
import SideNavButton from './sidenavbutton'
import SideNav from './sidenav' ;
// import {useHistory} from 'react-router-dom';
import eye from '../image/eye.png'
import Stormtrooper from '../image/Stormtrooper.png'
// import fire from '../custom/Fire'
import './Additems.css'

const Additem = () => {
    // const history = useHistory(); 
    const [navIsHidden, setNavIsHidden]= useState(true);
    const [imagecount,setImagecount] = useState(1);
    const [files , setFiles] = useState([]);

    const closesidenav = () => {
      setNavIsHidden(true)
    }

    const opensidenav = () => {
      setNavIsHidden(false)
    }

    const fileuploadhandler = e => {
      
      for (let i = 0; i < e.target.files.length; i++) {
           const newFile = e.target.files[i];
           newFile["id"] = Math.random();
           console.log(newFile)
          handleFiles(newFile)
        // add an "id" property to each File object
           setFiles(prevState => [...prevState, newFile]);
         }
        document.getElementById("hide").style.display ="none";
        document.getElementById("preview").style.display ="block"; 
       };

     const handleFiles = file => {
           
        const preview = document.getElementById("preview");
        const img = document.createElement("img");
        img.classList.add("obj");
        img.classList.add("mt-3");
        img.setAttribute("id", `image_${imagecount}`);
        img.file = file;
        preview.appendChild(img); // Assuming that "preview" is the div output where the content will be displayed.
        
        const reader = new FileReader();
        reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
        if (file && file.type.match('image.*')) {
          reader.readAsDataURL(file);
        }
      }




    return (
        <React.Fragment>
         <div className="container-box">
              <div className="header">
            <SideNavButton onClick={opensidenav}/>
            <SideNav 
                isHidden={navIsHidden} 
                onClick={closesidenav}/>
              <p className="course-num">Course 1</p>
              <button className="preview-course"><img src={eye} alt=""/> Preview Course </button>
            </div>
            <p className="scene-num">Scene 1</p> 
            <hr className="line"/>
            <div className="row-div">

           
            <div className="add-media-div">
              <p>ADD MEDIA TYPE</p>
              <button className="add">+ Add Text</button>
              <button className="add">+ Add Question</button>
              <button className="add">+ Add Image</button>
              <button className="add last-btn">+ Add Code</button>
            </div>
            
             
              <div className="course-screen" id="parents" >
              <p>COURSE SCREEN</p>
              <form method="post" action="#" id="#">

                 <div className="form-group files color" id="hide" >
                    
                 <input type="file" name="file" id="file" class="inputfile" multiple onChange={fileuploadhandler}/>
                 <label for="file" id="upload">
                   <img src={Stormtrooper} alt=""/>
                <p>Select images from computer or add<br/>media type to start.</p>
                </label>
                    
                </div>
                <div  id="preview">  </div>
               </form>
             </div>
            <div className="interactions-div">
              <p>INTERACTIONS</p>
              <div className="create-quest">
                <img src={Stormtrooper} alt=""/>
                <p>Create question in your course <br/> screen to add interaction</p>
              </div>
            </div>
            </div>

            
        </div>
    
    
     
        
    </React.Fragment>
    );
};

export default Additem;
