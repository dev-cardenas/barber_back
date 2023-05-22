import { object, string, ref } from 'yup';

export const userSchema = object({
  email: string().email().trim().required('Please enter your email'),
  name: string().trim().required('Please enter your name'),
  last_name: string().trim().required('Please enter your last name'),
  password: string()
    .required('Please enter your password')
    .min(8, 'at least 8 chars')
    .matches(/[a-z]/, 'at least one lowercase char')
    .matches(/[A-Z]/, 'at least one uppercase char')
    .matches(/[a-zA-Z]+[^a-zA-Z\s]+/, 'at least 1 number or special char (@,!,#, etc).')
    .trim(),
  password_confirm: string()
    .required('Please enter your password confirm')
    .oneOf([ref('password'), null], "Passwords don't match")
    .trim(),
});
