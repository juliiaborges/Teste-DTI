import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { calculateBestOption } from '../services/petshopService';
import './FormPage.css'; // Importe o CSS aqui

function FormPage() {
    const [date, setDate] = useState('');
    const [smallDogs, setSmallDogs] = useState(0);
    const [largeDogs, setLargeDogs] = useState(0);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const result = await calculateBestOption({ date, smallDogs, largeDogs });
        navigate('/resultado', { state: { result } });
    };

    return (
        <div className="container2">
            <div className="campo-texto">
                <h1>Preencha o formulário abaixo</h1>
            </div>
            <div className="formulario">
                <form onSubmit={handleSubmit}>
                    <label>
                        Data:
                        <input type="date" value={date} onChange={e => setDate(e.target.value)} />
                    </label>
                    <label>
                        Número de cães pequenos:
                        <input type="number" value={smallDogs} onChange={e => setSmallDogs(e.target.value)} />
                    </label>
                    <label>
                        Número de cães grandes:
                        <input type="number" value={largeDogs} onChange={e => setLargeDogs(e.target.value)} />
                    </label>
                    
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    );
}

export default FormPage;
