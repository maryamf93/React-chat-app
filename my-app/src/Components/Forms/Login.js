import React from 'react'; 
import Input from './Input';

class Login extends React.Component {
    
    render() {
        return (
            <div className='container' >
                <h1>
                    
                </h1>
                <img className='logo' />
                <Input />
                <Input />
                <button className='submit inputBox' >
                    Log in
                </button>
            </div>
        );
    }
}

export default Login;