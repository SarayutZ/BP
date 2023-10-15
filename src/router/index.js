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
import seventwo from '../components/Math/seventwo.vue'
import moneyincome from '../components/Math/moneyincom.vue'
import wealthy from '../components/Math/wealthy.vue'


// ?? พวก แนะนำจาก ที่ต่างๆ 
import CourseSET from '../components/Recommanded/CourseSET.vue'
import Mahidol from '../components/Recommanded/Mahidol.vue'
import SpaceByCBS from '../components/Recommanded/SpaceByCBS.vue'
import ThaiMooc from "../components/Recommanded/ThaiMooc.vue"
import Chulamooc from "../components/Recommanded/Chulamooc.vue"
import PSUMOOC from "../components/Recommanded/PSUMOOC.vue"

//!! หน้า แนะนำ
import Recom from "../components/Recom.vue" 



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
    {
      path: '/seventwo',
      name: 'seventwo',
      component: seventwo
    },
    {
      path: '/moneyincome',
      name: 'moneyincome',
      component: moneyincome
    },
    {
      path: '/wealthy',
      name: 'wealthy',
      component: wealthy
    },
    {
      path: '/CourseSET',
      name: 'CourseSET',
      component: CourseSET
    },
    {
      path: '/Mahidol',
      name: 'Mahidol',
      component: Mahidol
    },
    {
      path: '/SpaceByCBS',
      name: 'SpaceByCBS',
      component: SpaceByCBS
    },
    {
      path: '/ThaiMooc',
      name: 'ThaiMooc',
      component: ThaiMooc
    },
    {
      path: '/CHULAMOOC',
      name: 'CHULAMOOC',
      component: Chulamooc
    },
    {
      path: '/PSUMOOC',
      name: 'PSUMOOC',
      component: PSUMOOC
    },
    {
      path: '/Recom',
      name: 'Recom',
      component: Recom
    },

  ]
})

export default router
