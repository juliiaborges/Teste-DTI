
const request = require('supertest');
const express = require('express');
const app = express();
app.use(express.json());
const petshopRoutes = require('../backend/src/routes/petshopRoutes');
app.use('/api', petshopRoutes);

describe('POST /api/calculate', () => {
  it('deve responder com o melhor petshop e o custo total para uma data específica', async () => {
    const response = await request(app)
      .post('/api/calculate')
      .send({ date: '2022-03-07', smallDogs: 3, largeDogs: 5 });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      petshop: 'Meu Canino Feliz',
      totalCost: 312
    });
  });
});