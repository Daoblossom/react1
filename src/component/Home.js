import React from "react";
import Hero from "./Hero";
import ProductSection from "./product";
import WhyChooseUs from "./whychooseus";
import WeHelp from "./wehelp";
import PopularProducts from "./Popular";
import Testimonials from "./Testimonials";
import BlogSection from "./BlogSection";


function Home(){
    return(
        <>
        <Hero/>
        <ProductSection/>
        <WhyChooseUs/>
        <WeHelp/>
        <PopularProducts/>
        <Testimonials/>
        <BlogSection/>
        </>
        
    );
}
export default Home;