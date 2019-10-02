const express = require('express');
const mongoose = require('mongoose');
const { ObjectID } = require('mongodb');

const { Product } = require('./model/product');

const port = process.env.PORT || 8080;
const app = express();
console.log(process.env.MONGO_URI);

const mongoUrl = process.env.MONGO_URI || 'mongodb://localhost:27017/pms';

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json());
// 'mongodb://kush:123456@ds011800.mlab.com:11800/kush'
// mongoose connection


//path is used to go back a directory neatly by __dirname , '../public'
const path = require('path');
const publicPath = path.join(__dirname, './build');

//setup the server to serve static files from the public folder
app.use(express.static(publicPath));

mongoose.connect(mongoUrl, {
	useNewUrlParser: true,
	useUnifiedTopology: true
})
const db = mongoose.connection;


app.get('/', function (req, res) {
	res.sendFile('index.html');
});

app.get('/fetchProducts', (req, res) => {
	Product.find({ active: 'true' }).sort({ createdAt: -1}).then(prods => {
		if (prods.length < 1) return res.status(200).send({ message: "Product list iS empty" });
		res.status(200).send(prods);
	})
})
app.get('/test', (req, res) => {
	console.log("test api hit");
	res.send("hell0");
})
app.post('/saveProduct', (req, res) => {
	let newProduct = new Product(req.body);
	newProduct.save().then(prod => {
		res.status(201).send(prod);
	})
		.catch((err) => {
			if (err.name == 'ValidationError') {
				res.status(422).json(err);
			} else {
				res.status(500).json(err);
			}
		})
})
app.patch('/deleteProduct/:id', (req, res) => {
	let { id } = req.params;

	if (!ObjectID.isValid(id))
		return res.status(404).send({ message: 'Id is not valid' });

	Product.findByIdAndUpdate(id, { $set: { active: false } }, { new: true }).then(prod => {
		if (prod)
			res.status(200).send(prod);
		else {
			console.log("Invalid prod Id");
			res.status(404).send({ message: "ProductId is Invalid" });

		}
	})
		.catch(err => {
			console.log(err);

		})
})
app.put('/editProduct/:id', (req, res) => {
	let { id } = req.params;
	let body = req.body;

	body.updated = Date.now();

	if (!ObjectID.isValid(id))
		return res.status(404).send();
	Product.findByIdAndUpdate(id, { $set: body }, { new: true }).then(prod => {
		if (prod)
			res.send(prod);
		else {
			res.status(404).send({ message: "ProductId is Invalid" });

		}
	})
})

db.on('error', () => {
	console.log('Mongo db connection error');
})

// create server using express
app.listen(port, () => {
	console.log(`Server is up on port ${port}`);
})