import React from 'react'
import "./Navbar.css"

interface NavbarProps{
    cor: string,
    fonte: string
}

function Navbar(props: NavbarProps) {
  return (
    <nav className={props.cor}>
        <div className={props.fonte}>Home</div>
    </nav>
  )
}

export default Navbar