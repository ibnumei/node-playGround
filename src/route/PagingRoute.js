const express = require('express')

const router = express.Router();
const { PagingController } = require('../controller/index');
const { PagingService } = require('../service/index');
const { handleError } = require('../middleware/handleError');

const pagingService = new PagingService();
const pagingController = new PagingController(pagingService);


router.get('/paging', handleError(pagingController.getPaging));

module.exports = router;
