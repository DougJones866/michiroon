import {
  createRouter,
  createWebHistory
} from 'vue-router';
// import Home from '../views/MainPage.vue'
const MainPage = () => import('../views/MainPage.vue');
const About = () => import('../views/About.vue');
const Portfolio = () => import('../views/Portfolio.vue');
const Contact = () => import('../views/Contact.vue');


const router = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: '/',
          component: MainPage
        },
        {
          path: '/about',
          component: About,
        },
        {
          path: '/portfolio',
          component: Portfolio
        },
        {
          path: '/contact',
          component: Contact
        },

      ]

    })


      export default router;