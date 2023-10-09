<template>
    <MenuBar/>
    
    <div class="head-Math">
    <h3>คำนวณต่างๆ</h3>
    </div>
    <div class="mini-Math">
    <input type="text" placeholder="ค้นหา">
    </div>
    
    <div class="text-coures-set d-flex">
        <h3> การเงินส่วนบุคคล</h3>
    </div>
    
    <div class="box-courses">
    
        <div class="card-c" style="width: 18rem;">
            <router-link to="ReTire"><img src="https://cdn.pixabay.com/photo/2023/10/02/14/00/egg-8289259_1280.png" class="card-img-top" alt="..."></router-link>
      <div class="card-body">
        <p class="card-text"></p>คำนวณเงินเกษียณอายุ
      </div>
    </div>
    <div class="card-c" style="width: 18rem;">
        <router-link to="InteRest"><img src="https://cdn.pixabay.com/photo/2023/10/02/14/00/egg-8289259_1280.png" class="card-img-top" alt="..."></router-link>
      <div class="card-body">
        <p class="card-text">คำนวณดอกเบี้ยฝากออมทรัพย์</p>
      </div>
    </div>
    <div class="card-c" style="width: 18rem;">
        <router-link to="CompoundInterest"><img src="https://cdn.pixabay.com/photo/2023/10/02/14/00/egg-8289259_1280.png" class="card-img-top" alt="..."></router-link>
      <div class="card-body">
        <p class="card-text">คำนวณดอกเบี้ยทบต้น</p>
      </div>
    </div>
    <div class="card-c" style="width: 18rem;">
        <router-link to="FixedRate"><img src="https://cdn.pixabay.com/photo/2023/10/02/14/00/egg-8289259_1280.png" class="card-img-top" alt="..."></router-link>
      <div class="card-body">
        <p class="card-text">คำนวณดอกเบี้ยคงที่</p>
      </div>
    </div>
    </div>
    
    
    </template>
    

    <script>
    import { RouterLink } from 'vue-router';
    import MenuBar from '../MenuBar.vue';
    
        export default {
        components: { MenuBar }
    }
    </script>
    
    <style >
    .head-Math{
        background-color: #8C6333;
      width: 80%;
      height: 240px;
      padding-top: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      margin: 0px 120px 0px 120px;
    }
    .mini-Math{
    
        background-color: #B4926A;
      width: 80%;
      height: 140px;
      padding-top: 50px;
      display: flex;
      margin: 0px 120px 0px 120px;
      justify-content: center;
      align-items: center;
    }
    .mini-Math input{
        width: 400px;
        padding: 10px;
        border-radius: 200px;
        font-size: 24px;
    }
    .head-Math h3{
        font-size: 120px;
    }
    .text-coures-set{
        margin-top: 50px;
        margin-left: 120px;
    }
    .box-courses{
        /* margin-top: 50px;
        margin-left: 120px; */
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .card-c{
    margin: 20px;
    }
    
    </style>
