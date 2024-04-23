import { useState } from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';

const SampleNextArrow = (props) => {
  const {onClick} = props;
  return (
    <div className="arrow__control-btn arrow__control-btn-right" onClick={onClick}>
      <button className="arrow__next">
        <i className='arrow__next-right fa fa-long-arrow-alt-right'></i>
      </button>
    </div>
  );
};


const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className='arrow__control-btn arrow__control-btn-left' onClick={onClick}>
      <button className='arrow__prev'>
        <i className='arrow__next-left fa fa-long-arrow-alt-left'></i>
      </button>
    </div>
  );
};



export const FlashCard = ({ productItems, addTocart }) => {

  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>,
    responsive: [
      {
        breakpoint: 1200, // Define el tamaño de pantalla en el que se aplicará esta configuración
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024, // Define el tamaño de pantalla en el que se aplicará esta configuración
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480, // Define otro tamaño de pantalla en el que se aplicará esta configuración
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <Slider className="flashcard-slider" {...settings}>
        {
          productItems.map((productItems) => {
            return (
              <div className="flashcard__box" key={productItems.id}>
                <div className="flashcard__product">
                  <div className="flashcard__product-card">
                    <span className="product__card-discount">{productItems.discount}% OFF</span>
                    <img src={productItems.cover} className="product__card-img" alt="" />
                    <div className="product__card-like">
                      <span className="card__like-count">{count}</span>
                      <i className="fa-regular fa-heart" onClick={increment}></i>
                    </div>
                  </div>
                  <div className="flashcard__product-details">
                    <h3 className="product__details-name">{productItems.name}</h3>
                    <div className="product__details-rate">
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                    </div>
                    <div className="product__details-price">
                      <h4 className="details__price-number">${productItems.price}.00</h4>
                      <button className="details__price-btn" onClick={() => addTocart(productItems)}></button>
                      <i className='fa fa-plus price__icon-plus'></i>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        }
      </Slider>
    </>
  );
};


FlashCard.propTypes = {
  productItems: PropTypes.array,
  addTocart: PropTypes.func,
};

SampleNextArrow.propTypes = {
  onClick: PropTypes.func,
};

SamplePrevArrow.propTypes = {
  onClick: PropTypes.func,
};