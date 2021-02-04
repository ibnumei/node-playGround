const { sequelize } = require('../db/index');

class ApplicationController {
    constructor(service, app) {
        this._service = service;
        this.postApplication = this.postApplication.bind(this);
        this._app = app;
    }

    async postApplication(req, res) {
        //get io from app.locals if want send to service
        const io = this._app.locals.io
        let payload = req.body;
        const result = this._service.submitApplicationTotal();
        payload = { ...payload, ...result}
        this._app.locals.io.sockets.emit('updateApplication', payload);
        
        res.status(200).json()

    }
}

module.exports = ApplicationController;
