import React from "react";
import {Route,Routes} from 'react-router-dom';
import Home from "./Home";
import Signup from "./Signup";
import Login from "./Login";
import Pricing from "./Pricing";
function AllRoute(){
    return(
        <div>
           
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/signup" element={<Signup/>} ></Route>
                <Route path="/login" element={<Login/>} ></Route>
                <Route path="/pricing" element={<Pricing/>} ></Route>
            </Routes>
        </div>
    )
}
export default AllRoute;