import { Router } from 'express';

/* ÁREA DE IMPORTAÇÃO DOS CONTROLLERS */
import { CreateUserController } from './Controllers/user/CreateUserController';
import { AuthUserController } from './Controllers/user/authUserController';
import { DetailUserController } from './Controllers/user/DetailUserController';
import { isAuthenticated } from './middlewares/isAuthenticated';
import { CreateCategoryController } from './Controllers/category/CreateCategoryController';
import { ListCategoryController } from './Controllers/category/ListCategoryController';

const router = Router()

// router.get('/teste', (req: Request, res: Response) => {
//     return res.json({nome: 'Kaique'})
// })

router.post('/user', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/userinfo', isAuthenticated, new DetailUserController().handle)
router.post('/category', isAuthenticated, new CreateCategoryController().handle)
router.get('/listcategory', isAuthenticated, new ListCategoryController().handle)

export{router}