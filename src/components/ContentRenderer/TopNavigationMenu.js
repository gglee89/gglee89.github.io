import React from 'react';
import classnames from 'classnames';

import './topNavigationMenu.css';

const TopNavigationMenu = ({ selectedMenu, onItemSelect, menuOptions }) => {
  return (
    <div className="content-renderer-top-navigation-container">
      {menuOptions &&
        menuOptions.length > 0 &&
        menuOptions.map(menuItem => {
          let topNavigationMenuClasses = classnames({
            'content-renderer-top-navigation-container-item': true,
            active: menuItem === selectedMenu,
          });

          return (
            <div
              key={menuItem}
              onClick={() => onItemSelect(menuItem)}
              className={topNavigationMenuClasses}
            >
              {menuItem}
            </div>
          );
        })}
    </div>
  );
};

export default TopNavigationMenu;
