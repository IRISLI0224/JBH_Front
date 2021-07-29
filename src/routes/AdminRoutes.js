import Admin from '../pages/Admin';
import AdminBookingDetail from '../pages/AdminBookingDetail';

// 不需要登录即可访问的路由
const adminRoutes = [
  { path: '/admin', component: Admin },
  { path: '/admin/bookingdetail', component: AdminBookingDetail },
];

export default adminRoutes;
