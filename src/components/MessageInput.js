import React, {useState, useEffect} from 'react'

export default function MessageInput () {
  const [message, setMessage] = useState('')

  function handleChange(event) {
    setMessage(event.target.value)
  }
  console.log(message)

  return (
    <div className='message-input'>
      <input 
        placeholder="Enter your Message here"
        value={message}
        type='text'
        onChange={handleChange}
      />
    </div>
  )
}