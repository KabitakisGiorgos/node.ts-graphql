import { Request, Response } from 'express';

/**
 * Creates a controller for Things 
 * 
 * @class ThingController
 */
class ThingController {

    /**
     * Creates an instance of ThingController.
     * @memberof ThingController
     */
    constructor() { }

    public index(req: Request, res: Response) {
        res.status(200).send('Hello World');
    }
}

export default new ThingController();



