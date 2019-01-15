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
        if (err) return res.json( {success: false, error: err });
        return res.json({ success: true, data: items})
    });
});

// Post items to db
router.post('/items', (req, res) => {
    const item = new Item();

    const { name, carbs } = req.body;

    if (!name || !carbs) {
        // Throw error
        return res.json( {
            success: false,
            error: "Please give this item a name and number of carbs"
        });
    }

    item.name = name;
    item.carbs = carbs;
    item.save(err => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});

// User router config when we call /api
app.use('/api', router);

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));