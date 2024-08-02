import React, { useState } from 'react';
import Sidebar from '../SideBar/Sidebar';
import Dropdown from '../SideBar/Dropdown';
import './ProductNavbar.css';
import Products from '../Products/Products';

const ProductNavbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className='Main-parent-navbar'>
            <div className='parent-product-navbar'>
                <div className='child-product-navbar'>
                    <div style={{
                        fontWeight: '700',
                        fontSize: '18px'
                    }}>3245 ITEMS</div>
                    <div className='content'>
                        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                        <div className={`products ${isSidebarOpen ? 'shrink' : ''}`}>
                            <Products />
                        </div>
                    </div>
                </div>
                <div>
                    <Dropdown />
                </div>
            </div>
        </div>
    );
};

export default ProductNavbar;
