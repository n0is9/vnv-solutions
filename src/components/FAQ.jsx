import React, {useState} from 'react';
import Container from "./Container";
import {Link} from "react-router-dom";

const faqList = [
    {
        question: '1. What are IT services?',
        answer: 'IT services encompass a range of activities related to information technology, including hardware and software support, network management, cybersecurity, and more.',
        id: 'fl1',
    },
    {
        question: '2. Why do businesses need IT services?',
        answer: 'Businesses rely on IT services to ensure the smooth operation of their technology infrastructure, enhance productivity, and safeguard against potential cyber threats.',
        id: 'fl2',
    },
    {
        question: '3. What types of IT services are commonly provided?',
        answer: 'Common IT services include helpdesk support, system maintenance, software development, cloud computing, data backup and recovery, and cybersecurity services.',
        id: 'fl3',
    },
    {
        question: '4. How can IT services benefit small businesses?',
        answer: 'IT services can empower small businesses by providing cost-effective solutions, improving efficiency, enabling scalability, and enhancing overall competitiveness in the digital landscape.',
        id: 'fl4',
    },
    {
        question: '5. What is the role of cybersecurity in IT services?',
        answer: 'Cybersecurity is a crucial component of IT services, involving measures to protect systems, networks, and data from unauthorized access, attacks, and data breaches.',
        id: 'fl5',
    },
    {
        question: '6. How does cloud computing fit into IT services?',
        answer: 'Cloud computing is a key aspect of IT services that involves the delivery of computing services, including storage, processing power, and applications, over the internet, offering flexibility and scalability.',
        id: 'fl6',
    },
    {
        question: '7. What is the importance of IT consulting services?',
        answer: 'IT consulting services help businesses make informed technology decisions, align IT strategies with business goals, and navigate the complexities of emerging technologies.',
        id: 'fl7',
    },
    {
        question: '8. How can businesses ensure data security with IT services?',
        answer: 'IT services implement various security measures, such as encryption, access controls, and regular audits, to safeguard sensitive data and prevent unauthorized access.',
        id: 'fl8',
    },
    {
        question: '9. What is the role of IT support in day-to-day operations?',
        answer: 'IT support provides assistance to users, troubleshoots technical issues, and ensures that systems and applications are functioning optimally, minimizing downtime.',
        id: 'fl9',
    },
    {
        question: '10. How can businesses stay updated with evolving technologies through IT services?',
        answer: 'IT services providers often offer technology updates, training, and strategic advice to help businesses stay current with emerging trends and technologies, ensuring a competitive edge in the market.',
        id: 'fl10',
    },
]

const Faq = () => {
    const [visibleAnswerId, setVisibleAnswerId] = useState(null);

    const toggleAnswer = (id) => {
        setVisibleAnswerId((prevId) => (prevId === id ? null : id));
    };

    return (
        <Container>
            <div className='border-t-16 border-gray-400 rounded-t-3xl mt-8 mb-4 bg-vnv-black'>
                <p className='py-4 text-3xl text-center mb-4 font-light'>FAQ</p>
            </div>
            <div className='bg-vnv-black mb-8 rounded-b-3xl flex-col flex justify-center items-center'>
                <ul className='p-8 bg-vnv-milk my-8 w-11/12 rounded-3xl'>
                    {faqList.map((f) => (
                        <li key={f.id} className='text-vnv-black'>
                            <p
                                className={visibleAnswerId === f.id ? ' text-vnv-black underline md:text-lg text-xs' : 'hover:underline md:text-lg text-xs my-2'}
                                onClick={() => toggleAnswer(f.id)}
                            >
                                {f.question}
                            </p>
                            {visibleAnswerId === f.id &&
                                <span className='font-light md:text-lg text-xs'>{f.answer}</span>}
                        </li>
                    ))}
                </ul>
                <p className='mb-8 mx-4'>If you did not find the answer to your question here, then <Link
                    className='underline' to={'/contacts'}>click here</Link> and leave us an extra question.</p>
            </div>
        </Container>
    );
};

export default Faq;