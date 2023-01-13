import logoImage from "./b.png";
import { BiCartAlt, BiUser, BiSearch, BiSun ,BiMoon} from "react-icons/bi";
import {MdLanguage} from "react-icons/md"
import { Link} from "react-router-dom";
import CartForm from "../cart/Cart";
import { useState } from "react";
import { useCart } from "../../context/CartProvider";

import { useEffect } from "react";
import { products } from "../../Products";

const Navigation = () => {
  const {total} = useCart();

  const [change, setChange] = useState(false);
  const [show , setS]=useState(false);
const [Is , setIs]=useState(false)
const [filtered , setFilter]=useState(null);
const [search , setSearch]=useState('')
const SearchHandler=()=>{
const FilterP = products.filter(product=>product.title.toLowerCase().includes(search.toLowerCase()));
setFilter(FilterP);
console.log(filtered)
}

useEffect(()=>{
  const User =JSON.parse(localStorage.getItem("user"));
  setIs(User)
},[])
  return (
    <div className="  min-w-[613px] flex flex-col justify-center">
     {/* <div className="text-white z-50 absolute top-10 right-24 bg-[#282a2c] 
     border border-[#417ed4] p-4 py-3 rounded-sm">
     
     <div className="pr-16">
      {/* <div><h1>{Is.name}</h1></div> */}
      {/* <div className="my-1"><span> {Is.name}</span></div>
      <div><span>09362085417</span></div>
      <div className="my-1"><span> userPage</span></div>
      <div className="my-1 flex justify-end "><button className="bg-[#417ed4] px-2">
        Log out
        </button></div>
     </div>
     </div> */}

      <div className="flex justify-center 
      backdrop-filter backdrop-blur-md bg-opacity-40 bg-[#111111] z-10 sticky top-0  text-white pb-8 border-b border-[#353535]">
        <nav
          className="flex flex-col justify-center sticky top-0   text-white  border-[#353535] 
      w-full
       xl:w-[1200px] 
       2xl:w-[1200px]
       
       "
        >
          <div className="flex flex-row justify-between py-[10px]  ">
            <div className="flex flex-row ml-5 mr-[74px]">
              <button className="self-start p-1 z-10"><MdLanguage className="text-[18px] mt-[1px] text-white" /></button>
              <button className=" self-start mr-1 p-1 z-10  " onClick={(e)=>{e.preventDefault() ;
          setChange(!change)}}>
                {!change ? <BiSun className="text-[20px]"  />: <BiMoon className="text-[20px]" /> }
              </button>
            </div>
            <div className="flex flex-col mt-5">
              <div className="self-center mb-2 
              w-[222px] h-[34px]
              
              ">
                <Link to={"/"}>
                
                <img src={logoImage} alt="" />
                </Link>
              </div>
            </div>

            <div className="flex flex-row mr-5 ">
              {Is? 
              
              <div className="">
                <span className=" text-[22px] mx-5 flex">
                  <BiUser />
                </span>
              </div>
            :
            
              <div>
                <button className=" self-start mr-3 p-[1px] bg-[#131313] px-4 rounded-md border border-[#417ed4] text-[#417ed4] z-10  backdrop-filter backdrop-blur-md bg-opacity-50 font-semibold
                hidden 
                sm:block
                ">
                  <Link to={"/login"}>Login</Link>
                </button>
              </div>
            }

              <div >
                <span className=" text-[22px] mt-1 cursor-pointer" onMouseEnter={(e)=>{setS(true) ; e.preventDefault()} } 
                onMouseLeave={(e)=>{setS(false) ; e.preventDefault()}}
                
                >
<Link to={"/cart"}>

                  <BiCartAlt className="" />
                <div className="absolute top-[5px] right-[15px]
                 bg-[#417ed4] text-xs p-[5px] w-[15px] h-[15px] 
                 self-center flex justify-center
                 rounded-[50%] cursor-pointer">
            
                <span className="self-center" >{total}</span>
                  
                

                </div>

</Link>
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <input
            onChange={(e)=>setSearch(e.target.value)}
              type="text"
              className="w-[296px] h-[40px] sm:w-[570px] sm:h-[40px] 
              md:w-[570px] md:h-[40px] 
              lg:w-[570px] lg:h-[40px]
              xl:w-[500px] xl:h-[40px]

              rounded-l-lg bg-[#1a1c1e]
                outline-none text-[#b5b5b5] z-10  backdrop-filter backdrop-blur-md bg-opacity-60 "
              placeholder="search in Book Man"
            />
            <button
            onClick={SearchHandler}
            className=" bg-[#417ed4] px-4 rounded-r-lg h-10 backdrop-filter backdrop-blur-md bg-opacity-70">
              <BiSearch />
            </button>
          </div>
         
        </nav>
      </div>
      
      
      <div className="z-20   absolute right-0 top-[29px]  "
      >
      {show &&
      <div className="">

        <div 
         >
          <div
           onMouseEnter={(e)=>{setS(true) ; e.preventDefault()} } onMouseLeave={(e)=>{setS(false) ; e.preventDefault()}} 
          
          >

           <CartForm changeCart={setS}/>
          </div>
           
           
           </div>
      </div>
}
      {/* <Route path={"/cart"} component={CartForm}/> */}
      </div>
      <div className={search==='' && "hidden"  }>
      <div className="
    
      flex justify-center text-white absolute top-20  bg-[#111111] bg-opacity-90 w-full py-20">
    
        <div
            className="
            
         
          max-w-[1170px]  w-[80vw]   md:grid grid-cols-4  gap-y-[2rem] gap-x-[1rem]  self-center text-white

"
          >
            <div className=" overflow-y-auto max-h-[468px]  w-[80vw]   md:grid grid-cols-4  gap-y-[2rem] gap-x-[1rem]  self-center text-white           scrollbar scrollbar-track-[#282a2c] scrollbar-thumb-[#64778a] scrollbar-track-rounded-sm  scrollbar-thumb-rounded-sm">

            {filtered && filtered.map((product) => (
              <div
                className="flex justify-center  w-full
               
      "
                key={product.id}
              >
                <div className="flex flex-col h-[355px] justify-between bg-[#1a1c1e] min-w-[190px] pt-3 rounded-md self-center w-full ">
                  <div className="w-[185px] h-[270px] flex flex-col justify-center  self-center">
                    <div className=" self-center flex justify-center  flex-col">
                      <Link to={{pathname:`/${product.category}/${product.id}` , product:{product}}}   >
                        <img
                          src={product.image}
                          alt=""
                          className=" self-center  rounded-sm 
              w-[90vm]
              
              "
                        />
                      </Link>
                    </div>
                  </div>

                  <div >


                  <div className="ml-4 mt-5 text-lg">{product.title}</div>
                  <div className="ml-4">
                 
                  </div>

                  
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

export default Navigation;
