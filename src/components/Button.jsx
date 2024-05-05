import React from 'react'

function Button({action, icon}) {
    return (
      <button className="btn" onClick={action}>
  
          {icon}
          
          </button>
    )
  }

export default Button