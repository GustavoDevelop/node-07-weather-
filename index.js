
require('dotenv').config();



const startServer = async () => {
    require('./loaders')();
}

startServer();



