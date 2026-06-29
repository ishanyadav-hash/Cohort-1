import React from "react";
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Home from "./components/Home";
import Contact from "./components/Contact"
import About from "./components/About";
import DashBoard from "./components/DashBoard"
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import GetStarted from "./components/GetStarted";
import LiveDemo from "./components/LiveDemo";
import ProductId from "./components/ProductId";
import MatchPage from "./pages/MatchPage";
import LoginPage from "./components/LoginPage";
import Product from "./components/Product";
import BookingPage from "./pages/BookingPage";
import SuccessPage from "./pages/SuccessPage";
import MovieBookingPage from "./pages/MovieBookingPage";
import BookingProvider from "./context/BookingContext";
import Ref from "./components/Ref";
import Memoization from "./components/Memoization";
import AxiosDemo from "./components/AxiosDemo";

const App = () => {
  const router = createBrowserRouter(
    [
      {
        path:'/',
        element:
        <div>
          <MatchPage/>
        </div>
      },
      {
        path:'/contact',
        element:
        <div>
          <Contact/>
        </div>
      },
      {
        path:'/about',
        element:
        <div>
          <About/>
        </div>
      },
      {
        path:'/dashboard',
        element:
        <div>
          <DashBoard/>
        </div>
      },
      {
        path:'/products',
        element:
        <div>
          <Products/>
        </div>,
        children:[
          {
            path:'product',
            element:<Product/>
          }
        ]
      },
      {
        path:'/get-started',
        element:
        <div>
          <GetStarted/>
        </div>
      },
      {
        path:'/live-demo',
        element:
        <div>
          <LiveDemo/>
        </div>
      },
      {
        path:'/product-id/:id',
        element:
        <div>
          <ProductId/>
        </div>
      },
      {
        path:'/bookings',
        element:<BookingPage/>
      },
      {
        path:'/success',
        element:<SuccessPage/>
      },
      {
        path:'/movies',
        element:<MovieBookingPage/>
      },
      {
        path:'/reference',
        element:<Ref/>
      },
      {
        path:'/memo',
        element:<Memoization/>
      },
      {
        path:'/axios-demo',
        element:<AxiosDemo/>
      }
    ]
  );
  return (
    <BookingProvider>
      <RouterProvider router={router} />
    </BookingProvider>
  );
};

export default App;
