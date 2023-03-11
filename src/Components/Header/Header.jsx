import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaSearch,
  FaTwitter,
} from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <div className="">
        <img src="https://i.ibb.co/BTGpSHF/logo.png" alt="" />

        <div className=" container mx-auto">
          <div className=" flex ">
            <span>
              <FaFacebookF />
            </span>
            <span>
              <FaTwitter />
            </span>
            <span>
              <FaLinkedinIn />
            </span>
            <span>
              <FaPinterestP />
            </span>
            <span>
              <FaSearch />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
