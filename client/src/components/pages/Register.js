import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { userContext } from '../../context/userContext';
import authHelper from '../../context/authHelper';

const Register = () => {
    const { user, dispatch } = useContext(userContext);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        retailer_name: '',
        location: '',
        contact: '',
        password: '',
        password2: ''
    })

    const { retailer_name, location, contact, password, password2 } = formData;

    useEffect(() => {
        if (user.user) navigate('/');
        if (user.isSuccess) navigate('/')
    }, [user.isSuccess, user.user, navigate])

    const formUpdate = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const formSubmit = async (e) => {
        e.preventDefault();
        // Submit functions
        dispatch({ type: 'REGISTER/PENDING' })
        if (password !== password2) {
            dispatch({ type: 'REGISTER/ERROR', payload: "Passwords do not match" })
        }
        else {
            try {
                const response = await authHelper.register(formData);
                dispatch({ type: 'REGISTER/SUCCESS', payload: response });
            } catch (error) {
                const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
                dispatch({ type: 'REGISTER/ERROR', payload: message });
            }
        }
    }
    const containerVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.5,
                duration: 1.5
            }
        },
        exit: {
            x: '-100vw',
            transition: { ease: "easeInOut", duration: 1.0 }
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
                        {user.isError ?
                            (<div className='alert alert-danger d-flex align-items-center justify-content-between'>
                                Error: {user.message}
                                <button className="btn btn-danger" onClick={() => dispatch({ type: 'RESET' })}><span>&times;</span></button>
                            </div>)
                            : ('')
                        }
                        <div className="form-group my-3">
                            <label for="name">Retailer Name</label>
                            <input name='retailer_name' value={retailer_name} onChange={formUpdate} type="text" className="form-control" placeholder="Enter name" />
                        </div>
                        <div className="form-group my-3">
                            <label for="location">Location</label>
                            <input
                                name='location'
                                value={location}
                                onChange={formUpdate}
                                type="text"
                                className="form-control"
                                placeholder="Enter Location"
                            />
                        </div>
                        <div className="form-group my-3">
                            <label for="contact">Phone Number</label>
                            <input
                                name='contact'
                                value={contact}
                                onChange={formUpdate}
                                type="text"
                                className="form-control"
                                placeholder="Enter Phone Number"
                            />
                        </div>
                        <div className="form-group my-3">
                            <label for="password">Password</label>
                            <input
                                name='password'
                                value={password}
                                onChange={formUpdate}
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Password"
                            />
                        </div>
                        <div className="form-group my-3">
                            <label for="passord1">Confirm Password</label>
                            <input
                                name='password2'
                                value={password2}
                                onChange={formUpdate}
                                type="password"
                                className="form-control"
                                id="password2"
                                placeholder="Confirm password"
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary my-3"
                        >
                            Register
                        </button>
                        <p>Already have an account? <Link to='/login'>Login</Link> </p>
                    </form>
                </div>
                <div className="col-lg-3" />
            </div>
        </motion.div>
    )
}

export default Register


