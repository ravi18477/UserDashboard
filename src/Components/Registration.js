import React from 'react';
import { useState } from 'react';

function Registration({addUser}) {
    const initialState={
        username:"",
        email:"",
        phone:"",
        address:"",
        password:"",
        cpassword:""
    };
    
    const [user,setUser]=useState(initialState);
    
    function handleChange(e){
        setUser({...user,[e.target.name]:e.target.value});
    }

    function handleSubmit(e){
        e.preventDefault();
        if(!user.username || !user.email || !user.phone || !user.address|| !user.password || !user.cpassword)
         return alert("All fields must be filled");

         if(user.password !==user.cpassword)
         return alert("Password doesn't match");

        if(user.password.length<8){
            return alert("password is small");
        }
        addUser(user);
        alert("User added Successfully");
        setUser({username:"",
        email:"",
        phone:"",
        address:"",
        password:"",
        cpassword:""})
    }

    return (
        <div className='registrationContent'>
            <div className='registerBox'>
                <div className='rContentBox' >
                <form onSubmit={(e)=>handleSubmit(e)}>
                <h2>Create Account</h2>
                <div className="form-group"><input className="form-control" type="text" name="username" value={user.username} onChange={(e)=>handleChange(e)} placeholder="Name"/></div>
                <div className="form-group"><input className="form-control" type="email" name="email" value={user.email} onChange={(e)=>handleChange(e)} placeholder="Email"/></div>
                <div className="form-group"><input className="form-control" type="text" name="phone" value={user.phone} onChange={(e)=>handleChange(e)} placeholder="Phone Number"/></div>
                <div className="form-group"><input className="form-control" type="text" name="address" value={user.address} onChange={(e)=>handleChange(e)} placeholder="Address"/></div>

                <div className="form-group"><input className="form-control" type="password" name="password" value={user.password} onChange={(e)=>handleChange(e)} placeholder="Password"/></div>
                <div className="form-group"><input className="form-control" type="password" name="cpassword" value={user.cpassword} onChange={(e)=>handleChange(e)} placeholder="Password (repeat)"/></div>
                <div className="form-group"><button className="form-control submitbtn" type="submit">Sign Up</button></div>
                   
                </form>
                </div>
            </div>


        </div>
    )
}

export default Registration
