const express = require('express')


const { ApplicationController } = require('../controller/index');
const { ApplicationService } = require('../service/index');
const { handleError } = require('../middleware/handleError');


class ApplicationRoute {
    constructor(app) {
        this._app = app;
    }

    getRoute() {
        const router = express.Router();
        const applicationService = new ApplicationService();
        const applicationController = new ApplicationController(applicationService, this._app);


        router.post('/applications', handleError(applicationController.postApplication));

        return router
    }
}
module.exports = ApplicationRoute;
