import React from 'react';
import { useLocation } from 'react-router-dom';
import './ResultPage.css'; 

function ResultPage() {
    const location = useLocation();
    const result = location.state ? location.state.result : { petshop: 'N/A', totalCost: 'N/A' };

    return (
        <div className="container3">
            <div className="result-box">
                <h1>A melhor opção para você é:</h1>
                <p>Petshop: <strong>{result.petshop}</strong></p>
                <p>Valor: <strong>R${result.totalCost}</strong></p>
            </div>
        </div>
    );
}

export default ResultPage;
