import React, { useState } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Nav from './Components/Nav';
import Catalogue from './Components/Catalogue';
import Footer from './Components/Footer';
import Header from './Components/Header';
import CategoryMen from './Components/CategoryMen';
import Testimonials from './Components/Testimonial';
import Subscribe from './Components/Subscribe';
import CategoryWomen from './Components/CategoryWomen';
import Signup from './Components/Signup';
import Home from './Components/Home';

function Toggle(){
  return(
    <div className='flex justify-center mt-14'>
      <div className='flex gap-5 bg-slate-400 p-10'>
        <p><Link to='' className='hover:underline hover:decoration-amber-600 bg-white p-3 rounded-2xl'>Men</Link></p>
        <p><Link to='/women' className='hover:underline hover:decoration-amber-600 bg-white p-3 rounded-2xl' >Women</Link></p>
        
      </div>

    </div>
  )
}
function App() {
    const [showLoginForm, setShowLoginForm] = useState(false);

    const handleLoginClick = () => {
      setShowLoginForm(true);
    };


  return (
    <div>
      <Header />
      <Nav onLoginClick={handleLoginClick} />
      
      <Catalogue name="Ashish" />
      <Toggle/>
        <Routes>
      {/* <Route path='/signup' element={<Signup/>}/> */}
        <Route path="" element={ <CategoryMen/>}/>
        <Route path="/women" element={<CategoryWomen/>}/>
       

      </Routes>

      <Testimonials />
      <Subscribe />
      <Footer />
      {/* <Home/> */}
      
        {/* <Route path='/signup' element={<Signup/>}/> */}
        {showLoginForm && <Signup onClose={() => setShowLoginForm(false)} />}
    </div>
  );
}

export default App;
