import React from 'react'
import './ExploreMenu.css'
import {menu_list} from '../../assets/assets'


const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Explore classic favorites or adventurous new flavors; there's something for everyone to enjoy.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) => (prev === item.menu_name ? 'All' : item.menu_name))
              }
              key={item.menu_name}
              className={`explore-menu-list-item ${category === item.menu_name ? 'Active' : ''}`}
            >
              <img className="menu_image" src={item.menu_image} alt={item.menu_name} />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>

      <hr />
    </div>
  );
};
export default ExploreMenu