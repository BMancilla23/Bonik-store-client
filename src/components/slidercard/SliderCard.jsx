import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { sliders } from '@/data/sliders';
import './SliderCard.css'; // Importamos el archivo CSS donde pondremos nuestros estilos BEM

export const SliderCard = () => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul className='slider-card__menu' style={{ margin: '0px' }}>{dots}</ul>;
    },
  };

  return (
    <Slider className='slider' {...settings}>
      {sliders.map((value, index) => {
        return (
          <div className='slider-card' key={index}>
            <div className='slider-card__content box d_flex top'>
              <div className='slider-card__left left'>
                <h1 className='slider-card__title'>{value.title}</h1>
                <p className='slider-card__desc'>{value.desc}</p>
                <button className='slider-card__btn btn-primary'>Visit Collections</button>
              </div>
              <div className='slider-card__right right'>
                <img src={value.cover} alt='' className='slider-card__image' />
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

