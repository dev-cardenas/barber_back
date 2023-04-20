import { Router } from 'express';
import { SessionController } from './controllers/SessionController';
import { CreateUserController } from './controllers/CreateUserController';
import { CreateRoleController } from './controllers/CreateRoleController';
import { CreatePermissionController } from './controllers/CreatePermissionController';
import { CreateUserAccessControlListController } from './controllers/CreateUserAccessControlListController';
import { CreateRolePermissionController } from './controllers/CreateRolePermissionController';

// middlewares
import { ensuredAuthenticated } from './middleware/ensuredAuthenticated';
import { can, is } from './middleware/permissions';

const routes = Router();

routes.post('/users', new CreateUserController().handle);
routes.post('/login', new SessionController().handle);

routes.post('/roles', ensuredAuthenticated(), is(['admin']), new CreateRoleController().handle);

routes.post('/permissions', ensuredAuthenticated(), new CreatePermissionController().handle);

routes.post('/users/acl', ensuredAuthenticated(), new CreateUserAccessControlListController().handle);

routes.post('/roles/:roleId', new CreateRolePermissionController().handle);

routes.get('/hola', (req, res) => {
  return res.json({ entre: 'Hola' });
});

export default routes;
