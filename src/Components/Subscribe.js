import React,{useState,useRef} from "react";
// import img from ''
export default function Subscribe(){

    const [email,setEmail] = useState('');
    const submitHandler = (e)=>{

        e.preventDefault();
        console.log("Clicked")
        alert('You have succesfully Subscribed');
        setEmail('');

    }

    return(
        <div className=" flex flex-col md:flex-row md:justify-between items-center px-10 py-10 md:py-20 mx-4 md:mx-20 my-6 md:my-10" style={{backgroundImage:`url(${'./brand_logo.jpeg'}`,backgroundSize:'auto',opacity:'0.89'}}>
            <div className="flex flex-col items-center gap-4">
                <p className="text-white font-pacifico text-2xl md:text-5xl font-light">Stay Updated with the Latest Trends</p>
                <p className="text-white font-serif text-sm md:text-xl font-light">Join our mailing list to receive updates on new arrivals, sales, and exclusive offers.</p>
            </div>

            <div className="bg-white inline-block px-4 md:px-14 py-2 md:py-3 rounded-full sm:rounded-2xl">
                <form onSubmit={submitHandler} className="flex flex-col md:flex-row items-center gap-4 md:gap-1 ">
                    <input type="email" placeholder="Type your email" value={email} className="p-2 outline-none w-full md:w-auto" onChange={(e)=>{setEmail(e.target.value)}} />
                    <button className="bg-black text-white font-medium rounded-full px-3 md:px-4 py-2">Subscribe</button>
                </form>
            </div>
        </div>

    )

}