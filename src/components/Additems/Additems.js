import React, { useState , useEffect} from 'react';
import SideNavButton from '../Sidenavbutton/sidenavbutton'
import SideNav from '../Sidenav/sidenav' ;
import {Rnd} from 'react-rnd';
import eye from '../../image/eye.png';
import Stormtrooper from '../../image/Stormtrooper.png';
import Delete from '../../image/delete.png'
import Arrowdown from '../../image/arrowdown.png'
import './Additems.scss'
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import fire from '../../custom/Fire';
import { useParams} from 'react-router-dom';

const storage = firebase.storage()

const Additem = () => {
 
    const [navIsHidden, setNavIsHidden]= useState(true);
    // const [imagecount,setImagecount] = useState(1);
    const [files , setFiles] = useState([]);
    const screenId = useParams().screenId;

    useEffect(() => { getimages() }, [] );
    useEffect(() => { uploadfilehandler() }, [files] );

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
        img.file = file;  
        preview.appendChild(img); // Assuming that "preview" is the div output where the content will be displayed.
        const  imgwidth = document.getElementById('resize').style.width;
        console.log(imgwidth);
        const reader = new FileReader();
        reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
        if (file && file.type.match('image.*')) {
          reader.readAsDataURL(file);
        }
    } 

    const uploadfilehandler = () => {
          const  imgwidth = document.getElementById('resize').style.width;
          console.log(imgwidth);

          const metadata = {
            customMetadata: {
              'resizeWidth': imgwidth,
            }
            
          };

      files.forEach(file => {
          const uploadTask = storage.ref().child(`images/${screenId}/${file.name}`).put(file, metadata);
            uploadTask.on(
                  firebase.storage.TaskEvent.STATE_CHANGED,
                  snapshot => {
                    const progress = 
                      ((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                      if (snapshot.state === firebase.storage.TaskState.RUNNING) {
                        console.log(`Progress: ${progress}%`);
                      }
                    },
                    error => console.log(error.code)
                    );
                  });
          // }).catch((error) => {
        //     console.log(error);
      // });
    };

    const getimages = () =>{
      const uploadTask = storage.ref().child(`images/${screenId}`);

      uploadTask.listAll().then(res => {
        if(res.items.length === 0 ){
              // if no image found then do nothing
        }else{
          console.log(res)
          res.items.forEach(itemRef => {
            itemRef.getMetadata().then(metadata => {
             var  fetchimagewidth  = metadata.customMetadata.resizeWidth;
              // console.log(fetchimagewidth);
           
            itemRef.getDownloadURL().then(url => {
              document.getElementById('resize').innerHTML +=   '<img src=" '+ url +'" alt="not found"/>  ';
              console.log(fetchimagewidth);
              document.getElementById('resize').style.width = fetchimagewidth;
              // document.getElementById('resize').style.height = '600px';
             
            })
          })
            });
          document.getElementById("hide").style.display ="none";
          document.getElementById("preview").style.display ="block";  
          }
          }).catch( error => {
            console.log(error);
          });
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
        document.getElementById("resize").innerHTML = '';
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
              <div id="after-upload">
                    <input type="file" name="file" id="file2" className="inputfile" multiple onChange={fileuploadhandler}/>
                    <label htmlFor="file2">
                    <div className="add btn" id="add-image" onClick={addimage}>Add Image</div>
                  </label>
              </div>
              <button className="add last-btn">+ Add Code</button>
            </div>
            
             
            <div className="course-screen" id="parents">
              <div className="course-top">
                <p>COURSE SCREEN</p>
              
            </div>
              
              <form method="post" action="#" id="#">
                <div className="form-group files color" id="hide" >
                  <input type="file" name="file" id="file1" className="inputfile" multiple onChange={fileuploadhandler}/>
                  <label htmlFor="file1" id="upload">
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
                  <Link to="" className="add-option-dest"><img src={Arrowdown} alt=''/><p> ADD</p></Link>
                </div>
                <div className="options">
                  <p>Option 2</p>
                  <Link to="" className="add-option-dest"><img src={Arrowdown} alt=''/><p> ADD</p></Link>
                </div>
                <div className="options">
                  <p>Option 3</p>
                  <Link to="" className="add-option-dest"><img src={Arrowdown} alt=''/><p> ADD</p></Link>
                </div>
                <div className="options">
                  <p>Option 4</p>
                  <Link to="" className="add-option-dest"><img src={Arrowdown} alt=''/><p> ADD</p></Link>
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
              <Link to="" className="add-option" href={addOptions}> <span style={{ fontSize : '20px',marginRight:'5px'}}> + </span> Add options</Link>
            </ul>
           </div>
         </div>
         
    </div>
    </React.Fragment>
    );
};

export default Additem;