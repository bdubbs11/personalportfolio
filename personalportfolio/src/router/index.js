import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ProjectDisplay from '../views/ProjectDisplay.vue'
import NotFound from '../views/NotFound.vue'

// need to not have the loading screen run every time i switch tabs
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/project-display/:id',
      name: 'project-display',
      component: ProjectDisplay,
      props: true,
    },

    { 
      path: '/:pathMatch(.*)*',
      name: 'NotFound', 
      component: NotFound 
    },
  ],
})

export default router
