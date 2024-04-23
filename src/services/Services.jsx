import './Services.css';

export const Services = () => {
  const data = [
    {
      cover: 'fa-solid fa-truck-fast',
      title: 'Entrega mundial',
      decs: 'Ofrecemos precios competitivos en nuestra gama de más de 100 millones de productos.',
    },
    {
      cover: 'fa-solid fa-id-card',
      title: 'Pago seguro',
      decs: 'Ofrecemos precios competitivos en nuestra gama de más de 100 millones de productos.',
    },
    {
      cover: 'fa-solid fa-shield',
      title: 'Compra con confianza',
      decs: 'Ofrecemos precios competitivos en nuestra gama de más de 100 millones de productos.',
    },
    {
      cover: 'fa-solid fa-headset',
      title: 'Soporte 24/7',
      decs: 'Ofrecemos precios competitivos en nuestra gama de más de 100 millones de productos.',
    },
  ];
  return (
    <>
      <section className='service background'>
        <div className='service__container container'>
          {data.map((val, index) => {
            return (
              <div className='service__product' key={index}>
                <div className='service__product-image'>
                  <i className={`service__product-icon ${val.cover}`}></i>
                </div>
                <h3 className="service__product-title">{val.title}</h3>
                <p className="service__product-description">{val.decs}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
