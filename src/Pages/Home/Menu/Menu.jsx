import React from 'react';
import Coverd from '../../../Components/Coverd/Coverd';
import PopularMenu from '../PopularMenu/PopularMenu';
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../../../Components/MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();

    const salad = menu.filter(item => item.category === 'salad');
    const drinks = menu.filter(item => item.category === 'drinks');
    const popular = menu.filter(item => item.category === 'popular');
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div>
            <Coverd title={"Our Menu"} img={"https://i.ibb.co/5BzXC2T/banner3.jpg"}></Coverd>
            {/* main category */}
            <SectionTitle subHeading={"Don't Miss"} heading={"Today's Offer"}></SectionTitle>
            {/* offer */}
            <MenuCategory items={offered}></MenuCategory>
            {/* desert */}
            <MenuCategory items={dessert} title={"dessert"} coverImg={"https://i.ibb.co/MV1pFVB/dessert-bg.jpg"}></MenuCategory>
            <MenuCategory items={pizza} title={"pizza"} coverImg={"https://i.postimg.cc/NFmkQy3w/pia-bg.jpg"}></MenuCategory>
            <MenuCategory items={salad} title={"salad"} coverImg={"https://i.postimg.cc/8k6HR3jn/salad-bg.jpg"}></MenuCategory>
        </div>
    );
};

export default Menu;