import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./navbar";
import Body from "./body";
import FastButton from "./FastBtn";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";


const AppLayOut=()=>{
  return <div className="app-layout">
    <Navbar/>
    <Outlet/>
  </div>
}
const ways=createBrowserRouter([
  {
    path:"/",
    element:<AppLayOut />,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
      path:"/fast",
      element:<FastButton />
    }]
  }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={ways}/>);
