import logo from './logo.svg';
import './App.css';
import Nav from './Components/nav';
function Header(){
  return <h1 class="h-auto text-white font-mono text-4xl font-bold text-center py-2 bg-teal-800">Avians</h1>
}
export {Header}; // Named Export
function App() {
  return (
  <div><Header/>
  <Nav/>
  </div>
  );
  
}

export default App; //default Export
