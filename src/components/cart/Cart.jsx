import { BiMinusCircle, BiPlusCircle } from "react-icons/bi";
import { FiTrash2 } from "react-icons/fi";
import { useCart, useCartDispatcher } from "../../context/CartProvider";
import logoImage from "../../images/home.jpg";
const CartForm = ({ changeCart }) => {
  const { cart, totalPrice } = useCart();
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
    <div className="  text-white  border-[1px] border-[#417ed4] rounded-sm">
      <div className="z-20 top-20 ">
        <div className="flex justify-end ">
          <div className="flex flex-col justify-between w-[400px]  h-[540px] bg-[#282a2c] rounded-sm z-10 sticky top-0">
            <div className="flex flex-col">
              <div className="self-center text-[#417ed4] font-bold mt-4">
                Shopping Cart
              </div> 
              {cart.length === 0 ? (
                <div className="mt-10 ">
                  <div className="self-center flex flex-col">
                    <div className="self-center">
                      <p>Your cart is empty</p>
                    </div>
                    <div className="self-center mt-10">
                      <button
                        onClick={() => changeCart(false)}
                        className=" bg-[#417ed4] px-2 py-1 rounded-md"
                      >
                        CONTINUE SHOPPING
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  className="flex flex-col
              bg-[#1a1c1e] ml-2 rounded-sm mt-1 max-h-[380px] overflow-y-auto  scrollbar scrollbar-track-[#282a2c] scrollbar-thumb-[#64778a] scrollbar-track-rounded-sm  scrollbar-thumb-rounded-sm"
                >
                  <div className="mr-4">
                    {cart.map((item) => (
                      <div
                        className="flex flex-col
                    bg-[#1a1c1e] ml-2 rounded-sm mt-1 max-h-[380px] overflow-y-auto  scrollbar scrollbar-track-[#282a2c] scrollbar-thumb-[#64778a] scrollbar-track-rounded-sm  scrollbar-thumb-rounded-sm"
                      >
                        <div className="mr-4">
                          <div className="flex flex-col py-[25px]  border-b-2 border-[#282a2c]">
                            <div className="flex  ">
                            <div className="self-center mr-2">
                                      <button onClick={()=>RemoveHandler(item)}>

                                      <FiTrash2 className="text-[18px] my-1 text-red-500 "/>

                                      </button>
                                    </div>
                              <div className="mr-3">
                                <img
                                  src={item.image}
                                  alt=""
                                  className="w-[120px] h-[120px] rounded-sm"
                                />
                              </div>

                              <div className="self-center flex justify-between w-full">
                                <div className="">{item.title}</div>

                                <div className="flex justify-between ">
                                  <div className="flex flex-col self-center ">
                                    <div className="flex flex-col-reverse justify-center self-center">
                                      <div className="mx-1 self-center text-[#c6c7c7] flex ">
                                        <button className="self-center"
                                          onClick={() => DecreaseHandler(item)}
                                        >

                                          <BiMinusCircle className="text-[17px] "/>
                                        </button>
                                      </div>
                                      <div className="mx-1 self-center">
                                        {item.quantity}
                                      </div>
                                      <div className="mx-1 self-center text-[#417ed4] flex">
                                        <button>
                                          <div
                                            onClick={() =>
                                              IncreaseHandler(item)
                                            }
                                          >
                                            <BiPlusCircle className="text-[17px] "/>
                                          </div>
                                        </button>
                                      </div>
                                    </div>

                                   


                                  </div>
                                  <div className="text-[#c6c7c7] self-center ml-2 ">
                                    ${item.price * item.quantity}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div></div>
                </div>
              )}
            </div>
            <div className="mx-5 mb-5">
              <div className="my-4">Total Price : ${totalPrice}</div>
              <div className="flex justify-between ">
                <div>
                  <button className="px-3 py-1 rounded-md border border-[#417ed4] text-[#417ed4] ">
                    Clear{" "}
                  </button>
                </div>
                <div>
                  <button className="bg-[#417ed4] px-2 py-1 rounded-md">
                    Confrim
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartForm;
