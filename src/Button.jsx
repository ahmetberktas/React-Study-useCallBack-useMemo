import React from 'react'

const Button = ({ onClick }) => {
  return (
    <button onClick={onClick}>Tıkla</button>
  )
}

export default React.memo(Button);