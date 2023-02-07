import logoImage from "./b.png";
import { MdMenu} from "react-icons/md";
import { MdMenuOpen} from "react-icons/md";

import { BiCartAlt, BiUser, BiSearch, BiSun, BiMoon } from "react-icons/bi";
import { MdLanguage } from "react-icons/md";
import { Link, withRouter } from "react-router-dom";
import CartForm from "../cart/Cart";
import { useState } from "react";
import { useCart } from "../../context/CartProvider";

import { useEffect } from "react";
import { products } from "../../Products";

const Navigation = ({ history ,setTheme,theme ,menu ,setMenu}) => {
  const { total } = useCart();

  const [change, setChange] = useState(false);
  const [show, setS] = useState(false);
 
  const [Is, setIs] = useState(false);
  const [filtered, setFilter] = useState(null);
  const [search, setSearch] = useState("");
  const [showSearchItems, setshowSearchItems] = useState(false);
  const SearchHandler = () => {
    const FilterP = products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilter(FilterP);
    console.log(filtered);
    setshowSearchItems(true);
  };
  const [showCart, setShowCart] = useState(false);
  const [e,ee]=useState(false);
  // const [menu , setMenu]=useState(false)
  const logOut = (e) => {
    localStorage.removeItem("user");
    e.preventDefault();
    setIs(null);
    setShowCart(false);
  };

  useEffect(() => {
    const User = JSON.parse(localStorage.getItem("user"));
    setIs(User);
    setshowSearchItems(false);
  }, []);
  return (
    <div className=" flex flex-col justify-center ">
      {showCart && (
        <div
          className=" z-20 absolute top-10 right-24 dark:bg-[#282a2c] backdrop-blur-md dark:text-white text-black hover:rounded-md hover:p-5 bg-Darksecondtext bg-opacity-20 duration-300 
     border border-btnMain p-4 py-3 rounded-sm"
        >
          <div className="pr-16 ">
            <div>
              <h1 className="font-semibold text-btnbg-btnMain">User:</h1>
            </div>
            <div className="my-1 font-semibold ">
              <span> {Is.name ? Is.name : Is.email}</span>
            </div>
            <div className="text-[#717374] font-semibold">
              <span>09362085417</span>
            </div>
            {/* <div className="my-1"><span> userPage</span></div> */}
            <div className="my-1 mt-5   ">
              <button
                onClick={(e) => logOut(e)}
                className="text-btnbg-btnMain border border-btnMain hover:bg-btnMain hover:text-white text-btnMain hover:rounded-md hover:px-4 hover:py-1 duration-300 px-3 rounded-sm "
              >
                Log out
              </button>
            </div>
          </div>
        </div>
      )}


      <div
        className="flex justify-center 
         backdrop-blur-md dark:bg-opacity-20 dark:bg-Darkscreen z-10 sticky top-0  text-white pb-8 dark:border-b bg-opacity-60 bg-lightscreen shadow-md dark:border-[#353535]">

        <nav
          className="flex flex-col justify-center sticky top-0     border-[#353535] 
      w-full
      
       
       "
        >
          <div className="sm:flex flex-row justify-between text-thertext dark:text-white mt-5 mx-10  hidden ">
            <div className="flex flex-row text-[22px] self-center ">
              <div className="mx-5 pb-2 ">
             {theme==="ligthTheme" 
             ?
             <span
             onClick={(e)=>{e.preventDefault();setTheme("darkTheme")}}
             className="cursor-pointer "><BiMoon className="inline"/></span> 
            :
            <span
            onClick={(e)=>{e.preventDefault();setTheme("ligthTheme")}}
            className="cursor-pointer "><BiSun className="inline"/></span> }
              </div>
              <div>
                {e ?<span className="text-[15px] font-semibold">En</span> :<span className="text-[15px] font-semibold">فا</span>  }
                
                <MdLanguage className="inline"/>
              </div>
          

            </div>
          
            <div className="flex flex-row ">
             
              <div >
                <div
                  className="text-thertext mt-2 mx-4 self-center dark:text-white  text-[25px] cursor-pointer "
                  onMouseEnter={(e) => {
                    setS(true);
                    e.preventDefault();
                  }}
                  onMouseLeave={(e) => {
                    setS(false);
                    e.preventDefault();
                  }}
                >
                  <Link to={"/cart"}>
                    <BiCartAlt className="" />
                    <div
                      className={`relative ${e ?"top-[-30px] left-[15px]" : "top-[-30px] left-[7px]"}
                      
                 bg-btnMain text-xs p-[5px]  w-[15px] h-[15px]
                 self-center flex justify-center
                 rounded-[50%] cursor-pointer`}
                    >
                      <span className=" self-center text-white">{total ? total : 0}</span>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="flex flex-row ">
              {Is ? (
                <div className="">
                  <span
                    className=" text-[22px] mx-5 flex cursor-pointer"
                    onClick={(e) => {
                      setShowCart(!showCart);
                      e.preventDefault();
                    }}
                  >
                    <BiUser />
                  </span>
                </div>
              ) : (
                <div className=" w-32 ">
                  <button
                    className="text-[17px] self-start py-[6px]
                     text-white px-7 rounded-md border border-btnMain hover:px-9 hover:py-2   duration-300 text-btn bg-btnMain z-10
                      backdrop-filter backdrop-blur-md  font-semibold
              
                
                "
                  >
                    <Link to={"/login"}>Login</Link>
                  </button>
                </div>
              )}
            </div>


            </div>

          </div>

<div className="flex justify-between sm:justify-center " > 
 
              <div
                className=" mx-4 mt-4  sm:m-0 cursor-pointer relative top-[-10px]"
              >
                <img
                  src={logoImage}
                  alt=""
                  onClick={(e) => {
                    history.push("/");
                    setshowSearchItems(false);
                    setSearch(null);
                  }}
                />
              </div>
              
              <div
              onClick={(e)=>{ e.preventDefault();setMenu(!menu)}}
              className={`dark:text-white sm:hidden self-center cursor-pointer text-thertext mx-4 text-[25px]`}>
                {menu ?<MdMenu/> : <MdMenuOpen/>}
              </div>

            
            </div>


          <div className="flex justify-center rounded-lg ">
            
            <input
              onChange={(e) => {
                setSearch(e.target.value);
                e.preventDefault();
              }}
              type="text"
              value={search}
              className={`w-[296px] h-[40px] sm:w-[570px] sm:h-[40px] 
              md:w-[570px] md:h-[40px] 
              lg:w-[570px] lg:h-[40px]
              xl:w-[500px] xl:h-[40px]
            
              px-3

             ${e ? "rounded-l-lg" : "rounded-r-lg"}  dark:bg-Darksecondcolor bg-secondtext 
                outline-none text-black dark:text-white  z-10  backdrop-filter backdrop-blur-md bg-opacity-30 dark:bg-opacity-50 `}
              placeholder="search in Book Man"
            />
            <button
              onClick={(e) => {
                SearchHandler();
                e.preventDefault();
              }}
              className={` bg-btnMain px-4 ${!e ? "rounded-l-lg" : "rounded-r-lg"} h-10 backdrop-filter backdrop-blur-md bg-opacity-70`}
            >
              <BiSearch />
            </button>
          </div>
        </nav>
      </div>

      <div className={`z-20   absolute right-0  top-[48px] origin-right duration-500 ${!show && "scale-x-0  text-0 my-5" }   `}>
        {/* {show && (
          <div className=""> */}
            <div>
              <div
                onMouseEnter={(e) => {
                  setS(true);
                  e.preventDefault();
                }}
                onMouseLeave={(e) => {
                  setS(false);
                  e.preventDefault();
                }}
              >
                <CartForm changeCart={setS} />
              </div>
            </div>
          {/* </div>
        )} */}
        {/* <Route path={"/cart"} component={CartForm}/> */}
      </div>


<div className={` ${!showSearchItems && "hidden"}     flex justify-center  absolute  top-33  w-full pm-20"
`}>

</div>

      <div className={!showSearchItems && "hidden"}>
        <div
          className="
    
      flex justify-center  absolute top-33  w-full pm-20 backdrop-blur-md"
        >
          <div
            className="
          max-w-[1170px]  w-[80vw]   md:grid grid-cols-4  gap-y-[2rem] gap-x-[1rem]  self-center "
          >
            <div className=" 
            text-black dark:text-white
            overflow-y-auto max-h-[468px]  w-[80vw]   md:grid grid-cols-4  gap-y-[2rem] gap-x-[1rem]  self-center           
             scrollbar dark:scrollbar-track-[#282a2c] scrollbar-track-secondtext dark:scrollbar-thumb-[#64778a] scrollbar-thumb-Darksecondtext scrollbar-track-rounded-sm  scrollbar-thumb-rounded-sm">
              {filtered &&
                filtered.map((product) => (
                  <div
                    className="flex justify-center  w-full pt-5 
               
      "
                    key={product.id}
                  >
                    <div className="flex flex-col h-[355px] justify-between bg-white bg-opacity-40 dark:bg-Darksecondcolor min-w-[190px] pt-3 rounded-md self-center w-full ">
                      <div className="w-[185px] h-[270px] flex flex-col justify-center  self-center">
                        <div className=" self-center flex justify-center  flex-col">
                          {/* <Link to={}   > */}
                          <img
                            onClick={(e) => {
                              e.preventDefault();
                              history.push({
                                pathname: `/${product.category}/${product.id}`,
                                product: { product },
                              });
                              setshowSearchItems(false);
                            }}
                            src={product.image}
                            alt=""
                            className=" self-center  rounded-sm  cursor-pointer w-[90vm]
              
              "
                          />
                          {/* </Link> */}
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-center  mb-3 text-lg">{product.title}</div>
                        <div className="ml-4"></div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Navigation);
