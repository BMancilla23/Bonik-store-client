import './Advertisement.css';

export const Advertisement = () => {
  /* const mystyle = {
    width: '30%',
    height: '340px',
  };
  const mystyle1 = {
    width: '68%',
    height: '340px',
  }; */
  return (
    <>
      <section className='advertisement background'>
        <div className="advertisement__container container">
          <div className="advertisement__img-container">
            <img src="../../images/banner-1.png" alt="Banner 1" className="advertisement__img advertisement__img-first"/>
            <div className="advertisement__overlay"></div>
          </div>
          <div className="advertisement__img-container">
            <img src="../../images/banner-2.png" alt="Banner 2" className="advertisement__img advertisement__img-second"/>
            <div className="advertisement__overlay"></div>
          </div>
        </div>

      </section>
    </>
  );
};

