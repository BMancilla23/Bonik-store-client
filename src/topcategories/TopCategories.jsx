import { TopCart } from './components';
import './TopCategories.css';

export const TopCategories = () => {
  return (
    <section className='topcategories background'>
      <div className='topcategories__container container'>
        <div className='topcategories__heading'>
          <div className='topcategories__heading-left'>
            <i className='heading__icon-border fa-solid fa-border-all'></i>
            <h2 className="heading__left-icon">Top categorias</h2>
          </div>
          <div className='topcategories__heading-right'>
            <span>Ver todo</span>
            <i className='heading__right-icon fa-solid fa-caret-right'></i>
          </div>
        </div>
        <TopCart />
      </div>
    </section>
  );
};
