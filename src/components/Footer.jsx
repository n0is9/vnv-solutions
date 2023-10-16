import React from 'react';
import Container from "./Container";
import {NavLink} from "react-router-dom";
import facebookIcon from '../img/icons/facebook.svg'
import instagramIcon from '../img/icons/instagram.svg'
import linkedinIcon from '../img/icons/linkedIn.svg'
import telegramIcon from '../img/icons/telegram.svg'
import tikTokIcon from '../img/icons/tiktok.svg'


const socialLinks = [
    {
        socialNetwork: 'Facebook',
        link: 'https://www.facebook.com/profile.php?id=100088433736254',
        img: facebookIcon
    },
    {
        socialNetwork: 'Instagram',
        link: 'https://instagram.com/vnv_solutions',
        img: instagramIcon
    },
    {
        socialNetwork: 'Telegram',
        link: 'https://t.me/vnv_solutions',
        img: telegramIcon
    },
    {
        socialNetwork: 'Linkedin',
        link: 'https://www.linkedin.com/company/vnv-tech/',
        img: linkedinIcon
    },
    {
        socialNetwork: 'TikTok',
        link: 'https://www.tiktok.com/@vnvsolutions?_t=8YVB28bloQP&_r=1',
        img: tikTokIcon
    },
]

function Footer() {
    return (
        <footer className='bg-vnv-black border-t text-sm md:text-md'>
            <Container>
                <div className='flex flex-col md:flex-row md:justify-evenly items-center py-4 text-center'>
                    <NavLink className='hover:underline' to={'tel:+380685168366'} href="tel:+380685168366">+380 68
                        516 83 66</NavLink>
                    <NavLink className='md:ml-4 mt-4 md:mt-0 hover:underline'
                             to={'mailto:zaharchukartem9@gmail.com'}>team@vnv.solutions</NavLink>
                    <NavLink className='md:ml-4 mt-4 md:mt-0 hover:underline'
                             to={'https://www.google.com.ua/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%9A%D0%B0%D1%80%D0%BB%D0%B0+%D0%9C%D1%96%D0%BA%D0%BB%D1%8C%D0%BE%D1%88%D0%B0,+7,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+79000/@49.7835065,24.0144865,16z/data=!4m6!3m5!1s0x473ae7d4b02a2c4d:0xb2af24fc0f878a18!8m2!3d49.7835443!4d24.0178518!16s%2Fg%2F11fm9tmkkk?hl=uk'}
                             target={'_blank'}>
                        Lviv, Ukraine, Karla Miklʹosha Street, 7
                    </NavLink>
                </div>
                <nav className='border-b border-gray-700'></nav>
                <div className='flex justify-evenly items-center py-4'>
                    {socialLinks.map((l) => (
                        <NavLink key={l.socialNetwork} to={l.link} target={"_blank"}><img
                            className='hover:scale-125 ease-in-out duration-300' src={l.img}
                            alt={l.socialNetwork}/></NavLink>
                    ))}
                </div>
            </Container>
        </footer>
    );
}

export default Footer;
