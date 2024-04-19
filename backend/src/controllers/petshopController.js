const { calculatePrice } = require('../services/petshopServices');

exports.calculateBestOption = (req, res) => {
    const { date, smallDogs, largeDogs } = req.body;
    const isWeekend = new Date(date).getDay() === 5 || new Date(date).getDay() === 6; 

    const bestOption = calculatePrice(isWeekend, smallDogs, largeDogs);

    res.json({
        petshop: bestOption.name,
        totalCost: bestOption.totalCost
    });
};
