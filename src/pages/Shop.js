import React from 'react';
import bannerShop from '../Assets/banner-shop.jpg'; 
import Products from '../pages/Products'; 

const Shop = () => {
  return (
    <>
      <div className='container1'style={{width:"100%",margin:"8rem -2px 4rem 0"}}>
        <img src={bannerShop} alt='bannerShop' />
      </div>
      <h1 style={{ fontSize:"2 rem", fontWeight:600,textAlign:'center', }}>Product List</h1>
      <Products />
    </>
  );
};

export default Shop;
