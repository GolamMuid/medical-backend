import express from 'express';
import { BannerRoutes } from '../modules/banner/banner.route';
import { ourServiceRoutes } from '../modules/service/ourService.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/banner',
    route: BannerRoutes,
  },
  {
    path: '/our-service',
    route: ourServiceRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
