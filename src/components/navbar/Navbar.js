import React, { useState } from "react";
import { Link } from "react-scroll";
import { logo } from "../../assets/index";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { navLinksData } from "../../constants";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  console.log(showMenu);
  
  return (
    <div className="w-auto h-24 sticky top-0 z-50 flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div className="flex flex-row">
        <div>
          <img className="w-16 h-16 my-2 rounded-full" src={logo} alt="logo" />
        </div>
        <span className="flex items-center pl-2 text-gray-400">Maduri</span>
      </div>

      <div>
        <ul className="items-center hidden gap-6 md:inline-flex lg:gap-10">
          {navLinksData.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal tracking-wide text-gray-400 duration-300 cursor-pointer hover:text-designColor"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>

        <span
          onClick={() => setShowMenu(!showMenu)}
          className="w-10 h-10 text-xl text-gray-300 duration-200 cursor-pointer md:hidden hover:text-designColor"
        >
          <FiMenu />
        </span>

        {showMenu && (
          <div className="w-[60%] h-screen overflow-scroll absolute top-0 left-0 p-4 bg-gray-900 scrollbar-hide">
            <div>
              <div className="flex flex-row">
                <div>
                  <img
                    className="w-16 h-16 my-2 rounded-full"
                    src={logo}
                    alt="logo"
                  ></img>
                </div>
                <span className="flex items-center pl-2">Maduri</span>
              </div>

              <ul className="flex flex-col gap-4 pt-5">
                {navLinksData.map((item) => (
                  <li
                    key={item._id}
                    className="text-base tracking-wide text-gray-400 duration-300 cursor-pointer hover:text-designColor"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <span
              onClick={() => setShowMenu(false)}
              className="absolute text-2xl text-gray-300 duration-300 cursor-pointer top-4 right-4 hover:text-designColor"
            >
              <MdClose />
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
