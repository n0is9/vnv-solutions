import React from 'react';
import Container from "./Container";
import Button from "./buttons/BannerButton";
import {RiTeamFill} from "react-icons/ri";
import {BiSolidConversation} from "react-icons/bi";
import {TbSteam, TbWorldShare} from "react-icons/tb";
import {MdBusinessCenter} from "react-icons/md";
import {LuHeartHandshake} from "react-icons/lu";

const whyUsBlock = [
    {
        img: <RiTeamFill className='animate-none' size={40}/>,
        tittle: 'Team',
        text: 'Team is our driving force, fostering collaboration and innovation. Together, the co-owners cultivate a supportive environment where each team member\'s unique strengths are valued, and everyone is encouraged to contribute to the shared vision.',
        id: 'wu1',
    },
    {
        img: <MdBusinessCenter size={40}/>,
        tittle: 'Business Thinking',
        text: 'We’re entrepreneurs and businesspeople too. We strive to conceptualize our client\'s requirements quickly, and we always put our best foot forward to create unique, effective, and tailored solutions that meet their specific needs.',
        id: 'wu2',
    },
    {
        img: <TbWorldShare size={40}/>,
        tittle: 'Worldwide',
        text: 'We take care of projects and software around the world. Trusted by international businesses from 16 different countries.',
        id: 'wu3',
    },

    {
        img: <BiSolidConversation size={40}/>,
        tittle: 'Communication',
        text: 'We believe in staying in touch throughout the entire project. And by examining each detail upfront, we\'re able to generate comprehensive solutions that save our clients time and resources.',
        id: 'wu4',
    },
    {
        img: <TbSteam size={40}/>,
        tittle: 'Technologies and Innovation',
        text: 'By staying up to date with the latest trends in development and design, we\'re always able to offer our clients the most cutting-edge solutions for their business needs.',
        id: 'wu5',
    },
    {
        img: <LuHeartHandshake size={40}/>,
        tittle: 'Responsibility',
        text: 'We always follow through with agreed-upon plans, bringing even the most complex ideas to life. We value our reputation, but even more, we value our clients’ ideas, time, and budget.',
        id: 'wu6',
    },
]


function WhyUs() {
    return (
            <Container>
                <div className='border-t-16 border-gray-400 rounded-t-3xl mb-4 bg-vnv-black'>
                    <p className='py-4 text-3xl text-center mb-4 font-light'>WHY US?</p>
                </div>
                <div className='grid grid-cols-1 grid-rows-6 md:grid-cols-2 md:grid-rows-3 gap-x-4 gap-y-4 mb-4'>
                    {whyUsBlock.map((b) => (
                        <div key={b.id} className='border-l-16 border-gray-400 rounded-3xl p-8 bg-vnv-black space-y-8'>
                            <div className='space-y-4'>
                                <>{b.img}</>
                                <h1 className='font-extrabold text-xl md:text-2xl'>{b.tittle}</h1>
                                <p className='text-xs md:text-sm'>{b.text}</p>
                            </div>
                        </div>
                    ))}

                </div>
                <div className='border-b-16 border-gray-400 rounded-b-3xl mb-8 py-8 bg-vnv-black'>
                    <Button/>
                </div>
            </Container>
    );
}

export default WhyUs;
