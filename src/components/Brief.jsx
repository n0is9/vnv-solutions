import React from 'react';
import Container from "./Container";
import BriefForm from "./BriefForm";
import {BiSolidHelpCircle} from "react-icons/bi";

function Brief() {
    return (
        <Container>
            <div className='border-t-16 border-gray-400 rounded-t-3xl mb-4 mt-8 bg-vnv-black'>
                <p className='py-4 text-3xl text-center mb-4 font-light'>SHORT PROJECT BRIEF</p>
            </div>
            <div className='flex flex-col md:flex-row px-8 justify-between items-center bg-vnv-black'>
                <h1 className='text-vnv-milk text-center pt-4 md:pt-0 text-2xl font-extrabold md:text-6xl'>LET`S START
                    YOUR PROJECT</h1>
                <BriefForm/>
            </div>
            <div
                className='border-b-16 border-gray-400 rounded-b-3xl mb-8 bg-vnv-black flex justify-center items-center mt-4 py-4 px-8'>
                <BiSolidHelpCircle size={32}/>
                <p className='pl-4 text-center font-light'>A brief is a concise and summarized document or statement
                    providing essential information or instructions on a topic.</p>
            </div>
        </Container>
    );
}

export default Brief;
