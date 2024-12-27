import React from 'react';
import Navbar from '../../Components/Navbar';
import Slideshow from '../../Components/Slideshow';
import Productcart from '../../Components/Productcart';
import Aboutus from '../../Components/Aboutus';
import Services from '../../Components/Services';
import Product from '../../Components/Product';
import Blog from '../../Components/Blog';
import Footer from '../../Components/Footer';
import Client from '../../Components/Client';
// import Shop from '../../Components/Shop'
// import Shop from '../../Components/Shop'
function Home() {
  return (
    <div>
      <Navbar/>
      <Slideshow/>
      {/* <Shop/> */}
      <Aboutus/>
      <Services/>
      <Product/>
      <Client/>
      <Blog/>
      <Footer/>
      
    </div>
  )
}

export default Home;
