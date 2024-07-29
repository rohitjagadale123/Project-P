import { useState } from 'react'

import '../styles/signin.css'
import { useNavigate } from 'react-router-dom';
const SigninPage = () => {

    const [issignin,setissignin]=useState(true);
    const navigate= useNavigate();


  

    const handleclick=(e)=>{
        e.preventDefault();
        setissignin(!issignin);
    }
    const handlesubmit=(e)=>{
        e.preventDefault();
        if(!issignin){
          setissignin(true);
          navigate("/");
        }
          else{
            navigate("/home");
          }
        };

    
  return (
   <div className='signin-container'>
    <div className='sign-box'>
        
        <form className='form' onSubmit={handlesubmit}>
             <h1> {issignin ? 'Sign In':'Sign Out'}</h1>
             
            { !issignin && 
            <>
            <label className='name-label' for='name'> Full Name</label>
            <input className='name' type='text ' autoFocus></input>
            </>
            }

            <label className='email-label' for='email'> Email</label>
            <input className='email' type='email ' autoFocus></input>
            <label className='password-label' for='password'> Password</label>
            <input className='password' type='password' ></input>
           
           
            <div className='btn-container'>
            <button className='signin-btn' type='submit'>{issignin ?'Sign in':'Sign out'}</button>
            </div>

            <div  className='signin-footer' onClick={handleclick}>
                {issignin?' Dont have an account? Sign up':'Already have an account? Sign in'}
               
            </div>
            
        </form>
    </div>
   </div>
    
  )
}

export default SigninPage