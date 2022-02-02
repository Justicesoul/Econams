import { useState } from 'react';
import { navItems } from '../../../utils/NavItems';
import InformationBlock from '../../small-parts/Header/InformationBlock';
import LanguagesMenu from '../../small-parts/Header/LanguagesMenu';
import MobileMenu from '../../small-parts/Header/MobileMenu';
import NavSubmenu from '../../small-parts/Header/NavSubmenu';
import Video from '../../small-parts/Header/Video';
import './Header.scss';

const Header = () => {
  const [mobileMenuClosed, setMobileMenuClosed] = useState(true);
  const [activeLanguage, setActiveLanguage] = useState('lv');

  const mobileMenuToggle = () => {
    setMobileMenuClosed(!mobileMenuClosed);
  };

  const changeActiveLanguage = (arr: string) => {
    setActiveLanguage(arr);
  };

  return (
    <header className="header">
      <div className="header__main-contanier">
        <a href="#">
          <img
            className="header__logo"
            src="./images/ekonams-logo.svg"
            alt="logo"
          />
        </a>
        <div className="header__nav">
          <nav className="nav">
            {navItems.map((item) => {
              return (
                <a key={item} className="nav__item" href="#">
                  {item}
                  <NavSubmenu />
                </a>
              );
            })}
          </nav>
          <a className="nav__item nav__language">
            en
            <div className="nav__item-menu nav__item-menu--lang">
              <div className="submenu__item submenu__item--lang">lv</div>
              <div className="submenu__item submenu__item--lang">ru</div>
              <div className="submenu__item submenu__item--lang">de</div>
            </div>
          </a>
        </div>
      </div>

      <div className="mobile">
        <div className="mobile__container">
          <a href="#">
            <img
              className="mobile__logo"
              src="images/ekonams-logo.svg"
              alt="logo"
            />
          </a>
          <div className="mobile__nav" onClick={mobileMenuToggle}>
            <img
              src={
                mobileMenuClosed
                  ? 'images/burger-menu.png'
                  : 'images/close-cross.png'
              }
              alt="mobile menu"
              className="mobile__burger-menu"
            />
          </div>
        </div>

        {!mobileMenuClosed && (
          <>
            <LanguagesMenu
              onClick={changeActiveLanguage}
              activeLanguage={activeLanguage}
            />
            <div className="mobile__menu">
              {navItems.map((item) => {
                return <MobileMenu menuItem={item} key={item} />;
              })}
            </div>
          </>
        )}
      </div>

      <Video />
      <InformationBlock />
    </header>
  );
};

export default Header;
