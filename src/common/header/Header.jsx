import { Navbar, Search } from './components';
import './Header.css';

export const Header = () => {
  return (
    <>
      <header className='header'>
        <Search />
        <Navbar />
      </header>
    </>
  );
};