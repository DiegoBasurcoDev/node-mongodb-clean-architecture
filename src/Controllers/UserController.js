const GetAllUser = require('../use_cases/GetAllUser');

module.exports = (dependencies) => {
    this.userRepository = dependencies.DatabaseService;

    const getAllUsers = async (req, res, next) => {
        const GetAllUsersQuery = await GetAllUser(this.userRepository);

        GetAllUsersQuery.Execute().then((users) => {
            res.json(users);
        }, (err) => {
            next(err);
        });
    }

    return {
        getAllUsers
    }
}