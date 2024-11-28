import React from 'react'
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

function Header() {
    const cartItem=useSelector((state)=>state.cart.cartItems)
const totalItems = cartItem.reduce((total, item) => total + item.quantity, 0);
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-success">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Ecommerce app</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item"><Link class="nav-link" to="/">Home</Link></li>              
                <li class="nav-item"><Link class="nav-link" to="/about">About</Link></li>
                <li class="nav-item">                
                 <Link class="nav-link" to="/cart" style={{position:"relative"}}>   <i  className="bi bi-cart"> </i><span style={{color: "white",padding: "2px 6px",fontSize: "0.75rem",borderRadius: "50%",position:"absolute",top:"-4px",left:"15px",backgroundColor: "red"}}>{totalItems}</span></Link></li>
            </ul>
        </div>
    </div>
</nav>
  )
}

export default Header
