import React from 'react'

const Footer = ({length}) => {
  
  return (
    <footer>
    <p>{length} list {length === 1? "items" : "items"}</p>
    </footer>
  )
}

export default Footer