import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItems from '../../../Components/MenuItems/MenuItems';

const PopularMenu = () => {
    const [menuItems, setMenuItems] = useState([])

    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === 'popular');
            setMenuItems(popularItems)
        })
    }, [])

    return (
        <section className='max-w-6xl mx-auto mb-12'>
            <SectionTitle heading={"From Our Menu"} subHeading={"Popular Items"} ></SectionTitle>
            <div className='grid md:grid-cols-2 gap-4'>
                {
                    menuItems.map((item) => <MenuItems key={item._id} item={item}></MenuItems>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;