import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

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
        <section>
            <SectionTitle heading={"From Our Menu"} subHeading={"Popular Items"} ></SectionTitle>
        </section>
    );
};

export default PopularMenu;