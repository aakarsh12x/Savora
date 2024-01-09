import React from 'react';
import {images} from "../../constants"
import './Header.css';
import {SubHeading} from '../../components'

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
    <SubHeading title="Chase the new flavours"/>
    <h1 className='app__header-h1'>The Key To Fine Dining</h1>
    <p className='p__opensans' style={{margin: '2rem 0'}}>Indulge in an exquisite culinary journey, where passion meets perfection. Elevate your dining experience with our chef's artistry, crafting delectable dishes from the finest ingredients. Immerse yourself in an ambiance of refined elegance, where every detail is tailored to exceed your expectations.</p>
    <button type='button' className='custom__button'>Explore Menu</button>
    </div>
    <div className='app__wrapper_img'>
    <img src={images.welcome} alt="header img" />
    </div >
    
  </div>
);

export default Header;
