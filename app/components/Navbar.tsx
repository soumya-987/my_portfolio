'use client';
import Link from 'next/link';
import { usePathname} from 'next/navigation';
import {useState} from 'react';
export default function Navbar(){
    const pathname=usePathname();
    const [open,setOpen]=useState(false);
    const linkClass=(path:string)=>
        pathname===path?'active': '';
    return(
        <header className='navbar'>
            <div className='nav-top'>
                <span className='logo'>Soumya</span>
                <button className='menu-btn' onClick={()=>{setOpen(!open);
                console.log('clicked');
                }} aria-label="Toggle menu">
                    ☰
                </button>
            </div>
            <nav className={`nav-links ${open ? 'open' : ''}`}>
                <a href="#home" onClick={() => setOpen(false)}>Home</a>
                <a href="#about" onClick={() => setOpen(false)}>About</a>
                <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
                <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
            </nav>

        </header>
    );
}