<template>
<MenuBar/>

<div class="head-bar">
<h3>Courses</h3>
</div>
<div class="mini-bar">
<input type="text" placeholder="ค้นหาคอร์สเรียน">
</div>

<div class="text-coures-set d-flex">
    <h3>คอร์สจาก SET</h3>
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
.head-bar{
    background-color: #1399AB;
  width: 80%;
  height: 240px;
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin: 0px 120px 0px 120px;
}
.mini-bar{

    background-color: #C0DEE3;
  width: 80%;
  height: 140px;
  padding-top: 50px;
  display: flex;
  margin: 0px 120px 0px 120px;
  justify-content: center;
  align-items: center;
}
.mini-bar input{
    width: 400px;
    padding: 10px;
    border-radius: 200px;
    font-size: 24px;
}
.head-bar h3{
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