import React from 'react'
import NormalButton from '../buttons/NormalButton'
import './FormFooter.css'

function FormFooter() {
    return (
        <div className="formFooter">
            <div className="formFooter__left">
                <NormalButton text="Find a store"/>
                <p>© 2021 Starbucks </p>
            </div>
            <div className="formFooter__right">
                <p>Responsibility</p>
                <p>Web Accessibility</p>
                <p>Privacy Policy</p>
                <p>Terms of Use</p>
                <p>Cookie Preferences</p>
            </div>
        </div>
    )
}

export default FormFooter
