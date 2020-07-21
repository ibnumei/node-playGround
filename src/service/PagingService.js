const {
    pagingDao
} = require('../dao/index');
const {
    PagingNotFound
} = require('../errors/index');

class PagingService {

    async getPaging() {
        let result ;

        result = pagingDao.fetchPaging()
        if(!result) throw new PagingNotFound();
        return result;
    }
}

module.exports = PagingService
