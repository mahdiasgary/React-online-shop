import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";
import { FiTrash2 } from "react-icons/fi";

import { useState } from "react";
import logoImage from "../../images/b.png";
import { BiChevronsRight, BiUser, BiSearch, BiSun, BiMoon } from "react-icons/bi";
import { MdLanguage } from "react-icons/md";
import { Link } from "react-router-dom";
import { useCart, useCartDispatcher } from "../../context/CartProvider";

// import {HiLanguage} from "react-icons/hi"

const CartPage = () => {
  const { cart, totalPrice } = useCart();
  console.log(cart.length);
  const [change, setChange] = useState(false);
 
  const dispatch = useCartDispatcher();
  const RemoveHandler = (product) => {
    dispatch({ type: "REMOVE_PRODUCT", payload: product });
  };
  const DecreaseHandler = (product) => {
    dispatch({ type: "DECREASE_PRODUCT", payload: product });
  };

  const IncreaseHandler = (product) => {
    dispatch({ type: "ADD-TO-CART", payload: product });
  };

  return (
    <div className="bg-[#111111] text-white h-[1500px]">
      <div
        className=" z-10 border-b
border-[#353535] sticky top-0  backdrop-filter backdrop-blur-md bg-opacity-80 "
      >
        <div className="flex flex-row justify-between py-[10px]  ">
          <div className="flex flex-row ml-5 mr-[74px]">
            <button className="self-start p-1 z-10">
              <MdLanguage className="text-[18px] mt-[1px] text-white" />
            </button>
            <button
              className=" self-start mr-1 p-1 z-10  "
              onClick={(e) => {
                e.preventDefault();
                setChange(!change);
              }}
            >
              {!change ? (
                <BiSun className="text-[20px]" />
              ) : (
                <BiMoon className="text-[20px]" />
              )}
            </button>
          </div>
          <div className="flex flex-col mt-5">
            <div
              className="self-center mb-2 
              w-[222px] h-[34px]
              
              "
            >
              <Link to={"/"}>
                <img src={logoImage} alt="" />
              </Link>
            </div>
          </div>

          <div className="flex flex-row mr-5 ">
            <div>
              <button
                className=" self-start  p-[1px] bg-[#131313] px-4 rounded-md border border-[#417ed4] text-[#417ed4] z-10  backdrop-filter backdrop-blur-md bg-opacity-50 font-semibold
                hidden 
                sm:block
                "
              >
                <Link to={"/login"}>Login</Link>
              </button>
            </div>
            <div className="">
              <span className=" text-[22px] mx-5 flex">
                <BiUser />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="my-6 ml-16 ">
      <div className="text-white mx-5 mt-5 mb-8 flex ">
          <Link to={"/"} className="text-[#717374] mr-1 mt-2">
            Home
          </Link>
          <span className="self-center text-[#717374] mr-1 mt-[4px] ">
            <BiChevronsRight />
          </span>
          <span className="text-[25px]">Your Shopping Cart</span>
        </div>
       
      </div>
      <div className="flex justify-center">
        <div className="w-full">
          <div className="flex justify-center ">
            <div className="w-[65%] bg-[#1a1c1e] p-5 rounded-l-md">
              <div className="flex flex-col">
                <div className="flex  justify-between mr-5 border-b ">
                  <div className="text-[#c6c7c7]">
                    <p>Items</p>
                  </div>
                </div>
                <div
                  className="max-h-[500px] overflow-y-scroll pr-16
                           scrollbar scrollbar-track-[#282a2c] scrollbar-thumb-[#64778a] scrollbar-track-rounded-sm  scrollbar-thumb-rounded-sm
                           "
                >
                  {cart.length === 0 ? (
                    <div className="flex flex-col">
                      <div className="self-center mt-4 text-[#417ed4] text-[18px] font-semibold">
                        Your Cart empty
                      </div>
                      <div className="self-center mt-8">
                        <div>
                          <Link to={"/"}>
                            <button className=" bg-[#417ed4] px-2 py-1 rounded-md">
                              CONTINUE SHOPPING
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ) : (
                    cart.map((item) => (
                      <div className="flex justify-between py-8 border-b-2 border-[#353535]">
                        <div className="flex">
                          <div className="w-[170px] mr-4 ">
                            <img src={item.image} alt="" />
                          </div>
                          <div className="flex flex-col mt-4">
                            <div className="mb-2 text-white text-[20px]">
                              <p className="font-bold">{item.title}</p>
                            </div>
                            <div className="text-[#c6c7c7]">
                              <p>{item.Author}</p>
                            </div>
                            <div className="text-[#c6c7c7]">
                              <p>Company</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-center mt-4">
                          <div className="flex flex-col h-[62px] mr-3 border border-[#c6c7c7] rounded-md px-2 py-[1px]">
                            <div
                              className="self-center text-[#417ed4] text-[18px]"
                              onClick={() => IncreaseHandler(item)}
                            >
                              <BsCaretUpFill />{" "}
                            </div>
                            <div className="self-center">{item.quantity}</div>
                            <div
                              className="self-center text-[#c6c7c7] text-[18px]"
                              onClick={() => DecreaseHandler(item)}
                            >
                              {" "}
                              <BsCaretDownFill />{" "}
                            </div>
                          </div>
                          <div className="mr-3 mt-3">
                            <p>${item.price * item.quantity}</p>
                          </div>
                          <div
                            className="mt-4 text-red-500 text-[20px] "
                            onClick={() => RemoveHandler(item)}
                          >
                            {" "}
                            <FiTrash2 className="self-center" />{" "}
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
            <div
              className="flex 
            h-[350px] ml-1
            justify-center pl-8 border-l-2 bg-[#1a1c1e] p-5 rounded-r-md border-[#353535]"
            >
              <div className="flex flex-col w-64 justify-between">
                <div>
                  <div className="text-[20px] mb-6">Total</div>
                  <div>
                    <div className="flex">
                      {/* <p>erfef</p>
    <p>1520$</p> */}
                      <p>Total price : </p>{" "}
                      <p className="ml-2 text-[20px] font-semibold text-[#417ed4]">
                        {" "}
                        ${totalPrice}{" "}
                      </p>
                    </div>
                    <div className="flex">
                      {/* <p>erfef</p>
    <p>1520$</p> */}
                    </div>
                  </div>
                </div>

                <div>
                  <div></div>
                  <div className="flex justify-center">
                    <button className="bg-[#417ed4] px-20 py-2 rounded-md">
                      Check Out
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
