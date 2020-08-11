import React from 'react';
import { functions }from '../custom/Fire';



const Test = () => {

    const signuphandler = event => {
        event.preventDefault();
        const {  phone } = event.target.elements;
        const checkuser = functions.httpsCallable('checkuser');
            checkuser({phone: phone.value}).then(function(result) {
                console.log(result)
                console.log('client function work')
            }).catch(function(error) {
                 console.log(error.message)
                 console.log(error.details)
            });



    }

        return (
        <div className="col-md-6 container">
            <form onSubmit={signuphandler}>
            <div className="form-group">
                <label htmlFor="phone">phone Num</label>
                <input type="number" className="form-control" id="phone" aria-describedby="phone" placeholder="Enter phoneNum"/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
            
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
     </div>
);

}

export default Test;