import React from 'react'
import FormFooter from '../forms/FormFooter'
import FormHeader from '../forms/FormHeader'
import SignInForm from '../forms/SignInForm'

function SignInScreen() {
    return (
        <div className="signInScreen">
            <FormHeader />
            <SignInForm />
            <FormFooter />
        </div>
    )
}

export default SignInScreen
