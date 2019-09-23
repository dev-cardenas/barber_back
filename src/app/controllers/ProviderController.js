import User from '../models/User';
import File from '../models/File';

class ProviderController {
  async index(req, res) {
    const providers = await User.findAll({
      where: { provider: true },
      attributes: ['id', 'name', 'email', 'avatar_id'],
      includes: [
        { mode: File, as: 'avatar', attributes: ['id', 'name', 'path'] },
      ],
    });
    return res.json(providers);
  }
}

export default new ProviderController();
