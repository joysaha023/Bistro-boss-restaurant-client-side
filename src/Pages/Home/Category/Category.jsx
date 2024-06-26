import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';



const Category = () => {
    return (
       <section className='mb-24 max-w-6xl mx-auto'>
        <SectionTitle 
        subHeading={"From 11:00am to 10:00pm"}
            heading={"ORDER ONLINE"}
        >
        </SectionTitle>
         <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper "
      >
        <SwiperSlide><img src='https://i.postimg.cc/bYx8cf0b/slide1.jpg' alt='' />
            <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Salads</h3>
        </SwiperSlide>
        <SwiperSlide><img src='https://i.ibb.co/yNQ4kGC/slide2.jpg' alt='' /><h3 className='text-4xl uppercase text-center -mt-16 text-white'>Pizza</h3></SwiperSlide>
        <SwiperSlide><img src='https://i.ibb.co/wd0nxbZ/slide3.jpg' alt='' /><h3 className='text-4xl uppercase text-center -mt-16 text-white'>Soups</h3></SwiperSlide>
        <SwiperSlide><img src='https://i.ibb.co/WB2XPS1/slide4.jpg' alt='' /><h3 className='text-4xl uppercase text-center -mt-16 text-white'>Desert</h3></SwiperSlide>
        <SwiperSlide><img src='https://i.postimg.cc/bYx8cf0b/slide1.jpg' alt='' /><h3 className='text-4xl uppercase text-center -mt-16 text-white'>Salads</h3></SwiperSlide>
        
      </Swiper>
       </section>
    );
};

export default Category;