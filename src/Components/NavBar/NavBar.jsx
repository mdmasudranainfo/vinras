import React, { useEffect, useState } from "react";
import { CgMathMinus, CgMathPlus } from "react-icons/cg";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaMobileAlt,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import { IoCloseOutline, IoSearchOutline } from "react-icons/io5";
import { TfiAlignJustify } from "react-icons/tfi";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [navbarSearch, setNavbarSearch] = useState(false);
  const [homeDropdown, setHomeDropdown] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [newsDropdown, setNewsDropdown] = useState(false);
  const [removeNavbarFlex, setRemoveNavbarFlex] = useState(false);
  const [removeShape, setRemoveShape] = useState(false);
  const [removeDropdownMenu, setRemoveDropdownMenu] = useState(false);
  const [mainMenuToggle, setMainMenuToggle] = useState(false);
  const [navScroll, setNavScroll] = useState("");
  const location = useLocation();

  // navigation collapse function
  useEffect(() => {
    window.addEventListener("scroll", handleNavbarScroll);
    return () => {
      window.removeEventListener("scroll", handleNavbarScroll);
    };
  }, []);

  // navbar scrolling effect
  const handleNavbarScroll = () => {
    if (window.scrollY > 0) {
      setNavScroll("navScrollOver");
    } else {
      setNavScroll("");
    }
  };

  const handleNavbarSearch = () => {
    setNavbarSearch(!navbarSearch);
  };

  const handleHomeDropdown = () => {
    setHomeDropdown(!homeDropdown);
  };
  const handleServicesDropdown = () => {
    setServicesDropdown(!servicesDropdown);
  };

  const handleNewsDropdown = () => {
    setNewsDropdown(!newsDropdown);
  };

  const handleMainMenu = () => {
    setMainMenuToggle(!mainMenuToggle);
  };

  useEffect(() => {
    if (window.innerWidth <= 1024) {
      setRemoveNavbarFlex("flex-remove");
    }
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1024) {
      setRemoveShape("navbar-left-shape");
    }
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1024) {
      setRemoveDropdownMenu("home-dropdown-ab");
    }
  }, []);

  return (
    <div>
      {/* {/ navbar /} */}

      <div className={`navbar-wrapper ${navScroll}`}>
        <div className="navbar-left-shape ">
          <div className="vinras-container">
            {/* {/ off canvas dropdown /} */}
            <div className="block lg:hidden sticky top-0">
              <div className="flex justify-between items-center">
                <div className="flex items-center justify-start navbar-brand">
                  <img
                    src="https://i.ibb.co/fvwc9qD/02-Home-Recovered.png"
                    alt="logo"
                    className="w-[35px] mr-2"
                  />
                  <span className="text-2xl font-bold text-white">vinras</span>
                </div>

                <span onClick={handleMainMenu} className="cursor-pointer p-4">
                  <TfiAlignJustify />
                </span>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="flex items-center justify-between">
                {/* {/ navbar logo /} */}
                <div className="flex items-center justify-start navbar-brand">
                  <img
                    src="https://i.ibb.co/fvwc9qD/02-Home-Recovered.png"
                    alt="logo"
                    className="w-[35px] mr-2"
                  />
                  <span className="text-2xl font-bold text-white">vinras</span>
                </div>

                {/* {/ navbar social /} */}
                <div className="flex items-center justify-between navbar-social-icons">
                  <ul className="flex items-center justify-between">
                    <li className="nva-social-items">
                      <Link className="nav-social-links" href="/">
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li className="nva-social-items">
                      <Link className="nav-social-links" href="/">
                        <FaTwitter />
                      </Link>
                    </li>
                    <li className="nva-social-items">
                      <Link className="nav-social-links" href="/">
                        <FaLinkedinIn />
                      </Link>
                    </li>
                    <li className="nva-social-items">
                      <Link className="nav-social-links" href="/">
                        <FaPinterestP />
                      </Link>
                    </li>
                  </ul>

                  {/* {/ navbar search box /} */}
                  <div className="navbar-search-icon">
                    <span
                      className="cursor-pointer flex "
                      onClick={handleNavbarSearch}>
                      {navbarSearch ? <IoCloseOutline /> : <IoSearchOutline />}
                    </span>

                    <div
                      className={`absolute navbar-top-search flex items-center justify-between transition-all duration-1000  ${
                        navbarSearch ? "add-search-box-in-navbar" : ""
                      }`}>
                      <input type="text" placeholder="Search here..." />

                      <IoSearchOutline
                        className={` absolute left-0 mx-4 cursor-pointer bg-white z-10 ${
                          navbarSearch
                            ? "right-0"
                            : "right-0 navbar-search-icons-toggle"
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* {/ navbar /} */}
                <div className="navbar-wrap">
                  <ul className="navbar-nav">
                    <li className="nav-items relative">
                      <Link
                        className={`nav-links flex justify-between items-center ${
                          location && "text-black"
                        }`}
                        href="/"
                        onClick={handleHomeDropdown}>
                        Home {homeDropdown ? <CgMathMinus /> : <CgMathPlus />}
                      </Link>
                      {/* {/ home dropdown menu /} */}
                      <div
                        className={`home-dropdown ${
                          homeDropdown ? "home-dropdown-toggle" : ""
                        }`}>
                        <ul className="triangle-top">
                          <li className="nav-items">
                            <Link className="nav-links" to="/data">
                              home 2
                            </Link>
                          </li>
                          <li>
                            <Link className="nav-links" to="/data">
                              home 2
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-items">
                      <Link className="nav-links" to="/page">
                        page
                      </Link>
                    </li>
                    <li className="nav-items relative">
                      <Link
                        className="nav-links flex justify-between items-center"
                        href="/"
                        onClick={handleServicesDropdown}>
                        Services{" "}
                        {servicesDropdown ? <CgMathMinus /> : <CgMathPlus />}
                      </Link>
                      {/* {/ Services dropdown menu /} */}
                      <div
                        className={`home-dropdown ${
                          servicesDropdown ? "home-dropdown-toggle" : ""
                        }`}>
                        <ul className="triangle-top">
                          <li className="nav-items">
                            <Link className="nav-links" to="/data">
                              home 2
                            </Link>
                          </li>
                          <li>
                            <Link className="nav-links" to="/data">
                              home 2
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-items">
                      <Link className="nav-links" href="/">
                        Team
                      </Link>
                    </li>
                    <li className="nav-items relative">
                      <Link
                        className="nav-links flex justify-between items-center"
                        href="/"
                        onClick={handleNewsDropdown}>
                        News {newsDropdown ? <CgMathMinus /> : <CgMathPlus />}
                      </Link>
                      {/* {/ News dropdown menu /} */}
                      <div
                        className={`home-dropdown ${
                          newsDropdown ? "home-dropdown-toggle" : ""
                        }`}>
                        <ul className="triangle-top">
                          <li className="nav-items">
                            <Link className="nav-links" to="/data">
                              home 2
                            </Link>
                          </li>
                          <li>
                            <Link className="nav-links" to="/data">
                              home 2
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-items">
                      <Link className="nav-links" href="/">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* {/ mobile /} */}
                <div className="hidden xl:block">
                  <div className="flex items-center justify-between navbar-call text-white">
                    <span className="text-[30px]">
                      <FaMobileAlt />
                    </span>
                    <Link
                      to="tel:+12-87458753"
                      className="flex flex-col items-start  justify-start">
                      <p className="text-white">Call us</p>
                      <p className="text-white">+12-87458753</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* {/ =========================OF CANVAS MENU========================== /} */}
        <div
          className={`block lg:hidden off-canvas-menu ${
            mainMenuToggle ? "main-menu-toggle-class" : ""
          } bg-orange-600 lg:bg-none ${
            removeShape ? "" : "navbar-left-shape"
          }`}>
          <div className="vinras-container">
            <div className="">
              {/* {/ navbar logo /} */}
              <div className="flex items-center justify-start navbar-brand">
                <img
                  src="https://i.ibb.co/fvwc9qD/02-Home-Recovered.png"
                  alt="logo"
                  className="w-[35px] mr-2"
                />
                <span className="text-2xl font-bold text-white">vinras</span>
              </div>

              {/* {/ navbar social /} */}
              <div className="flex items-center justify-between navbar-social-icons mt-12 lg:mt-0 max-w-sm">
                <ul className="flex items-center justify-between">
                  <li className="nva-social-items">
                    <Link className="nav-social-links" href="/">
                      <FaFacebookF />
                    </Link>
                  </li>
                  <li className="nva-social-items">
                    <Link className="nav-social-links" href="/">
                      <FaTwitter />
                    </Link>
                  </li>
                  <li className="nva-social-items">
                    <Link className="nav-social-links" href="/">
                      <FaLinkedinIn />
                    </Link>
                  </li>
                  <li className="nva-social-items">
                    <Link className="nav-social-links" href="/">
                      <FaPinterestP />
                    </Link>
                  </li>
                </ul>

                {/* {/ navbar search box /} */}
                <div className="navbar-search-icon">
                  <span
                    className="cursor-pointer flex "
                    onClick={handleNavbarSearch}>
                    {navbarSearch ? <IoCloseOutline /> : <IoSearchOutline />}
                  </span>

                  <div
                    className={`absolute navbar-top-search flex items-center justify-between transition-all duration-1000  ${
                      navbarSearch ? "add-search-box-in-navbar" : ""
                    }`}>
                    <input type="text" placeholder="Search here..." />

                    <IoSearchOutline
                      className={` absolute left-0 mx-4 cursor-pointer bg-white z-10 ${
                        navbarSearch
                          ? "right-0"
                          : "right-0 navbar-search-icons-toggle"
                      }`}
                    />
                  </div>
                </div>
              </div>

              {/* {/ navbar /} */}
              <div className="navbar-wrap mt-12 lg:mt-0">
                <ul className={` ${removeNavbarFlex ? "" : "navbar-nav"}`}>
                  <li
                    className={`nav-items relative  ${
                      homeDropdown
                        ? "toggle-dropdown-active"
                        : "toggle-dropdown-off"
                    }`}>
                    <Link
                      className="nav-links flex mr-4 justify-start lg:justify-between items-center"
                      href="/"
                      onClick={handleHomeDropdown}>
                      Home {homeDropdown ? <CgMathMinus /> : <CgMathPlus />}
                    </Link>
                    {/* {/ home dropdown menu /} */}
                    <div
                      className={`${
                        removeDropdownMenu ? "" : "home-dropdown-ab"
                      } ${newsDropdown ? "home-dropdown-toggle" : ""}`}>
                      <ul className={`triangle-top bg-white`}>
                        <li className="nav-items">
                          <Link className="nav-links" to="/data">
                            home 2
                          </Link>
                        </li>
                        <li className="nav-items">
                          <Link className="nav-links" to="/data">
                            home 2
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className={`nav-items ${homeDropdown ? "mt-0" : "mt-6"}`}>
                    <Link className="nav-links" href="/">
                      page
                    </Link>
                  </li>
                  <li
                    className={`nav-items relative ${
                      servicesDropdown
                        ? "toggle-dropdown-active"
                        : "toggle-dropdown-off"
                    }`}>
                    <Link
                      className="nav-links flex mr-4 justify-start lg:justify-between items-center"
                      href="/"
                      onClick={handleServicesDropdown}>
                      Services{" "}
                      {servicesDropdown ? <CgMathMinus /> : <CgMathPlus />}
                    </Link>
                    {/* {/ Services dropdown menu /} */}
                    <div
                      className={`${
                        removeDropdownMenu ? "" : "home-dropdown-ab"
                      } ${newsDropdown ? "home-dropdown-toggle" : ""}`}>
                      <ul className={`triangle-top bg-white`}>
                        <li className="nav-items">
                          <Link className="nav-links" to="/data">
                            home 2
                          </Link>
                        </li>
                        <li className="nav-items">
                          <Link className="nav-links" to="/data">
                            home 2
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li
                    className={`nav-items ${
                      servicesDropdown ? "mt-0" : "mt-6"
                    }`}>
                    <Link className="nav-links" href="/">
                      Team
                    </Link>
                  </li>
                  <li
                    className={`nav-items relative ${
                      newsDropdown
                        ? "toggle-dropdown-active"
                        : "toggle-dropdown-off"
                    }`}>
                    <Link
                      className="nav-links flex mr-4 justify-start lg:justify-between items-center"
                      href="/"
                      onClick={handleNewsDropdown}>
                      News {newsDropdown ? <CgMathMinus /> : <CgMathPlus />}
                    </Link>

                    {/* {/ News dropdown menu /} */}

                    <div
                      className={`${
                        removeDropdownMenu ? "" : "home-dropdown-ab"
                      } ${newsDropdown ? "home-dropdown-toggle" : ""}`}>
                      <ul className={`triangle-top bg-white`}>
                        <li className="nav-items">
                          <Link className="nav-links" to="/data">
                            home 2
                          </Link>
                        </li>
                        <li className="nav-items">
                          <Link className="nav-links" to="/data">
                            home 2
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className={`nav-items ${newsDropdown ? "mt-0" : "mt-6"}`}>
                    <Link className="nav-links" to="/">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* {/ mobile /} */}
              <div className="hidden xl:block">
                <div className="flex items-center justify-between navbar-call">
                  <span className="text-[30px]">
                    <FaMobileAlt />
                  </span>
                  <Link
                    to="tel:+12-87458753"
                    className="flex flex-col items-start  justify-start">
                    <p>Call us</p>
                    <p>+12-87458753</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
