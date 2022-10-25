import React from 'react'

const Button = ({ label = "Default Text" }) => {
  return (
    <button>{label}</button>
  )
}

export default Button