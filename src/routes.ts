import { Router } from 'express';
// Sessions
import { SessionController } from './controllers/SessionControllers/SessionController';

// User
import {
  CreateUserAdminController,
  CreateUserEmployeeController,
  CreateUserController,
  GetAllUserController,
  GetUserController,
} from 'controllers/UserControllers/index';
// Roles
import {
  CreateRoleController,
  GetAllRolesController,
  GetRolesController,
  UpdateRolesController,
} from 'controllers/RolesControllers/index';
// Permissions
import {
  CreatePermissionController,
  GetAllPermissionController,
  GetPermissionController,
  UpdatePermissionController,
} from 'controllers/PermissionsControllers/index';

import { CreateUserAccessControlListController } from './controllers/CreateUserAccessControlListController';
import { CreateRolePermissionController } from './controllers/CreateRolePermissionController';

// middlewares
import { ensuredAuthenticated } from './middleware/ensuredAuthenticated';
import { can, is } from './middleware/permissions';

const routes = Router();

routes.get('/hola', (req, res) => {
  return res.json({ entre: 'Hola' });
});

routes.post('/login', new SessionController().handle);
routes.post('/users', new CreateUserController().handle);

routes.post('/employee', is(['admin', 'provider']), new CreateUserEmployeeController().handle);

// admin
routes.post('/administrator', new CreateUserAdminController().handle);
routes.get('/users', ensuredAuthenticated(), is(['admin']), new GetAllUserController().handle);
routes.get('/users/:id_user', ensuredAuthenticated(), is(['admin']), new GetUserController().handle);

// admin roles
routes.post('/roles', ensuredAuthenticated(), is(['admin']), new CreateRoleController().handle);
routes.put('/roles/:id_user_roles', ensuredAuthenticated(), is(['admin']), new UpdateRolesController().handle);
routes.get('/roles', ensuredAuthenticated(), is(['admin']), new GetAllRolesController().handle);
routes.get('/roles/:id_user_roles', ensuredAuthenticated(), is(['admin']), new GetRolesController().handle);
routes.post('/users/acl', ensuredAuthenticated(), is(['admin']), new CreateUserAccessControlListController().handle);
routes.post('/roles/:id_user_roles', is(['admin']), new CreateRolePermissionController().handle);

// admin permissions
routes.post('/permissions', ensuredAuthenticated(), is(['admin']), new CreatePermissionController().handle);
routes.put(
  '/permissions/:id_user_permissions',
  ensuredAuthenticated(),
  is(['admin']),
  new UpdatePermissionController().handle,
);
routes.get('/permissions', ensuredAuthenticated(), is(['admin']), new GetAllPermissionController().handle);
routes.get(
  '/permissions/:id_user_permissions',
  ensuredAuthenticated(),
  is(['admin']),
  new GetPermissionController().handle,
);

export default routes;
