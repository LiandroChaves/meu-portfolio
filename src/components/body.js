import React, { useEffect, useRef, useState } from 'react';
import b from './Body.module.css';
import gif from '../assets/24e71a4a26b5d319d6ac79ee_rw_600.gif';
import flutterImg from '../assets/Flutter.png';
import mysqlImg from '../assets/MySQL.png';
import reactImg from '../assets/React.png';
import tableauImg from '../assets/tableau.png';

function Body() {
    const [activeText, setActiveText] = useState(null);

    const rolarPaBio = () => {
        document.getElementById('bio').scrollIntoView({ behavior: 'smooth' });
    };

    const textRef = useRef(null);
    useEffect(() => {
        const text = textRef.current.innerText;
        textRef.current.innerText = '';
        let i = 0;
        const interval = setInterval(() => {
            if (i < text.length) {
                textRef.current.innerText += text.charAt(i);
                i++;
            } else {
                clearInterval(interval);
            }
        }, 10);
    }, []);

    const handleMouseClick = (id) => {
        setActiveText(id);
    };

    const handleClose = () => {
        setActiveText(null);
    };

    return (
        <>
            <div>
                <main id="principal" className={b.principal}>
                    <div className={b.p1}>
                        <h2>
                            <span>Olá, Meu nome é Liandro. Eu sou <p><h2 className={b.animacao}>Programador!</h2></p></span>
                        </h2>
                        <button className={b.knowme} onClick={rolarPaBio}>
                            <a href="#bio">Me conheça melhor</a>
                        </button>
                    </div>
                    <div className={b.p2}>
                        <img src={gif} alt="gif" className={b.gif} />
                    </div>
                </main>
            </div>
            <div className={b.tudo}>
                <div className={b.bioContainer}>
                    <span id="bio" className={b.bio} ref={textRef}>
                        Sou um desenvolvedor júnior que comecei a estudar diversas linguagens de programação e acabei gostando e me identificando com a área. Através desses estudos me identifiquei com diversas linguagens, entre elas React, MySQL (Data Manipulation Language), bancos de dados relacionais e não relacionais, desenvolvimento mobile com flutter, e também aprendi a utilizar Tableau. A cada nova linguagem e tecnologia que explorei, fiquei encantado com as infinitas possibilidades que elas ofereciam. React, com sua abordagem declarativa e baseada em componentes, é uma ferramenta poderosa para construir interfaces de usuário dinâmicas. Somando-se ao meu repertório, também aprendi muito no Flutter, framework de desenvolvimento de aplicativos móveis do Google. Sua capacidade de escrever interfaces nativas de alta qualidade para iOS e Android a partir de uma única base de código me impressionou. O rico conjunto de widgets personalizáveis ​​do Flutter, junto com recursos como hot reload para iteração rápida, expandiu ainda mais meus recursos no desenvolvimento de aplicativos móveis. E finalmente, juntando tudo isso a um banco de dados do MySQL, qualquer sistema está inteiramente completo.
                    </span>
                </div>
                <div className={b.grid}>
                    <div className={b.proj}>
                        <label className={b.lb}>Flutter</label>
                        <a
                            href="#flutter-text"
                            className={b.img_proj}
                            onClick={() => handleMouseClick('flutter-text')}
                        >
                            <img src={flutterImg} alt="Projeto 1" className={b.img1} />
                        </a>
                        {activeText === 'flutter-text' && (
                            <div>
                                <p id="flutter-text" className={`${b.temp} ${b.show}`}>
                                    Flutter é um framework de desenvolvimento de aplicativos móveis multiplataforma, desenvolvido pelo Google. Ele permite que os desenvolvedores criem aplicativos nativos para iOS, Android e outras plataformas a partir de um único código base. Flutter utiliza a linguagem de programação Dart e oferece um conjunto abrangente de widgets personalizáveis e ferramentas para criar interfaces de usuário bonitas e responsivas.
                                </p>
                                <button className={b.close_btn} onClick={handleClose}>Fechar</button>
                            </div>
                        )}
                    </div>
                    <div className={b.proj}>
                        <label className={b.lb}>MySQL</label>
                        <a
                            href="#mysql-text"
                            className={b.img_proj}
                            onClick={() => handleMouseClick('mysql-text')}
                        >
                            <img src={mysqlImg} alt="Projeto 2" className={b.img2} />
                        </a>
                        {activeText === 'mysql-text' && (
                            <div>
                                <p id="mysql-text" className={`${b.temp} ${b.show}`}>
                                    MySQL é um sistema de gerenciamento de banco de dados relacional (RDBMS) de código aberto que utiliza a linguagem SQL (Structured Query Language). Ele permite que você armazene, gerencie e recupere dados de maneira eficiente, organizada e segura. MySQL é amplamente utilizado em uma variedade de aplicativos, desde sites simples até aplicativos empresariais complexos, devido à sua confiabilidade, escalabilidade e facilidade de uso. Ele oferece recursos poderosos, como suporte a transações ACID, replicação de dados, e capacidade de manipulação de grandes volumes de dados.
                                </p>
                                <button className={b.close_btn} onClick={handleClose}>Fechar</button>
                            </div>
                        )}
                    </div>
                    <div className={b.proj}>
                        <label className={b.lb}>React</label>
                        <a
                            href="#react-text"
                            className={b.img_proj}
                            onClick={() => handleMouseClick('react-text')}
                        >
                            <img src={reactImg} alt="Projeto 3" className={b.img3} />
                        </a>
                        {activeText === 'react-text' && (
                            <div>
                                <p id="react-text" className={`${b.temp} ${b.show}`}>
                                    React é uma biblioteca JavaScript de código aberto para a construção de interfaces de usuário. Desenvolvida pelo Facebook, React é usada para criar componentes de interface de usuário reutilizáveis e responsivos para aplicativos da web. React utiliza uma abordagem baseada em componentes, onde os desenvolvedores podem criar componentes independentes e compostos que são fáceis de manter e testar. Com o React, os desenvolvedores podem criar interfaces de usuário dinâmicas e interativas, atualizando apenas as partes relevantes da página quando os dados mudam.
                                </p>
                                <button className={b.close_btn} onClick={handleClose}>Fechar</button>
                            </div>
                        )}
                    </div>
                    <div className={b.proj}>
                        <label className={b.lb}>Tableau</label>
                        <a
                            href="#tableau-text"
                            className={b.img_proj}
                            onClick={() => handleMouseClick('tableau-text')}
                        >
                            <img src={tableauImg} alt="Projeto 4" className={b.img4} />
                        </a>
                        {activeText === 'tableau-text' && (
                            <div>
                                <p id="tableau-text" className={`${b.temp} ${b.show}`}>
                                    Tableau é uma plataforma de análise de dados que permite às pessoas transformar dados em insights visuais de maneira rápida e fácil. Ele oferece uma variedade de ferramentas para conectar-se a diferentes fontes de dados, criar visualizações interativas e painéis personalizados, e compartilhar esses insights com outras pessoas. O Tableau é amplamente utilizado em empresas e organizações para análise de dados, relatórios e tomada de decisões informadas.
                                </p>
                                <button className={b.close_btn} onClick={handleClose}>Fechar</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Body;
