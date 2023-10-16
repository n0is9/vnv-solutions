import React from 'react';
import ContactUsForm from "./ContactUsForm";
import Container from "./Container";
import {Link} from "react-router-dom";

function TellUsBanner() {
    return (
        <Container>
            <div className='border-t-16 border-gray-400 bg-vnv-black rounded-3xl mb-8'>
                <div className=' block md:flex justify-evenly items-center m-8'>
                    <h1 className='px-16 text-lg text-center md:text-6xl font-extrabold md:mb-0 mb-4 md:mt-0'>WANT
                        GET STARTED? TELL US ABOUT IT!</h1>
                    <div className='w-full'>
                        <ContactUsForm/>
                    </div>
                </div>
                <div className='flex justify-center items-center mx-8'>
                    <h1 className='leading-loose bg-vnv-milk mb-8 p-4 rounded-3xl text-vnv-black text-lg spacel text-center md:text-2xl font-extrabold mt-4 md:mt-0'>HAVE
                        AN IDEA? THEN FILL OUT <br/><Link to='/brief'
                                                          className='rounded-3xl leading-loose hover:px-6 hover:underline ease-in-out duration-300 bg-vnv-black text-vnv-milk py-2 px-4'>THE
                            BRIEF!</Link></h1>
                </div>
            </div>

        </Container>
    );
}

export default TellUsBanner;