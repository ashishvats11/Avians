import React from 'react'
import { BrowserRouter,Routes, Route, NavLink as Link, Navigate } from 'react-router-dom';
import Nav from './Nav';
import Catalogue from './Catalogue';
import Footer from './Footer';
import Header from './Header';
import CategoryMen from './CategoryMen';
import Testimonials from './Testimonial';
import Subscribe from './Subscribe';
import CategoryWomen from './CategoryWomen';
import Signup from './Signup';

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
  
function Home() {
    
  return (
    <div>
    
    <Header />
      <Nav />
      
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
      
    </div>
  )
}

export default Home
