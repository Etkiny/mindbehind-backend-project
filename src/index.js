const app = require('./app');
const sequelize = require('./config/db');

const port = process.env.PORT || 3000;

const startServer = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connected.');

        app.listen(port, () => {
            console.log(`Server running at http://localhost:${port}`);
        });
    } catch (err) {
        console.error('Unable to connect to the database:', err);
    }
};

startServer();
