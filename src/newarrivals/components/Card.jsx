import { NewArrivalsData } from '@/data/newarrivals';

export const Card = () => {
  return (
    <>
      <div className='card__content'>
        {NewArrivalsData.map((val, index) => {
          return (
            <div className='card__content-box' key={index}>
              <div className='content__box-figure'>
                <img className='content__figure-img' src={val.cover} alt='' />
              </div>
              <h4 className='card__content-name'>{val.name}</h4>
              <span className='card__content-price'>${val.price}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};
