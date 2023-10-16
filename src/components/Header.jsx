import React from 'react';
import Logo from '../img/logo.png'
import Container from "./Container";
import {NavLink} from "react-router-dom";
import clsx from "clsx";

function Header() {
    const navLinkClasses = ({isActive}) => clsx('whitespace-nowrap ml-4 md:ml-16 py-2 px-4 rounded-3xl border border-vnv-milk', {
        'text-vnv-milk  hover:bg-vnv-milk hover:text-vnv-black ease-in-out duration-300': !isActive,
        'text-vnv-black bg-vnv-milk': isActive,
    });

    return (
        <header className='bg-vnv-black border-b md:sticky md:top-0 md:z-50'>
            <Container>
                <div className='flex flex-col md:flex-row md:justify-between items-center md:pb-0 pb-8'>
                    <NavLink className='' to='/vnv-solutions'><img src={Logo} alt='VNV Solutions' className='w-28'/></NavLink>

                    <ul className='flex justify-between items-center text-sm md:text-md'>
                        <li className='-ml-4 md:-ml-16'>
                            <NavLink className={navLinkClasses} to='/vnv-solutions'>HOME</NavLink>
                        </li>
                        <li>
                            <NavLink className={navLinkClasses} to='/contacts'>CONTACTS</NavLink>
                        </li>
                        <li>
                            <NavLink className={navLinkClasses} to='/faq'>FAQ</NavLink>
                        </li>
                    </ul>
                </div>
            </Container>
        </header>


    );
}

export default Header;