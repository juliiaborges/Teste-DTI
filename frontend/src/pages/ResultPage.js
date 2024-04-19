import React from 'react';
import { useLocation } from 'react-router-dom';
import './ResultPage.css'; // Importe o CSS aqui

function ResultPage() {
    const location = useLocation();
    const result = location.state ? location.state.result : { petshop: 'N/A', totalCost: 'N/A' };

    return (
        <div className="container3">
            <div className="result-box">
                <h1>A melhor opção para você é:</h1>
                <p>Petshop: {result.petshop}</p>
                <p>Valor: R$ {result.totalCost}</p>
            </div>
        </div>
    );
}

export default ResultPage;
