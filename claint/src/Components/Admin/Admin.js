import { Link } from "@material-ui/core";
import React from "react";
import AddProduct from "../AddProduct/AddProduct";
import EditProduct from "../EditProduct/EditProduct";
import "./Admin.css"

const Admin = () => {
    const abc=()=>{
        
    }
    return (
        <>
            <div className="container" >
               <div className="row" style={{height: "1200px"}}>
               <div className="col-md-3 sideberLeft">
                    {/* <h3 onClick={abc}>Add Product</h3> */}
                    <Link to="#addProduct"><h3>Add Product</h3></Link>
                    <Link to="#editproduct"><h3>Edit Product</h3></Link>
                    {/* <h3>Edit Product</h3> */}
                </div>
                <div className="col-md-9 adminBody" id="addProduct">
                    <AddProduct></AddProduct>
                    
                </div>
                {/* <div className="col-md-9 adminBody" id="editproduct">
                <EditProduct></EditProduct>
                </div> */}
               </div>
            </div>
        </>
    );
};

export default Admin;
