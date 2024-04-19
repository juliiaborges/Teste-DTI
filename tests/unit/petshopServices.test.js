const { calculatePrice } = require('../../backend/src/services/petshopServices');
describe('calculatePrice', () => {
  it('deve calcular o menor custo durante a semana para cães pequenos e grandes', () => {
    const isWeekend = false;
    const smallDogs = 3;
    const largeDogs = 5;
    const result = calculatePrice(isWeekend, smallDogs, largeDogs);
    expect(result.name).toBe('Meu Canino Feliz');
    expect(result.totalCost).toBe(260);  // Corrigido para o valor correto baseado no cálculo manual
  });

  it('deve calcular o menor custo durante o fim de semana para cães pequenos e grandes', () => {
    const isWeekend = true;
    const smallDogs = 3;
    const largeDogs = 5;
    const result = calculatePrice(isWeekend, smallDogs, largeDogs);
    expect(result.name).toBe('Meu Canino Feliz');
    expect(result.totalCost).toBe(312);  // Assumindo que o cálculo do fim de semana está correto
  });
});
