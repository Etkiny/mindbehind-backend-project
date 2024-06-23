const branchService = require('../services/branch.service');

exports.getAllBranches = async (req, res) => {
    try {
        const result = await branchService.getAllBranches();
        if (result && result.length > 0) {
            res.status(200).json({ message: 'Branch List: ', branch: result });
        } else {
            res.status(404).json({ message: 'Branch not found' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.getBranchById = async (req, res) => {
    try {
        const branch_id = req.params.id;
        const result = await branchService.getBranchById(branch_id);
        if (result) {
            return res.status(200).send(result);
        } else {
            return res
                .status(404)
                .json({ message: 'No branch found with the given ID' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.updateBranch = async (req, res) => {
    try {
        const { id: branch_id } = req.params;
        const branchData = req.body;
        const result = await branchService.updateBranch(branch_id, branchData);

        if (result) {
            res.status(200).json({
                message: 'Branch updated successfully',
                branch: result,
            });
        } else {
            res.status(404).json({ message: 'Branch not found' });
        }
    } catch (err) {
        console.error(`Error updating branch: ${err.message}`);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
