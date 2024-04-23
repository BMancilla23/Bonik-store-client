import { Advertisement } from './advertisement';
import { BigDiscount } from './bigdiscount';
import { Banner, Footer, Header } from './common';
import { Flashdeals } from './flashdeals';
import { Home } from './home';
import { NewArrivals } from './newarrivals';
import { Services } from './services';
import { ShopMobile } from './shopmobile';
import { TopCategories } from './topcategories';

export const App = () => {
  return (
    <>
      <Banner/>
      <Header/>
      <Home/>
      <Flashdeals/>
      <TopCategories/>
      <NewArrivals/>
      <BigDiscount/>
      <ShopMobile/>
      <Advertisement/>
      <Services/>
      <Footer/>
    </>
  );
};
