import Admin from '../pages/Admin';
import GuestList from '../pages/Admin/GuestList';
import Booking from '../pages/Booking';
import Home from '../pages/Home';
import Login from '../pages/Login';
import MyBooking from '../pages/MyBooking';
import AdminBookingDetail from '../pages/AdminBookingDetail';
import AddSession from '../pages/Admin/AddSession';

// 不需要登录即可访问的路由
export const commonRoutes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/booking', component: Booking },
  { path: '/index.html', component: Home },
  { path: '/admin', component: Admin },
];

// 需要登录访问的路由
export const authRoutes = [
  { path: '/mybooking', component: MyBooking },
  // { path: '/admin', component: Admin },
  { path: '/admin/guestlist', component: GuestList },
  { path: '/admin/bookingdetail', component: AdminBookingDetail },
  { path: '/admin/addsession', component: AddSession },

];
