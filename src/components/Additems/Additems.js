import React, { useState , useEffect,useContext} from 'react';
import SideNavButton from '../Sidenavbutton/sidenavbutton'
import SideNav from '../Sidenav/sidenav' ;
import {Rnd} from 'react-rnd';
import eye from '../../Graphics/eye.png';
import add from '../../Graphics/add.png';
import Stormtrooper from '../../Graphics/Stormtrooper.png';
import Delete from '../../Graphics/delete.png'
import Arrowdown from '../../Graphics/arrowdown.png'
import './Additems.scss'
import { Link, useParams } from 'react-router-dom';
import firebase from 'firebase';
import fire from '../../custom/Fire';
import { AuthContext } from '../../custom/auth-context';

const storage = firebase.storage()

const Additem = () => {
    const { currentUser } = useContext(AuthContext);
    const courseName = useParams().courseName;
    const screenId = useParams().screenId;
   
    const storedelements = JSON.parse(localStorage.getItem('elements')) || [{key:"0", text: 'Screen 0', href: `/${currentUser.displayName}/${courseName}/0`}];
    const [navIsHidden, setNavIsHidden]= useState(true);
    const [imagecount, setImagecount] = useState(1);
    const [files, setFiles] = useState([]);
    const [onclick, setOnclick] = useState([]);
   
    let i = 1;

    useEffect(() => { getimages() }, [] );
    // useEffect(() => { uploadfilehandler() }, [files] );
   

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
           setFiles(prevState => [...prevState , newFile]);
           
      }
        setImagecount(prevState => prevState + 1);
        document.getElementById("hide").style.display ="none";
        document.getElementById("preview").style.display ="block"; 
       
      };
      
    const handleFiles = file => {
      console.log(imagecount);
      const img = document.createElement("img");
      img.classList.add("obj");
      img.file = file;  
      const preview = document.getElementById(`resize${imagecount}`)
      preview.appendChild(img); // Assuming that "preview" is the div output where the content will be displayed.
      
      const reader = new FileReader();
      reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
      if (file && file.type.match('image.*')) {
         reader.readAsDataURL(file);
       }
    } 

    const uploadfilehandler = () => {
         files.forEach(file => {
         const imgwidth = document.getElementById(`resize${i}`).style.width;
          console.log(imgwidth);
          console.log(onclick[i-1]);
          const metadata = {
            customMetadata: {
              'resizeWidth': imgwidth,
              'onclick': onclick[i-1],
            }
          };
          i++;
          const uploadTask = storage.ref().child(`users/${currentUser.displayName}/${courseName}/${screenId}/${file.name}`).put(file, metadata);
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
      };

    const getimages = () =>{
      const uploadTask = storage.ref().child(`users/${currentUser.displayName}/${courseName}/${screenId}`);
      uploadTask.listAll().then(res => {
        if(res.items.length === 0 ){
              // if no image found then do nothing
        }else{
          console.log(res);
          res.items.forEach(itemRef => {
            itemRef.getMetadata().then(metadata => {
             var  fetchimagewidth  = metadata.customMetadata.resizeWidth;
             itemRef.getDownloadURL().then(url => {
              document.getElementById(`resize${i}`).innerHTML +=   '<img src=" '+ url +'" alt="not found"/>  ';
              console.log(fetchimagewidth);
              document.getElementById(`resize${i}`).style.width = fetchimagewidth;
              document.getElementById('resize1').style.height = '600px';
              i++;
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
        const resize1 = document.getElementById("resize1");
          resize1.innerHTML= document.getElementById("text").innerHTML;
     } 

    const addquestion = () =>{
        document.getElementById("hide").style.display ="none";
        document.getElementById("preview").style.display ="block"; 
        // document.getElementsByClassName("create-quest").style.display ="none";
        document.getElementById("option-redirect").style.display ="block"; 
        const resize1 = document.getElementById("resize1");
          resize1.innerHTML= document.getElementById("question").innerHTML;
    } 

    const addimage = () => {
        // document.getElementById("resize1").innerHTML = '';
        document.getElementById("hide").style.display ="block";
        document.getElementById("preview").style.display ="none"; 
        // document.getElementsByClassName("create-quest").style.display ="block";
        document.getElementById("option-redirect").style.display ="none"; 
        document.getElementById("question").style.display = "none";
    }


    const addOptions = () => {
            // complete it later
    }
   
    const interactionbox1 = () => {
        document.getElementById('interactionbox1').style.display ="block";
    }
    const interactionbox2 = () => {
      document.getElementById('interactionbox2').style.display ="block";
    } 
    const interactionbox3 = () => {
      document.getElementById('interactionbox3').style.display ="block";
    }  
    const interactionbox4 = () => {
      document.getElementById('interactionbox4').style.display ="block";
    }
    const interactionbox5 = () => {
     document.getElementById('interactionbox5').style.display ="block";
    }
    const showselectbox1 = () => {
     document.getElementById('selectbox1').style.display ="block";
    }
    const showselectbox2 = () => {
     document.getElementById('selectbox2').style.display ="block";
    }
    const showselectbox3 = () => {
      document.getElementById('selectbox3').style.display ="block";
    }
    const showselectbox4 = () => {
      document.getElementById('selectbox4').style.display ="block";
    }
    const showselectbox5 = () => {
      document.getElementById('selectbox5').style.display ="block";
    }
    const setonclick1 = e => {
       const  onclickon1 = e.target.value;
       setOnclick(prevState => [...prevState , onclickon1]);
    }
  
         

    // const Rndcount  =  [{ id: 'resize1', number: 1 },{ id: 'resize2', number: 2 },{ id: 'resize3', number: 3  },{ id: 'resize4' , number: 4 },{ id:'resize5', number: 5 }];

    return (
        <React.Fragment>
         <div className="container-box">
              <div className="header-additems">
            <SideNavButton onClick={opensidenav}/>
            <SideNav 
                isHidden={navIsHidden} 
                onClick={closesidenav}/>
              <p className="course-num">Course 1</p>
              <button className="preview-course" style={{right:'194px'}} onClick={uploadfilehandler}>  Save Image </button>
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
                    <div className="add btn" id="add-image" onClick={addimage}>+ Add Image</div>
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
                       id="resize5"
                       onClick={interactionbox5}
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
                   </Rnd>
                   <Rnd
                       id="resize4"
                       onClick={interactionbox4}
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
                   </Rnd>
                   <Rnd
                       id="resize3"
                       onClick={interactionbox3}
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
                   </Rnd>
                   <Rnd
                       id="resize2"
                       onClick={interactionbox2}
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
                   </Rnd>
                   <Rnd
                       id="resize1"
                       onClick={interactionbox1}
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
                   </Rnd>
                </div>
              </form>
            </div>
            <div className="interactions-div">
              <p>INTERACTIONS</p>
              <div className="create-quest" id="interactionbox1">
                <h5>Add interaction on this image</h5>
                <button className="btn btn-warning" onClick={showselectbox1}><img src={add} alt=''/></button>
                <select className="custom-select mr-sm-2 form-input" onChange={setonclick1} id="selectbox1" style={{display:"none"}}>
                    <option defaultValue>Select</option>
                     {storedelements.map(element => (<option value={element.key} key={element.key}>{element.text}</option>))}
               </select>
             </div>
             <div className="create-quest" id="interactionbox2">
                <h5>Add interaction on this image</h5>
                <button className="btn btn-warning" onClick={showselectbox2}><img src={add} alt=''/></button>
                <select className="custom-select mr-sm-2 form-input" onChange={setonclick1} id="selectbox2" style={{display:"none"}}>
                    <option defaultValue>Select</option>
                     {storedelements.map(element => (<option value={element.key} key={element.key} >{element.text}</option>))}
               </select>
                  
              </div>
              <div className="create-quest" id="interactionbox3">
                  <h5>Add interaction on this image</h5>
                  <button className="btn btn-warning" onClick={showselectbox3}><img src={add} alt=''/></button>
                  <select className="custom-select mr-sm-2 form-input" onChange={setonclick1} id="selectbox3" style={{display:"none"}}>
                      <option defaultValue>Select</option>
                      {storedelements.map(element => (<option value={element.key} key={element.key}>{element.text}</option>))}
                </select>
              </div>
              <div className="create-quest" id="interactionbox4">
                  <h5>Add interaction on this image</h5>
                  <button className="btn btn-warning" onClick={showselectbox4}><img src={add} alt=''/></button>
                  <select className="custom-select mr-sm-2 form-input" onChange={setonclick1} id="selectbox4" style={{display:"none"}}>
                      <option defaultValue>Select</option>
                      {storedelements.map(element => (<option value={element.key} key={element.key}>{element.text}</option>))}
                </select>
              </div>
              <div className="create-quest" id="interactionbox5">
                  <h5>Add interaction on this image</h5>
                  <button className="btn btn-warning" onClick={showselectbox5}><img src={add} alt=''/></button>
                  <select className="custom-select mr-sm-2 form-input" onChange={setonclick1} id="selectbox5" style={{display:"none"}}>
                      <option defaultValue>Select</option>
                      {storedelements.map(element => (<option value={element.key} key={element.key}>{element.text}</option>))}
                </select>
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

         <div id="header" className="header" style={{display:"none"}}>
         <a href="/"><img className="logo" src={eye} alt="Feynman School" /></a> 
               <img src={eye} alt="" id="menu_icon"/>
                <div className="homepage-head-text">
                    <a className="link-txt" href='/learn' >Learn</a>
                </div>
                <div className="homepage-head-text">
                    <a className="link-txt" href='/teach' style={{color:"#0099FF"}}>Teach</a>
                </div>
                <button id="Create">Create</button>
                <button onClick={() => fire.auth().signOut()} className="sign-up-btn" id="signUp">Sign Out</button>
                <button onClick={() => fire.auth().signOut()} id="sign-in-mobile">Sign Out</button>
                <div  id="sidebar">

            </div>
        </div>
         
    </div>
    </React.Fragment>
    );
};

export default Additem;