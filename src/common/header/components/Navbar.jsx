
export const Navbar = () => {

  return (
    <nav className="header__navbar container">
      <div className="header__navbar-container">
        <div className="header__navbar-categories">
          <i className="navbar__category-icon fas fa-border-all"></i>
          <h4 className="navbar_category-text">
            Categories <i className="fas fa-chevron-down category__icon-down"></i>
          </h4>
        </div>

        <div className="navbar__menu-container navlink">
          <ul className='navbar__menu navbar__nav-links--mobileMenu navbar__nav-links--desktop f_flex capitalize'>
            <li className="navbar__menu-item">
              <a className="navbar__item-link" to="/">inicio</a>
            </li>
            <li className="navbar__menu-item">
              <a className="navbar__item-link" to="/pages">paginas</a>
            </li>
            <li className="navbar__menu-item">
              <a className="navbar__item-link" to="/user">cuenta de usuario</a>
            </li>
            <li className="navbar__menu-item">
              <a className="navbar__item-link" to="/vendor">cuenta de vendedor</a>
            </li>
            <li className="navbar__menu-item">
              <a className="navbar__item-link" to="/track">rastrear mi pedido</a>
            </li>
            <li className="navbar__menu-item">
              <a className="navbar__item-link" to="/contact">contacto</a>
            </li>
          </ul>

          <button className="header__navbar-toggle toggle">
            <i className="fas fa-times close home-btn"></i> <i className="fas fa-bars open"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};


