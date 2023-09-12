import express from 'express';
import { BannerRoutes } from '../modules/banner/banner.route';
import { GalleryRoutes } from '../modules/gallery/gallery.route';
import { InformationRoutes } from '../modules/information/information.route';
import { ourServiceRoutes } from '../modules/service/ourService.route';
import { VideoRoutes } from '../modules/video/video.route';

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
  {
    path: '/information',
    route: InformationRoutes,
  },
  {
    path: '/gallery',
    route: GalleryRoutes,
  },
  {
    path: '/video',
    route: VideoRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
