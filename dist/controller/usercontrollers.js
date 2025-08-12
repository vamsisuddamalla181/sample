import User from "../models/user.js";
class UserController {
    async createUser(req, res) {
        try {
            const { username, email } = req.body;
            const user = new User({ username, email });
            await user.save();
            res.status(201).json(user);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    async getAllUsers(req, res) {
        try {
            const users = await User.find();
            res.json(users);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}
export default new UserController;
//# sourceMappingURL=usercontrollers.js.map