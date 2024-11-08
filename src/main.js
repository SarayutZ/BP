import App from './App.vue';
import { createApp } from 'vue';

// !! ส่วนของ vuex
import store from "./store/store"; 


// ?? ส่วนของ boostrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap/dist/js/bootstrap.bundle'; // นำเข้า JavaScript ของ Bootstrap 

// ** ส่วนของ icon จาก fontawesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

//?? ส่วนของ router
import router from './router';

library.add(faBars); //** เลือกใช้ icon faBar

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router); //?? เลือกใช้ router
app.use(store);  //?? เลือกใช้ store
app.mount('#app');
