import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";
import { Link } from 'react-router-dom'

function FashionScreen() {


  return (
    <div>
      <div class="-df -pvs -phxs">
          
            
            <div class="ar _32-7 -hov-e-3 brand p-5"  style={{height: "220px"}}>
            <Link to="/brand" className="nam ">
              <div className="d-flex justify-content-center  p-5" >
              <button className="btn btn-dark " >Shop Now</button>
              </div>
              </Link>
              </div>
           
         
      </div>
    </div>
  );
}

export default FashionScreen;
