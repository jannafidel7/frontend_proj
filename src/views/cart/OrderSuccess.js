import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { PDFDownloadLink } from "@react-pdf/renderer";
import MetaData from '../layouts/MetaData'
import Invoice from './Invoice';
import {Button} from '@mui/material'
const OrderSuccess = () => {
    localStorage.removeItem('cartItems');
    localStorage.removeItem('shippingInfo');
    let cart = JSON.parse(sessionStorage.getItem("cart"));;
    let shipinfo = JSON.parse(sessionStorage.getItem("shipinfo"));
    let orderinfo =  JSON.parse(sessionStorage.getItem('orderInfo'));
    let customer = JSON.parse(localStorage.getItem("user"));
   
    const invoice = {
        customer: customer.name,
        total: orderinfo.totalPrice,
        email : customer.email,
        items: cart,
        address :shipinfo.address,
        city : shipinfo.city,
        country : shipinfo.country,
        phone : shipinfo.phoneNo,
        postal : shipinfo.postalCode,
        tax: orderinfo.taxPrice,
        shipping: orderinfo.shippingPrice,
        subtotal: orderinfo.itemsPrice
      };
    return (
        <Fragment>
            <MetaData title={'Order Success'} />
           
            <div className="row justify-content-center">
                
                <div className="col-6 mt-5 text-center">
                

                    <img className="my-5 img-fluid d-block mx-auto" src="https://cdn2.iconfinder.com/data/icons/greenline/512/check-512.png" alt="Order Success" width="200" height="200" />
                    <PDFDownloadLink document={<Invoice invoice={invoice}/>} filename="receipt">
                 <Button variant="contained"><i class="bi bi-receipt"></i></Button> 
                </PDFDownloadLink>
                    <h2>Your Order has been placed successfully.</h2>

                    <Link to="/orders/me">Go to Orders</Link>
                
                    
                </div>
                
            </div>
        </Fragment>
    )
}
export default OrderSuccess