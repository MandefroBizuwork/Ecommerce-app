

import ShoppingCart from "./Components/ShoppingCart";
import "./bootstrap-5/css/bootstrap.min.css"

import ProductList from "./Components/ProductList";
import Counter from "./Components/hook/Counter";
import UserList from "./Components/hook/UserList";
import { Route, Router, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
function App() { 
 
  return (
   <>  
{/* <Counter/>
<UserList/> */}
<Header/>
    <Routes>

        <Route path="/" element={<ProductList/>}   />
        <Route path="/cart" element={<ShoppingCart/>}   />
    </Routes>



    


    </>
  );
}

export default App;
