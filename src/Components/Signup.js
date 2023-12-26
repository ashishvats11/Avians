import { useState } from "react";
import { validateEmail } from "../utils.js/validemail";

function PasswordErrorMessage(){
    return (
    <p className="text-red-500 text-xs">Password should have at least 8 characters</p>
    );
};
export default function Signup(){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState({
        value: "",
        isTouched: false,
      });  
      
      const clearForm = ()=>{
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword({value:'',isTouched:false});
      }

    const submitHandler =(e)=>{
        e.preventDefault();
        console.log('Account Created!');
        clearForm();
        alert(`Welcome ${firstName}`)
    }
    
    const isFormValid = ()=>{
        return(
            firstName && validateEmail(email) && password.value.length>=8
        );
        
    }

    return(
        <div className=" border-2 mx-auto max-w-md p-2 " >
            <div className="p-2 flex font-bold text-2xl justify-center">
                <p>SignUp</p>

            </div>
            <form onSubmit={submitHandler} className="p-5 flex flex-col gap-3">
                <div className=" flex flex-col">
                    <label>First Name: <sup className="text-red-500 font-bold text-sm">*</sup></label>
                    <input type="text" value={firstName} placeholder="First Name" onChange={(e)=>{setFirstName(e.target.value)}} className="rounded-lg p-1" style={{border:'1px solid gray'}}/>
                </div>

                <div className=" flex flex-col">
                    <label>Last Name:</label>
                    <input type="text" value={lastName} placeholder="Last Name" onChange={(e)=>{setLastName(e.target.value)}} className="rounded-lg p-1" style={{border:'1px solid gray'}}/>
                </div>

                <div className=" flex flex-col">
                    <label>Email: <sup className="text-red-500 font-bold text-sm">*</sup></label>
                    <input type="email" value={email} placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}} className="rounded-lg p-1" style={{border:'1px solid gray'}}/>
                </div>

                <div className=" flex flex-col">
                    <label>Password: <sup className="text-red-500 font-bold text-sm">*</sup></label>
                    <input type="password" value={password.value} placeholder="Set Password"  onChange ={(e)=>{setPassword({...password,value:e.target.value})}} onBlur={(e=>{setPassword({...password,isTouched:true })})} className="rounded-lg p-1" style={{border:'1px solid gray'}}/>
                    {password.value.length <8 && password.isTouched===true ?PasswordErrorMessage() :""}
                </div>

                <div className=" flex flex-col">
                    <label>Gender <sup className="text-red-500 font-bold text-sm">*</sup></label>
                    <select type="text" className="rounded-lg p-1 text-sm" placeholder="Choose your Gender" style={{border:'1px solid gray'}}>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </select>
                        
                </div>
                <div className="flex justify-center">
                    <button className={` text-white rounded-3xl p-3 ${!isFormValid() ? 'bg-slate-500 text-gray-200 cursor-not-allowed' : 'bg-violet-950'}`} disabled={!isFormValid()} >Create Account</button>
                </div>

            </form>
        </div>
    )
}