module.exports = function asyncHandler(cb){
    return async (req, res, next) => {
        try{
            await cb(req, res, next)
        } catch(err){
            res.status(500).json({ message: err.message });
        }
    }
}