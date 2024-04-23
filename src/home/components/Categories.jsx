import { categories } from '@/data/categories';

export const Categories = () => {
  return (
    <div className='home__categories'>
      {categories.map((value, index) => {
        return (
          <div className='home__categories-box' key={index}>
            <img src={value.cateImg} alt={value.cateName} className='categories__box-img' />
            <span className='categories__box-name'>{value.cateName}</span>
          </div>
        );
      })}
    </div>
  );
};

