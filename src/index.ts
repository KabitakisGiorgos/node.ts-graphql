import * as express from 'express';
import * as mongoose from 'mongoose';
import * as http from 'http';
import registerRoutes from './routes';
import * as bluebird from 'bluebird';
import config from './config';
import expressConfig from './config/express';

mongoose.Promise = bluebird;

if (config.connectToMongo) {
    mongoose
        .connect(
            config.mongo.uri,
            config.mongo.options
        )
        .then(() => {
            console.log('MongoDB is connected on %s', config.mongo.uri);
        })
        .catch(err => {
            console.log('MongoDB connection error');
            console.error(err);
        });
}

let app = express();
let server = http.createServer(app);
expressConfig(app);
registerRoutes(app);

setImmediate(startServer);

function startServer() {
    server.listen(config.port, function () {
        console.info(
            `Express server listening on ${config.port}, in ${app.get('env')} mode`
        );
    });
}