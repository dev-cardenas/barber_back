import User from '../models/User';

class UserController {
  async store(req, res) {
    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }
    const { id, name, email, provider } = await User.create(req.body);

    return res.json({ id, name, email, provider });
  }

  async update(req, res) {
    const { email, old_password } = req.body;

    const user = await User.findByPk(req.user_id);

    if (email !== user.email) {
      const userExists = await User.findOne({ where: { email } });
      if (userExists) {
        return res.status(400).json({ error: 'User already exists' });
      }
    }

    if (old_password && !(await user.checkPassword(old_password))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { id, name, provider } = await User.create(req.body);

    return res.json({ id, name, email, provider });
  }
}

export default new UserController();
