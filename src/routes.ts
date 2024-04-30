import { Router } from 'express';
import multer from 'multer';

/* ÁREA DE IMPORTAÇÃO DOS CONTROLLERS */
import { CreateUserController } from './Controllers/user/CreateUserController';
import { AuthUserController } from './Controllers/user/authUserController';
import { DetailUserController } from './Controllers/user/DetailUserController';
import { isAuthenticated } from './middlewares/isAuthenticated';
import { CreateCategoryController } from './Controllers/category/CreateCategoryController';
import { ListCategoryController } from './Controllers/category/ListCategoryController';
import uploadConfig from './config/multer';
import { CreateProductController } from './Controllers/product/CreateProductController';
import { ListByCategoryController } from './Controllers/product/ListByCategoryController';

const router = Router()

const upload = multer(uploadConfig.upload("./tmp"));

router.post('/user', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/userinfo', isAuthenticated, new DetailUserController().handle)
router.post('/category', isAuthenticated, new CreateCategoryController().handle)
router.get('/listcategory', isAuthenticated, new ListCategoryController().handle)

// Rotas para Product //

router.post('/product', isAuthenticated, upload.single('file') ,new CreateProductController().handle);
router.get('/category/product', isAuthenticated , new ListByCategoryController().handle);

export{router}