import { Router } from 'express';
import { SessionController } from './controllers/SessionController';
import { CreateUserController } from './controllers/CreateUserController';
import { CreateRoleController } from './controllers/CreateRoleController';

// Permissions
import { CreatePermissionController } from 'controllers/PermissionsControllers/CreatePermissionController';
import { GetAllPermissionController } from 'controllers/PermissionsControllers/GetAllPermissionController';
import { GetPermissionController } from 'controllers/PermissionsControllers/GetPermissionController';
import { UpdatePermissionController } from 'controllers/PermissionsControllers/UpdatePermissionController';

import { CreateUserAccessControlListController } from './controllers/CreateUserAccessControlListController';
import { CreateRolePermissionController } from './controllers/CreateRolePermissionController';

// middlewares
import { ensuredAuthenticated } from './middleware/ensuredAuthenticated';
import { can, is } from './middleware/permissions';

const routes = Router();

routes.post('/users', new CreateUserController().handle);
routes.post('/login', new SessionController().handle);

// routes.post('/roles', ensuredAuthenticated(), new CreateRoleController().handle);
routes.post('/roles', ensuredAuthenticated(), is(['admin']), new CreateRoleController().handle);

routes.post('/permissions', ensuredAuthenticated(), is(['admin']), new CreatePermissionController().handle);
routes.get('/permissions', ensuredAuthenticated(), new GetAllPermissionController().handle);
routes.get('/permissions/:id_user_permissions', ensuredAuthenticated(), new GetPermissionController().handle);
routes.put('/permissions/:id_user_permissions', ensuredAuthenticated(), new UpdatePermissionController().handle);
routes.patch('/permissions', ensuredAuthenticated(), new GetAllPermissionController().handle);

routes.post('/users/acl', ensuredAuthenticated(), new CreateUserAccessControlListController().handle);

routes.post('/roles/:id_user_roles', new CreateRolePermissionController().handle);

routes.get('/hola', (req, res) => {
  return res.json({ entre: 'Hola' });
});

export default routes;
