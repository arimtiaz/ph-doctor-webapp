import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSnowflake} from '@fortawesome/free-regular-svg-icons'
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SocialLogin = () => {
    const [useSignInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    if (loading) {
        return <p className='text-xl font-semibold text-center text-gray-900 align-middle'>Welcome</p>;
      }
      if (user) {
        return (
          navigate("/home")
        );
      }
    return (
        <div>
            <button className='bg-white'>
                <FontAwesomeIcon icon={faSnowflake}></FontAwesomeIcon>
                Google SignIn
            </button>
        </div>
    );
};

export default SocialLogin;