import React from 'react'
import { useState } from 'react';

function Input_handle_onestate() {
    const [value, setFormData] = useState({
        fname: '',
        lname: '',
        nickname: '',
        email: '',
    });
    const [submittedData, setSubmittedData] = useState(null); 

    const handleChange = (e) => {
        setFormData({
            ...value,[e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        setSubmittedData(value); 
    };


  return (
  <>
  <div>
            <form onSubmit={handleSubmit}>
                <input type='text' name='fname' value={value.fname} onChange={handleChange} placeholder='First Name'/>
                <input type='text' name='lname' value={value.lname} onChange={handleChange} placeholder='Last Name'/>
                <input type='text' name='nickname' value={value.nickname} onChange={handleChange} placeholder='Nickname'/>
                <input type='email' name='email' value={value.email} onChange={handleChange} placeholder='Email'/>
                <button type='submit'>Submit</button>
            </form>

            {submittedData && (
                <table border="1" style={{ marginTop: '20px', width: '50%', textAlign: 'left' }}> 
                    <tbody>
                        <tr>
                            <td>First Name</td>
                            <td>{submittedData.fname}</td>
                        </tr>
                        <tr>
                            <td>Last Name</td>
                            <td>{submittedData.lname}</td>
                        </tr>
                        <tr>
                            <td>Nickname</td>
                            <td>{submittedData.nickname}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{submittedData.email}</td>
                        </tr>
                    </tbody>
                </table>
            )}
        </div>


  </>
  )
}

export default Input_handle_onestate