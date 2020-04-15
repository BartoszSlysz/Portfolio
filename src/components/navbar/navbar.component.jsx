import React, { useState, useEffect } from "react";

import {
  NavbarContainer,
  NavbarMainContainer,
  MenuList,
  MenuListWrapper,
  Signature,
  PictureOfMe,
  MenuListItem,
  BackgroundForMobileNav,
  BackgroundForMobileList,
  MobileListItem,
  BackgroundNav,
  AnimatedHref,
  NavbarDiv,
  MenuListFooter,
  MenuLink,
  ContactDetails,
  ContactDetailsMobile,
} from "./navbar.styles";
import Hamburger from "../hamburger/hamburger.component";
import LogoMe from "../../assets/IMG/logo-me.jpg";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [change, setChange] = useState(false);

  useEffect(() => {
    updatePredicate();
    window.addEventListener("resize", updatePredicate);
  }, []);

  useEffect(() => {
    return () => window.removeEventListener("resize", updatePredicate);
  }, []);

  const updatePredicate = () => {
    if (window.innerWidth > 809) {
      setIsOpen(false);
      setChange(true);
    } else if (window.innerWidth < 809) {
      setChange(false);
    }
  };
  console.log(isOpen);

  return (
    <NavbarContainer isopen={isOpen}>
      <NavbarDiv>
        <NavbarMainContainer>
          <PictureOfMe src={LogoMe} alt="me-logo"></PictureOfMe>
          <Signature>Bartosz Słysz</Signature>
        </NavbarMainContainer>
        <MenuListWrapper>
          <MenuList>
            <MenuListItem>
              <MenuLink to="/">About Me</MenuLink>
            </MenuListItem>
            <MenuListItem>
              <MenuLink to="/realizations">Realizations</MenuLink>
            </MenuListItem>
            <MenuListItem>
              <MenuLink to="/timeline">Timeline</MenuLink>
            </MenuListItem>
          </MenuList>
        </MenuListWrapper>
        <MenuListFooter>
          <ContactDetails>
            <p>Contact</p>
            <span>
              <i className="fas fa-envelope-open-text"></i>{" "}
              <a href="mailto:bartek.slysz@gmail.com">bartek.slysz@gmail.com</a>
            </span>
            <span>
              <i className="fas fa-phone"></i>{" "}
              <a href="tel:+48 662 920 264">+48 662 920 264</a>
            </span>
            <span>
              <i className="fab fa-github"></i>
              <a href="https://github.com/Bartoszkie">My Github</a>
            </span>
          </ContactDetails>
        </MenuListFooter>
      </NavbarDiv>

      <Hamburger isopen={isOpen} setIsOpen={setIsOpen} />
      <BackgroundForMobileNav change={change} isopen={isOpen} />
      <BackgroundNav change={change} isopen={isOpen}>
        <BackgroundForMobileList change={change} isopen={isOpen}>
          <MobileListItem isopen={isOpen}>
            <AnimatedHref
              onClick={() => setIsOpen(!isOpen)}
              isopen={isOpen.toString()}
              to="/#aboutMe"
            >
              About Me
            </AnimatedHref>
          </MobileListItem>
          <MobileListItem isopen={isOpen}>
            <AnimatedHref
              onClick={() => setIsOpen(!isOpen)}
              isopen={isOpen.toString()}
              to="/realizations#realizations"
            >
              Realizations
            </AnimatedHref>
          </MobileListItem>
          <MobileListItem isopen={isOpen}>
            <AnimatedHref
              onClick={() => setIsOpen(!isOpen)}
              isopen={isOpen.toString()}
              to="/timeline#timeline"
            >
              Timeline
            </AnimatedHref>
          </MobileListItem>
          <MobileListItem isopen={isOpen}>
            <ContactDetailsMobile>
              <p>Contact</p>
              <span>
                <i className="fas fa-envelope-open-text"></i>{" "}
                <a href="mailto:bartek.slysz@gmail.com">
                  bartek.slysz@gmail.com
                </a>
              </span>
              <span>
                <i className="fas fa-phone"></i>{" "}
                <a href="tel:+48 662 920 264">+48 662 920 264</a>
              </span>
              <span>
                <i className="fab fa-github"></i>
                <a href="https://github.com/Bartoszkie">My Github</a>
              </span>
            </ContactDetailsMobile>
          </MobileListItem>
        </BackgroundForMobileList>
      </BackgroundNav>
    </NavbarContainer>
  );
};

export default Navbar;
