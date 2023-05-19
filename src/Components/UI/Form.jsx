import React, { useState } from 'react'

const Form = () => {
    const [handler, setHandler] = useState()

    const inputHandler=(e)=>{
    setHandler(e.target.value)
    }
  return (
    <div>
      <input 
      onChange={inputHandler}
      type="text"
      />
      <button>ADD</button>
    </div>
  )
}

export default Form
