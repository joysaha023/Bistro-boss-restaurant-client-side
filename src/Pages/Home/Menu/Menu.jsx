import React from 'react';
import Coverd from '../../../Components/Coverd/Coverd';
import PopularMenu from '../PopularMenu/PopularMenu';

const Menu = () => {
    return (
        <div>
            <Coverd title={"Our Menu"} img={"https://i.ibb.co/5BzXC2T/banner3.jpg"}></Coverd>
            <PopularMenu></PopularMenu>
            <Coverd title={"Our Menu"} img={"https://i.ibb.co/5BzXC2T/banner3.jpg"}></Coverd>
            <PopularMenu></PopularMenu>
            <Coverd title={"Our Menu"} img={"https://i.ibb.co/5BzXC2T/banner3.jpg"}></Coverd>
            <PopularMenu></PopularMenu>
           
        </div>
    );
};

export default Menu;