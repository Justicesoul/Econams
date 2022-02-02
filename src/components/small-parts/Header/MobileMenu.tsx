import { FC, useState } from 'react';
import MobileSubmenu from './MobileSubmenu';

type MobileMenuType = {
  menuItem: string;
};

const MobileMenu: FC<MobileMenuType> = ({ menuItem }) => {
  const [openSubmenu, setOpenSubmenu] = useState(false);

  const submenuToggle = () => {
    setOpenSubmenu(!openSubmenu);
  };

  return (
    <>
      <a className="mobile__menu-item" href="#" onClick={submenuToggle}>
        {menuItem}
        <div
          className={openSubmenu ? 'arrow arrow-down' : 'arrow arrow-up'}
        ></div>
      </a>
      {openSubmenu && <MobileSubmenu />}
    </>
  );
};

export default MobileMenu;
