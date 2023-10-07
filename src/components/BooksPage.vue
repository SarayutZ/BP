<template>
    <MenuBar/>
    
    <div class="head-books">
    <h3>Books</h3>
    </div>
    <div class="mini-books">
    <input type="text" placeholder="ค้นหาหนังสือ">
    </div>
    
    <div class="text-coures-set d-flex">
        <h3> การเงิน / ลงทุน</h3>
    </div>
    
    <div class="box-courses">
    
        <div class="card-c" style="width: 18rem;">
      <img src="https://cdn.pixabay.com/photo/2023/10/02/14/00/egg-8289259_1280.png" class="card-img-top" alt="...">
      <div class="card-body">
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
        <div class="card-c" style="width: 18rem;">
      <img src="https://cdn.pixabay.com/photo/2023/10/02/14/00/egg-8289259_1280.png" class="card-img-top" alt="...">
      <div class="card-body">
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
        <div class="card-c" style="width: 18rem;">
      <img src="https://cdn.pixabay.com/photo/2023/10/02/14/00/egg-8289259_1280.png" class="card-img-top" alt="...">
      <div class="card-body">
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
    
    </div>
    
    
    </template>
    
    <script>
    import MenuBar from './MenuBar.vue';
    
        export default {
        components: { MenuBar }
    }
    </script>
    
    <style >
    .head-books{
        background-color: #239506;
      width: 80%;
      height: 240px;
      padding-top: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      margin: 0px 120px 0px 120px;
    }
    .mini-books{
    
        background-color: #9BD58C;
      width: 80%;
      height: 140px;
      padding-top: 50px;
      display: flex;
      margin: 0px 120px 0px 120px;
      justify-content: center;
      align-items: center;
    }
    .mini-books input{
        width: 400px;
        padding: 10px;
        border-radius: 200px;
        font-size: 24px;
    }
    .head-books h3{
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