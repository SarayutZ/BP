import { createApp } from 'vue';
import store from "./store/store"; 


// ส่วนของ boostrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// main.js หรือไฟล์ที่เหมาะสมในโปรเจค Vue.js
import 'bootstrap/dist/css/bootstrap.css'; // นำเข้า CSS ของ Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle'; // นำเข้า JavaScript ของ Bootstrap (รวมกับ Popper.js ถ้าจำเป็น)


import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import App from './App.vue';
import router from './router';

library.add(faBars);

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router);
app.use(store);


app.mount('#app');
