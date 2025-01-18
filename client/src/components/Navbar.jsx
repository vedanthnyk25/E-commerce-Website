import React, {useState} from 'react';
import {assets} from '../assets/frontend_assets/assets'; // Import the logo
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return(
    <div className='flex justify-between items-center py-5 font-medium'>
    
    <Link to={'/'}><img src={assets.logo} alt='logo' className='w-36'/></Link>
    
    <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
      <NavLink to='/' className='hover:border-b-2 hover:border-slate-400 flex flex-col items-center gap-1'>
      <p>HOME</p>
      <hr className='w-full border-none h-[1.5px] bg-gray-700 hidden'/>
      </NavLink>
      <NavLink to='/collection' className='hover:border-b-2 hover:border-slate-400 flex flex-col items-center gap-1'>
      <p>COLLECTION</p>
      <hr className='w-full border-none h-[1.5px] bg-gray-700 hidden'/>
      </NavLink>
      <NavLink to='/about' className='hover:border-b-2 hover:border-slate-400 flex flex-col items-center gap-1 '>
      <p>ABOUT</p>
      <hr className='w-full border-none h-[1.5px] bg-gray-700 hidden'/>
      </NavLink>
      <NavLink to='/contact' className='hover:border-b-2 hover:border-slate-400 flex flex-col items-center gap-1'>
      <p>CONTACT</p>
      <hr className='w-full border-none h-[1.5px] bg-gray-700 hidden'/>
      </NavLink>
    </ul>
    <div className='flex items-center gap-6'>
    <img src={assets.search_icon} className='w-5 cursor-pointer' alt=''/>
    <div className='group relative'>
      <img src={assets.profile_icon} className='w-5 cursor-pointer' alt=''/>
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-300 text-gray-400 rounded'>
              <p className='cursor-pointer hover:text-black'>My Profile</p>
              <p className='cursor-pointer hover:text-black'>Orders</p>
              <p className='cursor-pointer hover:text-black'>Logout</p>  

            </div>
          </div>
    </div>
    <Link to='/cart' className='relative'>
    <img src={assets.cart_icon} alt='' className='w-5 min-w-5'/>
    <p className='absolute top-[12px] right-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>10</p>
    </Link>
    <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer' alt=''/>
    </div>
    {/* Mobile Menu */}
    <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible?'w-full':'w-0'}`}>
    <div className='flex flex-col text-gray-600'>
      <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3'>
        <img src={assets.dropdown_icon} alt='' className='h-4 rotate-180'/>
        <p className='cursor-pointer'>Back</p>
      </div>
      <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border hover:text-cyan-700' to='/'>HOME</NavLink>
      <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border hover:text-cyan-700' to='/about'>ABOUT</NavLink>
      <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border hover:text-cyan-700' to='/collection'>COLLECTION</NavLink>
      <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border hover:text-cyan-700' to='/contact'>CONTACT</NavLink>
    </div>
    </div>
    </div>
  )
}

export default Navbar;