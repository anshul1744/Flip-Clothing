import React from 'react'

import './sign-in-and-sign-up.style.scss'
import SignUp from '../../component/sign-up/sign-up.component'
import SignIn from '../../component/sign-in/sign-in.component'
const SignInAndSignUpPage = ()=>(
    <div className ='sign-in-and-sign-up'>
      <SignIn/>
      <SignUp />
    </div>
);
export default SignInAndSignUpPage