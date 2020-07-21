const { sequelize } = require('../db/index');

class PagingController {
    constructor(service) {
        this._service = service;
        this.getPaging = this.getPaging.bind(this);
    }

    async getPaging (req, res) {
        // const { type } = req.body;
        const result = await this._service.getPaging();
        res.status(200).json(result)
    }
}

module.exports = PagingController;
