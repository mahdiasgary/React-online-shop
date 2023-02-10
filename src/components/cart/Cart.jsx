import { BiMinusCircle, BiPlusCircle } from "react-icons/bi";
import { FiTrash2 } from "react-icons/fi";
import { useCart, useCartDispatcher } from "../../context/CartProvider";
// import logoImage from "../../images/home.jpg";
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
    <div className="  dark:text-white text-Darktext border-[1px] border-btnMain shadow-md rounded-sm ">
      <div className="z-20   ">
        <div className="flex justify-end ">
          <div className="flex flex-col justify-between w-[400px]  h-[540px] dark:bg-[#282a2c] bg-lightscreen  rounded-sm z-10 sticky top-0 ">
            <div className="flex flex-col">
              <div className="self-center text-btnMain text-[18px] font-bold mt-4">
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
                        className=" bg-btnMain px-5 py-4 hover:text-[18px] duration-300 rounded-md  text-white "
                      >
                        CONTINUE SHOPPING
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  className="flex flex-col
              dark:bg-Darksecondcolor ml-2 rounded-sm mt-1 max-h-[380px] overflow-y-auto  scrollbar scrollbar-track-[#282a2c] scrollbar-thumb-[#64778a] scrollbar-track-rounded-sm  scrollbar-thumb-rounded-sm"
                >
                  <div className="mr-4">
                    {cart.map((item) => (
                      <div
                        className="flex flex-col
                    dark:bg-Darksecondcolor ml-2 rounded-sm mt-1 max-h-[380px] overflow-y-auto  scrollbar scrollbar-track-[#282a2c] scrollbar-thumb-[#64778a] scrollbar-track-rounded-sm  scrollbar-thumb-rounded-sm"
                      >
                        <div className="mr-4">
                          <div className="flex flex-col py-[25px]  border-b-2 dark:border-[#282a2c]">
                            <div className="flex  ">
                            <div className="self-center mr-2">
                                      <button onClick={()=>RemoveHandler(item)}>

                                      <FiTrash2 className="text-[18px] my-1 text-red-500  "/>

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
                                      <div className="mx-1 self-center text-Darksecondtext dark:text-[#c6c7c7] flex ">
                                        <button className="self-center"
                                          onClick={() => DecreaseHandler(item)}
                                        >

                                          <BiMinusCircle className="text-[17px] "/>
                                        </button>
                                      </div>
                                      <div className="mx-1 self-center">
                                        {item.quantity}
                                      </div>
                                      <div className="mx-1 self-center text-btnMain flex">
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
                                  <div className="dark:text-[#c6c7c7]  self-center ml-2 ">
                                    ${item.price.toFixed(2) * item.quantity}
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
              <div className="my-4 font-semibold">Total Price : ${totalPrice!==null && totalPrice.toFixed(2)}</div>
              <div className="flex justify-between ">
                <div>
                  <button className="px-3 py-[2px] text-sm rounded-md border border-btnMain text-btnMain "
                  onClick={(e)=>{ RemoveHandler(cart) ; e.stopPropagation()} }
                  >
                    Clear
                  </button>
                </div>
                <div className="w-8 mx-10 h-7">
                  <button className="bg-btnMain px-2 py-1 rounded-md text-white hover:px-3 hover:py-2 hover:rounded-lg duration-300">
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
