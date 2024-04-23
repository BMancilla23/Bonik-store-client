import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { TopCategoriesData } from '@/data/topCategories';

export const TopCart = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <>
      <Slider className='topcart__slider' {...settings}>
        {TopCategoriesData.map((value, index) => {
          return (
            <>
              <div className='topcart__slider-box product' key={index}>
                <div className='topcart__slider-name'>
                  <span className='topcart__slider-left'>{value.para}</span>
                  <span className='topcart__slider-right'>{value.desc}</span>
                </div>
                <div className='topcart__slider-figure'>
                  <img className='topcart__slider-img' src={value.cover} alt='' />
                </div>
              </div>
            </>
          );
        })}
      </Slider>
    </>
  );
};
