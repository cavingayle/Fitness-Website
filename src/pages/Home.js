import React, {useState} from 'react'
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/hero/Hero'
import Sidebar from '../components/navbar/Sidebar'
import CardSection from '../components/cardSection/CardSection'
import DoublePanel from '../components/duelSection/DuelSection'
import CallToAction from '../components/callToAction/CallToAction'
import Services from '../components/services/Services'
import Testimonial from '../components/testimonial/Testimonial'
import PopularCourses from '../components/popularCourses/PopularCourses'
import Footer from '../components/footer/Footer'

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    };

    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle}/>
        <Hero />
        <CardSection />
        <DoublePanel />
        <CallToAction />
        <Services />
        <Testimonial />
        <PopularCourses />
        <Footer />
        </>
    )
}

export default Home
