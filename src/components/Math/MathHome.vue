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
    
        <div class="card-c3" style="width: 18rem;">
      <img src="https://cdn.pixabay.com/photo/2023/10/02/14/00/egg-8289259_1280.png" class="card-img-top" alt="...">
      <div class="card-body">
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
        <div class="card-c3" style="width: 18rem;">
      <img src="https://cdn.pixabay.com/photo/2023/10/02/14/00/egg-8289259_1280.png" class="card-img-top" alt="...">
      <div class="card-body">
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
        <div class="card-c3" style="width: 18rem;">
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
    .card-c3 {
  border-bottom: 5px solid #8C6333;
  margin: 10px;

  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  position: relative;
}

.card-c3:hover {
  transform: scale(1.05);
}
    
    </style>