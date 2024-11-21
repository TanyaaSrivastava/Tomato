import React from 'react'
import './ExploerMenu.css'
import { menu_list } from '../../assets/assets'

const ExploerMenu = () => {
  return (
    <div className='exploer-menu' id='exploer-menu'>
        <h2>Explore our Menu</h2>
        <p className='exploer-menu-text'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission to satisfy your cravings and elevate your dining experience , one delicious meal at a time. </p>
        <div className="exploer-menu-list">
          {menu_list.map((items,index)=>{
            return(
              <div key={index} className='exploer-menu-list-items'>
                 <img src={items.menu_image} alt="" />
                 <p>{items.menu_name}</p>
              </div>
            )
            })}
        </div>
    </div>
  )
}

export default ExploerMenu
