import { useState, useEffect } from "react";
import GetOrder from '../api/getOrder'
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export function MyItems(){

    return(
        <div>
            <div>
                <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Sl Buisness Tree is a buisness website developed for grow your buisness up. You can place your order for your favourite items and you can add it to your cart. You can comment us on the chat page. Please comment our page and share it with your friends."/>
                <meta name="keywords" content="SL Business Tree"/>
                <meta name="author" content="Sl Business Tree"/>

                <title>Dashboard | SL Business Tree</title>
                </Helmet>
            </div>
        <div className="container mt-5">
            <div className="container mt-5">
            <div className="container mt-5">
            <div className="btn-group mt-5 mb-3">
            <Link to='/dashboard' className="btn btn-success">Look for orders</Link>
            <Link to='/mine'className="btn btn-secondary">Your Items</Link>
            <Link to='/global' className="btn btn-primary">Post ad</Link>
            <Link className="btn btn-warning" to='/create/category'>Create Category</Link>
            </div>
            </div>
            </div>
            <GetOrder/>
            

        </div>
        </div>
    )
}