import React from 'react'

const Button = ({rounded, text, onClick}) => {
  return (
    <>
      <button onClick={onClick} className={`py-3.5 px-5 ${rounded} bg-black duration-700 text-white hover:bg-primary-gray outline-none`}>
        {text}
      </button>
    </>
  )
}

export default Button