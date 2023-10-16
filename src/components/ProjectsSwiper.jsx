import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Scrollbar, Autoplay, Pagination,} from "swiper/modules";
import project1 from '../img/projects/project1.png'
import project2 from '../img/projects/project2.png'
import {Link, NavLink} from "react-router-dom";
import Container from "./Container";


const projectItems = [
    {
        image: project1,
        tittle: 'DELIVERY SERVICE - IREN BANQUET HALL',
        projectLink: 'https://irenbanquethall.com/',
        subTittle: 'Iren Banquet Hall - Delivery service for tasty food from Iren. You can register, order and pay not leaving the website!',
        id: 'p1',
    },
    {
        image: project2,
        tittle: 'WEB-SERVICE - LERNITLIVE',
        projectLink: 'https://www.learnitlive.com/',
        subTittle: 'Lernitlive - webservice for coaches and experts where they can teach online. In easy words - it is a marketplace with some more functionality to pass courses and take classes.',
        id: 'p2',
    },
]

function ProjectsSwiper() {
    const imageUrl = 'https://mdbcdn.b-cdn.net/img/new/fluid/city/018.jpg';
    return (
        <Container>
            <div className='border-t-16 border-gray-400 rounded-t-3xl mb-4 bg-vnv-black'>
                <p className='py-4 text-3xl text-center mb-4 font-light'>PROJECTS</p>
            </div>
            <Swiper
                style={{'--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff',}}
                autoplay={{delay: 4000, disableOnInteraction: false,}}
                spaceBetween={50}
                pagination={false}
                modules={[Pagination, Scrollbar, Autoplay]}
                className="mb-8"
            >
                {projectItems.map((p) => (
                    <SwiperSlide key={p.id}>
                        <div
                            className='flex flex-col md:flex-row md:justify-between md:items-center rounded-b-3xl bg-vnv-black mx-auto px-8 pb-8'>
                            <div className='md:w-2/4 mr-0 md:mr-16 md:mb-0 mb-8'>
                                <h1 className='text-xs my-4 md:text-2xl py-2 text-vnv-black rounded-t-3xl text-center bg-vnv-milk font-extralight'>{p.tittle}</h1>
                                <NavLink to={p.projectLink} target='_blank'><img className='rounded-b-3xl' src={p.image}
                                                                                 alt={p.tittle}/></NavLink>
                            </div>
                            <div
                                className='md:w-2/4 mx-auto rounded-3xl ml-0 md:ml-16 flex flex-col justify-center items-center text-center'>
                                <p className='text-xs md:text-lg mb-8'>{p.subTittle}</p>
                                <Link to={p.projectLink}
                                      target={'_blank'}
                                      className='animate-bounce py-1 px-2 text-vnv-black text-sm md:text-lg hover:animate-none bg-vnv-milk rounded-3xl'>Visit
                                    Site</Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>

    );
}

export default ProjectsSwiper;
