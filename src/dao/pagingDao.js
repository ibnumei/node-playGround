const { pagingModel }  = require('../db/index');

class pagingDao {
    static fetchPaging() {
        let result = {}
        result  = {
            id: 1,
            name: 'test'
        }
        return pagingModel.findAll();
    }
}

module.exports = pagingDao;
