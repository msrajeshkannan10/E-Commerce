import { React, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/Alibaba-Logo.png";
import { BiSearch, BiCart, BiChevronRight } from "react-icons/bi";
import { AiFillAndroid, AiFillApple } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { TbMessageDots } from "react-icons/tb";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaTiktok, FaYoutube, FaGlobeAmericas } from "react-icons/fa";
import {
  FiShoppingBag,
  FiList,
  FiChevronDown,
  FiArrowRight,
} from "react-icons/fi";
import { HiOutlineCamera } from "react-icons/hi";
import {
  CategoryMenuItems,
  MyMarkets,
  secondFloor,
  footerTable,
} from "./Home-data";
// swiper js
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "../CSS/Home.css";

// import images
import fl1 from "../images/firstFloor-right-card1.jpeg";
import fl2 from "../images/firstFloor-right-card1.jpeg";
import footer1 from "../images/footer1.jpg";
import footer2 from "../images/footer2.jpg";
// Tooltip
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

export default function Home() {
  const [isHoverCategory, SetIsHoverCategory] = useState(false);
  const [isHoverBuyer, SetIsHoverBuyer] = useState(false);
  const [isHoverSeller, SetIsHoverSeller] = useState(false);
  const [isHoverHelp, SetIsHoverHelp] = useState(false);
  // SwiperCore.use([Autoplay]);
  const handleCategoryEnter = () => {
    SetIsHoverCategory(true);
  };

  const handleCategoryLeave = () => {
    SetIsHoverCategory(false);
  };
  return (
    <div className="font-sans">
      <header className="bg-white">
        <div className="header1 flex items-center px-6 border-b border-lightgray">
          <div className="logo">
            <img
              src={Logo}
              alt="Logo"
              className="inline-block h-24 w-44 mr-12 "
            />
          </div>
          <div className="searchBar flex mt-2.5 ml-16 ">
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
                className="category-header-list flex absolute bg-white z-50 border-lightgray border w-1/3 py-2.5 pl-2.5"
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
                  className="absolute top-32 bg-white z-50"
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
                  className="absolute top-32 pt-2.5 z-50"
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
                  className="absolute top-32 pt-2.5 z-50 "
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
      <div className="w-auto h-full bg-bggray ">
        <div className="main-firstFloor pt-6 px-16">
          <div
            className="firstFloor-row1 px-5 pt-5 bg-white flex"
            style={{ height: "420px" }}
          >
            <div
              className="firstFloor-left w-72 mb-4"
              style={{ height: "400px" }}
            >
              <div className="left-title border-b border-lightgray pb-2 pl-3">
                <span className="font-medium">My markets</span>
              </div>
              <div className="left-list">
                <ul>
                  {MyMarkets.map((element) => {
                    return (
                      <li className="pt-1.5 pr-1.5 pb-2 pl-2.5 flex items-center hover:border hover:border-lightgray hover:text-orange">
                        {element.title.map((sub) => {
                          return (
                            <Link className="flex items-center">
                              <div className="flex items-center w-full">
                                <span className="mr-3 bg-lightgrey1 rounded-3xl">
                                  <img src={sub.image} alt="" width={35} />
                                </span>
                                <span className="w-56 text-sm">
                                  {sub.title}
                                </span>
                              </div>
                              <span className="pl-5 mr-2.5 float-right">
                                {<BiChevronRight size={20} color="#5a5a5a" />}
                              </span>
                            </Link>
                          );
                        })}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div
              className="firstFloor-center z-10 w-3/5 pl-2 mb-4"
              style={{ height: "400px" }}
            >
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{ delay: 1500 }}
                navigation={{ hideOnClick: true }}
                pagination={{ clickable: true }}
              >
                <SwiperSlide>
                  <img
                    src="https://s.alicdn.com/@img/imgextra/i1/O1CN014cMxB01Rlf5krAxBy_!!6000000002152-2-tps-990-400.png"
                    alt=""
                    width={990}
                    height={500}
                    style={{ height: "380px" }}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://s.alicdn.com/@img/imgextra/i3/O1CN01M9x0R41VzdeRW8FYF_!!6000000002724-0-tps-990-400.jpg"
                    alt=""
                    width={990}
                    height={500}
                    style={{ height: "380px" }}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://s.alicdn.com/@img/imgextra/i2/O1CN01h0dgp222Y38Xa2asS_!!6000000007131-2-tps-990-400.png"
                    alt=""
                    width={990}
                    height={500}
                    style={{ height: "380px" }}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://s.alicdn.com/@img/imgextra/i1/O1CN01zzD0wy1z5FObsCIPh_!!6000000006662-2-tps-990-400.png"
                    alt=""
                    width={990}
                    height={500}
                    style={{ height: "380px" }}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://s.alicdn.com/@img/imgextra/i4/O1CN01ypqsQb1Zy2igbbfNq_!!6000000003262-0-tps-990-400.jpg"
                    alt=""
                    width={990}
                    height={500}
                    style={{ height: "380px" }}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://s.alicdn.com/@img/imgextra/i1/O1CN01FADxgv1j9nTd1oI0F_!!6000000004506-0-tps-990-400.jpg"
                    alt=""
                    width={990}
                    height={500}
                    style={{ height: "380px" }}
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            <div
              className="firstFloor-right pl-5 mb-4"
              style={{ height: "400px" }}
            >
              <div className="text-sm">
                Sign up to enjoy exciting Buyers Club benefits
              </div>
              <div className="p-3">
                <button className="bg-orange text-white rounded-2xl w-48 mt-2 p-0.5">
                  Join for free
                </button>
                <button className="w-48 rounded-2xl border border-black mt-2 p-0.5">
                  Sign in
                </button>
              </div>
              <div>
                <Link className="flex items-center">
                  <span className="font-bold text-lg pr-0.5">Buyers Club</span>
                  <span>{<FiArrowRight size={25} />}</span>
                </Link>
              </div>
              <div className="firstFloor-right-card pt-2">
                <Link className="flex justify-between bg-bggray p-2 mb-3 text-sm rounded-md font-medium">
                  <div>US $10 off with a new supplier</div>
                  <img src={fl1} alt="" width={84} height={84} />
                </Link>
                <Link className="flex justify-between bg-bggray p-2 text-sm rounded-md font-medium">
                  <div>RFQ: quotes with supplier preferences</div>
                  <img src={fl2} alt="" width={84} height={84} />
                </Link>
              </div>
            </div>
          </div>
          <div className="secondFloor ">
            <div className="secondFloor-card grid grid-cols-3 gap-5 py-5">
              {secondFloor.map((element) => {
                return (
                  <div className="card-heading  bg-white rounded-lg w-full p-2.5">
                    <Link className="flex items-center text-base mb-1.5 ml-2">
                      <img
                        src={element.titleIcon}
                        alt=""
                        width={16}
                        height={16}
                      />
                      <span className="ml-2 text-black font-bold">
                        {element.title}
                      </span>
                    </Link>
                    <div className="card-item flex justify-between ">
                      {element.item.map((subitem) => {
                        return (
                          <Link className="text-center p-1.5">
                            <div className="m-1 flex items-center justify-center bg-bggray w-28 h-28 transition-all hover:transition-transform">
                              <img
                                src={subitem.image}
                                alt=""
                                width={100}
                                height={100}
                              />
                            </div>
                            <div className="font-medium text-sm">
                              {subitem.price}
                            </div>
                            <div className="text-sm ">
                              {subitem.specification}
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-footerColor w-full h-auto">
        <div className="footer-1 pt-12 pb-2.5 flex flex-col items-center">
          <div className="text-white">
            Trade Alert - Delivering the latest product trends and industry news
            straight to your inbox.
          </div>
          <div className="footer-search p-2.5" style={{ width: "470px" }}>
            <input
              type="text"
              name=""
              id=""
              placeholder="Your email"
              className="w-80 text-base border h-10 p-2.5 text-white bg-footerSearch border-lightgray placeholder:text-lightgray mr-2"
            />
            <input
              type="submit"
              name=""
              id=""
              value="Subscribe"
              className="border rounded text-base cursor-pointer h-10 px-5 border-lightgray text-white text-center"
            />
            <div className="text-lightgray mt-1.5 text-xs">
              We’ll never share your email address with a third-party.
            </div>
          </div>
          <div className="footer-table flex text-white mt-6 border-b border-footerSearch">
            {footerTable.map((element) => {
              return (
                <div className="pl-4 mx-5 w-56 h-60 font-medium">
                  <div className="text-lg py-2.5 mb-1.5">
                    <Link>{element.title}</Link>
                  </div>
                  <div className="text-xs py-1.5">
                    <Link>{element.row1}</Link>
                  </div>
                  <div className="text-xs py-1.5">
                    <Link>{element.row2}</Link>
                  </div>
                  <div className="text-xs py-1.5">
                    <Link>{element.row3}</Link>
                  </div>
                  <div className="text-xs py-1.5">
                    <Link>{element.row4}</Link>
                  </div>
                  <div className="text-xs py-1.5">
                    <Link>{element.row5}</Link>
                  </div>
                  <div className="text-xs py-1.5">
                    <Link>{element.row6}</Link>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="footer-social text-white w-11/12 pt-6 pb-2.5 mx-24 text-sm flex justify-around">
            <div className="app pl-14 text-white flex items-center">
              <span className="font-medium">Download :</span>
              <button
                id="iOSTooltip"
                className="bg-iOSButton text-white text-xs rounded hover:bg-opacity-75 ml-1 mr-2 h-8 w-36 flex items-center"
              >
                {" "}
                <AiFillApple size={30} color="#fff" />
                <span>
                  Available on the{" "}
                  <span className="font-medium">App Store</span>
                </span>
              </button>
              <Tooltip
                anchorId="iOSTooltip"
                content="Available on the App Store"
                place="bottom"
              />
              <button className="bg-androidButton text-white rounded text-xs hover:bg-opacity-75 ml-1 mr-2 h-8 w-36 flex items-center">
                {" "}
                <AiFillAndroid size={30} color="#fff" />
                <span>
                  Available on the{" "}
                  <span className="font-medium">Google Play</span>
                </span>
              </button>
            </div>
            <div className="supplier-app flex">
              <span className="font-medium text-sm">
                Alibaba Supplier app :
              </span>
              <Link className="SupplierApp-icon hover:opacity-80"></Link>
            </div>
            <div className="share flex items-center">
              <span className="font-medium">Follow us :</span>
              <span className="flex">
                <Link className="shareFB hover:opacity-80"></Link>
                <Link className="bg-white p-0.5 hover:opacity-80 ml-1 mt-1 h-5 flex items-center rounded">
                  <BsInstagram size={17} color="#445268" />
                </Link>
                <Link className="shareTT bg-white hover:opacity-80 p-0.5 ml-1 mt-1 h-5 flex items-center rounded">
                  <FaTiktok size={19} color="#445268" />
                </Link>
                <Link className="shareIN hover:opacity-80"></Link>
                <Link className=" bg-white p-0.5 ml-1 hover:opacity-80 mt-1 h-5 flex items-center rounded">
                  <FaYoutube size={17} color="#445268" />
                </Link>
                <Link className=" bg-white p-0.5 ml-1 hover:opacity-80 mt-1 h-5 flex items-center rounded">
                  <BsTwitter size={17} color="#445268" />
                </Link>
              </span>
            </div>
          </div>
          <div className="footer-language flex items-center text-white font-medium text-xs mt-4 mb-4">
            <span className="pr-1">
              <FaGlobeAmericas size={15} color="#fff" />
            </span>
            <span className="pr-1 hover:underline">Alibaba.com Site: </span>
            <Link className="pr-1 hover:underline">International - </Link>
            <Link className="pr-1 hover:underline">Español - </Link>
            <Link className="pr-1 hover:underline">Português - </Link>
            <Link className="pr-1 hover:underline">Deutsch - </Link>
            <Link className="pr-1 hover:underline">Français - </Link>
            <Link className="pr-1 hover:underline">Italiano - </Link>
            <Link className="pr-1 hover:underline">हिंदी - </Link>
            <Link className="pr-1 hover:underline">Pусский - </Link>
            <Link className="pr-1 hover:underline">한국어 - </Link>
            <Link className="pr-1 hover:underline">日本語 - </Link>
            <Link className="pr-1 hover:underline">اللغة العربية - </Link>
            <Link className="pr-1 hover:underline">ภาษาไทย - </Link>
            <Link className="pr-1 hover:underline">Türk - </Link>
            <Link className="pr-1 hover:underline">Nederlands - </Link>
            <Link className="pr-1 hover:underline">tiếng Việt - </Link>
            <Link className="pr-1 hover:underline">Indonesian - </Link>
            <Link className="pr-1 hover:underline">עברית </Link>
          </div>
          <div className="flex items-center text-white font-medium text-xs mb-4">
            <Link className="pr-1 hover:underline">AliExpress</Link>
            <span className="pr-1"> | </span>
            <Link className="pr-1 hover:underline">1688.com</Link>
            <span className="pr-1"> | </span>
            <Link className="pr-1 hover:underline">Tmall Taobao World</Link>
            <span className="pr-1"> | </span>
            <Link className="pr-1 hover:underline">Alipay</Link>
            <span className="pr-1"> | </span>
            <Link>Lazada</Link>
          </div>
          <div className="flex items-center text-white font-medium text-xs mb-4">
            <span className="pr-1 ">Browse Alphabetically: </span>
            <Link className="pr-1 hover:underline">Onetouch</Link>
            <span className="pr-1"> | </span>
            <Link className="pr-1 ">Showroom</Link>
            <span className="pr-1"> | </span>
            <Link className="pr-1 hover:underline">Country Search</Link>
            <span className="pr-1"> | </span>
            <Link className="pr-1 hover:underline">Suppliers</Link>
            <span className="pr-1 "> | </span>
            <Link className="hover:underline">Affiliate</Link>
          </div>
          <div className="flex items-center text-white font-medium text-xs mb-4">
            <Link className="px-1 hover:underline">Product Listing Policy</Link>{" "}
            -
            <Link className="px-1 hover:underline">
              Intellectual Property Protection
            </Link>{" "}
            -<Link className="px-1 hover:underline">Privacy Policy</Link> -
            <Link className="px-1 hover:underline">Terms of Use</Link> -
            <Link className="px-1 hover:underline">
              User Information Legal Enquiry Guide
            </Link>
          </div>
          <div className="flex items-center font-medium text-xs mb-4">
            <Link>
              <img src={footer1} alt="" className="w-7 h-7 mr-2 rounded-xl" />
            </Link>
            <Link className="text-white pr-1 hover:underline">©</Link>
            <span className="text-white">
              1999-2022 Alibaba.com. All rights reserved.
            </span>
            <Link className="px-2 flex items-center">
              <img src={footer2} alt="" className="w-7 h-7 mr-2 rounded-xl" />
              <span style={{ color: "#939393" }}>
                浙公网安备 33010002000092号
              </span>
            </Link>
            <Link style={{ color: "#939393" }}>浙B2-20120091-4</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
