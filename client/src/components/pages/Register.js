import React from 'react';
import { useState } from 'react'
import { FaUserAlt } from 'react-icons/fa'
import {motion} from 'framer-motion'

const Register = () => {
    const [formData, setFormData] = useState({
        retailer_name: '',
        location: '',
        phone: '',
        password: '',
        password2: ''
    })

    const { retailer_name, location, phone, password, password2 } = formData;

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
    const containerVariants = {
        hidden:{
            opacity: 0
          },
        visible:{
        opacity: 1,
        transition:{
            delay: 0.5,
            duration: 1.5
        }
        },
        exit:{
        x: '-100vw',
        transition:{ease: "easeInOut", duration: 1.0}
        }
    }

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div className='row my-5'>
                <div className="col-lg-3" />
                <div className="col-lg-6">
                    <h1> <FaUserAlt /> Register as a Retailer</h1>
                    <form onSubmit={formSubmit}>
                        <div className="form-group my-3">
                            <label for="name">Retailer Name</label>
                            <input name='retailer_name' value={retailer_name} onChange={formUpdate} type="text" className="form-control" placeholder="Enter name" />
                        </div>
                        <div className="form-group my-3">
                            <label for="location">Location</label>
                            <input name='location' value={location} onChange={formUpdate} type="text" className="form-control" placeholder="Enter Location" />
                        </div>
                        <div className="form-group my-3">
                            <label for="phone">Phone Number</label>
                            <input name='phone' value={phone} onChange={formUpdate} type="text" className="form-control" placeholder="Enter Phone Number" />
                        </div>
                        <div className="form-group my-3">
                            <label for="password">Password</label>
                            <input name='password' value={password} onChange={formUpdate} type="password" className="form-control" id="password" placeholder="Password" />
                        </div>
                        <div className="form-group my-3">
                            <label for="passord1">Confirm Password</label>
                            <input name='password2' value={password2} onChange={formUpdate} type="password" className="form-control" id="password2" placeholder="Confirm password" />
                        </div>
                        <button type="submit" className="btn btn-primary my-3">Submit</button>
                    </form>
                </div>
                <div className="col-lg-3" />
            </div>
        </motion.div>
    )
}

export default Register


