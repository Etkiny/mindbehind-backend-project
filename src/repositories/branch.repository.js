const { Branch } = require('../models');

const getAllBranches = async () => {
  return await Branch.findAll();
};

const getBranchById = async (branch_id) => {
  return await Branch.findByPk(branch_id);
};

const updateBranch = async (branch_id, branchData) => {
  return await Branch.update(branchData, {
      where: { branch_id }
  });
};

module.exports = {
  getAllBranches,
  getBranchById,
  updateBranch
};
