const branchRepository = require('../repositories/branch.repository');

const getAllBranches = async () => {
    return await branchRepository.getAllBranches();
};

const getBranchById = async (branch_id) => {
    return await branchRepository.getBranchById(branch_id);
};

const updateBranch = async (branch_id, branchData) => {
    const [updatedRows] = await branchRepository.updateBranch(branch_id, branchData);
    if (updatedRows) {
        return await branchRepository.getBranchById(branch_id);
    }
    return null;
};

module.exports = {
    getAllBranches,
    getBranchById,
    updateBranch,
};
