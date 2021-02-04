const { pagingDao } = require('../dao/index');
const { PagingNotFound } = require('../errors/index');

class ApplicationService {

    async getPaging() {
        let result;

        result = pagingDao.fetchPaging()
        if (!result) throw new PagingNotFound();
        return result;
    }

    submitApplicationTotal() {
        let result = {
            resultArrayNumber: [],
            arrayTotal: 0
        }
        let indexData = 0;
        for(indexData = 0; indexData < 8; indexData++) {
            let resultGenerator = this.getRandomInt();
            result.resultArrayNumber.push(resultGenerator)
        }
        result.arrayTotal = result.resultArrayNumber.reduce((first, second) => {
            return first + second;
        }, 0);
        return result;
    }
    getRandomInt() {
        return Math.floor(Math.random() * (25 - 5 + 5)) + 2;
    }
}

module.exports = ApplicationService
