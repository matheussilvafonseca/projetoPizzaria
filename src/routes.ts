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
import { CreateOrderController } from './Controllers/order/CreateOrderController';
import { RemoveOrderController } from './Controllers/order/RemoveOrderController';
import { AddItemController } from './Controllers/order/AddItemController';
import { SendOrderController } from './Controllers/order/SendOrderController';
import { RemoveItemController } from './Controllers/order/RemoveItemController';
import { ListOrderOpenController } from './Controllers/order/ListOrderOpenController';
import { CloseOrderController } from './Controllers/order/CloseOrderController';

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

//rotas para pedido//

router.post('/order', isAuthenticated, new CreateOrderController().handle);
router.delete('/removeorder', isAuthenticated, new RemoveOrderController().handle);
router.post('/additem', isAuthenticated, new AddItemController().handle);
router.put('/order/send', isAuthenticated, new SendOrderController().handle);


// rota para o que foi pedido do trabalho
router.delete('/removeitem', isAuthenticated, new RemoveItemController().handle);
router.get('/listorderopen', isAuthenticated, new ListOrderOpenController().handle);
router.put('/closeorder', isAuthenticated, new CloseOrderController().handle);

export{router}