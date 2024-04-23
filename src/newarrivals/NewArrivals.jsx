import { Card } from './components';
import './NewArrivals.css';

export const NewArrivals = () => {
  return (
    <>
      <section className="newarrivals background">
        <div className="newarrivals__container container">
          <div className="newarrivals__heading">
            <div className="newarrivals__heading-left">
              <img src="https://img.icons8.com/glyph-neue/64/26e07f/new.png" alt="" className="heading__left-img" />
              <h2 className="heading__left-title">
                Nuevas llegadas
              </h2>
            </div>
            <div className="newarrivals__heading-right">
              <span className="heading__right-text">Ver todo</span>
              <i className="right-icon-caret fa-solid fa-caret-right"></i>
            </div>
          </div>
          <Card />
        </div>

      </section>
    </>
  );
};
