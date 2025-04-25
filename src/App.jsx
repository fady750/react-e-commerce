import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";




import AppLayout from './AppLayout'
import Home from "./UI/Home"


import Wishlist from "./pages/Wishlist.jsx";
import Cart     from "./pages/Cart";
import Products from "./pages/Products";
import Product from "./pages/Product"
import Checkout from "./pages/Checkout";
import UserInfo from "./pages/UserInfo";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Collections from "./pages/Collections.jsx";
import CollectionType from "./pages/CollectionType.jsx";






const queryClient =  new QueryClient({
  defaultOptions:{
    queries:{
      staleTime:0,
    }
  }
})



function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false}/>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="wishlist" element={<Wishlist/>}/> 
            <Route path="cart" element={<Cart/>} />
            <Route path="collection" element={<Products/>}/>
            <Route path="collection/:productSlug/:productId"  element={<Product/>}/>
            <Route path="collections" element={<Collections/>}/>
            <Route path="collections/:collectionType" element={<CollectionType/>}/>
            <Route path="checkout" element={<Checkout/>}/>
            <Route path="account" element={<UserInfo/>}/>
            <Route path="account/login" element={<Login/>} />
            <Route path="account/register" element={<Signup/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>

  )
}

export default App







