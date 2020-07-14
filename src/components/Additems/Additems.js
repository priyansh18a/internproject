import React, { useState , useEffect,useContext} from 'react';
import SideNav from '../Sidenav/sidenav' ;
import {Rnd} from 'react-rnd';
import eye from '../../Graphics/eye.png';
import add from '../../Graphics/add.png';
import save from '../../Graphics/save.png';
import Delete from '../../Graphics/delete.png'
import code_add from '../../Graphics/code_add.png'
import image_add from '../../Graphics/image_add.png'
import Arrowdown from '../../Graphics/arrowdown.png'
import './Additems.scss'
import { Link, useParams } from 'react-router-dom';
import firebase from 'firebase';
import fire from '../../custom/Fire';
import { AuthContext } from '../../custom/auth-context';

const storage = firebase.storage()

const Additem = () => {
    const { currentUser } = useContext(AuthContext);
    const courseId = useParams().courseId;
    const screenId = useParams().screenId;
    const [imagecount, setImagecount] = useState(1);
    const [files, setFiles] = useState([]);
    const [onclick, setOnclick] = useState([]);
    const [elements, updateElements] = useState([]);
   
    let i = 1;

    useEffect(() => { getimages() }, [] );

    const fileuploadhandler = e => {
      for (let i = 0; i < e.target.files.length; i++) {
           const newFile = e.target.files[i];
           newFile["id"] = Math.random();
           console.log(newFile);
           handleFiles(newFile);
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
      document.getElementById(`resizediv${imagecount}`).style.display = "inline-block";  
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
          const uploadTask = storage.ref().child(`courses/${courseId}/${screenId}/${file.name}`).put(file, metadata);
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
      const uploadTask = storage.ref().child(`courses/${courseId}/${screenId}`);
      uploadTask.listAll().then(res => {
        if(res.items.length === 0 ){
              // if no image found then do nothing
        }else{
          console.log(res);
          res.items.forEach(itemRef => {
            itemRef.getMetadata().then(metadata => {
             var  fetchimagewidth  = metadata.customMetadata.resizeWidth;
             itemRef.getDownloadURL().then(url => {
              document.getElementById(`resizediv${i}`).style.display = "inline-block";  
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
    const setonclick1 = e => {
       const  onclickon1 = e.target.value;
       setOnclick(prevState => [...prevState , onclickon1]);
    }
  
         

    // const Rndcount  =  [{ id: 'resize1', number: 1 },{ id: 'resize2', number: 2 },{ id: 'resize3', number: 3  },{ id: 'resize4' , number: 4 },{ id:'resize5', number: 5 }];

    return (
        <React.Fragment>
         <div className="container-box">
              <div className="header-additems">
              <p className="course-num">My course</p>
              <div className="headercenter"><p>Scene {screenId}</p></div>
              <button className="save-course" onClick={uploadfilehandler}><img src={save} alt=""/>Save Course </button>
              <button className="preview-course"><img src={eye} alt=""/> Preview</button>
              <button onClick={() => fire.auth().signOut()} className="sign-out-add" id="signUp">Sign Out</button>
              <button onClick={() => fire.auth().signOut()} id="sign-in-mobile">Sign Out</button>
            </div>
            <div className="add-item-main">
            <SideNav elements={elements} updateElements={updateElements}/>
            <div className="row-div">
           <div className="course-screen" id="parents">
              <form method="post" action="#" id="#">
                <div className="form-group files color" id="hide" >
                  <input type="file" name="file" id="file1" className="inputfile" multiple onChange={fileuploadhandler}/>
                  <label htmlFor="file1" id="upload">
                    <p>SELECT IMAGES FROM COMPUTER  OR ADD <br/>MEDIA TYPE TO START</p>
                  </label>
                </div>
                
              <div  id="preview" className="imagebox">
                  <div id= "resizediv5"><Rnd
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
                       bounds=".imagebox"
                   >
                   </Rnd></div>
                   <div id= "resizediv4"> <Rnd
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
                       bounds=".imagebox"
                   >
                   </Rnd></div>
                   <div id= "resizediv3"><Rnd
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
                       bounds=".imagebox"
                   >
                   </Rnd></div>
                   <div id= "resizediv2"><Rnd
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
                       bounds=".imagebox"
                   >
                   </Rnd></div>
                   <div id= "resizediv1"><Rnd
                       id="resize1"
                       onClick={interactionbox1}
                       default={{
                       
                         x: 125,
                         y: 35,
                         width: 400,
                         height: 300,
                       }}
                       minWidth={400}
                       minHeight={300}
                       max-width={1200}
                       max-height={550}
                       bounds=".imagebox"
                   >
                   </Rnd></div>
                </div>
              </form>
              <div className="add-media-div">
              <div className="type-box">
                <button className="add" onClick={addtext} style={{fontWeight:"bold"}}>T</button>
                <p>Text</p>
              </div>
              <div className="type-box">
                <div id="after-upload">
                      <input type="file" name="file" id="file2" className="inputfile" multiple onChange={fileuploadhandler}/>
                      <label htmlFor="file2" id="image-add">
                      <div className="add btn" id="add-image" onClick={addimage}><img src={image_add} alt=""/></div>
                    </label>
                </div>
                <p>Image</p>
              </div>
              
              <div className="type-box less-margin">
                <button className="add " onClick={addquestion} style={{fontWeight:"bold"}}>?</button>
                <p>Question</p>
              </div>
              <div className="type-box">
                <button className="add"><img src={code_add} alt=""/></button>
                <p>Code</p>
              </div>
            </div>
            </div>
            <div className="interactions-div">
            <div className="interactions-head">  <p id="interaction">INTERACTIONS </p> <p id="plus">+</p></div>
            <div className="image-head">  <p>Image</p><img src={Delete} alt=""/></div>
              <div className="create-quest" id="interactionbox1">
                <div className="create-question-main">
                <p>On Click</p>
                <select className="cust-select form-input" onChange={setonclick1} id="selectbox1">
                    <option defaultValue>Select</option>
                    {elements.map(element => (<option value={element.key} key={element.key}>{element.text}</option>))}
               </select>
               <span>&#10005;</span>
               </div>
               <div className="interaction-type"><span>+</span><p>Add Interaction</p></div>
             </div>
             <div className="create-quest" id="interactionbox2">
                <div className="create-question-main">
                <p>On Click</p>
                <select className="cust-select form-input" onChange={setonclick1} id="selectbox2">
                    <option defaultValue>Select</option>
                     {elements.map(element => (<option value={element.key} key={element.key}>{element.text}</option>))}
               </select>
               <span>&#10005;</span>
               </div>
               <div className="interaction-type"><span>+</span><p>Add Interaction</p></div>
             </div>
             <div className="create-quest" id="interactionbox3">
                <div className="create-question-main">
                <p>On Click</p>
                <select className="cust-select form-input" onChange={setonclick1} id="selectbox3">
                    <option defaultValue>Select</option>
                     {elements.map(element => (<option value={element.key} key={element.key}>{element.text}</option>))}
               </select>
               <span>&#10005;</span>
               </div>
               <div className="interaction-type"><span>+</span><p>Add Interaction</p></div>
             </div>
             <div className="create-quest" id="interactionbox4">
                <div className="create-question-main">
                <p>On Click</p>
                <select className="cust-select form-input" onChange={setonclick1} id="selectbox4">
                    <option defaultValue>Select</option>
                     {elements.map(element => (<option value={element.key} key={element.key}>{element.text}</option>))}
               </select>
               <span>&#10005;</span>
               </div>
               <div className="interaction-type"><span>+</span><p>Add Interaction</p></div>
             </div>
             <div className="create-quest" id="interactionbox5">
                <div className="create-question-main">
                <p>On Click</p>
                <select className="cust-select form-input" onChange={setonclick1} id="selectbox5">
                    <option defaultValue>Select</option>
                     {elements.map(element => (<option value={element.key} key={element.key}>{element.text}</option>))}
               </select>
               <span>&#10005;</span>
               </div>
               <div className="interaction-type"><span>+</span><p>Add Interaction</p></div>
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
  
         
    </div>
    </React.Fragment>
    );
};

export default Additem;