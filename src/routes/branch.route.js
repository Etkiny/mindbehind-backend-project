const express = require('express');
const router = express.Router();
const branchController = require('../controllers/branch.controller');
const authorize = require('../middleware/branch.middleware');
const ROLES = require('../constants/roleConstants.js');

router.get(
    '/branches', 
    authorize(ROLES.ALL), 
    branchController.getAllBranches
);
router.get(
    '/branches/:id',
    authorize(ROLES.ALL),
    branchController.getBranchById
);
router.put(
    '/branches/:id',
    authorize(ROLES.OWNER),
    branchController.updateBranch
);

module.exports = router;
