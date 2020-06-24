import React, { Component } from 'react';

import loginBanner from 'public/twitter_login_sidebar_illustration.png'

export default class LoginForm extends Component {
    render() { 
        return ( 
            <div className="loginForm">
                <img src={loginBanner} alt="Login Banner" width="200" height="200"/>

                <h3>See what's happening in the world right now</h3>

                <form action={() => event.preventDefault()}>
                    <div className="inputBox">
                        <input type="text"/>
                        <p>Phone, email, or username</p>
                    </div>

                    <div className="inputBox">
                        <input type="password"/>
                        <p>Password</p>
                    </div>

                    <p><a href="#">Forgot password?</a></p>

                    <button className="hollowButton">Log in</button>

                    <p>or</p>

                    <button className="solidButton">Sign up</button>
                </form>
            </div>
         )
    }
}
 
 