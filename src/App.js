import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart/Cart';
import FakeData from './components/FakeData/FakeData';
import Home from './components/Home/Home';
import HomePage from './components/HomePage/HomePage';
import Products from './components/Products/Products';
import SignIn from './components/SignIn/SignIn';



export const DataContext = createContext()

function App() {

  const [cartItem, setCartItem] = useState([])

  const handleAddProducts = (item) => {

    const productExist = cartItem.find(product => product.id === item.id)
    if (productExist) {
      setCartItem(
        cartItem.map(product =>
          product.id === item.id
            ? { ...productExist, quantity: productExist.quantity + 1 }
            : product
        )
      )
    } else {
      setCartItem([...cartItem, { ...item, quantity: 1 }])
    }

  }

  const handleRemoveProducts = (item) => {

    const productExist = cartItem.find(product => product.id === item.id)
    if (productExist.quantity === 1) {
      setCartItem(cartItem.filter(product => product.id !== item.id))
    } else {
      setCartItem(
        cartItem.map(product =>
          product.id === item.id
            ? { ...productExist, quantity: productExist.quantity - 1 }
            : product
        )
      )
    }

  }

  const clearCart = () => {
    setCartItem([])   
  }


  // const deleteItem = (id) => {
  //   const deleteIt = cartItem.filter((del, delIndex) => {
  //     return delIndex !== id
  //   })
  //   setCartItem(deleteIt)
  //   console.log(id)
  // }


  return (
    <div className="App">
      <DataContext.Provider value={FakeData}>
        <Router>
          <Home cartItem={cartItem} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/productspage" element={<Products handleAddProducts={handleAddProducts} />} />
            <Route path="/signinpage" element={<SignIn />} />
            <Route path="/cart" element={<Cart cartItem={cartItem} clearCart={clearCart} handleAddProducts={handleAddProducts} handleRemoveProducts={handleRemoveProducts} />} />
          </Routes>
        </Router>
      </DataContext.Provider>
    </div>
  );
}

export default App;
