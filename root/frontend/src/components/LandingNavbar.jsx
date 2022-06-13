import React, { useEffect, useState } from 'react'
import { SiWebmoney } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';
import { GiHamburgerMenu } from 'react-icons/gi'

const LandingNavbar = () => {
    const [openHamburgerMenu, setOpenHamburgerMenu] = useState(false);
    const { screenSize, setScreenSize } = useStateContext();

    useEffect(() => {
        const handleResize = () => {
            setScreenSize(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, [])

    const menuOptions = ['About', "Discover", "Services", "Sign Up"];

    const HamburgerMenu = () => {
        return (
            <div className='text-black w-screen cursor-pointer text-xl bg-slate-50 p-3 rounded-sm'>
                <ul role="list" className='text-center divide-y divide-slate-200'>
                    {menuOptions.map((option) => 
                        <li className='hover:underline-offset-4 hover:underline p-4 last:pb-2 first:pt-2' key={option}>
                            {option}
                        </li>
                    )}
                </ul>
            </div>
        )
    }

    return (
    <>
        {(screenSize < 640) ? 
        /* If screen is in mobile view, switch nav positions and create a hamburger menu */
        <>
        <div className='bg-slate-100 text-blue-500 dark:bg-main-dark-bg dark:text-white p-3'>
            <div className='flex justify-between mx-auto container items-center'>
                <Link to='/' className='text-3xl flex items-center font-extrabold text-black dark:text-white gap-3'>
                    <SiWebmoney /> 
                </Link>
                    
                <button 
                className='py-2.5 px-6 text-white bg-blue-500 rounded-lg outline-none no-underline border-none cursor-pointer transition ease-in-out delay-150 hover:bg-blue-700'>
                    Sign In
                </button>

                <button> 
                    <GiHamburgerMenu className='text-3xl text-black dark:text-white' onClick={() => setOpenHamburgerMenu(!openHamburgerMenu)}/>
                </button>

            </div>
        </div>
        {openHamburgerMenu && <HamburgerMenu />}
        </>
        
        :    

        <div className='bg-slate-100 drop-shadow-2xl border-b-2 border-black dark:bg-main-dark-bg p-3'>
            <div className='flex justify-evenly mx-auto container items-center'>
                <Link to='/' className='text-3xl flex items-center font-extrabold text-black dark:text-white gap-3'>
                    <SiWebmoney /> 
                </Link>
                    
                <ul className='flex text-black justify-between dark:text-white gap-14 items-center'>
                    {menuOptions.map((option) => 
                        <li className='hover:cursor-pointer hover:underline-offset-1 hover:underline' key={option}>
                            {option}
                        </li>
                    )}
                </ul>                

                <button 
                className='py-2.5 px-6 text-white bg-blue-500 rounded-lg outline-none no-underline border-none cursor-pointer transition ease-in-out delay-150 hover:bg-blue-700'>
                    Sign In
                </button>
            </div>
        </div>
        }
    </>
    )
}

export default LandingNavbar