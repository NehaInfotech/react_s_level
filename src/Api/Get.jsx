import React, { useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';

function Get() {
  const [data, setData] = useState([]);
  const [submittedData, setSubmittedData] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts',
         {
        headers: {
          'x-apikeeda-key': 'g1722236034177pzg717094064cv',
        },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  

  return (
    <div>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        onSubmit={async (values, { resetForm }) => {
          
        
          console.log(values);
          setSubmittedData([...submittedData, values]);
          resetForm();
        }}
      >




        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" placeholder="Jane" />

          <label htmlFor="lastName">Last Name</label>
          <Field id="lastName" name="lastName" placeholder="Doe" />

          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>

        <h2> Data</h2>
        <table>
            <thead>
            <tr>
                <th>Last Name</th>
                <th>First Name</th>
                <th>Email</th>
            </tr>
            </thead>
            <tbody>
            {submittedData.map((ele, i) => (
                <tr key={i}>
                <td>{ele.firstName}</td>
                <td>{ele.lastName}</td>
                <td>{ele.email}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
  );
}

export default Get;
