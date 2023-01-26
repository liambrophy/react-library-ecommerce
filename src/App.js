import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Books from './Pages/Books';
import { books } from './data';
import BookInfo from './Pages/BookInfo';
import Cart from './Pages/Cart';
import React, { useState } from 'react';


function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    const dupeItem = cart.find(item => +item.id === +book.id);
    if (dupeItem){
      setCart(cart.map(item => {
        if (item.id === dupeItem.id){
          return {
            ...item, quantity: item.quantity + 1,
          }
        }
        else {
          return item;
        }
      }))
    }
    else {
      setCart([...cart, {...book, quantity: 1}])
    }
  }

  function changeQuantity(book, quantity){
    setCart(cart.map(item => {
      if (item.id === book.id) {
        return {
          ...item, quantity: +quantity,
        }
      }
      else {
        return item;
      }
    }))
  }

  function removeFromCart(item) {
    setCart(cart.filter(book => book.id !== item.id))
  }

  function numberOfItems(){
    let counter = 0;
    cart.forEach(item => {
      counter += item.quantity
    })
    return counter;
  }

  return (
    <Router>
      <div className="App">
        <Nav numberOfItems={numberOfItems()}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/books' element={<Books books={books}/>} />
          <Route path='/books/:id' element={<BookInfo books={books} addToCart={addToCart}/>} />
          <Route path='/cart' element={<Cart books={books} cart={cart} changeQuantity={changeQuantity} removeFromCart={removeFromCart}/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

//left at 1:31:15