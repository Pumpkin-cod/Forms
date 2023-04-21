// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const FunctionalForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        setFormData({
            name,
            email,
            password
        });
    }

    return (
        
            <div className='function'>
                <h2>Functional Form</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Enter name" /> <br />
                    <br />
                    <input type="email" name="email" placeholder="Enter Email" /> <br />
                    <br />
                    <input type="password" name="password" placeholder="password" />
                    <br />
                    <br />
                   <button>Submit</button>
                </form>
            <div className='data'>
                <h3>{formData.name}</h3>
                <h3>{formData.email}</h3>
                <h3>{formData.password}</h3>    
            </div>
            </div>
       
    );
}

export default FunctionalForm;

