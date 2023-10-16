import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import WhyUs from "./components/WhyUs";
import Services from "./components/Services";
import Faq from "./components/FAQ";
import ContactUs from "./components/ContactUs";
import ProjectsSwiper from "./components/ProjectsSwiper";
import TellUsBanner from "./components/TellUsBanner";
import Brief from "./components/Brief";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path='/faq' element={<Faq/>}/>
                <Route path='/contacts' element={<ContactUs/>}/>
                <Route path='/brief' element={<Brief/>}/>
                <Route path='/' element={
                    <>
                        <Banner/>
                        <WhyUs/>
                        <Services/>
                        <ProjectsSwiper/>
                        <TellUsBanner/>
                    </>
                }/>
            </Routes>
            <Footer/>

        </>

    );
}

export default App;
