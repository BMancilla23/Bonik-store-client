import { DiscountData } from '@/data/discounts';
import Slider from 'react-slick';

export const DiscountCard = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <>
      <Slider className='discountcard__slider' {...settings}>
        {DiscountData.map((value, index) => {
          return (
            <>
              <div className='discountcard__box-product' key={index}>
                <div className='discountcard__product-figure'>
                  <img className='discountcard__product-img' src={value.cover} alt='' width='100%' />
                </div>
                <h4 className='discountcard__box-name'>{value.name}</h4>
                <span className='discountcard__box-price'>{value.price}</span>
              </div>
            </>
          );
        })}
      </Slider>
    </>
  );
};

