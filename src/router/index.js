import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/question/2',
    name: 'q2',
    component: () => import('../views/Question2.vue'),
  },
  {
    path: '/question/3',
    name: 'q3',
    component: () => import('../views/Question3.vue'),
  },
  {
    path: '/question/4',
    name: 'q4',
    component: () => import('../views/Question4.vue'),
  },
  {
    path: '/question/5',
    name: 'q5',
    component: () => import('../views/Question5.vue'),
  },
  {
    path: '/finalpage',
    name: 'Final',
    component: () => import('../views/FinalPage.vue'),
  },
  {
    path: '/data',
    name: 'Data',
    component: () => import('../views/Data.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
