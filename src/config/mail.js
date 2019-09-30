export default {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  default: {
    from: 'GoBarber Company <noreply@gobarber.com>',
  },
};

/**
 * Services options
 * Amazon SEs
 * Mailgun
 * Sparkpost
 * Mandril (Mailchimp)
 * Mailtrap(DEV) //solo para dev
 */
