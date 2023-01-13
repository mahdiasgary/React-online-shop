
import { Link } from "react-router-dom";
import { BiChevronsRight ,BiCartAlt} from "react-icons/bi";
import Navigation from "../navigation/Navigation";
import { useCart, useCartDispatcher } from "../../context/CartProvider";
import { checkInCart } from "../../utils/chackInCart";
import {  toast } from 'react-toastify';



const ProductList = ({ products }) => {
  const dispatch = useCartDispatcher();
  const { cart } = useCart();
  const AddClickHandler = (product) => {
    dispatch({ type: "ADD-TO-CART", payload: product });
    toast(`${product.title} added to Cart` ,{ autoClose: 1800  ,position:"top-left" });

  };
 

  return (
    <div className="bg-[#111111] flex flex-col">
      <div className=" z-10 sticky top-0  backdrop-filter backdrop-blur-md bg-opacity-80 ">
        <Navigation />
      </div>
      <div className="flex flex-col w-[80vm] self-center">
        <div className="text-white mx-5 mt-5 mb-8 flex ">
          <Link to={"/"} className="text-[#717374] mr-1">
            Home
          </Link>
          <span className="self-center text-[#717374] mr-1 ">
            <BiChevronsRight />
          </span>
          <Link>Kids</Link>
        </div>

        <div className="self-center w-full">
          <div
            className="
         
          max-w-[1170px]  w-[80vw]   md:grid grid-cols-a  gap-y-[2rem] gap-x-[1rem]  self-center text-white

"
          >
            
            {products.map((product) => (
              <div
                className="flex justify-center  w-full
      
      "
                key={product.id}
              >
                {product
                ?
                <div className="flex flex-col h-[436px] justify-between bg-[#1a1c1e] min-w-[190px] pt-3 rounded-md self-center w-full ">
                  <div className="w-[185px] h-[270px] flex flex-col justify-center  self-center">
                    <div className=" self-center flex justify-center  flex-col">
                      <Link to={{pathname:`/${product.category}/${product.id}` , product:{product}}}  >
                        <img
                          src={product.image}
                          alt=""
                          className="   rounded-sm 
          
              w-[185px] self-center hover:z-10 hover:w-[180px] 
                          hover:-transition  duration-200
              "
                        />
                      </Link>
                    </div>
                  </div>

                  <div className="self-center flex flex-col justify-center" >


                  <div className="ml-4 mt-5 text-lg self-center w-[180px]">
                    <div className="flex justify-center ">
                    {product.title}

                    </div>
                    </div>
                  <div className="ml-4 self-center">
                    <div className="text-[#c6c7c7] text-sm">{product.Author}</div>
                  </div>
                  



                  <div className="flex justify-between mx-3 w-[190px] mb-3">
                    <div className="self-end text-[#417ed4] font-semibold">${product.price}</div>
                    <div className="flex
                    
                    ">
                      {!checkInCart(cart , product) ? (
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            AddClickHandler(product);
                            console.log(product.id)
                          }}
                          className="bg-[#417ed4] flex px-2 mt-3  rounded-md text-sm py-[5px]
                          transition ease-in-out delay-75  hover:border-[#335d9a] hover:-translate-y-[2px] duration-200 "
                       
                       >
                        <div className="self-center text-[18px]"><BiCartAlt /></div>
                        <div> Add to Cart</div>
                         
                        </button>
                      ) : (
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            AddClickHandler(product);
                          }}
                          className="border border-[#417ed4] px-5 mt-3  rounded-md text-sm py-[3px] text-[#417ed4] "
                          disabled={true}
                        >
                          In Cart
                        </button>
                      )}
                    </div>
                 

                  </div>

                  </div>
                </div>
              :
              "e"
              }
              </div>
            ))}
            
            
          </div>

          {/* <div
            className=" 
           
          self-center text-white
          
          w-full
          grid grid-cols-1 
          lg:max-w-[1170px] lg:w-[80vw] lg:grid lg:grid-cols-a lg:gap-y-[2rem] lg:gap-x-[1.6rem] 
"
          >
            {product.map((product) => (
              <div
                className="flex  justify-center max-w-[80vm]
                            md:hidden
      "
              >
                <div
                  className="flex flex-col  justify-center bg-[#1a1c1e] rounded-md self-center
              w-full
              "
                >
                  <div className="flex">
                    <div className="w-[167px] flex flex-row justify-center ml-4 mt-4 ">
                      <div className="flex flex-row justify-center">
                        <img
                          src={product.image}
                          alt=""
                          className=" self-center  rounded-sm
                      w-[134px]
                      sm-[167px]
                      
              
              "
                        />
                      </div>
                    </div>

                    <div className="flex flex-col mt-6 ">
                      <div className="ml-4 text-lg mb-5">lkndfinon</div>
                      <div className="ml-4 mb-3">
                        <div className="text-[#c6c7c7]">
                          kbjdkg kjebwef wjff'rn j
                        </div>
                      </div>
                      <div className="flex justify-between mx-3 mb-3 ">
                        <div className="flex self-center">1300$</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    {!cart.find((p) => p.id ===product.id) ? 
                    (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          AddClickHandler(product);
                        }}
                        className="bg-[#417ed4] px-28 mt-3  rounded-lg text-sm py-[6px] 
                          mb-3 w-full
                          sm:px-52
                          md:px-62 md:py-[8px]
                          lg:px-5 lg:p-[4px]"
                      >
                        add
                      </button>
                    ) : (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          AddClickHandler(product);
                        }}
                        className="border border-[#417ed4] px-28 mt-3  rounded-lg text-sm py-[6px] 
                          mb-3 w-full
                          sm:px-52
                          md:px-62 md:py-[8px]
                          lg:px-5 lg:p-[4px]
                          text-[#417ed4]
        
        
                          "
                        disabled={true}
                      >
                        In Cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
