const Coffee = require('../model/Coffee');


const getCoffee = async(req, res) => {
    try {

        console.log("I love coffee");

        const coffees = await Coffee.find({});
        return res.status(200).json(coffees);
    }
    catch(error) {
        return res.status(500).json({error: error.message});
    }
}

const addCoffee = async(req, res) => {

    console.log(req.body);

    try {
        const data = req.body;
        const coffee = await Coffee.create(data);
        return res.status(201).json({status: "Success", message: "Coffee Added", data: coffee});
    }
    catch (error) {
        return res.status(500).json({error: error.message});
    }
}

module.exports = {getCoffee, addCoffee};