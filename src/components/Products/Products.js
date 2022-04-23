import React, { useContext } from 'react';
import { DataContext } from '../../App';


const Products = ({handleAddProducts}) => {

    const items = useContext(DataContext)

    return (
        <div>
            <h3 className='text-center'>Our Products</h3>
            <div className="container">
                <div className="row mt-2">
                    {
                        items.map(item => {
                            return (
                                <div className='col-lg-4 col-md-6 col-12' key={item.id}>
                                    <div className="item-box">
                                        <div className="item-img text-center">
                                            <img src={item.img} alt="" className='img-fluid mx-auto' />
                                        </div>
                                        <div className="item-details mt-3">
                                            <h4 className='text-uppercase'>{item.name}</h4>
                                            <p>{item.description}</p>
                                        </div>
                                        <div className="item-price mt-3">
                                            <h5>Price : {item.price}$</h5>
                                        </div>
                                        <button className='btn-info d-block mx-auto m-2' onClick={()=>handleAddProducts(item)}>Add to cart</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;