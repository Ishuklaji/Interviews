import React from "react";
import { ReactComponent as Cart } from "../../images/cart.svg";
const Header = ({ handleMode }) => {
  return (
    <div className="header">
      <div className="header_block">
        <div className="header_block_logo">TeeRex Store</div>
        <div className="header_block_menu">
          <div className="header_block_menu_item hide_on_small_screen">
            <div onClick={handleMode} style={{ cursor: "pointer" }}>
              Products
            </div>
          </div>
          <div className="header_block_menu_item">
            <div onClick={handleMode}>
              <Cart className="icons" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
