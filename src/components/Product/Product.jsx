
import { Link, withRouter } from "react-router-dom";
import Navigation from "../navigation/Navigation";
import { useCart, useCartDispatcher } from "../../context/CartProvider";
import { checkInCart } from "../../utils/chackInCart";
import {BiChevronsRight} from "react-icons/bi"
import {products } from "../../Products";
// import { BiChevronsRight } from "react-icons/bi";
const productss = products
const Product = ({location}) => {
  console.log(location)
  const dispatch = useCartDispatcher();

  
  const { cart } = useCart();

  const AddClickHandler = (product) => {
    dispatch({ type: "ADD-TO-CART", payload: product });
  };
  const productId =  location.pathname.match(/\d+/)[0];
  const product = productss.find(p=>p.id==productId)
  console.log(productId)

  return (
    <div className="bg-[#111111]">
      <div className=" z-10 sticky top-0  backdrop-filter backdrop-blur-md bg-opacity-70 ">
        <Navigation />
      </div>
      <div className="flex justify-center bg-[#111111] text-white">
        <div className="flex flex-col w-[1024px] mt-10 ">
        <div className="text-white text-[17px] mx-5 mt-5 mb-8 flex ">
          <Link to={"/"} className="text-[#717374] mr-1">
            Home
          </Link>
          <span className="self-center text-[#717374] mr-1 ">
            <BiChevronsRight />
          </span>
          <Link to={`/${product.category}`} className="text-[#717374] cursor-pointer mr-1">Kids</Link>
          <span className="self-center text-[#717374] mr-1 ">
            <BiChevronsRight />
          </span>
          <span className="font-semibold">{product.title}</span>
        </div>
          <div className="flex justify-center p-5 border-[2px] rounded-md  border-[#363636] bg-[#1a1c1e]">
            <div className="w-[250px] h-[380px] mx-10">
              <div>
                <img src={product.image} alt="" />
              </div>
              {checkInCart(cart , product) ?
              
              <div className="mt-2  flex justify-center">
                <button     disabled={true} className="border  border-[#417ed4] px-[90px] mt-3  rounded-md  py-[7px] text-[#417ed4]">
                  In Cart
                </button>
              </div>
            :

           <div className="mt-2 ml-5">
    <button 
    onClick={()=>AddClickHandler(product)}
    className="bg-[#417ed4] px-[90px] mt-3  rounded-md  py-[7px]"
>Add</button>
</div> 
            }
            </div>

            <div className="flex flex-col w-[650px] mt-16">
              <div>
                <h1 className="font-bold text-[25px]">{product.title}</h1>
              </div>
              <div className="text-[#d1d2d2]">author : {product.Author}</div>

             

              <div className="mt-20 border-b mb-5 pb-5 border-[#363636]">
                <div>
                  <h2 className="font-semibold text-[20px]">Describation</h2>
                </div>
                <div className="text-[#d1d2d2]">
                {product.describtion} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia optio vero magni aspernatur 
                ipsum, atque non sed dolore praesentium provident ullam debitis eligendi a. Libero aliquid at ratione veniam est.
                </div>
              </div>
              <div>
                <div className="font-semibold text-[18px]">Details</div>
                <div className="text-[#d1d2d2]">
                  <div>jdlbs = 50</div>
                  <div>jdlbs = 50</div>
                </div>
              </div>
            </div>
          </div>

          <div className="self-center mt-40 border bg-[#1a1c1e] border-[#363636] px-8 py-3 rounded-md">
            <div className="flex flex-col  self-center rounded-sm">
              <div className="flex justify-between">
                <p className="mt-2 ml-4 text-[20px]">
                  Here are some of our favorite {product.category} books
                </p>
                <Link to={`/${product.category}`}>
                <p className="text-[#417ed4]">view +25</p>
                
                </Link>
              </div>

              <div className="flex">
                <button className="overflow-clip">
                  {/* <AiFillLeftCircle/> */}
                  {/* className="text-[25px]
             text-[#417ed4]"
                /> */}
                </button>

                <div
                  className="flex overflow-x-scroll max-w-[1170px] w-[70vw] self-center
           scrollbar scrollbar-track-[#282a2c] scrollbar-thumb-[#64778a] scrollbar-track-rounded-sm  scrollbar-thumb-rounded-sm
          mt-2
            "
                >
                  {products.map((product) => (
                    <div className="min-w-[185px] h-[280px] flex flex-row justify-center ">
                      <Link to={{pathname:`/${product.category}/${product.id}` , product:{product}}} >
                      
                      <img
                        src={product.image}
                        alt=""
                        className=" w-[165px] self-center hover:z-10 hover:w-[170px] rounded-sm"
                      />
                      
                      </Link>
                    </div>
                  ))}
                </div>
                <button className="overflow-clip">
                  {/* <AiFillRightCircle
                  className="text-[25px]
             text-[#417ed4]"
                /> */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Product) ;
