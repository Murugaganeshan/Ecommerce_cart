import React from "react";
import { useCart } from "react-use-cart";

const Itemcard=(props)=>{
    const {addItem}= useCart();
    return(
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4"> 
        <div class="card p-0 overflow-hidden h-100 shadow" >
  <img  src={props.img} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">Rs.{props.price}</p>
    <h5 class="card-text">{props.desc}</h5>
    <button class="btn btn-success" onClick={()=>addItem(props.item)}>Add to Cart</button>
  </div>
</div>
</div>

    )
}
export default Itemcard