import React, { useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  const Navigation = useRef();
  const LogoColor = useRef();
  const Burg = useRef();
  const NavLinks = useRef();

  window.onscroll = () => {
    const height = 50;
    if (window.scrollY > height) {
      Navigation.current.style.background = "#187e5f";
      Navigation.current.style.borderBottom = "10px solid #f8ecd6";
      LogoColor.current.style.color = "#f8ecd6";
    } else {
      Navigation.current.style.background = "";
      Navigation.current.style.borderBottom = "";
      LogoColor.current.style.color = "#333";
    }
  };

  const openUp = () => {
    NavLinks.current.classList.toggle("reveal");
    Burg.current.children[0].classList.toggle("roll-down");
    Burg.current.children[1].classList.toggle("roll-up");
  };

  return (
    <NavBar ref={Navigation}>
      <NavLink href="/">
        <Logo ref={LogoColor}>
          Sp<Green>i</Green>nk.
        </Logo>
      </NavLink>
      <Links ref={NavLinks}>
        <li>
          <GalleryLink to="/Gallery">Gallery</GalleryLink>
        </li>
        <li>
          <NavLink href="#about">About Us</NavLink>
        </li>
        <li>
          <NavLink href="#services">Services</NavLink>
        </li>
        <li>
          <NavLink href="#contact">Contact Us</NavLink>
        </li>
        <li>
          <NavLink href="">Log In</NavLink>
        </li>
      </Links>
      <Burger ref={Burg} onClick={openUp}>
        <span></span>
        <span></span>
      </Burger>
    </NavBar>
  );
};

const NavLink = styled.a`
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  color: #fff6e4;
  font-weight: 400;
  font-size: 0.8rem;
  transition: all 0.4s linear;
  &::before {
    content: "";
    position: absolute;
    height: 3px;
    width: 0;
    background: #f8ecd6;
    bottom: -0.5rem;
    left: 0;
    transition: all 0.4s linear;
  }
  &:hover::before {
    width: 50%;
  }
`;

const GalleryLink = styled(Link)`
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  color: #fff6e4;
  font-weight: 400;
  font-size: 0.8rem;
  transition: all 0.4s linear;
  &::before {
    content: "";
    position: absolute;
    height: 3px;
    width: 0;
    background: #f8ecd6;
    bottom: -0.5rem;
    left: 0;
    transition: all 0.4s linear;
  }
  &:hover::before {
    width: 50%;
  }
`;

const NavBar = styled.nav`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  z-index: 1000;
  transition: all 0.4s linear;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const Logo = styled.h3`
  font-size: 1.3rem;
  font-weight: 500;
  text-transform: uppercase;
`;

const Links = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex: 0.5;
  @media (max-width: 800px) {
    position: absolute;
    flex-flow: column;
    background: #187e5f;
    width: 100vw;
    height: 50vh;
    top: -100vh;
    align-items: center;
    justify-content: space-evenly;
    left: 0;
    transition: all 0.5s ease-in-out;
    &.reveal {
      top: 0;
    }
  }
`;

const Green = styled.span`
  color: #187e5f;
`;

const Burger = styled.div`
  flex-flow: column;
  align-items: flex-end;
  display: none;
  gap: 0.3rem;
  z-index: 300;
  span {
    height: 3px;
    width: 3rem;
    background: #f8ecd6;
    transition: all 0.4s ease-in-out;
  }
  span:first-child {
    &.roll-down {
      transform: translateY(4px) rotate(45deg);
      width: 2rem;
    }
  }
  span:last-child {
    width: 2rem;
    &.roll-up {
      transform: translateY(-4px) rotate(-45deg);
    }
  }
  @media (max-width: 800px) {
    display: flex;
  }
`;

export default Nav;
