import * as bodyParser from 'body-parser';
import * as methodOverride from 'method-override';
import * as cookieParser from 'cookie-parser';
import * as express_graphql from 'express-graphql';
import * as graphqlResolver from '../graphql/resolvers';
import * as graphqlSchema from '../graphql/schemas';
import { errorType } from '../utils/errors';

export default app => {
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(methodOverride());
    app.use(cookieParser());

    app.use(
        '/graphql',
        express_graphql({
            //We can name  the graphql middleware root whatever we want/ we use only post requests to hit this route
            schema: graphqlSchema, //The GraphQL schema which should be attached to the specific endpoint
            rootValue: graphqlResolver, //The root resolver object
            graphiql: true,
            formatError(err) {
                if (!err.originalError) return err;
                const error = errorType[err.message];
                if (error) return { message: error.message, status: error.statusCode };
                else {
                    const data = err.originalError.data;
                    const message = err.message || 'An error occured.';
                    const code = err.originalError.code || 500;
                    return { message: message, status: code, data: data };
                }
            }
        })
    );
}