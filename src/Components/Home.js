import { React, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/Alibaba-Logo.png";
import { BiSearch, BiCart, BiChevronRight } from "react-icons/bi";
import { CiUser } from "react-icons/ci";
import { TbMessageDots } from "react-icons/tb";
import { FiShoppingBag, FiList, FiChevronDown } from "react-icons/fi";
import { HiOutlineCamera } from "react-icons/hi";
import { CategoryMenuItems } from "./Home-data";
import { CategorySubItems1_1 } from "./Home-data";
import CategorySubMenuitems from "./CategorySubMenuitems";
import "../CSS/Home.css";
export default function Home() {
  const [isHover1, SetIsHover1] = useState(false);
  const [isHoverCategory, SetIsHoverCategory] = useState(false);
  const [isHoverBuyer, SetIsHoverBuyer] = useState(false);
  const [isHoverSeller, SetIsHoverSeller] = useState(false);
  const [isHoverHelp, SetIsHoverHelp] = useState(false);

  const handleCategoryEnter = () => {
    SetIsHoverCategory(true);
  };

  const handleCategoryLeave = () => {
    SetIsHoverCategory(false);
  };
  return (
    <div>
      <header className="bg-white">
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
        {/* Header 2 */}
        <div className="header2 h-10 flex p-2">
          {/* Category */}
          <div
            className="category"
            onMouseEnter={handleCategoryEnter}
            onMouseLeave={handleCategoryLeave}
          >
            <div className="category-header relative">
              <h3 className="flex items-center">
                <span className="mr-1 mt-0.5">
                  {<FiList size={18} color="#5a5a5a" />}
                </span>
                <span className="mr-1">Categories</span>
                <span className="mr-2 mt-0.5">
                  {
                    <FiChevronDown
                      size={18}
                      color="#5a5a5a"
                      style={{
                        transform: isHoverCategory ? "rotate(180deg)" : "",
                      }}
                    />
                  }
                </span>
              </h3>
            </div>
            <div className="flex">
              {/* Category list items */}
              <div
                className="category-header-list flex absolute border-lightgray border w-1/3 py-2.5 pl-2.5"
                style={{ display: isHoverCategory ? "block" : "none" }}
              >
                <ul>
                  {CategoryMenuItems.map((item, index) => {
                    return (
                      <li className="hover:shadow-md">
                        <div className="header-list-title flex items-center  ">
                          <div className="header-list-title1 w-full py-1.5">
                            {item.title1.map((subitem) => {
                              return (
                                <Link
                                  to={subitem.to}
                                  className="pl-1 header-list-title1-link"
                                >
                                  {subitem.title}
                                </Link>
                              );
                            })}
                            <span className="pl-1">/</span>
                            {item.title2.map((subitem) => {
                              return (
                                <Link
                                  to={subitem.to}
                                  className="pl-1 header-list-title1-link"
                                >
                                  {subitem.title}
                                </Link>
                              );
                            })}
                            {item.title3.map((subitem) => {
                              return (
                                <div className="flex items-center">
                                  <span className="pl-1">/</span>
                                  <Link
                                    to={subitem.to}
                                    className="pl-1 header-list-title1-link"
                                  >
                                    {subitem.title}
                                  </Link>
                                </div>
                              );
                            })}
                          </div>
                          <span className="pl-5 hover:translate-x-2 mr-2.5">
                            {<BiChevronRight size={25} color="#5a5a5a" />}
                          </span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
              {/* Category list - Sublist items */}
              <div className="w-3/4 h-full"></div>
            </div>
          </div>
          <div className="w-px h-6"></div>
          <div className="link-list ">
            <ul className="list-none flex items-center justify-between pl-3.5 ">
              <li className="hover:text-orange">
                <Link>Ready to Ship</Link>
              </li>
              <li className="w-40 hover:text-orange">
                <Link>Personal Protective Equipment</Link>
              </li>
              <li className="hover:text-orange">
                <Link>Trade Shows</Link>
              </li>
              <li
                onMouseEnter={() => SetIsHoverBuyer(true)}
                onMouseLeave={() => SetIsHoverBuyer(false)}
              >
                <div className="flex items-center hover:text-orange">
                  <Link>Buyer Central</Link>
                  <span className="pl-1 ">
                    {
                      <FiChevronDown
                        size={18}
                        className="hover:text-orange hover:rotate-180"
                      />
                    }
                  </span>
                </div>
                <div
                  className="absolute top-32"
                  style={{ display: isHoverBuyer ? "block" : "none" }}
                >
                  <ul
                    className="flex rounded-2xl text-sm"
                    style={{ width: "512px" }}
                  >
                    <li className="p-5 w-64 ">
                      <div>
                        <Link className="flex items-center mb-6">
                          <img
                            src="https://s.alicdn.com/@img/imgextra/i4/O1CN01wlImAt1sGy58OFEjA_!!6000000005740-2-tps-79-79.png"
                            alt="idea"
                            // className="w-6 h-6"
                            width={20}
                          />
                          <span className="pl-2 hover:text-orange">Blog</span>
                        </Link>
                      </div>
                      <div>
                        <Link className="flex items-center mb-6">
                          <img
                            src="https://s.alicdn.com/@img/tfs/TB1gBp7SSzqK1RjSZPcXXbTepXa-40-40.png?webp=close"
                            alt="idea"
                            // className="w-6 h-6"
                            width={20}
                          />
                          <span className="pl-2 hover:text-orange">
                            Trade Assurance
                          </span>
                        </Link>
                      </div>
                      <div>
                        <Link className="flex items-center mb-6">
                          <img
                            src="https://s.alicdn.com/@img/tfs/TB1mhSNafc3T1VjSZPfXXcWHXXa-40-32.png?webp=close"
                            alt="idea"
                            width={20}
                          />
                          <span className="pl-2  hover:text-orange whitespace-normal">
                            Production Monitoring & Inspection Services
                          </span>
                        </Link>
                      </div>
                      <div>
                        <Link className="flex items-center mb-6">
                          <img
                            src="https://s.alicdn.com/@img/tfs/TB196hmTbPpK1RjSZFFXXa5PpXa-40-40.png?webp=close"
                            alt="idea"
                            // className="w-6 h-6"
                            width={20}
                          />
                          <span className="pl-2 hover:text-orange">
                            Logistics Service
                          </span>
                        </Link>
                      </div>
                      <div>
                        <Link className="flex items-center mb-6">
                          {" "}
                          <img
                            src="https://s.alicdn.com/@img/tfs/TB1C7nRNFYqK1RjSZLeXXbXppXa-66-40.svg"
                            alt="idea"
                            // className="w-6 h-6"
                            width={20}
                          />
                          <span className="pl-2 hover:text-orange">
                            Letter of Credit
                          </span>
                        </Link>
                      </div>
                    </li>
                    <li className="p-5 w-64 bg-lightgrey1">
                      <div className="mb-2 text-xs" style={{ color: "#666" }}>
                        Sourcing solutions
                      </div>
                      <div className="mb-3 hover:text-orange">
                        <Link>Submit RFQ</Link>
                      </div>
                      <div className="mb-3 hover:text-orange">
                        <Link>Suppliers by region</Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li
                onMouseEnter={() => SetIsHoverSeller(true)}
                onMouseLeave={() => SetIsHoverSeller(false)}
              >
                <Link className="flex items-center hover:text-orange">
                  <span>Sell on Alibaba.com</span>
                  <span className="pl-1">
                    {
                      <FiChevronDown
                        size={18}
                        className="hover:text-orange hover:rotate-180"
                      />
                    }
                  </span>
                </Link>
                <div
                  className="absolute top-32 pt-2.5"
                  style={{ display: isHoverSeller ? "block" : "none" }}
                >
                  <ul className=" rounded-2xl text-sm w-64 bg-white p-5 shadow-md ">
                    <li className="pb-3 hover:text-orange cursor-pointer">
                      <span>For global Suppliers</span>
                    </li>
                    <li className="pb-3 hover:text-orange cursor-pointer">
                      <span>For Chinese Suppliers</span>
                    </li>
                    <li className=" hover:text-orange cursor-pointer">
                      <span>Partner program</span>
                    </li>
                  </ul>
                </div>
              </li>
              <li
                onMouseEnter={() => SetIsHoverHelp(true)}
                onMouseLeave={() => SetIsHoverHelp(false)}
              >
                <Link className="flex items-center hover:text-orange">
                  <span>Help</span>
                  <span className="pl-1">
                    {
                      <FiChevronDown
                        size={18}
                        className="hover:text-orange hover:rotate-180"
                      />
                    }
                  </span>
                </Link>
                <div
                  className="absolute top-32 pt-2.5"
                  style={{ display: isHoverHelp ? "block" : "none" }}
                >
                  <ul className=" rounded-2xl text-sm w-64 bg-white p-5 shadow-md ">
                    <li className="pb-3 hover:text-orange cursor-pointer">
                      <span>For buyer</span>
                    </li>
                    <li className="pb-3 hover:text-orange cursor-pointer">
                      <span>For Suppliers</span>
                    </li>
                    <li className="pb-3 hover:text-orange cursor-pointer">
                      <span>Open a case</span>
                    </li>
                    <li className="pb-3 hover:text-orange cursor-pointer">
                      <span>Report IPR infringement</span>
                    </li>
                    <li className=" hover:text-orange cursor-pointer">
                      <span>Report abuse</span>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className="header-right-list float-right flex items-center justify-between ">
            <div className="download-link">
              <Link className="hover:text-orange">Get the app</Link>
            </div>
            <div className="w-px h-6"></div>
            <div className="lang">
              <div>English - USD</div>
            </div>
            <div className="w-px h-6"></div>
            <div className="country">
              <div>ship to : </div>
            </div>
          </div>
        </div>
      </header>
      <div className="w-auto h-full bg-bggray pt-6 px-14"></div>
    </div>
  );
}
