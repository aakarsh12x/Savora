import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans"></p>
        </div>
        <p className="p__opensans"> At Savora, we believe that dining should be an experience that nourishes the body, delights the senses, and fosters community. Our commitment to quality is unwavering; we source the freshest, locally-grown ingredients to create dishes that are not only delicious but also sustainable.  </p>
      </div>

      <div className="app__chef-sign">
        <p>Karan Ahuja</p>
        <p className="p__opensans">Chef & Founder</p>
        
      </div>
    </div>
  </div>
);

export default Chef;