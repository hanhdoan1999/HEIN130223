import React from 'react';

import { Badge } from '@mui/material';
import { Search, ShoppingCart } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store/auth-slice';

const Navbar = () => {
  const dispatch = useDispatch();
  const totalQantity = useSelector((store) => store.cart.totalQantity);
  const auth = useSelector((store) => store.auth);

  const handleLogout = () => {
    console.log("handleLogout");
    dispatch(logout(null))
  }
  console.log(auth);

  return (
    <nav className='grid grid-cols-2 p-4 border-b font-semibold h-18'>
      <h1 className='font-bold text-3xl uppercase flex items-center justify-start px-4 tracking-wider'>
        <a href=''>Hein.</a>
      </h1>
      <div className='flex justify-end items-center px-4 text-md md:text-lg'>
        {auth && auth?.currentUser !== null ? 
          <Link to='/' className='uppercase px-4 py-2' onClick={()=> handleLogout()}>
            {auth?.currentUser?.userId} &nbsp; Logout
          </Link>
        :
        <>
        <Link to='/signup' className='uppercase px-4 py-2'>
          Register
        </Link>
        <Link to='/login' className='uppercase px-4 py-2'>
          Sign in
        </Link>
        </>
        }
        <Link to='/cart'>
          <Badge
            badgeContent={totalQantity}
            color='primary'
            className='cursor-pointer'
          >
            <ShoppingCart />
          </Badge>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
