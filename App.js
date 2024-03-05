
import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // Import external CSS file

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    complaint: '',
    contact: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/send-email', formData);
      console.log(response.data);
      alert('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Error sending email. Please try again later.');
    }
  };

  return (
    <div className="App">
      <h1>Email Complaint Form</h1>
      <div className="form-container"> {/* Use a div as a container */}
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Complaint:
          <textarea name="complaint" value={formData.complaint} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Contact:
          <input type="text" name="contact" value={formData.contact} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <br />
        <button type="submit" onClick={handleSubmit}>Submit</button> {/* Use onClick event handler */}
      </div>
    </div>
  );
};

export default App;