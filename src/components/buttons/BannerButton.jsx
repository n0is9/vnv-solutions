import React from 'react';
import {Link} from "react-router-dom";

function BannerButton() {
    return (<div className='flex justify-center items-center'>
            <Link to={'/contacts'}
                  className="relative inline-flex items-center backdrop-blur-xl px-12 py-3 overflow-hidden text-xs text-center md:text-lg font-medium border-4 border-vnv-milk rounded-full hover:text-vnv-black group">
                <span
                    className="absolute left-0 block w-full h-0 transition-all bg-vnv-milk opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                <span
                    className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform  group-hover:translate-x-full translate-x-0 ease">
                    <svg className="w-7 h-7 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                </span>
                <span className="relative font-extrabold uppercase">Work with us</span>
            </Link>
        </div>

    );
}

export default BannerButton;