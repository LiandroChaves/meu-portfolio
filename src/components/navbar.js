import React, { useState } from 'react';
import c from './Nav.module.css';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav className={`${c.nav} ${isMenuOpen ? c.active : ''}`}>
                <h2 className={c.nomeLoja}>Meu Portifólio</h2>
                <button onClick={toggleMenu} className={c.menuToggle}>
                    &#9776; {/* Menu icon */}
                </button>
                <ul className={`${c.menu} ${isMenuOpen ? c.active : ''}`}>
                    <li><a href="#bio">Sobre mim</a></li>
                    <li><a href="#portfolio">Meus trabalhos</a></li>
                    <li><a href="#skills">Minhas habilidades</a>
                        <ul className={c.submenu}>
                            <li><a href="#blockR">React</a></li>
                            <li><a href="#blockSQL">MySQL</a></li>
                            <li><a href="#blockflu">Flutter</a></li>
                            <li><a href="#blocktab">Tableu</a></li>
                        </ul>
                    </li>
                </ul>
                <div className={c.pesq}>
                    <form>
                        <input className={c.input} type="text" placeholder="Pesquise..." />
                    </form>
                    <button className={c.button}>Pesquisar</button>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
