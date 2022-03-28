import React from 'react'
import { useState } from 'react';
function ProfileForm({submit}) {
    const [profile,setProfile]=useState({
        firstname:"",
        lastname:"",
        email:"",
        phone:"",
    });

const handler =(event) =>{
setProfile((prev)=>({
    ...prev,
    [event.target.name]: event.target.value
}));
}

const handleForm =(e)=>{
    e.preventDefault();
    submit(profile)
};


  return (
    <div className='formContainer'>
     <h3>Profile Form</h3>
     <form>
      <fieldset>
       <legend>Bio Data</legend>
        <div className='names'>
         
         <label>
         First Name
         <input name='firstname' type="text" value={profile.firstName} onChange={handler}/>
         </label>
         
         
         <label>
         Last Name
         <input name='lastname' type="text" value={profile.lastName} onChange={handler}/>
         </label>
         </div>

         <div className='names'>
         <label>
         Email
         <input name='email' type="email" value={profile.email} onChange={handler}/>
         </label>

         
         <label>
         Phone
         <input name='phone' type="tel" value={profile.phone} onChange={handler}/>
         </label>
        </div>
      </fieldset>
     <button className='form' onClick={handleForm}>Add Profile</button>

     </form>

    </div>
  )
}

export default ProfileForm