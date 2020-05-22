import React  , { useState } from 'react';
import './Addtext.css'
// import { useHistory } from 'react-router-dom';


const Addtext = () => {
    const [selectedFile , setselectedFile] = useState(null);

    const fileuploadhandler =event=>{
        setselectedFile(event.target.files[0])
        console.log(event.target.files[0])
    }

    // const history = useHistory();

   const  onClickHandler = () => {
        const data = new FormData() 
        data.append('file', selectedFile)

    }

    // const fileuploadhandler = event => {
    //     console.log(event.target.files[0])
    //     // history.push("/");


    // }
    

    return (
        <div className="container">
       <div className="col-md-6">
	      <form method="post" action="#" id="#">
             <div className="form-group files color">
                <label>Upload Your File </label>
                <input type="file" className="form-control" multiple= "" onClick={fileuploadhandler}/>
            </div>
                <button type="button" class="btn btn-success btn-block " onClick={onClickHandler}>Submit</button> 

         </form>
	 </div>
        </div>
    )

}

export default Addtext;