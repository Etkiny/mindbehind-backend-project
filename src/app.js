const express = require('express');
const app = express();
const branchRoutes = require('./routes/branch.route');

app.use(express.json());

app.use('/api', branchRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to branches!');
});

module.exports = app;
