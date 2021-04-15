import React from 'react'
import FormFooter from '../forms/FormFooter'
import FormHeader from '../forms/FormHeader'
import SignUpForm from '../forms/SignUpForm'

function SignUpScreen() {
    return (
        <div className="signUpScreen">
           <FormHeader />
           <SignUpForm />
           <FormFooter />
        </div>
    )
}

export default SignUpScreen
