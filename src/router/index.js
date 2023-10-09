import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import LearningPage from '../components/LearningPage.vue'
import BooksPage from '../components/BooksPage.vue'
import Courses from '../components/LearnPage/Courses.vue'
import Youtube from '../components/LearnPage/YoutubePage.vue'
import Tiktok from '../components/LearnPage/TiktokPage.vue'
import Facebook from '../components/LearnPage/FacebookPage.vue'
import Math from '../components/Math/MathHome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/HomePage',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/Learning',
      name: 'Learning',
      component: LearningPage
    },
    {
      path: '/Books',
      name: 'Books',
      component: BooksPage
    },
    {
      path: '/Courses',
      name: 'Courses',
      component: Courses
    },
    {
      path: '/Youtube',
      name: 'Youtube',
      component: Youtube
    },
    {
      path: '/Tiktok',
      name: 'Tiktok',
      component: Tiktok
    },
    {
      path: '/Facebook',
      name: 'Facebook',
      component: Facebook
    },
    {
      path: '/Math',
      name: 'Math',
      component: Math
    },


  ]
})

export default router
