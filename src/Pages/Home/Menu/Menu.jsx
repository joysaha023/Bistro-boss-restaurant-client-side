import React from 'react';
import Coverd from '../../../Components/Coverd/Coverd';
import PopularMenu from '../PopularMenu/PopularMenu';
import useMenu from '../../../Hooks/useMenu';

const Menu = () => {
    const [menu] = useMenu();

    return (
        <div>
            <Coverd title={"Our Menu"} img={"https://i.ibb.co/5BzXC2T/banner3.jpg"}></Coverd>
            <PopularMenu></PopularMenu>
           
           
        </div>
    );
};

export default Menu;