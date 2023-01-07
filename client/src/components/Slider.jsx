import React from 'react';
import SimpleImageSlider from 'react-simple-image-slider';

const images = [{ url: './images/6.jpg' }, { url: './images/7.jpg' }];
const Slider = () => {
  return (
    <div>
      <SimpleImageSlider
        width={1426}
        height={395}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
};

export default Slider;
