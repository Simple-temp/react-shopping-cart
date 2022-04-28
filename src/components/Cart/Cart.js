import React from 'react';


const Cart = ({ cartItem, clearCart, handleAddProducts, handleRemoveProducts, deleteItem }) => {

    const totalPrice = cartItem.reduce((price, item) => price + item.quantity * item.price, 0)

    return (
        <div className='container'>
            <h3 className='text-center'>Cart component</h3>
            {
                cartItem.length >= 1
                    ?
                    <div className="cleart-cart mb-4">
                        <button className='btn-dark p-2' onClick={() => clearCart()}>Clear cart</button>
                    </div>
                    : ""
            }
            <div className="product-wrapper">

                {cartItem.length === 0 && (
                    <div className='empty text-center my-5'>No items are selected</div>
                )}
                {
                    cartItem.map(cartitem => {
                        return (
                            <div className="row mt-2 selected-item" key={cartitem.id}>
                                <div className="col-lg-3 col-md-3 col-12">
                                    <div className="cartitem-img">
                                        <img src={cartitem.img} alt="" className='img-fluid' />
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-3 col-12 d-flex align-items-center ">
                                    <div className="cartitem-details">
                                        <h5 className='text-uppercase'>{cartitem.name}</h5>
                                        <p className='text-uppercase'>{cartitem.description}</p>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-3 col-12 d-flex align-items-center justify-content-center">
                                    <div className="item-control">
                                        <i class="fa-solid fa-minus" onClick={() => handleRemoveProducts(cartitem)}></i>
                                        <span>{cartitem.quantity}</span>
                                        <i class="fa-solid fa-plus" onClick={() => handleAddProducts(cartitem)}></i>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-3 col-12 d-flex align-items-center justify-content-center">
                                    <h6>{cartitem.quantity}*${cartitem.price}</h6>
                                </div>
                                <div className="col-lg-2 col-md-3 col-12 d-flex align-items-center justify-content-center">
                                    <i class="fa-solid fa-trash-can" onClick={() => deleteItem(cartitem.id)}></i>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="total-price">
                <h3 className='text-right'>Total Price : ${totalPrice}</h3>
            </div>
            <div className="total-price">
                <button className='btn-dark check mb-4 p-2'>Check Procced</button>
            </div>
        </div>
    );
};

export default Cart;