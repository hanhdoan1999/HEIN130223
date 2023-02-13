import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../store/register-actions';

const Signup = () => {
  const dispatch = useDispatch();
  // const auth = useSelector((store) => store.auth);
  const register1 = useSelector((store) => store.register);
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const useNameRef = useRef();
  const emailUserRef = useRef();
  const passwordRef = useRef();
  const confirmPassRef = useRef();
  const formSubmitHandlerRegister = (e) => {
    e.preventDefault();
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const userName = useNameRef.current.value;
    const emailUser = emailUserRef.current.value;
    const password = passwordRef.current.value;
    const confirmPass = confirmPassRef.current.value;
    if ((!firstName.trim() 
    || !lastName.trim() 
    || !userName.trim()
    || !emailUser.trim()
    || !password.trim()
    || !confirmPass.trim())
    && (password.trim() === confirmPass.trim())
    ) return;
    console.log("hanh123");
    dispatch(
      register({
        username:userName ,
        email: emailUser,
        password,
        isAdmin: false
      })
    );
    firstNameRef.current.value = '';
    lastNameRef.current.value = '';
    useNameRef.current.value = '';
    emailUserRef.current.value = '';
    passwordRef.current.value = '';
    confirmPassRef.current.value = '';
  };

  return (
    <div className='px-4 w-full h-screen flex justify-center items-center bg-login bg-no-repeat bg-cover'>
      <form
        onSubmit={formSubmitHandlerRegister}
        action=''
        className='border bg-white p-6 flex flex-col items-center min-w-[17rem] sm:min-w-[22rem] md:min-w-[35rem] max-w-[25rem]'
      >
        <h1 className='uppercase text-xl mb-4 font-bold'>Sign up</h1>
        <div className='grid gap-4 md:grid-cols-2 mb-4'>
          <input
            className='block p-2 border-2 rounded focus:outline-none'
            type='text'
            placeholder='First Name'
            ref = {firstNameRef}
          />
          <input
            className='block p-2 border-2 rounded focus:outline-none'
            type='text'
            placeholder='Last Name'
            ref = {lastNameRef}
          />
        </div>
        <div className='grid gap-4 md:grid-cols-2 mb-4'>
          <input
            className='block p-2 border-2 rounded focus:outline-none'
            type='text'
            placeholder='Username'
            ref = {useNameRef}
          />
          <input
            className='block p-2 border-2 rounded focus:outline-none'
            type='text'
            placeholder='emailUser'
            ref = {emailUserRef}
          />
        </div>
        <div className='grid gap-4 md:grid-cols-2 mb-4'>
          <input
            className='block p-2 border-2 rounded focus:outline-none'
            type='password'
            placeholder='Password'
            ref = {passwordRef}
          />
          <input
            className='block p-2 border-2 rounded focus:outline-none'
            type='password'
            placeholder='Confirm Password'
            ref = {confirmPassRef}
          />
        </div>

        <p className='mb-4 '>
          By Creating an accounct I consent to the processing of my personal
          data in accordance with the &nbsp;
          <a href='' className='uppercase font-bold'>
            Privacy policy
          </a>
        </p>
        <button className='mb-4 bg-teal-700 text-white p-2'>Create</button>
        <Link to='/login' className='capitalize underline mb-4'>
          Already have an account
        </Link>
      </form>
    </div>
  );
};

export default Signup;
