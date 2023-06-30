import React, { useRef } from 'react';
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUser } from '../reducers/users/userSlice';
import { useNavigate } from 'react-router-dom';

const Index = () => {
 const emailField =useRef(null);
 const passwordField= useRef(null);
 const dispatch = useDispatch();
const navigate = useNavigate();

  function handleSubmit(e){
    e.preventDefault();
    Axios.get("http://localhost:3000/users")
    .then(res=>{
        console.log(res.data);
        const users = res.data;
        const userToLog = users.find(user => user.email === emailField.current.value);
        
        if(userToLog){
            if(userToLog.last_name === passwordField.current.value){
               dispatch(setUser({
                email: userToLog.email,
                fullName:  `${userToLog.first_name}" "${userToLog.last_name}`,
                token:Date.now(),
               }))
               navigate('/home');
            }
        }

    })
  }

    return (
        <div className='row justify-content-center' >
            <div className='col-6'>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" ref={emailField}/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" ref={passwordField}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
        </div>
    )
}

export default Index
