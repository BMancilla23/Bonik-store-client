import { DiscountCard } from './components';
import './BigDiscount.css';

export const BigDiscount = () => {
  return (
    <>
      <section className='discount background'>
        <div className='discount__container container'>
          <div className='discount__heading'>
            <div className='discount__heading-left'>
              <img className="discount__left-img" src='https://img.icons8.com/windows/32/fa314a/gift.png' />
              <h2 className="discount__left-title">Grandes descuentos</h2>
            </div>
            <div className='discount__heading-right'>
              <span className="discount__right-text">Ver todo</span>
              <i className='discount__right-icon fa-solid fa-caret-right'></i>
            </div>
          </div>
          <DiscountCard/>
        </div>
      </section>
    </>
  );
};

