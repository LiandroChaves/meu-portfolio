import React from 'react';
import f from './Footer.module.css';
import imgi from '../assets/inst.png';
import imgw from '../assets/wpp.png';

function Footer() {
    return (
        <footer className={f.pe}>
            <span className={f.linhape}><img className={f.img} src={imgi} alt="Logo-instagram" /><a href="https://www.instagram.com/l__chaveszzz/" target='_blank' rel="noreferrer">L__Chaveszzz</a><img className={f.img} src={imgw} alt="Logo-whatsapp" /><a href="#wpp">+55 88 8821-6593</a></span>
            <p>Copyright © 2024 By Liandro Chaves</p>
        </footer>
    );
}

export default Footer;