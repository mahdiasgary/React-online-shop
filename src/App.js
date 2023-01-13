import { BrowserRouter, Route, Switch } from "react-router-dom";
import CartForm from "./components/cart/Cart";
import Body from "./components/home/Home";
import LoginForm from "./components/login/LoginForm";
import ProductList from "./components/ProductList/ProductList";
import SingUpForm from "./components/singup/SingUpForm";
import Product from "./components/Product/Product";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "./ScrollToTop";
import CartProvider from "./context/CartProvider";
import "react-toastify/dist/ReactToastify.css";
import CartPage from "./pages/cart/CartPage";
import AuthProvider from "./context/AuthProvider";
import { products } from "./Products";
import Footer from "./components/footer/Footer";
console.log(products)
function App() {
  // const [products, setProducts] = useState([]);
  // useEffect(()=>{
  //   const getProduct =async()=>{
  //     try {
  //       const {data}= await http.get("/product");
  //       setProducts(data)
  //       console.log(products)
  //     } catch (error) {
  //      console.log(error)
  //     }
   
  //  }
  //   getProduct()},[])
  return (
    <BrowserRouter>
      <ScrollToTop>
        <AuthProvider>
          <CartProvider>
            <ToastContainer theme="dark" />
            <Switch>
              <Route path={"/kids/:id"} component={ () => <Product products={products} />} />
              <Route path={"/love/:id"} component={() =>  <Product products={products} />} />
              <Route path={"/comdey/:id"} component={() =>  <Product products={products} />} />
              <Route path={"/classic/:id"} component={ () => <Product products={products} />} />
              <Route path={"/cooking/:id"} component={ () => <Product products={products} />} />
              <Route path={"/cart"} component={CartPage} />
              <Route
                path={"/"}
                exact
                component={() => <Body products={products} />}
              />
              <Route path={"/login"} component={LoginForm} />
              <Route path={"/singup"} component={SingUpForm} />
              <Route path={"/cart"} component={CartForm} />
              <Route path={"/singup"} component={SingUpForm} />
              <Route
                path={"/kids"}
                component={() => <ProductList products={products} />}
              />
              <Route
                path={"/comedy"}
                component={() => <ProductList products={products} />}
              />
              <Route
                path={"/love"}
                component={() => <ProductList products={products} />}
              />
              <Route
                path={"/cooking"}
                component={() => <ProductList products={products} />}
              />
              <Route
                path={"/classic"}
                component={() => <ProductList products={products} />}
              />
            </Switch>
            <Footer/>
          </CartProvider>
        </AuthProvider>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
