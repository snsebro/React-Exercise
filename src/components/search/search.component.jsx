import React from 'react'
import './search.styles.css'

export default function Search ({placeholder, filter}) {
  return (
    <div >
      <input className='search' type='search' placeholder={placeholder} onChange={filter}/>
    </div>
  )
}
