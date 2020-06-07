import React,{useState} from 'react';
import './Addtext.css'
import './Addimage.css'
import firebase from 'firebase';
import SideNav from './sidenav' ;
import SideNavButton from './sidenavbutton'
// import { useParams, useHistory } from 'react-router-dom';



const storage = firebase.storage()



const Addimage = () => {
        
      const [imageAsUrl, setImageAsUrl] = useState([])
      const [files , setFiles] = useState([]);
      const [navIsHidden, setNavIsHidden]= useState(true);
      const [imagecount,setImagecount] = useState(1);
 
      const closesidenav = () => {
          setNavIsHidden(true)
        }

        const opensidenav = () => {
          setNavIsHidden(false)
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
        
        
      function getBase64Image(img) {
            var canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;
        
            var ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0);
        
            var dataURL = canvas.toDataURL("image/png");
        
            return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
        }

        const handleFiles = file => {
           
            const preview = document.getElementById("preview");
            const img = document.createElement("img");
            img.classList.add("obj");
            img.classList.add("mt-3");
            img.setAttribute("id", `image_${imagecount}`);
            img.file = file;
            preview.appendChild(img); // Assuming that "preview" is the div output where the content will be displayed.
            
           const Image = document.getElementById(`image_${imagecount}`);
           const imgData = getBase64Image(Image);
            localStorage.setItem(`image_${imagecount}`, imgData);
            setImagecount(prevCount => (++prevCount));

            const reader = new FileReader();
            reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
            if (file && file.type.match('image.*')) {
              reader.readAsDataURL(file);
            }

         
           
          
        }
        
        const onUploadSubmission = e => {
          e.preventDefault(); // prevent page refreshing
            const promises = [];
            files.forEach(file => {
             const uploadTask = 
              storage.ref().child(`images/${file.name}`).put(file);
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
                    () => {
                           uploadTask.snapshot.ref.getDownloadURL()
                           .then(fireBaseUrl => {
                            setImageAsUrl(prevState => [...prevState, fireBaseUrl])
                          })
                          // .then(showimagemodal)
                       
                      }
                     );
                   });
              
         }
         

        return (
          
            <React.Fragment>
            
          <div>
            <SideNavButton onClick={opensidenav}/>
            <SideNav 
            isHidden={navIsHidden} 
            onClick={closesidenav}/>
            
          </div>

        

            <div className="container">
            <div className="col-md-6" id="parents" >
              <form method="post" action="#" id="#">
                 <div className="form-group files color" >
                    <label>Upload Your File </label>
                    <input type="file" className="inputbox" multiple onChange={fileuploadhandler}/>
                </div>
                    <button type="button" className="btn btn-warning btn-block " onClick={onUploadSubmission}>Submit</button> 
    
             </form>
             
        </div>
        
            </div>

       </React.Fragment>

        )
    
    };
    
 
export default Addimage;