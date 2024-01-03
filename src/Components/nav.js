import {Routes,Route} from 'react-router-dom';
import Footer from './Footer';
// import {HashLink as Link} from 'react-router-hash-link'
import {NavLink as Link}  from 'react-router-dom'

function Nav(){
    return(
        <div className="flex justify-between bg-teal-600 h-10  " >
            <ul className="flex items-center mx-9 ">
                <li className="text-white cursor-pointer hover:underline hover:underline-offset-2 hover: decoration-orange-500  px-8 ">Home</li>
                <li className="text-white cursor-pointer hover:underline hover:underline-offset-2 hover: decoration-orange-500  px-8">About</li>
                <li className="text-white cursor-pointer hover:underline hover:underline-offset-2 hover: decoration-orange-500  px-8">Blog</li>
                <li className="text-white cursor-pointer hover:underline hover:underline-offset-2 hover: decoration-orange-500  px-8" >Services</li>
            </ul>
            <button className='text-white cursor-pointer mr-10 hover:underline hover:underline-offset-2 hover:decoration-orange-500 active:text-black'><Link to='/signup'>Login</Link></button>
         
        </div>
    );
}
export default Nav;
