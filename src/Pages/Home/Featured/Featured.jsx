import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured-class bg-fixed mx-w-6xl text-white mx-auto pt-10'>
            <SectionTitle subHeading={"Check it out"} heading={"Featured Items"}></SectionTitle>
            <div className='md:flex justify-center items-center gap-4 md:gap-10 py-20 px-36'>
                <div>
                    <img src="https://i.postimg.cc/x8HnCq4y/featd.jpg" alt="" />
                </div>
                <div className=''>
                    <p>Aug 20, 2024</p>
                    <p>Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A culpa velit animi, odio, et perferendis possimus temporibus veniam architecto in est vel itaque ipsam repellat pariatur. Magni officiis eos quas!</p>
                    <button className='btn border-0 border-b-4 mt-4 btn-outline'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;