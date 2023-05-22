export const typeUsers = [
  {
    type: 'client',
    description: 'It is the client who creates the schedules',
  },
  {
    type: 'provider',
    description: 'Is who receives the schedules',
  },
  {
    type: 'provider_employee',
    description: "is the supplier's employee",
  },
]

export const typeUserClient = typeUsers[0]
export const typeUserProvider = typeUsers[1]
export const typeUserEmployee = typeUsers[2]
