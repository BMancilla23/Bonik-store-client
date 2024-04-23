import './Banner.css';

export const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__container container banner__container--flex">
        <div className="banner__contact-info banner__section banner__contact-info--left">
          <i className="banner__icon fa fa-phone"></i>
          <span className="banner__contact-info-text">+888012 3457 7894</span>
          <i className="banner__icon fa fa-envelope"></i>
          <span className="banner__contact-info-text">Example@gmail.com</span>
        </div>
        <div className="banner__links banner__section banner__links--right">
          <a href="#" className="banner__link">Theme FAQs</a>
          <a href="#" className="banner__link">Need Help</a>
          <span className="banner__language"><i className="banner__language-icon fa fa-flag"></i>ES</span>
          <span className="banner__currency"><i className="banner__currency-icon fa fa-dollar-sign"></i>USD</span>
        </div>
      </div>
    </div>
  );
};
