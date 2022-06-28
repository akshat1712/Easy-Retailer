import { useState, useEffect, useContext } from 'react'
import { userContext } from '../../context/userContext';
import authHelper from '../../context/authHelper';
import { FaSignInAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const { user, dispatch } = useContext(userContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        contact: '',
        password: '',
    })
    const { contact, password } = formData;

    useEffect(()=>{
        if (user.user) navigate('/');
        if (user.isSuccess) navigate('/')
    },[user.isSuccess, user.user, navigate])

    const formUpdate = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const formSubmit = async (e) => {
        e.preventDefault();
        // Submit functions
        dispatch({ type: 'LOGIN/PENDING' });

        // if (formData.contact.length !== 10){
        //     dispatch({type: 'LOGIN/ERROR', payload: "Phone number should be 10 digits"});
        // }
        // else{
            try {
                const response = await authHelper.login(formData);
                dispatch({ type: 'LOGIN/SUCCESS', payload: response});
            } catch (error) {
                const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
                dispatch({ type: 'LOGIN/ERROR', payload: message });
            }
        // }
    }

    const containerVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.2,
                duration: 0.75
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
            <div className="container">
                <div className='row my-5'>
                    <div className="col-lg-3" />

                    <div className="col-lg-6">
                        <h1> <FaSignInAlt /> Login</h1>

                        <form onSubmit={formSubmit}>
                            {user.isError ?
                                (<div className='alert alert-danger d-flex align-items-center justify-content-between'>
                                    Error: {user.message}
                                    <button className="btn btn-danger" onClick={()=>dispatch({type:'RESET'})}><span>&times;</span></button>
                                </div>)
                                : ('')
                            }
                            <div className="form-group my-3">
                                <label htmlFor="contact">Phone Number</label>
                                <input
                                    name='contact'
                                    value={contact}
                                    onChange={formUpdate}
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Phone Number"
                                    required = {true}
                                />
                            </div>
                            <div className="form-group my-3">
                                <label htmlFor="password">Password</label>
                                <input
                                    name='password'
                                    value={password}
                                    onChange={formUpdate}
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Password"
                                    required = {true}
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary my-3">
                                Login
                            </button>
                            <p>New here? <Link to='/register'>Register</Link> </p>
                        </form>

                    </div>
                    <div className="col-lg-3" />
                </div>
            </div>
        </motion.div>
    )
}

export default Login


