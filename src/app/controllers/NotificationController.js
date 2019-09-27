import User from '../models/User';
import Notification from '../schemas/Notification';

class NotificationController {
  async index(req, res) {
    /**
     * Check if provider_id is a provider
     */
    const checkProvider = await User.findOne({
      where: { id: req.user_id, provider: true },
    });

    if (!checkProvider) {
      return res
        .status(401)
        .json({ error: 'Only provider can load notifications' });
    }

    const notifications = await Notification.find({
      user: req.user_id,
    })
      .sort({ createdAt: 'desc' })
      .limit(20);

    return res.json(notifications);
  }

  async update(req, res) {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: 'Not return params' });
    }

    const notification = await Notification.findByIdAndUpdate(
      id,
      {
        read: true,
      },
      { new: true } // despues de actualizar retorna la nueva actualizacion
    );

    return res.json(notification);
  }
}

export default new NotificationController();
