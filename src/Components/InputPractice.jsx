import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const InputPractice = () => {
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    salary: "",
    email: "",
    role: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission (add or update employee)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      // Update existing employee
      const updatedEmployees = [...employees];
      updatedEmployees[editIndex] = formData;
      setEmployees(updatedEmployees);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      // Add new employee
      setEmployees([...employees, formData]);
    }
    console.log("Updated Employee List:", employees); // Log to console
    setFormData({ name: "", number: "", salary: "", email: "", role: "" });
  };

  // Handle delete action
  const handleDelete = (index) => {
    const updatedEmployees = employees.filter((_, i) => i !== index);
    setEmployees(updatedEmployees);
    console.log("Updated Employee List After Deletion:", updatedEmployees); // Log to console
  };

  // Handle edit action
  const handleEdit = (index) => {
    setFormData(employees[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Employee Management</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          name="name"
          placeholder="Employee Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="number"
          placeholder="Phone Number"
          value={formData.number}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="salary"
          placeholder="Salary"
          value={formData.salary}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="role"
          placeholder="Role"
          value={formData.role}
          onChange={handleChange}
          required
        />
        <button type="submit" style={{ marginLeft: "10px" }}>
          {isEditing ? "Update" : "Add"}
        </button>
      </form>

      <table border="1" style={{ width: "100%", textAlign: "left" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Number</th>
            <th>Salary</th>
            <th>Email</th>
            <th>Role</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.name}</td>
              <td>{employee.number}</td>
              <td>{employee.salary}</td>
              <td>{employee.email}</td>
              <td>{employee.role}</td>
              <td>
                <FaEdit
                  style={{ cursor: "pointer", color: "blue" }}
                  onClick={() => handleEdit(index)}
                />
              </td>
              <td>
                <FaTrash
                  style={{ cursor: "pointer", color: "red" }}
                  onClick={() => handleDelete(index)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InputPractice;
