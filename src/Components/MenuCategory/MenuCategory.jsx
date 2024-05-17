import React from 'react';
import MenuItems from '../MenuItems/MenuItems';
import Coverd from '../Coverd/Coverd';
import { Link } from 'react-router-dom';

const MenuCategory = ({items, title, coverImg}) => {
    return (
        <div className=' pt-8'>
            { title && <Coverd title={title} img={coverImg}></Coverd>  }
             <div className='grid md:grid-cols-2 gap-4 max-w-6xl mx-auto my-16'>
                {
                    items.map((item) => <MenuItems key={item._id} item={item}></MenuItems>)
                }
            </div>
            <Link to={`/order/${title}`}>
            <button className='btn border-0 border-b-4 mt-4 btn-outline'>Order Now</button>
            </Link>
        </div>
    );
};

export default MenuCategory;