import React,{useState, useEffect} from 'react';
import './Addtext.css'
import './Addimage.css'
import firebase from 'firebase';
import { useParams, useHistory } from 'react-router-dom';


const storage = firebase.storage()



const Addimage = () => {
       
        const history = useHistory();
        // const [screenid, setScreenId] = useState(1)
        const [files , setFiles] = useState([]);

        let nextscreen = useParams().screenId;
        

        useEffect(() => {
         setFiles([]);
        }, [nextscreen]);

        const redirectHandler = () => {
          nextscreen++;
          // console.log(nextscreen);
          history.push(`/image/${nextscreen}`);
        }
        
         
        const fileuploadhandler = e => {
          // document.getElementById("parents").style.display ="none";
          for (let i = 0; i < e.target.files.length; i++) {
               const newFile = e.target.files[i];
               newFile["id"] = Math.random();
               console.log(newFile)
               handleFiles(newFile)
            // add an "id" property to each File object
               setFiles(prevState => [...prevState, newFile]);
             }
           };
         

        const onUploadSubmission = e => {
          e.preventDefault(); // prevent page refreshing
            const promises = [];
            files.forEach(file => {
             const uploadTask = 
              storage.ref().child(`images/${nextscreen}/${file.name}`).put(file);
                promises.push(uploadTask);
                uploadTask.on(
                   firebase.storage.TaskEvent.STATE_CHANGED,
                   snapshot => {
                    const progress = 
                      ((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                       if (snapshot.state === firebase.storage.TaskState.RUNNING) {
                        console.log(`Progress: ${progress}%`);
                       }
                     },
                     error => console.log(error.code),
                     async () => {
                          const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
                        // do something with the url
                      }
                     );
                   });
               Promise.all(promises)
                .then(() => alert('All files uploaded'))
                .catch(err => console.log(err.code));
         }
        
        const handleFiles = file => {
           
              const preview = document.getElementById("preview");
              const img = document.createElement("img");
              img.classList.add("obj");
              img.classList.add("m-2");
              img.file = file;
              preview.appendChild(img); // Assuming that "preview" is the div output where the content will be displayed.
              
              const reader = new FileReader();
              reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
              if (file && file.type.match('image.*')) {
                reader.readAsDataURL(file);
              }
             
            
          }

          return (
            <div className="container">
              
             <button className="btn btn-primary m-3 " onClick={redirectHandler} >Add New Screen</button> 
           
            
           <div className="col-md-6" id="parents" >
              <form method="post" action="#" id="#">
                 <div className="form-group files color" >
                    <label>Upload Your File </label>
                    <input type="file" className="inputbox" multiple onChange={fileuploadhandler}/>
                </div>
                    <button type="button" className="btn btn-warning btn-block " onClick={onUploadSubmission}>Submit</button> 
    
             </form>
             
        </div>
        <div  id="preview"> </div>
            </div>
        )
    
    };
    
 
export default Addimage;