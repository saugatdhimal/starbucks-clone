import React from 'react'
import { Link } from 'react-router-dom'
import './FormHeader.css'

function FormHeader() {
    return (
        <div className="formHeader">
            <Link className="formHeader__logo" to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"
            alt="starbucks logo"
          />
        </Link>
        </div>
    )
}

export default FormHeader
