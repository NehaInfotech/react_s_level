import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
function Real_api() {
  useEffect(()=>{
    axios.get('https://service.apikeeda.com/api/v1/contact-book',{
        headers: {
          "x-apikeeda-key": "g1722225234436yzd940208802uo"
      }
      })
      .then((res) => {
        console.log(res);
        setData(res);
    })
    .catch((err) => {
        console.log(err);
    });
  })
      const [value, setFormData] = useState({
        fname: '',
        lname: '',
        nickname: '',
        email: '',
    });
    
    
    const handleChange = (e) => {
        setFormData({
            ...value,[e.target.name]: e.target.value
        });
    };
        
  return (
    <>
    <div>
      <form >
                <input type='text' name='fname' value={value.fname} onChange={handleChange} placeholder='First Name'/>
                <input type='text' name='lname' value={value.lname} onChange={handleChange} placeholder='Last Name'/>
                <input type='text' name='nickname' value={value.nickname} onChange={handleChange} placeholder='Nickname'/>
                <input type='email' name='email' value={value.email} onChange={handleChange} placeholder='Email'/>
                <button type='submit'>Submit</button>
            </form>
    </div>

    </>
  )
}

export default Real_api