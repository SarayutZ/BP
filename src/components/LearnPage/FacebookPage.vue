<template>
    <MenuBar/>
    
    <div class="head-bar4">
    <h3>Facebook</h3>
    </div>
    <div class="mini-bar4">
    <input type="text" placeholder="ค้นหาช่องสอนการเงินการลงทุน">
    </div>
    
    <div class="text-coures-set d-flex">
        <h3> Page</h3>
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
    import MenuBar from '../MenuBar.vue';
    
        export default {
        components: { MenuBar }
    }
    </script>
    
    <style >
    .head-bar4{
        background-color: #688CE9;
      width: 80%;
      height: 240px;
      padding-top: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      margin: 0px 120px 0px 120px;
    }
    .mini-bar4{
    
        background-color: #D2DEFF;
      width: 80%;
      height: 140px;
      padding-top: 50px;
      display: flex;
      margin: 0px 120px 0px 120px;
      justify-content: center;
      align-items: center;
    }
    .mini-bar4 input{
        width: 400px;
        padding: 10px;
        border-radius: 200px;
        font-size: 24px;
    }
    .head-bar4 h3{
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