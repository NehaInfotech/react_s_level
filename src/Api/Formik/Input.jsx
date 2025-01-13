import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';

function Input() {
  const [data, setData] = useState([]);

  const handleSubmit = (values, resetForm) => {
    const newData = [...data, values];
    setData(newData);
    resetForm();
  };

  const renderTableRows = () => {
    const rows = [];
    for (let i = 0; i < data.length; i++) {
      const entry = data[i];
      rows.push(
        <tr key={i}>
          <td>{entry.firstName}</td>
          <td>{entry.lastName}</td>
          <td>{entry.email}</td>
        </tr>
      );
    }
    return rows;
  };

  return (
    <>
      <div>
        <h1>Sign Up</h1>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
          }}
        >
          {({ values, resetForm }) => (
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
              <button
                type="button"
                onClick={() => handleSubmit(values, resetForm)}
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>

        <table border="1">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>{renderTableRows()}</tbody>
        </table>
      </div>
    </>
  );
}

export default Input;
