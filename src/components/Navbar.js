import { signOut } from 'firebase/auth';
import React, {useState} from 'react'
import { auth } from '../fire';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = ({
    user,
    setAuthState,
    setUser
}) => {
    const signOutHandler = () => {
        signOut(auth)
        .then(() => {
            setUser(null);
            setAuthState('login');
        })
        .catch((err) => console.log(err));
    }

    const [nav, setNav] = useState(false)

    const handleNav=() => {
        setNav(!nav)
    }

  return (
    <div className='bg-black text-gray-400 h-[100px] max-w-[-1200ppx] mx-auto flex justify-between items-center'>

        <h1 className='text-3xl font-bold primary-color ml-4'>AVIREATA</h1>
        <ul className='hidden md:flex'>
            <li className='p-5'><a href='#about'>About</a></li>
            <li className='p-5'><a href='#portofolio'>Portofilo</a></li>
            <li className='p-5'><a href='#contact'>Contact</a></li>
            <li className='p-5 font-bold primary-color' onClick={signOutHandler}><a href='#signOut'>SIGN OUT</a></li>
            
        </ul>

        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div>

        {/* <div className={nav ? 'fixed h-full left-0 top-0 w-[60%] bg-[#2022121] ease-in-out duration-500':'fixed left-[-100%]'}> */}
        {/* <h1 className='text-3xl font-bold primary-color m-4'>AVIREATA</h1> */}
        {/* <ul className='p-8 text-2xl'> */}
            {/* <li className='p-5'><a href='#about'>Home</a></li> */}
            {/* <li className='p-5'><a href='#about'>About</a></li> */}
            {/* <li className='p-5'><a href='#portofolio'>Portofilo</a></li> */}
            {/* <li className='p-5'><a href='#contact'>Contact</a></li> */}
            {/* <li className='p-5 font-bold primary-color' onClick={signOutHandler}><a href='#signOut'>SIGN OUT</a></li>  */}
            
        {/* </ul> */}
        {/* </div> */}

    </div>
  )
}

export default Navbar