import React, { useState, useLayoutEffect, useEffect } from "react";
import { Container } from "@material-ui/core";
import logo from "../../img/logoM.png";
import logoText from "../../img/logo-text.png";
import profile from "../../img/profile.svg";
import basket from "../../img/basket.svg";
import burgerImg from "../../img/menu.svg";
import "./Header.sass";

const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
};

const Header = ({ buy }) => {
  const [width, height] = useWindowSize();
  const [burger, setBurger] = useState(false);
  const [dropMenu, setDropMenu] = useState(false);

  useEffect(() => {
    if (width < 400) {
      setBurger(true);
    } else {
      setBurger(false);
    }
  }, [width]);

  const handleMenu = () => {
    setDropMenu(!dropMenu);
  };

  return (
    <div className="Header">
      <Container fixed className="container">
        {dropMenu && (
          <div className="drop-down-menu">
            <span className="Header-profile_text">
              <span className="Header-profile_sign-up">Sign up</span> /
              <span className="Header-profile_sign-in">Sign in</span>
            </span>
            <div className="basket">
              {buy ? <p className="basket_buy">{buy}</p> : null}
              <img src={basket} alt="basket" />
              <span className="Header-profile_card">Cart</span>
            </div>
          </div>
        )}

        <div className="Header-logo">
          <img src={logo} alt="logo" />
          <img src={logoText} alt="logo text" className="Header-logo_text" />
        </div>

        {burger ? (
          <img
            src={burgerImg}
            alt="burger"
            className="burger-img"
            onClick={() => handleMenu()}
          />
        ) : (
          <div className="Header-profile">
            <img
              src={profile}
              alt="profile"
              className="Header-profile_img-prof"
            />
            <span className="Header-profile_text">
              <span className="Header-profile_sign-up">Sign up</span> /{" "}
              <span className="Header-profile_sign-in">Sign in</span>
            </span>
            <div className="basket">
              {buy ? <p className="basket_buy">{buy}</p> : null}
              <img src={basket} alt="basket" />
            </div>
            <span className="Header-profile_card">Cart</span>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Header;
