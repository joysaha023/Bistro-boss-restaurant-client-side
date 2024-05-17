import React from 'react';
import MenuItems from '../MenuItems/MenuItems';
import Coverd from '../Coverd/Coverd';

const MenuCategory = ({items, title, coverImg}) => {
    return (
        <div className=' pt-8'>
            { title && <Coverd title={title} img={coverImg}></Coverd>  }
             <div className='grid md:grid-cols-2 gap-4 max-w-6xl mx-auto my-16'>
                {
                    items.map((item) => <MenuItems key={item._id} item={item}></MenuItems>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;