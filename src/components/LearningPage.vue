<template>
  <MenuBar />

  <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="/src/images/never-stop-learning-3653430_1280.jpg" class="d-block mx-auto" alt="...">
      </div>
      <div class="carousel-item">
        <img src="" class="d-block mx-auto" alt="...">
      </div>
      <div class="carousel-item">
        <img src="" class="d-block mx-auto" alt="...">
      </div>
    </div>
    <!-- <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button> -->
  </div>

  <div class="box-course d-flex justify-content-center">
    <div class="card-course" style="width: 18rem">
     
        <router-link style="text-decoration: none; color: inherit" to="/Courses">
           <div class="color-box-course1">
        <h3 >Course</h3>
      </div>
      <div class="card-body text-center m-3">
        
        <p class="card-text m3">
          คอร์สเรียนฟรี จากแหล่ง เรียน  เช่น SET , Mooc และ อื่นๆ 
        </p>
      </div>
        </router-link>
    </div>

    <div class="card-course" style="width: 18rem">
  
      <router-link to="/Youtube"  style="text-decoration: none; color: inherit">
    <div class="color-box-course2">
        <h3>Youtube</h3>
      </div>
      <div class="card-body text-center">
    
        <p class="card-text m-3">
          วิดิโอ จากช่องต่างๆ ที่สอนเกี่ยวกับ 
การเงิน การลงทุน ต่างๆ 
        </p>


      </div>
      </router-link>  
    </div>

    <div class="card-course" style="width: 18rem">

       <router-link to="/Tiktok"  style="text-decoration: none; color: inherit"> 
      <div class="color-box-course3">
        <h3>Tiktok</h3>
      </div>
      <div class="card-body text-center">
    
        <p class="card-text m-3">
          ช่องที่ให้ความรู้ ทางการเงิน ใน Tiktok 
        </p>


      </div>
       </router-link>
    </div>

    <div class="card-course" style="width: 18rem">

       <router-link to="/Facebook"  style="text-decoration: none; color: inherit">
      <div class="color-box-course4">
        <h3>Facebook</h3>
      </div>
      <div class="card-body text-center">
    
        <p class="card-text m-3">
          เพจ หรือ กลุ่ม ที่ให้ความรู้ทางการเงิน การลงทุน
        </p>

      </div>
       </router-link> 
    </div>


  </div>
</template>

<script>
import MenuBar from "./MenuBar.vue";

export default {
  components: { MenuBar },
};
</script>

<style>

.carousel-inner img {
  width: 1251px;
  height: 288px;
  object-fit: cover; /* ให้รูปภาพ fill พื้นที่ให้เต็ม */
  flex-shrink: 0;
  
}
.card-course {
  margin: 40px;
}
.color-box-course1 {
  background-color: #1399AB;
  width: 100%;
  height: 100%;
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
.color-box-course2 {
  background-color: #E35E5E;
  width: 100%;
  height: 100%;
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
.color-box-course3 {
  background-color: #5E5959;
  width: 100%;
  height: 100%;
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
.color-box-course4 {
  background-color: #688CE9;
  width: 100%;
  height: 100%;
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
.color-box-course1 h3,.color-box-course2 h3,.color-box-course3 h3,.color-box-course4 h3{
  font-size: 50px;
}
.btn-onee{
  background-color: #13B2C8;
  padding: 5px;
  border-radius: 200px;
  color: white;
}
.btn-twoo{
  background-color: #D97070;
  padding: 5px;
  border-radius: 200px;
  color: white;
}
.btn-threee{

  background-color: #676161;
  padding: 5px;
  border-radius: 200px;
  color: white;
}
.btn-fourr{
  background-color: #4165C1;
  padding: 5px;
  border-radius: 200px;
  color: white;
}
.card-body button{
padding: 10px;
}
.card-body{

  padding:  0 10px 20px 0;
}
.box-course{
  margin-bottom: 280px;
  transition: transform 0.2s ease;

}
.card-course:hover{
  transform: scale(1.05);

}

</style>
