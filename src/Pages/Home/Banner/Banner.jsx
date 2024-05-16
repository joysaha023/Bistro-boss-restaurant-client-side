import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <Carousel 
        autoPlay={true}
        infiniteLoop={true}
    >
      <div>
        <img src="https://i.ibb.co/Z14NDH5/01.jpg" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="https://i.ibb.co/xMdNxSt/02.jpg" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="https://i.ibb.co/kXCg3TD/03.png" />
        <p className="legend">Legend 3</p>
      </div>
      <div>
        <img src="https://i.ibb.co/kDTyY8N/04.jpg" />
        <p className="legend">Legend 3</p>
      </div>
      <div>
        <img src="https://i.ibb.co/4R8TGt9/05.png" />
        <p className="legend">Legend 3</p>
      </div>
      <div>
        <img src="https://i.ibb.co/rMf8DJV/06.png" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};

export default Banner;
