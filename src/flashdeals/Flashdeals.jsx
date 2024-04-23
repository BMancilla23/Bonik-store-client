
import { useCart } from '@/hooks/useCart';
import './Flashdeals.css';
import { FlashCard } from './components';

export const Flashdeals = () => {

  // Usamos nuestro hook personalizado para acceder al contexto
  const {productItems, addToCart} = useCart();

  return (
    <>
      <div className='flashdeals'>
        <div className='flashdeals__container container'>
          <div className='flashdeals__heading'>
            <i className='flashdeals__icon-bolt fa fa-bolt'></i>
            <h2 className='flashdeals__title'>Ofertas Flash</h2>
          </div>
          <FlashCard productItems={productItems} addToCart={addToCart}/>
        </div>
      </div>
    </>
  );
};
