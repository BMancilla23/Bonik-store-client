import logo from '@/assets/logo.svg';

export const Search = () => {
  return (
    <>
      <div className='header__search container'>
        <div className="header__search-container">
          <div className="header__logo">
            <img className='header__logo-img' src={logo} alt="Logo" />
          </div>
          <div className="header__search-box">
            <i className="fa fa-search header__search-icon"></i>
            <input
              type="text"
              placeholder="Busca y presiona enter..."
              className="header__search-input"
            />
            <span className="header__search-category">Categorías</span>
          </div>

          <div className="header__box-icon">
            <i className="fa fa-user search__icon-user search__icon-circle"></i>
            <div className="header__search-cart">
              <a to="/cart" className="search__cart-link">
                <i className="fa fa-shopping-bag search__shopping-icon-bag search__icon-circle"></i>
                <span className="search__cart-count"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

