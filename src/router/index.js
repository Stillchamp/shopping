import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import about from "../views/AboutView.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta:{
      title:"PetHome"
    }
  },
  {
    path: '/about',
    name: 'about',
    component: about,
    meta:{
      title:"AboutPet"
    }
   
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
})

export default router;
