import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import { getSecret } from './secrets';
import Item from './models/item';

const app = express();
const router = express.Router();

// Run Express on this port
const API_PORT = 3001;

// Configure connection to Mongo
mongoose.connect(getSecret('dbUri'), {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Set the app to use bodyParser
app.use(bodyParser.urlencoded( {extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

// Set the route and initialize API
router.get('/', (req, res) => {
    res.json({message: 'Whaddup fam' });
});

// Find items
router.get('/items', (req, res) => {
    Item.find((err, items) => {
        if (err) return res.json( {success: false, error: err.message });
        return res.json({ success: true, data: items})
    });
});

// Post items to db
router.post('/items', (req, res) => {
    const item = new Item();

    const { name, carbs, user } = req.body;

    if (!name || !carbs) {
        // Throw error
        return res.json( {
            success: false,
            error: "Please give this item a name and number of carbs"
        });
    }

    item.name = name;
    item.carbs = carbs;
    item.user = user;
    item.save(err => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});

// Edit items on the db
router.post('/updateData', (req, res) => {
    const { _id, update } = req.body;
    console.log(_id)
    console.log(update)
    Item.findByIdAndUpdate(_id, update, err => {
        if (err) return res.json( {success: false, error: err.message });
        return res.json({success: true})
    })
})

// Delete an item
router.post('/deleteItem', (req, res) => {
    const { _id } = req.body;
    console.log(`Deleting ${_id}`)
    Item.findByIdAndDelete(_id, err => {
        if (err) return res.json( { success: false, error: err.message });
        return res.json({success: true})
    })
})

// CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// User router config when we call /api
app.use('/api', router);

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));