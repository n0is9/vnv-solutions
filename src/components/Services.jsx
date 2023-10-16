import React, {useState} from 'react';
import clsx from 'clsx';
import Container from "./Container";
import Button from "./buttons/BannerButton";

const navItems = [
    {
        title: 'SOFTWARE DEVELOPMENT',
        text: 'Our software is aiming to solve your business problems and meet specific business needs. Our experienced team can develop software for a wide range of industries and applications, especially agriculture, finance, healthcare, and logistics, among others. Our goal is to deliver high-quality software that will solve your business tasks and problems, and optimize your working processes to help your business grow.',
        subTittle: ['Qualitatively', 'Fast', 'Promising'],
        path: 'software-development',
        id: 's1',
    },
    {
        title: 'DEVELOPMENT OF A UNIQUE ERP SYSTEM',
        text: 'Developing customized ERP (Enterprise Resource Planning) systems that streamline your business operations, improve communication between departments and automate processes. Our ERP solutions are tailored to the unique needs of your business and can be integrated with other software solutions to provide a comprehensive business management system.',
        subTittle: ['Everyone Matters', 'Leadership is Here to Serve', 'Resilient'],
        path: 'development-of-a-unique-erp-system',
        id: 's2',
    },
    {
        title: 'ONLINE-STORE DEVELOPMENT',
        text: 'We offer online-store development services for clients who want to create an online presence for their business. Our team can build and design a customized e-commerce website that is easy to use and provides a seamless user experience. Our goal is to help you increase your online sales, expand customer base, and improve overall business performance. Deep understanding and large experience allows us to build the most conversional online-stores for you.',
        subTittle: ['Continuous Improvements', 'Quality', 'Efficiency'],
        path: 'online-store-development',
        id: 's3',
    },
    {
        title: 'SUPPORT AND UPDATES',
        text: 'We offer ongoing support and updates to ensure that your software solutions remain up-to-date and fully functional. Our support team is always ready to fix any issues or concerns that arise, so we provide regular updates to improve performance and add new features if needed. Our goal is to provide our clients with peace of mind and ensure that their software solutions continue to meet their needs over time.',
        subTittle: ['Communication', 'Improvement', 'Expertise'],
        path: 'support-and-updates',
        id: 's4',
    },
    {
        title: 'BOT DEVELOPMENT',
        text: 'We specialize in developing customized bots that can automate tasks and improve efficiency. We can create bots for a wide range of applications, including customer service, social media, and sales, among others. Our goal is to provide you with cutting-edge technology that improves their productivity and enhances their customer experience.',
        subTittle: ['Automation', 'Innovation', 'Quality'],
        path: 'bot-development',
        id: 's5',
    },
    {
        title: 'WEBSITE TRANSFERRING',
        text: 'We offer website transferring services for clients who want to move their website from one platform to another. Our team of developers can ensure that the transition is smooth and seamless, and that the website remains fully functional throughout the process. Our goal is to minimize any disruptions to our clients\' online presence and ensure that their website continues to meet their business needs.',
        subTittle: ['Skills', 'Experience', 'Result'],
        path: 'website-transferring',
        id: 's6',
    },
];

function Services() {
    const [selectedItem, setSelectedItem] = useState(navItems[0]);

    const navbarClasses = ({isActive}) =>
        clsx('cursor-pointer whitespace-nowrap p-2 m-8 ease-in-out duration-300 hover:text-vnv-black border rounded-2xl hover:bg-vnv-milk', {
            'text-vnv-milk': !isActive,
            'bg-vnv-milk text-vnv-black rounded-2xl': isActive,
        });

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    return (
        <Container>
            <div className='border-t-16 border-gray-400 rounded-t-3xl mb-4 bg-vnv-black'>
                <p className='py-4 text-3xl text-center mb-4 font-light'>SERVICES</p>
            </div>
            <div className='bg-vnv-black px-8 pb-4'>
                <ul className='flex justify-between items-center text-center overflow-x-auto overflow-visible'>
                    {navItems.map((item) => (
                        <li
                            key={item.id}
                            className={navbarClasses({isActive: selectedItem.id === item.id})}
                            onClick={() => handleItemClick(item)}
                        >
                            {item.title}
                        </li>
                    ))}
                </ul>
            </div>
            <div
                className='flex-col flex text-vnv-black justify-center items-center border border-vnv-black rounded-b-3xl mb-8 pb-8 border-b-vnv-black'>
                <h1 className='animate-bounce font-extrabold text-2xl md:text-3xl my-8 text-center'>{selectedItem.title}</h1>
                <p className='mx-8'>{selectedItem.text}</p>
                <ul className='flex justify-between items-center text-vnv-milk m-8 text-xs md:text-sm'>
                    <li className='bg-vnv-black py-2 px-3 rounded-2xl text-center'>{selectedItem.subTittle[0]}</li>
                    <li className='bg-vnv-black py-2 px-3 rounded-2xl text-center ml-4 md:ml-32'>{selectedItem.subTittle[1]}</li>
                    <li className='bg-vnv-black py-2 px-3 rounded-2xl text-center ml-4 md:ml-32'>{selectedItem.subTittle[2]}</li>
                </ul>
                <Button/>
            </div>
        </Container>

    );
}

export default Services;
