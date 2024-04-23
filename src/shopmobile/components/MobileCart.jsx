import PropTypes from 'prop-types';
import { useState } from 'react';

export const MobileCart = ({shopItems, addToCart}) => {

  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <>
      {shopItems.map((shopItems, index) => {
        return (
          <div className='mobilecart__box' key={index}>
            <div className='mobilecart__product'>
              <div className='mobilecart__product-box'>
                <span className='mobilecart__product-discount'>{shopItems.discount}% Off</span>
                <img className='mobilecart__product-img' src={shopItems.cover} alt='' />
                <div className='mobilecart__product-like'>
                  <label>{count}</label> <br />
                  <i className='mpbilecart__icon-like fa-regular fa-heart' onClick={increment}></i>
                </div>
              </div>
              <div className='mobilecart__product-details'>
                <h3 className='mobilecart__product-name'>{shopItems.name}</h3>
                <div className='mobilecart__product-rate'>
                  <i className='mobilecart__rate-icon fa fa-star'></i>
                  <i className='mobilecart__rate-icon fa fa-star'></i>
                  <i className='mobilecart__rate-icon fa fa-star'></i>
                  <i className='mobilecart__rate-icon fa fa-star'></i>
                  <i className='mobilecart__rate-icon fa fa-star'></i>
                </div>
                <div className='mobilecart__price-box'>
                  <h4 className='mobilecart__price'>${shopItems.price}.00 </h4>
                  {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                  <button className='mobilecart__price-btn' onClick={() => addToCart(shopItems)}>
                    <i className='mobilecart__icon-plus fa fa-plus'></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

MobileCart.propTypes = {
  shopItems: PropTypes.array,
  addToCart: PropTypes.func,
};