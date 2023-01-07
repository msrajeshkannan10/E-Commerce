import { React, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/Alibaba-Logo.png";
import { BiSearch, BiCart, BiChevronRight } from "react-icons/bi";
import { CiUser } from "react-icons/ci";
import { TbMessageDots } from "react-icons/tb";
import { FiShoppingBag, FiList, FiChevronDown } from "react-icons/fi";
import { HiOutlineCamera } from "react-icons/hi";
import "../CSS/Home.css";
export default function Home() {
  const [isHovering, SetIsHovering] = useState(false);
  const CategoryMenuItems = [
    {
      title1: [
        {
          title: "Machinery",
          to: "./test.js",
        },
      ],
      title2: [
        {
          title: "Vehicles & Accessories",
          to: "/",
        },
      ],
      title3: [],
    },
    {
      title1: [
        {
          title: "Consumer Electronics",
          to: "./test.js",
        },
      ],
      title2: [
        {
          title: "Home Appliances",
          to: "./test.js",
        },
      ],
      title3: [],
    },
    {
      title1: [
        {
          title: "Apparel",
          to: "./test.js",
        },
      ],
      title2: [
        {
          title: "Fashion Accessories",
          to: "./test.js",
        },
      ],
      title3: [
        {
          title: "Timepieces,Jewelry,Eyewear",
          to: "./test.js",
        },
      ],
    },
    {
      title1: [
        {
          title: "Lights & Lighting",
          to: "./test.js",
        },
      ],
      title2: [
        {
          title: "Construction & Real Estate",
          to: "./test.js",
        },
      ],
      title3: [],
    },
    {
      title1: [
        {
          title: "Home & Garden",
          to: "./test.js",
        },
      ],
      title2: [
        {
          title: "Furniture",
          to: "./test.js",
        },
      ],
      title3: [],
    },
    {
      title1: [
        {
          title: "Fabric & Textiles Raw Material",
          to: "./test.js",
        },
      ],
      title2: [
        {
          title: "Home Textiles",
          to: "./test.js",
        },
      ],
      title3: [],
    },
    {
      title1: [
        {
          title: "Beauty & Personal Care",
          to: "./test.js",
        },
      ],
      title2: [
        {
          title: "Health & Medical",
          to: "./test.js",
        },
      ],
      title3: [],
    },
    {
      title1: [
        {
          title: "Packaging & Printing",
          to: "./test.js",
        },
      ],
      title2: [
        {
          title: "Office & School Supplies",
          to: "./test.js",
        },
      ],
      title3: [],
    },
    {
      title1: [
        {
          title: "Electrical Equipment & Supplies",
          to: "./test.js",
        },
      ],
      title2: [],
      title3: [],
    },
    {
      title1: [
        {
          title: "Tools & Hardware",
          to: "./test.js",
        },
      ],
      title2: [
        {
          title: "Security & Protection",
          to: "./test.js",
        },
      ],
      title3: [
        {
          title: "Fabrication Service",
          to: "./test.js",
        },
      ],
    },
    {
      title1: [
        {
          title: "Electrical Equipment & Supplies",
          to: "./test.js",
        },
      ],
      title2: [
        {
          title: "Electronic Components,Accessories & Telecommunications",
          to: "./test.js",
        },
      ],
      title3: [],
    },
    {
      title1: [
        {
          title: "Sports & Entertainment",
          to: "./test.js",
        },
      ],
      title2: [
        {
          title: "Toys & Hobbies",
          to: "./test.js",
        },
      ],
      title3: [
        {
          title: "Gifts & Crafts",
          to: "./test.js",
        },
      ],
    },
    {
      title1: [
        {
          title: "Luggage, Bags & Cases",
          to: "./test.js",
        },
      ],
      title2: [
        {
          title: "Shoes & Accessories",
          to: "./test.js",
        },
      ],
      title3: [],
    },
    {
      title1: [
        {
          title: "Minerals & Metallurgy",
          to: "./test.js",
        },
      ],
      title2: [
        {
          title: "Chemicals",
          to: "./test.js",
        },
      ],
      title3: [
        {
          title: "Rubber & Plastics",
          to: "./test.js",
        },
      ],
    },
    {
      title1: [
        {
          title: "Agriculture",
          to: "./test.js",
        },
      ],
      title2: [
        {
          title: "Food & Beverage",
          to: "./test.js",
        },
      ],
      title3: [],
    },
    {
      title1: [
        {
          title: "Commercial Service Equipment",
          to: "./test.js",
        },
      ],
      title2: [
        {
          title: "Business Services",
          to: "./test.js",
        },
      ],
      title3: [],
    },
    {
      title1: [
        {
          title: "Energy",
          to: "./test.js",
        },
      ],
      title2: [
        {
          title: "Environment",
          to: "./test.js",
        },
      ],
      title3: [],
    },
  ];
  const handleMouseEnter = () => {
    SetIsHovering(true);
  };

  const handleMouseLeave = () => {
    SetIsHovering(false);
  };
  return (
    <div>
      <header className="">
        <div className="header1 flex items-center px-6 border-b border-lightgray">
          <div className="logo ">
            <img
              src={Logo}
              alt="Logo"
              className="inline-block h-24 w-44 mr-12 "
            />
          </div>
          <div className="searchBar flex mt-2.5 ml-16">
            <input
              type="text"
              placeholder="What are you looking for...."
              className="h-10 w-4/5 p-2.5 border-orange border-2  rounded-tl-2xl rounded-bl-2xl border-solid placeholder:pl-2 text-sm border-r-0 focus:outline-none "
            />
            <span className="camera-icon absolute">
              {<HiOutlineCamera size={18} color="#5a5a5a" />}
            </span>
            <span className="search-icon left-auto text-white absolute">
              {<BiSearch size={18} />}
            </span>
            <input
              type="submit"
              value="Search"
              className=" p-0.5  search-submit bg-orange rounded-sm broder-solid border-2 w-36 h-10 border-orange  text-white rounded-tr-2xl rounded-br-2xl hover:bg-hoverOrange"
            />
          </div>
          <div className="header-icons flex justify-between items-center w-96  ">
            <div className="header-icon1 flex">
              <span className="w-12 mt-1.5 h-10">
                {<CiUser size={40} color="#5a5a5a" />}
              </span>
              <div className="header-icon1-text mt-1">
                <div className="text-sm">Sign in</div>
                <div className="text-sm">Join for free</div>
              </div>
            </div>
            <div className="header-icon2 flex flex-col items-center">
              <div className="">
                {<TbMessageDots size={30} color="#5a5a5a" />}
              </div>
              <div className="text-sm">Messages</div>
            </div>
            <div className="header-icon3 flex flex-col items-center">
              <div>{<FiShoppingBag size={28} color="#5a5a5a" />}</div>
              <div className="text-sm">Orders</div>
            </div>
            <div className="header-icon4 flex flex-col items-center">
              <div>{<BiCart size={30} color="#5a5a5a" />}</div>
              <div className="text-sm">Cart</div>
            </div>
          </div>
        </div>
        <div className="header2 h-10 flex p-2">
          <div className="category">
            <div
              className="category-header relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <h3 className="flex items-center">
                <span className="mr-1 mt-0.5">
                  {<FiList size={18} color="#5a5a5a" />}
                </span>
                <span className="mr-1">Categories</span>
                <span className="mr-2 mt-0.5">
                  {<FiChevronDown size={18} color="#5a5a5a" />}
                </span>
              </h3>
            </div>
            <div
              className="category-header-list absolute border-lightgray border  p-2.5"
              style={{ display: isHovering ? "block" : "none" }}
            >
              <ul>
                {CategoryMenuItems.map((item, index) => {
                  return (
                    <li>
                      <div className="header-list-title flex items-center  ">
                        <div className="header-list-title1 w-full py-1.5">
                          {item.title1.map((subitem) => {
                            return (
                              <Link to={subitem.to} className="pl-1">
                                {subitem.title}
                              </Link>
                            );
                          })}
                          <span className="pl-1">/</span>
                          {item.title2.map((subitem) => {
                            return (
                              <Link to={subitem.to} className="pl-1">
                                {subitem.title}
                              </Link>
                            );
                          })}
                          {item.title3.map((subitem) => {
                            return (
                              <div className="flex items-center">
                                <span className="pl-1">/</span>
                                <Link to={subitem.to} className="pl-1">
                                  {subitem.title}
                                </Link>
                              </div>
                            );
                          })}
                        </div>
                        <span className="pl-5 ">
                          {<BiChevronRight size={25} color="#5a5a5a" />}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="w-px h-6 bg-lightgray"></div>
          <div className="link-list ">
            <ul className="list-none flex items-center justify-between pl-3.5 ">
              <li>
                <a href="#">Ready to Ship</a>
              </li>
              <li className="w-40">
                <a>Personal Protective Equipment</a>
              </li>
              <li>
                <a>Trade Shows</a>
              </li>
              <li className="flex items-center">
                <a>Buyer Central</a>
                <span className="pl-1 ">
                  {
                    <FiChevronDown
                      size={18}
                      color="#5a5a5a"
                      style={{ color: isHovering ? "#FF6A00" : "" }}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    />
                  }
                </span>
              </li>
              <li className="flex items-center">
                <a>Sell on Alibaba.com</a>
                <span className="pl-1">
                  {
                    <FiChevronDown
                      size={18}
                      color="#5a5a5a"
                      style={{ color: isHovering ? "#FF6A00" : "" }}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    />
                  }
                </span>
              </li>
              <li className="flex items-center">
                <a href="#">Help</a>
                <span className="pl-1">
                  {
                    <FiChevronDown
                      size={18}
                      color="#5a5a5a"
                      style={{ color: isHovering ? "#FF6A00" : "" }}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    />
                  }
                </span>
              </li>
            </ul>
          </div>
          <div className="header-right-list float-right flex items-center justify-between ">
            <div className="download-link">
              <a href="#">Get the app</a>
            </div>
            <div className="w-px h-6 bg-lightgray"></div>
            <div className="lang">
              <div>English - USD</div>
            </div>
            <div className="w-px h-6 bg-lightgray"></div>
            <div className="country">
              <div>ship to : </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
