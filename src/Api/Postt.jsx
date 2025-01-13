import React, { useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';

function Postt() {
    const [data, setData] = useState([]);
    const [text, setText] = useState({});
    const [isUpdate, setIsUpdate] = useState(false);

    const fetchData = async () => {
        try {
            const res = await axios.get('https://service.apikeeda.com/api/v1/contact-book', {
                headers: {
                    "x-apikeeda-key": "h1723434031457uwr165621441rw"
                }
            });
            setData(res.data.data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleRemove = async (id) => {
        try {
            await axios.delete(`https://service.apikeeda.com/api/v1/contact-book/${id}`, {
                headers: {
                    "x-apikeeda-key": "e1723434076617qau164903509dv"
                }
            });
            setData(data.filter(contact => contact._id !== id)); // Update state after delete
        } catch (err) {
            console.error(err);
        }
    };

    const handleUpdate = (id) => {
        const selectedContact = data.find((ele) => ele._id === id);
        setText(selectedContact);
        setIsUpdate(true);
    };

    const handleUpdateSubmit = async (values, { resetForm }) => {
        try {
            const res = await axios.patch(`https://service.apikeeda.com/api/v1/contact-book/${text._id}`, values, {
                headers: {
 "x-apikeeda-key": "f1723434830728beq399185173mf"                }
            });
            setData(data.map(contact => contact._id === text._id ? res.data.data : contact)); // Update state after update
            setIsUpdate(false);
            resetForm();
            setText({}); // Clear form
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <h1>{isUpdate ? 'Update Contact' : 'Add Contact'}</h1>
            <Formik
                initialValues={{
                    firstName: text.firstName || '',
                    lastName: text.lastName || '',
                    email: text.email || '',
                    mobileNo: text.mobileNo || '',
                    nickName: text.nickName || '',
                }}
                enableReinitialize={true}
                onSubmit={async (values, { resetForm }) => {
                    if (isUpdate) {
                        handleUpdateSubmit(values, { resetForm });
                    } else {
                        try {
                            const res = await axios.post('https://service.apikeeda.com/api/v1/contact-book', values, {
                                headers: {
                                     "x-apikeeda-key": "i1723434156237zmw884332334gw"
                                }
                            });
                            setData([...data, res.data.data]); // Update state after adding
                            resetForm(); // Clear form after submission
                        } catch (err) {
                            console.error(err);
                        }
                    }
                }}
            >
                <Form>
                    <label htmlFor="firstName">First Name</label>
                    <Field id="firstName" name="firstName" placeholder="Jane" />

                    <label htmlFor="lastName">Last Name</label>
                    <Field id="lastName" name="lastName" placeholder="Doe" />

                    <label htmlFor="mobileNo">Mobile No</label>
                    <Field id="mobileNo" name="mobileNo" placeholder="1234567890" />

                    <label htmlFor="nickName">Nick Name</label>
                    <Field id="nickName" name="nickName" placeholder="JD" />

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

            <table border="1">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Mobile No</th>
                        <th>Nick Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((ele, i) => (
                        <tr key={ele._id}>
                            <td>{ele.firstName}</td>
                            <td>{ele.lastName}</td>
                            <td>{ele.email}</td>
                            <td>{ele.mobileNo}</td>
                            <td>{ele.nickName}</td>
                            <td>
                                <button onClick={() => handleRemove(ele._id)}>Delete</button>
                                <button onClick={() => handleUpdate(ele._id)}>Update</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Postt;
