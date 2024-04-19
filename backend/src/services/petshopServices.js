function calculatePrice(isWeekend, smallDogs, largeDogs) {
    const prices = {
        "Meu Canino Feliz": {
            distance: 2,
            weekday: { small: 20, large: 40 },
            weekend: { small: 24, large: 48 }
        },
        "Vai Rex": {
            distance: 1.7,
            weekday: { small: 15, large: 50 },
            weekend: { small: 20, large: 55 }
        },
        "ChowChawgas": {
            distance: 0.8,
            weekday: { small: 30, large: 45 },
            weekend: { small: 30, large: 45 }
        }
    };

    let bestOption = { name: null, totalCost: Infinity, distance: Infinity };
    
    for (const [name, data] of Object.entries(prices)) {
        const { distance, weekday, weekend } = data;
        const rate = isWeekend ? weekend : weekday;
        const totalCost = (rate.small * smallDogs) + (rate.large * largeDogs);
        
        if (totalCost < bestOption.totalCost || 
           (totalCost === bestOption.totalCost && distance < bestOption.distance)) {
            bestOption = { name, totalCost, distance };
        }
    }

    return bestOption;
}

module.exports = { calculatePrice };
