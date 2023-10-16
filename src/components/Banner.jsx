import React from 'react';
import Container from "./Container";
import Button from "./buttons/BannerButton";

function Banner() {
    return (
        <Container>
            <div className='bg-bg1 bg-cover rounded-3xl bg-no-repeat bg-center p-16 md:p-32 my-8'>
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-center font-light backdrop-blur-xl mb-8 text-2xl border-opacity-0 rounded-2xl md:text-7xl uppercase'>Easy,
                        quality, IT - <b className='font-extrabold'>w</b>inning <b
                            className='font-extrabold'>solutions</b> for your business.</p>
                    <Button/>
                </div>
            </div>
        </Container>
    );
}

export default Banner;