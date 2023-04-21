export const administrator = {
  user_role: 'administrator',
  description: 'Admin',
};

export const provider = {
  user_role: 'provider',
  description: 'Provider',
};

export const employee = {
  user_role: 'employee',
  description: 'Employee',
};

export const roles = [
  administrator,
  provider,
  employee,
  {
    user_role: 'customer',
    description: 'Customer',
  },
];
