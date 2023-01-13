import home from "../../images/home.jpg";
import home2 from "../../images/home2.jpg";
import home3 from "../../images/home3.png";
import { Link, NavLink } from "react-router-dom";
import { product } from "../ProductList/ProductList";

import "./app.css";
import { AiFillRightCircle, AiFillLeftCircle } from "react-icons/ai";
import Navigation from "../navigation/Navigation";
const Body = ({ products }) => {
  return (
    <div className="bg-[#111111]">
      <div className=" z-10 sticky top-0  backdrop-filter backdrop-blur-md bg-opacity-80 ">
        <Navigation />
      </div>

      <div className="text-white">
        <div className="flex justify-center">
          <div className="flex flex-col self-center bg-[#111111] text-white w-full  ">
            <div className="flex justify-center">
              <div className="mt-4 mb-2 ml-2">
                <ul className="flex mb-4">



                  <NavLink to={"/kids"} >
                    <li className="border border-[#717374] px-4 
                     rounded-md mr-2  hover:bg-[#335d9a] transition ease-in-out delay-75  hover:border-[#335d9a] hover:-translate-y-[1px] duration-200">
                      <button>kids </button>
                    </li>
                  </NavLink>
                  <NavLink to={"/comedy"}>
                    <li className="border border-[#717374] px-4  rounded-md mr-2 hover:bg-[#335d9a] hover:border-[#335d9a] transition ease-in-out delay-75 hover:-translate-y-[1px] duration-200 ">
                      <button>comedy </button>
                    </li>
                  </NavLink>
                  <NavLink to={"/love"}>
                    <li className="border border-[#717374] px-4  rounded-md mr-2 hover:bg-[#335d9a] hover:border-[#335d9a] transition ease-in-out delay-75 hover:-translate-y-[1px] duration-200 ">
                      <button>love </button>
                    </li>
                  </NavLink>
                  <NavLink to={"/cooking"}>
                    <li className="border border-[#717374] px-4  rounded-md mr-2 hover:bg-[#335d9a] hover:border-[#335d9a] transition ease-in-out delay-75 hover:-translate-y-[1px] duration-200 ">
                      <button>cooking </button>
                    </li>
                  </NavLink>
                  <NavLink to={"/classic"}>
                    <li className="border border-[#717374] px-4  rounded-md mr-2 hover:bg-[#335d9a] hover:border-[#335d9a] transition ease-in-out delay-75 hover:-translate-y-[1px] duration-200 ">
                      <button>classic </button>
                    </li>
                  </NavLink>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col  self-center ">
            <div>
              <Link to={"/kids"}>
              
              <img src={home} alt="" className="w-[1024px]"/>
              </Link>
            </div>

            <div className="flex justify-center ">
              <div>
              <Link to={"/kids"}>
              
                <img src={home2} alt="" className="h-[200px] w-[595px] m-1" />
              </Link>
              </div>
              <div>
              <Link to={"/kids"}>
              
                <img src={home3} alt="" className="h-[200px] w-[420px] m-1" />
              </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col self-center   mt-10  ">
            <div className="flex bg-[#1a1c1e] self-center "></div>
          </div>

          <div className="flex flex-col self-center   mt-10 ">
            <div className="flex flex-col  bg-[#1a1c1e] self-center rounded-sm">
              <div className="flex justify-between">
                <p className="mt-2 ml-4 text-[20px]">Kids</p>
                <Link to={"/kids"}>
                  <p className=" text-[#417ed4] p-2 ">view all</p>
                </Link>
              </div>

              <div className="flex">
                {/* <button className="overflow-clip">
                  <AiFillLeftCircle
                    className="text-[25px]
             text-[#417ed4]"
                  />
                </button> */}

                <div
                  className="flex overflow-x-scroll max-w-[1170px] w-[70vw] self-center
           scrollbar scrollbar-track-[#282a2c] scrollbar-thumb-[#64778a] scrollbar-track-rounded-sm  scrollbar-thumb-rounded-sm
          mt-2
            "
                >
                  {products.map((p) => (
                    <div className="min-w-[185px] h-[280px] flex flex-row justify-center mb-4 ">
                      <Link
                        to={`/${p.category}/${p.id}`}
                        className="self-center mb-4"
                      >
                        <img
                          src={p.image}
                          alt=""
                          className=" w-[165px] self-center hover:z-10 hover:w-[170px] rounded-sm
                          hover:-transition  duration-200
         
                          "
                        />
                      </Link>
                    </div>
                  ))}
                </div>
                {/* <button className="overflow-clip">
                  <AiFillRightCircle
                    className="text-[25px]
             text-[#417ed4]"
                  />
                </button> */}
              </div>
            </div>
          </div>

          {/* <div className="flex flex-col self-center   mt-10 ">
            <div className="flex flex-col  bg-[#1a1c1e] self-center rounded-sm">
              <div className="flex justify-between">
                <p className="mt-2 ml-4 text-[20px]">Love</p>
                <Link to={"/love"}>
                  <p className=" text-[#417ed4] p-2 ">view all</p>
                </Link>
              </div>

              <div className="flex">
                <button className="overflow-clip">
                  <AiFillLeftCircle
                    className="text-[25px]
             text-[#417ed4]"
                  />
                </button>

                <div
                  className="flex overflow-x-scroll max-w-[1170px] w-[70vw] self-center
           scrollbar scrollbar-track-[#282a2c] scrollbar-thumb-[#64778a] scrollbar-track-rounded-sm  scrollbar-thumb-rounded-sm
          mt-2
            "
                >
                  {products.map((p) => (
                    <div className="min-w-[185px] h-[280px] flex flex-row justify-center mb-4 ">
                      <Link
                        to={`/${p.category}/${p.id}`}
                        className="self-center mb-4"
                      >
                        <img
                          src={p.image}
                          alt=""
                          className=" w-[165px] self-center hover:z-10 hover:w-[170px] rounded-sm
                          hover:-transition  duration-200"
                        />
                      </Link>
                    </div>
                  ))}
                </div>
                <button className="overflow-clip">
                  <AiFillRightCircle
                    className="text-[25px]
             text-[#417ed4]"
                  />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col self-center   mt-10 ">
            <div className="flex flex-col  bg-[#1a1c1e] self-center rounded-sm">
              <div className="flex justify-between">
                <p className="mt-2 ml-4 text-[20px]">Comdey</p>
                <Link to={"/comedy"}>
                  <p className=" text-[#417ed4] p-2 ">view all</p>
                </Link>
              </div>

              <div className="flex">
                <button className="overflow-clip">
                  <AiFillLeftCircle
                    className="text-[25px]
             text-[#417ed4]"
                  />
                </button>

                <div
                  className="flex overflow-x-scroll max-w-[1170px] w-[70vw] self-center
           scrollbar scrollbar-track-[#282a2c] scrollbar-thumb-[#64778a] scrollbar-track-rounded-sm  scrollbar-thumb-rounded-sm
          mt-2
            "
                >
                  {products.map((p) => (
                    <div className="min-w-[185px] h-[280px] flex flex-row justify-center mb-4 ">
                      <Link
                        to={`/${p.category}/${p.id}`}
                        className="self-center mb-4"
                      >
                        <img
                          src={p.image}
                          alt=""
                          className=" w-[165px] self-center hover:z-10 hover:w-[170px] rounded-sm
                          hover:-transition  duration-200"
                        />
                      </Link>
                    </div>
                  ))}
                </div>
                <button className="overflow-clip">
                  <AiFillRightCircle
                    className="text-[25px]
             text-[#417ed4]"
                  />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col self-center   mt-10 ">
            <div className="flex flex-col  bg-[#1a1c1e] self-center rounded-sm">
              <div className="flex justify-between">
                <p className="mt-2 ml-4 text-[20px]">Classic</p>
                <Link to={"/classic"}>
                  <p className=" text-[#417ed4] p-2 ">view all</p>
                </Link>
              </div>

              <div className="flex">
                <button className="overflow-clip">
                  <AiFillLeftCircle
                    className="text-[25px]
             text-[#417ed4]"
                  />
                </button>

                <div
                  className="flex overflow-x-scroll max-w-[1170px] w-[70vw] self-center
           scrollbar scrollbar-track-[#282a2c] scrollbar-thumb-[#64778a] scrollbar-track-rounded-sm  scrollbar-thumb-rounded-sm
          mt-2
            "
                >
                  {products.map((p) => (
                    <div className="min-w-[185px] h-[280px] flex flex-row justify-center mb-4 ">
                      <Link
                        to={`/${p.category}/${p.id}`}
                        className="self-center mb-4"
                      >
                        <img
                          src={p.image}
                          alt=""
                          className=" w-[165px] self-center hover:z-10 hover:w-[170px] rounded-sm
                          hover:-transition  duration-200"
                        />
                      </Link>
                    </div>
                  ))}
                </div>
                <button className="overflow-clip">
                  <AiFillRightCircle
                    className="text-[25px]
             text-[#417ed4]"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col self-center   mt-10 ">
            <div className="flex flex-col  bg-[#1a1c1e] self-center rounded-sm">
              <div className="flex justify-between">
                <p className="mt-2 ml-4 text-[20px]">Cooking</p>
                <Link to={"/cooking"}>
                  <p className=" text-[#417ed4] p-2 ">view all</p>
                </Link>
              </div>

              <div className="flex">
                <button className="overflow-clip">
                  <AiFillLeftCircle
                    className="text-[25px]
             text-[#417ed4]"
                  />
                </button>

                <div
                  className="flex overflow-x-scroll max-w-[1170px] w-[70vw] self-center
           scrollbar scrollbar-track-[#282a2c] scrollbar-thumb-[#64778a] scrollbar-track-rounded-sm  scrollbar-thumb-rounded-sm
          mt-2
            "
                >
                  {products.map((p) => (
                    <div className="min-w-[185px] h-[280px] flex flex-row justify-center mb-4 ">
                      <Link
                        to={`/${p.category}/${p.id}`}
                        className="self-center mb-4"
                      >
                        <img
                          src={p.image}
                          alt=""
                          className=" w-[165px] self-center hover:z-10 hover:w-[170px] rounded-sm
                          hover:-transition  duration-200"
                        />
                      </Link>
                    </div>
                  ))}
                </div>
                <button className="overflow-clip">
                  <AiFillRightCircle
                    className="text-[25px]
             text-[#417ed4]"
                  />
                </button>
              </div>
            </div>
          </div> */}
        </div>

      </div>
    </div>
  );
};

export default Body;
