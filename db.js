const mongoose = require('mongoose');

const { MONGO_USERNAME,
MONGO_PASSWORD,
MONGO_HOSTNAME,
MONGO_PORT,
MONGO_DB
} = process.env;

const options = {
        useNewUrlParser: true,
        reconnectTries: 30,
        reconnectInterval: 500,
        connectionTimeoutMS: 100000,
};

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

mongoose.connect(url, options).then( function(){
        console.log('Mongo connect');
})
        .catch(function(err)){
        console.log(err);
});
