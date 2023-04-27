import {
 IconLayoutDashboard,IconUser,IconShoppingCart,IconMenuOrder,IconStar
} from '@tabler/icons';

import { uniqueId } from 'lodash';

const Menuitems = [
  {
    navlabel: true,
    subheader: 'Home',
  },

  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: IconLayoutDashboard,
    href: '/dashboard',
  },
  {
    navlabel: true,
    subheader: 'Components',
  },
  {
    id: uniqueId(),
    title: 'Users',
    icon: IconUser,
    href: '/admin/users',
  },
  {
    id: uniqueId(),
    title: 'Products',
    icon: IconShoppingCart,
    href: '/admin/products',
  },
  {
    id: uniqueId(),
    title: 'Orders',
    icon: IconMenuOrder,
    href: '/admin/orders',
  },
  {
    id: uniqueId(),
    title: 'Reviews',
    icon: IconStar,
    href: '/admin/reviews',
  },
  
];

export default Menuitems;
