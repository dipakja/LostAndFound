import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import styled from '@emotion/styled';




// import { Form,Button } from 'semantic-ui-react';

const Report = () => {
  return (
 


      <div >
        <h2 >Lost Item</h2>
        <form  method='post' action={"/"}>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name='name' required />
          </div>
          <div >
            <label htmlFor="email" >Email</label>
            <input type="email" id="email"  name='email' required />
          </div>
          <div>
            <label htmlFor="phone">Phone Number</label>
            <input type="number" id="phone"  name='mobileNumber' pattern="[0-9]{10}" title="Please enter a 10-digit number" required />
          </div>
          <div className="mb-4">
            <label htmlFor="phone">objectNamer</label>
            <input type="text" id="objectNamer" name='objectName' required />
          </div>
          <div >
            <label htmlFor="description">Description</label>
            <textarea id="description" name='description' required></textarea>
          </div>
          <button type="submit">submit</button>
        </form>
      </div>   


  );
};

export default Report;
