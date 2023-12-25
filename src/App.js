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
  const [activeCategory, setActiveCategory] = useState('men');

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <div>
      <Header />
      <Nav />
      <Catalogue name="Ashish" />
      <Toggle/>
      <Routes>
        <Route
          path=""
          element={
            <CategoryMen
              active={activeCategory === 'men'}
              onCategoryChange={handleCategoryChange}
            />
          }
        />
        <Route
          path="/women"
          element={
            <CategoryWomen
              active={activeCategory === 'women'}
              onCategoryChange={handleCategoryChange}
            />
          }
        />
        <Route path="*" element={<Navigate to="/men" />} />
      </Routes>

      <Testimonials />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
