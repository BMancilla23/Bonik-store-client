import { useCart } from '@/hooks/useCart';
import './ShopMobile.css';
import { MobileCart, MobileCategories } from './components';

export const ShopMobile = () => {
  const {shopItems, addToCart} = useCart();
  return (
    <>
      <section className='shopmobile background'>
        <div className='shopmobile__container container'>
          <MobileCategories/>
          <div className='shopmobile__content'>
            <div className='shopmobile__content-heading'>
              <div className='shopmobile__heading-left'>
                <h2 className='shopmobile__left-title'>Teléfonos móviles</h2>
              </div>
              <div className='shopmobile__heading-right'>
                <span className='shopmobile__right-text'>Ver todo</span>
                <i className='shopmobile__right-icon fa-solid fa-caret-right'></i>
              </div>
            </div>
            <div className='shopmobile__product-content'>
              <MobileCart shopItems={shopItems} addToCart={addToCart}/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
