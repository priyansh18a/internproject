import React, { useState  } from 'react';
import SideNavButton from './sidenavbutton'
import SideNav from './sidenav' ;
import {Rnd} from 'react-rnd';
import eye from '../image/eye.png';
import Stormtrooper from '../image/Stormtrooper.png';
import Delete from '../image/delete.png'
import Arrowdown from '../image/arrowdown.png'
// import fire from '../custom/Fire'
// import {useHistory} from 'react-router-dom';
import './Additems.css'
import { Link } from 'react-router-dom';

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
        const preview = document.getElementById("resize");
        const img = document.createElement("img");
        img.classList.add("obj");
        // img.setAttribute("id", `image_${imagecount}`);
        img.file = file;
        preview.appendChild(img); // Assuming that "preview" is the div output where the content will be displayed.
        
        const reader = new FileReader();
        reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
        if (file && file.type.match('image.*')) {
          reader.readAsDataURL(file);
        }
      } 

      
      
      const addtext = () =>{
        document.getElementById("hide").style.display ="none";
        document.getElementById("preview").style.display ="block"; 
        const resize = document.getElementById("resize");
          resize.innerHTML= document.getElementById("text").innerHTML;
        
    
      } 

      const addquestion = () =>{
        document.getElementById("hide").style.display ="none";
        document.getElementById("preview").style.display ="block"; 
        document.getElementById("create-quest").style.display ="none";
        document.getElementById("option-redirect").style.display ="block"; 
        const resize = document.getElementById("resize");
          resize.innerHTML= document.getElementById("question").innerHTML;
        
    
      } 

      const addimage = () => {
        document.getElementById("hide").style.display ="block";
        document.getElementById("preview").style.display ="none"; 
        document.getElementById("create-quest").style.display ="block";
        document.getElementById("option-redirect").style.display ="none"; 
        document.getElementById("question").style.display = "none";
      }

      const addOptions = () => {
            // complete it later
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
              <button className="add" onClick={addtext}>+ Add Text</button>
              <button className="add" onClick={addquestion}>+ Add Question</button>
              <button className="add" onClick={addimage}>+ Add Image</button>
              <button className="add last-btn">+ Add Code</button>
            </div>
            
             
              <div className="course-screen" id="parents" >
              <p>COURSE SCREEN</p>
              <form method="post" action="#" id="#">

                 <div className="form-group files color" id="hide" >
                    
                 <input type="file" name="file" id="file" className="inputfile" multiple onChange={fileuploadhandler}/>
                 <label htmlFor="file" id="upload">
                   <img  className="trooper" src={Stormtrooper} alt=""/>
                <p>Select images from computer or add<br/>media type to start.</p>
                </label>
                
                </div>
                <div  id="preview" className="imagebox">
                  <Rnd
                id="resize"
                default={{
                  x: 150,
                  y: 150,
                  width: 400,
                  height: 300,
                }}
                minWidth={400}
                minHeight={300}
                max-width={1200}
                max-height={550}
                bounds="parent"
            >
            </Rnd> </div>
           </form>
         
             </div>
            <div className="interactions-div">
              <p>INTERACTIONS</p>
              <div id="create-quest">
                <img src={Stormtrooper} alt=""/>
                <p>Create question in your course <br/> screen to add interaction</p>
              </div>
            
              <div id="option-redirect">
                <div className="question-header">
                  <p>Question 1</p>
                  <img src={Delete} alt='' />
                </div>
                <div className="options">
                  <p>Option 1</p>
                  <Link className="add-option-dest"><img src={Arrowdown} alt=''/><p> ADD</p></Link>
                </div>
                <div className="options">
                  <p>Option 2</p>
                  <Link className="add-option-dest"><img src={Arrowdown} alt=''/><p> ADD</p></Link>
                </div>
                <div className="options">
                  <p>Option 3</p>
                  <Link className="add-option-dest"><img src={Arrowdown} alt=''/><p> ADD</p></Link>
                </div>
                <div className="options">
                  <p>Option 4</p>
                  <Link className="add-option-dest"><img src={Arrowdown} alt=''/><p> ADD</p></Link>
                </div>
              </div>
            </div>
            </div>
              
          <div id="text">
            <label>Text 1</label>
            <textarea type="text" className="text-input" rows="6" />
         </div>
         <div  id="question">
          <p className="question-num">Question 1</p>
          <div className="question-num-div">
            <p>QUESTION</p>
            <input className="input-ques form-control"/>
            <p>OPTIONS</p>
            <ul>
              <li>Option 1</li>
              <li>Option 2</li>
              <Link className="add-option" href={addOptions}> <span style={{ fontSize : '20px',marginRight:'5px'}}> + </span> Add options</Link>
            </ul>
            
            </div>
         </div>


            
        </div>
    
    
     
        
    </React.Fragment>
    );
};

export default Additem;
