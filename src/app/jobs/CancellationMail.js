import { format, parseISO } from 'date-fns';
import es from 'date-fns/locale/es';
import Mail from '../../lib/Mail';

class CancellationMail {
  get key() {
    return 'CancellationMail';
  }

  async handle({ data }) {
    const { appointment } = data;
    const { provider, user } = appointment;

    await Mail.sendMail({
      to: `${provider.name} <${provider.email}>`,
      subject: 'Cita cancelada',
      template: 'cancellation',
      context: {
        provider: provider.name,
        user: user.name,
        date: format(
          parseISO(appointment.date),
          "dd 'de' MMMM', a las' H:mm' hs'",
          {
            locate: es,
          }
        ),
      },
    });
  }
}

export default new CancellationMail();
