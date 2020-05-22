import React from 'react';


const Addimage = () => {
    return(
        <div className="container">
        <form >
             <div class="form-group">
        <label for="image">Add Your Image</label>
        <input type="file" class="form-control-file" id="image"/>
        </div>
        <input type="submit" className="form-control btn btn-warning" value="Submit"/>
        </form>
        </div>
    )

}

export default Addimage;