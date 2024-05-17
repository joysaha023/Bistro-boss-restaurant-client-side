import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItems from '../../../Components/MenuItems/MenuItems';
import useMenu from '../../../Hooks/useMenu';

const PopularMenu = () => {
   const [menuItems] = useMenu();
   const popular = menuItems.filter(item => item.category === 'popular');

    return (
        <section className='max-w-6xl mx-auto mb-12'>
            <SectionTitle heading={"From Our Menu"} subHeading={"Popular Items"} ></SectionTitle>
            <div className='grid md:grid-cols-2 gap-4'>
                {
                    popular.map((item) => <MenuItems key={item._id} item={item}></MenuItems>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;