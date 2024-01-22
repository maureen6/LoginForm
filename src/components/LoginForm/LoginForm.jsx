import React from 'react';
import './LoginForm.css';

let LoginForm = () => {
    return(
        <div className='wrapper'>
            <form>
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder='UserName' required></input>
                </div>

                <div className="input-box">
                    <input type="password" placeholder="Password" required></input>
                </div>

        
                <div className="remember-forget">
    <label>
        <input type="checkbox" />
        Remember me
    </label>
    <a href="#">Forgot Password?</a>
</div>


                <button type="submit">Login</button>

                <div className="register-link">
                    <p>Don't have an account?<a href="#">Register</a></p>                </div>
            </form>

        </div> 
        

    );
};

export default LoginForm;