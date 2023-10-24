import React, {useState, lazy} from "react";
import { Routes, Route } from "react-router-dom";

// components imports
const Home = lazy(() => import("./pages/home/Home"));
const Aboute = lazy(() => import("./pages/aboute/Aboute"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const WebAppTemplate = lazy(() => import("./components/webAppTemplate/WebAppTemplate"));


const App = () => {
  return ( 
    <>
    <Routes> 
      <Route path="/" element={<WebAppTemplate/>}>
        {/* HOME */}
        <Route index element={<Home/>}/>
        <Route path="/o-nas" element={<Aboute/>}/>
        <Route path="/kontakt" element={<Contact/>}/>
      </Route>
    </Routes>
    </>
   );
}
 
export default App;