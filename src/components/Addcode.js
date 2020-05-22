import React from 'react';


const Addcode = () => {
    return(
        <div className="container">
        <form >
             <div class="form-group">
        <label for="chat">Add Your Code</label>
        <textarea type="text" class="form-control-file" id="chat" rows="5"/>
        </div>
        <input type="submit" className="form-control btn btn-warning" value="Submit"/>
        </form>
        </div>
    )

}

export default Addcode;