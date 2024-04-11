import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

function ForgotPassword() {

    // const [inputs, setInput] = useState({
    //     email: '',
    //     password: '',
    //     confirm-password: ''
    // })

    // const [formErrors, setFormErrors] = useState({})
    // const [isSubmit, setIsSubmit] = useState(false)

    // const handleValidate = (values) => {
    //     var errors = {};

    //     if (!values.email.trim()) {
    //       errors.email = 'Enter a valid email';
    //     } else if (!/\S+@\S+\.\S+/.test(values.email.trim())) {
    //       errors.email = 'Invalid email format';
    //     }
    //     if (!values.password.trim()) {
    //       errors.password = 'Enter password';
    //     }

    //     return errors;
    //   };

    // const handleSubmitForm = (event) => {
    //     event.preventDefault();
    //     console.log(inputs);
    //     setFormErrors(handleValidate(inputs))
    //     setIsSubmit(true)

    //     //console.log('key', Object.keys(formErrors).length);

    //     if (Object.keys(formErrors).length == 0 && isSubmit == true) {
    //         axios.post('http://localhost:2001/user/login', inputs).then((res) => {
    //             //console.log("response", res);
    //             //toast.success(res.data.message)
    //             alert(res.data.message)
    //             // localStorage.setItem('userId',res.data.data._id)
    //             console.log(res.data.data._id);
    //             console.log(res.data.data.email);

    //             sessionStorage.setItem('userId', res.data.data._id)
    //             sessionStorage.setItem('email', res.data.data.email)

    //             // const userid = localStorage.getItem('userId')
    //             // const userName = sessionStorage.getItem('userName')
    //             // const userName = sessionStorage.getItem('emailID')
    //             navigate('/main')
    //        }).catch((error) => {
    //            // toast.error(error.response.data.message);
    //            alert(error.response.data.message)
    //        })
    //     }
    // }

    // const inputChange = (event) => {
    //     const name = event.target.name
    //     const value = event.target.value
    //     setInput({ ...inputs, [name]: value })
    // }

    return (
        <>
            <div>
                <section className="h-screen bg-Homewall bg-cove font-[Poppins] md:bg-top bg-center">
                    <Navbar />
                    <div className="flex flex-col justify-center text-center  items-center h-3/4">
                        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                            <div className="w-full p-6 bg-white rounded-sm shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
                                <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Change Password
                                </h2>
                                <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
                                    <div>
                                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@domain.com" required="" />
                                    </div>
                                    <div>
                                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
                                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                    </div>
                                    <div>
                                        <label for="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                        <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                    </div>
                                    {/* <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="newsletter" aria-describedby="newsletter" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label for="newsletter" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                                        </div>
                                    </div> */}
                                    <button type="submit" className="loginBtn bg-[#7747ff] w-max m-auto px-6 py-2  text-white text-sm font-normal">Reset Password</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </>
    )
}

export default ForgotPassword
