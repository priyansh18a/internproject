import React from 'react'
import './Addquestion.css'


const Addquestion = () => {
    return(
        <div className="container">
        <form >
        <div class="form-group">
        <label for="question" className="mt-3">Add Your Question</label>
        <input type="text" class="form-control" id="question"/>
        </div>
        <div class="form-group">
        <label for="option1">Option 1</label>
        <input type="text" class="form-control" id="option1"/>
        </div>
        <div class="form-group">
        <label for="option2">Option 2</label>
        <input type="text" class="form-control" id="option2"/>
        </div>
        <div class="form-group">
        <label for="option3">Option 3</label>
        <input type="text" class="form-control" id="option3"/>
        </div>
        <div class="form-group">
        <label for="option4">Option 4</label>
        <input type="text" class="form-control" id="option4"/>
        </div>
        <div class="row">
        <input type="submit" className="form-control btn btn-primary mx-3 button" value="Submit"/>
        <input type="submit" className="form-control btn btn-warning  button" value="Submit and Add More"/>
        </div>

        </form>
        </div>
    )

}

export default Addquestion;