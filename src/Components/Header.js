import { useState } from "react";
import Nav from "./Nav";
import {motion} from 'framer-motion' //read about this
import { AnimatePresence} from 'framer-motion'

export default function Header(){
    const [isActive, setIsActive] = useState(false);
    return(
        <div>
            <h1 className="h-auto text-white text-5xl  text-center py-2 bg-teal-800 font-cinzel tracking-wide ">AVIANS</h1>
            <div>
                <div onClick={()=>{setIsActive(!isActive)}} className="button">
                    <div className={`burger ${isActive ? "burgerActive":""}`}></div>

                </div>
            </div>
            <AnimatePresence mode='wait'>
                {isActive && <Nav/>}
            </AnimatePresence>
        </div>   
    )
  }