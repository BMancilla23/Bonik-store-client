import { Categories, Slider } from './components';
import './Home.css';

export const Home = () => {
  return (
    <section className="home container">
      <Categories/>
      <Slider/>
    </section>
  );
};

