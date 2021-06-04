import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { startLoginEmailPassword, startGoogleLogin } from '../actions/auth'

const verLogin = () => {
    return (
        <>
        <h3 className="auth__title">Login</h3>

<form onSubmit="">

    <input
        type="text"
        placeholder="Email"
        name="email"
        className="auth__input"
        autoComplete="off"
        value=""
        onChange="{handleInputChange}"
    />

    <input
        type="password"
        placeholder="Password"
        name="password"
        className="auth__input"
        value="{password}"
        onChange="{handleInputChange}"
    />

    <button
        type="submit"
        className="btn btn-primary btn-block"
    //disabled={loading}
    >
        Login
    </button>

    <div className="auth__social-networks">
        <p>Login with social networks</p>

        <div
            className="google-btn"
            onClick="{handleGoogleLogin}"
        >
            <div className="google-icon-wrapper">
                <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
            </div>
            <p className="btn-text">
                <b>Sign in with google</b>
            </p>
        </div>
    </div>

    <Link
        to="/auth/register"
        className="link"
    >
        Create new account
    </Link>

</form>
</>
    )
}

export default verLogin
