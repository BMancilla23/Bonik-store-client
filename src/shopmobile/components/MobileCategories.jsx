import { MobleCategoriesData } from '@/data/mobilecategories';

export const MobileCategories = () => {
  return (
    <>
      <div className='mobilecategories__category'>
        <div className='mobilecategories__category-chead d_flex'>
          <h1 className="mobilecategories__chead-title">Marcas</h1>
        </div>
        {MobleCategoriesData.map((value, index) => {
          return (
            <div className='mobilecategories__box' key={index}>
              <img className='mobilecategories__box-img' src={value.cateImg} alt='' />
              <span className='mobilecategories__box-name'>{value.cateName}</span>
            </div>
          );
        })}
        <button className='mobilecategories__box-btn'>
          <h3 className='mobilecategories__btn-text'>Ver Todas las marcas</h3>
        </button>
      </div>
    </>
  );
};
