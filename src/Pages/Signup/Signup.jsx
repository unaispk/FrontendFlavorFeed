import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './signup.css';
import Navbar from '../../components/Navbar/Navbar';
import Button from '../../components/Button';
import Footer from '../../components/Footer/Footer';
import axios from 'axios'

function Signup() {

    const [inputs, setInput] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
      })

    const[formErrors, setFormErrors] = useState({});
    const [toSubmit, setToSubmit] = useState(false);

    console.log(formErrors);
    
    const inputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        
        setInput({ ...inputs, [name]: value })
    }

    const handleValidateFields = (values) => {
        var errors = {};
      
        if (!values.firstname.trim()) {
          errors.firstname = 'First name required';
        } else if (!/^[a-zA-Z]+$/.test(values.firstname.trim())) {
          errors.firstname = 'Invalid characters in first name';
        }
      
        if (!values.lastname.trim()) {
          errors.lastname = 'Last name required';
        } else if (!/^[a-zA-Z]+$/.test(values.lastname.trim())) {
          errors.lastname = 'Invalid characters in last name';
        }
      
        if (!values.email.trim()) {
          errors.email = 'Enter a valid email';
        } else if (!/\S+@\S+\.\S+/.test(values.email.trim())) {
          errors.email = 'Invalid email format';
        }
      
        if (!values.password.trim()) {
          errors.password = 'Enter password';
        } else if (values.password.trim().length < 8) {
          errors.password = 'Password must be at least 8 characters long';
        }
      
        return errors;
      };
      
    // const handleValidateFields = (values) => {
    //     var errors = {}
    //     if (values.firstname === '') {
    //       errors.firstname = 'First name required'
    //     }
    //     if (values.lastname === '') {
    //       errors.lastname = 'Last name required'
    //     }
    //     if (values.email === '') {
    //       errors.email = 'Enter a valid email'
    //     }
    //     if (values.password === '') {
    //       errors.password = 'Enter password'
    //     }
    //     return errors;
    // }

//--------------------------------------------------------------------------------------------------------
    const handleSubmitForm = (event) => {
        event.preventDefault();
        console.log(inputs)

        setFormErrors(handleValidateFields(inputs))
        setToSubmit(true)

        if (Object.keys(formErrors).length == 0 && toSubmit === true) {
            axios.post('http://localhost:2001/user/registeruser', inputs).then((res) => {
            //   toast.success(res.data.message)
                 alert(res.data.message);
            }).catch((error) => {
            //   toast.error(error.response.data.message);
                 alert(res.data.message);
            })
            console.log("Successfullu registered");
          }

    } //--------------------------------------------------------------------------------------------------

    return (
        <>
            <div>
                <section className="h-screen bg-Homewall bg-cover font-[Poppins] md:bg-top bg-center">

                    <div className="flex flex-col justify-center text-center items-center  sm:mt-10 h-3/4">
                        
                        <div className="signup-container-main mt-8">
                            <div className="signup-container  max-w-md  flex flex-col   p-4  text-black bg-white">
                                <div className="text-2xl font-bold  mb-2 text-[#7747ff] text-center">Sign Up</div>

                                <div className="form-message text-md font-normal mb-4 text-center text-[#1e0e4b]">Sign up to get the full access</div>
                                <form className="flex flex-col gap-3">
                                    <div className="block ">
                                        <span style={{ color: 'red', fontFamily: ' Times New Roman, Garamond,  Georgia' }}> {formErrors.firstname}</span>
                                        <input type="text" id="fname" name='firstname' placeholder='First name' onChange={inputChange} onClick={() => { setFormErrors({ ...formErrors, firstname: '' }) }}  className="form-input rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0" />
                                    </div>
                                    <div className="block ">
                                        <span style={{ color: 'red', fontFamily: ' Times New Roman, Garamond,  Georgia' }}>{formErrors.lastname}</span>
                                        <input type="text" id="lname" name='lastname' placeholder='Last name' onChange={inputChange} onClick={() => { setFormErrors({ ...formErrors, lastname: '' }) }}  className="form-input rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0" />
                                    </div>
                                    <div className="block ">
                                        <span style={{ color: 'red', fontFamily: ' Times New Roman, Garamond,  Georgia' }}>{formErrors.email}</span>
                                        <input type="text" id="email" name='email' placeholder='Email' onChange={inputChange} onClick={() => { setFormErrors({ ...formErrors, email: '' }) }}  className="form-input rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0" />
                                    </div>
                                    <div className="block ">
                                        <span style={{ color: 'red', fontFamily: ' Times New Roman, Garamond,  Georgia' }}>{formErrors.password}</span>
                                        <input type="text" id="password" name='password' placeholder='Password' onChange={inputChange} onClick={() => { setFormErrors({ ...formErrors, password: '' }) }}  className="form-input rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0" />
                                    </div>

                                    <button type="submit" className="loginBtn bg-[#7747ff] w-max m-auto px-6 py-2  text-white text-sm font-normal" onClick={handleSubmitForm}>Sign up</button>

                                </form>                                                                            
                                <div className="form-message text-md text-center mt-[1.6rem]">Already have an account ? <Link to={'/login'} ><span className="text-md text-[#7747ff]">Log in</span> </Link></div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </>
    )
}

export default Signup

