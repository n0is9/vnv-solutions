import React from 'react';
import ContactUsForm from "./ContactUsForm";
import Container from "./Container";
import {Link, NavLink} from "react-router-dom";

const socialLinks = [
    {
        socialNetwork: 'Facebook',
        link: 'https://www.facebook.com/profile.php?id=100088433736254',
    },
    {
        socialNetwork: 'Instagram',
        link: 'https://instagram.com/vnv_solutions',
    },
    {
        socialNetwork: 'Telegram',
        link: 'https://t.me/vnv_solutions',
    },
    {
        socialNetwork: 'Linkedin',
        link: 'https://www.linkedin.com/company/vnv-tech/',
    },
    {
        socialNetwork: 'TikTok',
        link: 'https://www.tiktok.com/@vnvsolutions?_t=8YVB28bloQP&_r=1',
    },
]

function Contacts() {
    return (
        <Container>
            <div className='my-8'>
                <div className='border-t-16 border-gray-400 rounded-t-3xl mb-4 bg-vnv-black'>
                    <p className='py-4 text-3xl text-center mb-4 font-light'>CONTACTS</p>
                </div>
                <div
                    className='flex justify-evenly items-center border border-vnv-black rounded-b-3xl text-vnv-black p-8'>
                    <div className=''>
                        <div className='mb-4'>
                            <Link target='_blank'
                                  to={'https://www.google.com.ua/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%9A%D0%B0%D1%80%D0%BB%D0%B0+%D0%9C%D1%96%D0%BA%D0%BB%D1%8C%D0%BE%D1%88%D0%B0,+7,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+79000/@49.7835065,24.0144865,16z/data=!4m6!3m5!1s0x473ae7d4b02a2c4d:0xb2af24fc0f878a18!8m2!3d49.7835443!4d24.0178518!16s%2Fg%2F11fm9tmkkk?hl=uk'}>
                                <h1 className='text-3xl'>Ukraine, Lviv</h1>
                                <p>Karla Miklʹosha Street</p>
                            </Link>
                        </div>
                        <NavLink className='hover:underline text-3xl'
                                 to={'mailto:zaharchukartem9@gmail.com'}>team@vnv.solutions</NavLink>

                        <ul className='mt-4'>
                            {socialLinks.map((sl) => (
                                <li className='hover:underline mb-2'><Link target='_blank'
                                                                           to={sl.link}>{sl.socialNetwork}</Link></li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <ContactUsForm/>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Contacts;
