import { createRouter, createWebHistory } from 'vue-router'

// TODO พวกหน้าหลัก
import HomePage from '../components/HomePage.vue'
import BooksPage from '../components/BooksPage.vue'
import LearningPage from '../components/LearningPage.vue'

// ?? พวกใน folder LearnPage
import Courses from '../components/LearnPage/Courses.vue'
import Youtube from '../components/LearnPage/YoutubePage.vue'
import Tiktok from '../components/LearnPage/TiktokPage.vue'
import Facebook from '../components/LearnPage/FacebookPage.vue'

// !! พวกใน folder Math
import Math from '../components/Math/MathHome.vue'
import CompoundInterest from '../components/Math/CompoundInterest.vue'
import ReTire from  '../components/Math/ReTire.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // ?? หน้าหลัก home
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    // ?? หน้าหลัก home 2
    {
      path: '/HomePage',
      name: 'HomePage',
      component: HomePage
    },
    // ?? หน้า แหล่งเรียนรู้
    {
      path: '/Learning',
      name: 'Learning',
      component: LearningPage
    },
    // ?? หน้า หนังสือ
    {
      path: '/Books',
      name: 'Books',
      component: BooksPage
    },
    // ?? หน้า คอร์สที่รวบรวมมา
    {
      path: '/Courses',
      name: 'Courses',
      component: Courses
    },
    // ?? หน้า Youtube
    {
      path: '/Youtube',
      name: 'Youtube',
      component: Youtube
    },
    // ?? หน้า Tiktok
    {
      path: '/Tiktok',
      name: 'Tiktok',
      component: Tiktok
    },
    // ?? หน้า FaceBook
    {
      path: '/Facebook',
      name: 'Facebook',
      component: Facebook
    },
    // ?? หน้า Math
    {
      path: '/Math',
      name: 'Math',
      component: Math
    },
    // ?? หน้า คำนวณ ดอกเบี้ยทบต้น
    {
      path: '/CompoundInterest',
      name: 'CompoundInterest',
      component: CompoundInterest
    },
    // ?? หน้า วางแผนเกษียณ
    {
      path: '/ReTire',
      name: 'ReTire',
      component: ReTire
    },

  ]
})

export default router
