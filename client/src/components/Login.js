import React from 'react';
import { useState } from 'react'
import { FaSignInAlt } from 'react-icons/fa'

const Login = () => {
    const [formData, setFormData] = useState({
        phone: '',
        password: '',
    })

    const { phone, password } = formData;

    const formUpdate = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const formSubmit = (e) => {
        e.preventDefault();
        // Submit functions
    }

    return (
        <div>
            <div className='row my-5'>
                <div className="col-lg-3" />
                <div className="col-lg-6">
                    <h1> <FaSignInAlt /> Register as a Reatailer</h1>
                    <form onSubmit={formSubmit}>
                        <div className="form-group my-3">
                            <label for="phone">Phone Number</label>
                            <input name='phone' value={phone} onChange={formUpdate} type="text" className="form-control" placeholder="Enter Phone Number" />
                        </div>
                        <div className="form-group my-3">
                            <label for="password">Password</label>
                            <input name='password' value={password} onChange={formUpdate} type="password" className="form-control" id="password" placeholder="Password" />
                        </div>
                        <button type="submit" className="btn btn-primary my-3">Submit</button>
                    </form>
                </div>
                <div className="col-lg-3" />
            </div>
        </div>
    )
}

export default Login


