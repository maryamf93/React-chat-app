import React from 'react'; 
import Input from './Input';
import logo from '../../logo.svg'

class SignUp extends React.Component {  
    render() {
        return (
            <div className='container' >
                <h1>
                    Sign Up
                </h1>
                <p>
                    Please fill in this form to create an account!
                </p>
                <hr />
                <img className='logo'  />
                <input 
                    className='input-box' 
                    type='email' 
                    name='email'
                    placeholder='Email'    
                />
                <input 
                    className='input-box' 
                    type='password' 
                    name='password'
                    placeholder='password'   
                />
                <input 
                    className='input-box' 
                    type='password' 
                    name='password'
                    placeholder='confirm password'   
                />
                <button className='submit input-box' >
                    Sign Up
                </button>
            </div>
        );
    }
}

export default SignUp;