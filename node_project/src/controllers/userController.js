exports.getUser = (req, res) => {
    const userId = req.params.id;
    res.json({ message: `User ID: ${userId}` });
};
