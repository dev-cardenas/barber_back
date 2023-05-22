import { CreateRoleService, GetWithUserRoleService } from 'services/RolesServices/index';
// import { CreatePermissionService } from 'services/PermissionsServices/index';
import { CreateUserAdminService, CreateUserService } from 'services/UserServices/index';
import { admins, customers, providers, roles } from 'constants/index';
import { administrator } from 'constants/roles';
export async function loadDataInitDB() {
  const createRoleService = new CreateRoleService();
  const getRolesServices = new GetWithUserRoleService();

  const roleAdmin = await getRolesServices.execute({ user_role: administrator.user_role });

  if (!(roleAdmin instanceof Error)) {
    console.log('Data is ok');
    return;
  }

  const promiseRoles = roles.map(async (rol) => {
    const { user_role, description } = rol;

    const result = await createRoleService.execute({ user_role, description });

    if (result instanceof Error) {
      return {};
    }

    return result;
  });

  await Promise.all(promiseRoles);

  const createUserAdminService = new CreateUserAdminService();
  const createUserService = new CreateUserService();

  const adminsSaved = admins.map(async (admin) => {
    return await createUserAdminService.execute({ ...admin });
  });

  const customersSaved = customers.map(async (customer) => {
    return await createUserService.execute({ ...customer });
  });

  const providersSaved = providers.map(async (provider) => {
    return await createUserService.execute({ ...provider });
  });

  await Promise.all([adminsSaved, customersSaved, providersSaved]);
  console.log('Saved data');
}
