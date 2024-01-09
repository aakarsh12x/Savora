import React from 'react';
import {images} from '../../constants'
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding  ' id='about'>
   <div className='app__aboutus-overlay flex__center'>
    <img src={images.G} alt="g letter"/>
    
   </div>
   {/* <div className='app__aboutus-content'> */}
   <div className='app__aboutus-content_about'>
    <h1 className='headtext__cormorant'>About Us</h1>
    <img src={images.spoon} alt="about_spoon" />
    <p className='p__opensans'>Welcome to Savora, where culinary artistry meets exceptional dining. At Savora, we take pride in crafting an exquisite menu that seamlessly blends global flavors with local ingredients. Our chefs, driven by passion and creativity, curate a symphony of tastes to tantalize your palate.</p>
  <button type='button' className='custom__button'>Know More</button>
  </div>
  <div className='app__aboutus-content_knife flex__center'>
    <img src={images.knife} alt="about_knife" />
  </div>
  <div className='app__aboutus-content_history'>
    <h1 className='headtext__cormorant'>Our History</h1>
    <img src={images.spoon} alt="about_spoon" />
    <p className='p__opensans'>Established in 1998, Savora began as a humble culinary dream, a team of seasoned gastronomic enthusiasts with a shared passion for creating unforgettable dining experiences. Originating in the heart of a vibrant culinary community, Savora quickly evolved into a haven for those seeking a symphony of flavors.</p>
  <button type='button' className='custom__button'>Know More</button>
  </div>
  </div>
  
);

export default AboutUs;
