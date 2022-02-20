import Admin from "./page/Admin";
import Auth from "./page/Auth";
import Basket from "./page/Basket";
import ToyPage from "./page/ToyPage";
import Shop from "./page/Shop";
import { ADMIN_ROUTE, BASKET_ROUTE,TOY_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "./utils/consts";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
  {
    path: BASKET_ROUTE,
    Component: Basket,
  },
]
export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: Shop,
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    path: TOY_ROUTE + '/:id',
    Component: ToyPage,
  },
]
