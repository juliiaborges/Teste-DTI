import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; 
import ImagemHomePage from '../assets/Illustration.png'; 

function HomePage() {
    return (
        <div className="container">
            <div className="campos-texto">
                <h1>Descubra o PetShop ideal para seu Pet!</h1>
                <p>Preencha todos os campos para receber a recomendação ideal agora mesmo</p>
            </div>
            <div className="campo-imagem">
                <img src={ImagemHomePage} alt="Imagem cachorro" />
            </div>
            <Link to="/formulario" className="link-button">Ir para o formulário</Link>
        </div>
    );
}

export default HomePage;
