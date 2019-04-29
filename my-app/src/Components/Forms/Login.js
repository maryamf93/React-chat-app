import React from 'react'; 
import Input from './Input';

class Login extends React.Component {
    
    render() {
        return (
            <div className='container' >
                <h1>
                    Log in
                </h1>
                <img className='logo' />
                <input 
                    className='input-box' 
                    type='email' 
                    placeholder='Email'
                    value={this.props.email}
                />
                <input 
                    className='input-box' 
                    type='password' 
                    placeholder='password'
                    value={this.props.password}
                />
                <button className='submit input-box' >
                    Log in
                </button>
            </div>
        );
    }
}

export default Login;