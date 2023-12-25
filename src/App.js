import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import Catalogue from './Components/Catalogue';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Category from './Components/Category';
import Testimonials from './Components/Testimonial';

export {Header}; // Named Export
function App() {
  return (
  <div>
    <Header/>
  <Nav/>
  <Catalogue name="Ashish"/>
  <Category/>
  <Testimonials/>
  <Footer/>
 
  </div>
  );
  
}

export default App; //default Export
