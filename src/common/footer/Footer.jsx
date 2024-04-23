import './Footer.css';

export const Footer = () => {
  return (

    <footer className='footer'>
      <div className='footer__container container'>
        <div className='footer__box'>
          <h1 className='footer__box-logo'>Bonik</h1>
          <p className='footer__box-description'>Tu destino definitivo para todas tus necesidades de compras en línea. Con una amplia gama de productos, ofrecemos una experiencia de compra única y conveniente para nuestros clientes.</p>
          <div className='footer__box-btns'>
            <div className='footer__box-btn'>
              <i className='footer__icon-play fa-brands fa-google-play'></i>
              <span className='footer__icon-text'>Google Play</span>
            </div>
            <div className='footer__box-btn'>
              <i className='footer__icon-store fa-brands fa-app-store-ios'></i>
              <span className='footer__icon-text'>App Store</span>
            </div>
          </div>
        </div>

        <div className='footer__box'>
          <h2 className='footer__box-title'>Acerca de Nosotros</h2>
          <ul className='footer__box-menu'>
            <li className='footer__menu-item'>Empleos</li>
            <li className='footer__menu-item'>Nuestras Tiendas</li>
            <li className='footer__menu-item'>Nuestras Causas</li>
            <li className='footer__menu-item'>Términos y Condiciones</li>
            <li className='footer__menu-item'>Política de Privacidad</li>
          </ul>
        </div>
        <div className='footer__box'>
          <h2 className='footer__box-title'>Atención al Cliente</h2>
          <ul className='footer__box-menu'>
            <li className='footer__menu-item'>Centro de Ayuda</li>
            <li className='footer__menu-item'>Cómo Comprar</li>
            <li className='footer__menu-item'>Seguir tu Pedido</li>
            <li className='footer__menu-item'>Compras Corporativas y a Granel</li>
            <li className='footer__menu-item'>Devoluciones y Reembolsos</li>
          </ul>
        </div>
        <div className='footer__box'>
          <h2 className='footer__box-title'>Contáctanos</h2>
          <ul className='footer__box-menu'>
            <li className='footer__menu-item'>70 Washington Square South, Nueva York, NY 10012, Estados Unidos</li>
            <li className='footer__menu-item'>Email: uilib.help@gmail.com</li>
            <li className='footer__menu-item'>Teléfono: +1 1123 456 780</li>
          </ul>
        </div>
      </div>
    </footer>

  );
};
