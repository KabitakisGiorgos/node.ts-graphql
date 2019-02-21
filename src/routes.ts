import thingRouter from './api/thing';

export default (app) => {

    // Insert routes below
    app.use('/api/things', thingRouter);
    app.route('/test').get((req, res) => {
        res.sendStatus(200).send('Hello');
    })

    // All other routes should return 400: Bad request
    app.route('/*').get((req, res) => {
        res.sendStatus(400).end();
    });
}