const {dbConnect} = require('./db');
const express = require('express');
const router = require('./routes/coffeeRoutes');
const cors = require('cors');

const app = express();

app.use(express.urlencoded({extended: true})).use(express.json());
app.use(cors());


app.use('/coffee', router);


// const editCoffee = async(req, res) => {

//     try {
//         const data = req.body;
//         const coffee= await Coffee.findOneAndUpdate({})
//     }
//     catch (error) {
//         return res.status(500).json({error: error.message});
//     }

// }


dbConnect((error) => {
    if(!error) {
        app.listen(5000, ()=> {
            console.log("App listening at 5000");
        });
    }
});

