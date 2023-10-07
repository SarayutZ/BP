<template>
  <!-- นำเข้าคอมโพเนนต์ MenuBar -->
  <MenuBar />

  <div class="container">
    <!-- หัวข้อหน้าเว็บ -->
    <h3 class="head text-center animate-slide-up">
      หมดปัญหาไม่รู้จะหา ความรู้ทางงานการเงินได้ ที่ไหน?
    </h3>

    <!-- คำอธิบายเพิ่มเติม -->
    <h4 class="text-center mt-4 animate-slide-up">
      เรามาช่วยคุณค้นหาแหล่งเรียนรู้ที่คัดสรรมาดีที่สุด และ อื่นๆอีกมากมาย ที่รอให้คุณค้นพบ!
    </h4>

    <!-- ปุ่มเริ่มเลย -->
    <div class="btn-sub text-center">
     <router-link to="/Learning"><button type="button" class="btn  animate-slide-up">เริ่มเลยฟรี</button></router-link> 
    </div>

    <!-- รูปภาพที่วางบนสองข้าง -->
    <div class="image-two-side d-flex animate-float">
      <div class="first">
        <!-- รูปภาพแรก -->
        <img src="../images/picture1.png" alt="" srcset="">
      </div>
      <div class="two">
        <!-- รูปภาพที่สอง -->
        <img src="../images/แหล่งความรู็.png" alt="" srcset="">
      </div>
    </div>
  </div>


<div class="box-three">
<div class="text">
  <h3 class="text-center">การลงทุนที่ดีที่สุด ที่คุณสามารถทำได้ คือ การลงทุนในตัวเอง</h3>
</div>

<div class="box-card d-flex justify-content-center">

  <div class="card-1" style="width: 18rem;">
    <img src="/src/images/แหล่งความรู้1.png" class="card-img-top" alt="...">
    <div class="card-body text-center">
      <h5 class="card-title fw-bold">แหล่งเรียนรู้</h5>
      <p class="card-text ">เราได้ทำการรวบรวมแหล่งเรียนรู้ทางการเงินจากหลากหลายแหล่ง 
เพื่อให้คุณสามารถเรียนรู้โดยไม่ต้องเสียค่าใช้จ่ายใด ๆ ทั้งสิ้น</p>
   <router-link to="/Learning"><button class="btn-one"> ดูเพิ่มเติม</button> </router-link>  
    </div>
    </div>


  <div class="card-2" style="width: 18rem;">
    <img src="/src/images/หนังสือ.png" class="card-img-top" alt="...">
    <div class="card-body2 text-center">
      <h5 class="card-title fw-bold"> หนังสือ</h5>
      <p class="card-text2">เราได้ทำการ รวบรวม แหล่งขายหนังสือ ที่ดี และ 
แนะนำหนังสือการเงิน การลงทุน ที่ดี</p>
<router-link to="/Books"><button class="btn-two"> ดูเพิ่มเติม</button> </router-link>
    </div>
</div>

  <div class="card-3" style="width: 18rem;">
    <img src="/src/images/คำนวณ.png" class="card-img-top" alt="...">
    <div class="card-body text-center">
      <h5 class="card-title fw-bold">คำนวนการเงิน</h5>
      <p class="card-text">รวบรวมสูตร การเงินพื้นฐานไว้ให้ เช่น คำนวณเงินออม
เงินเกษียณ และ อื่นๆ</p>
     <router-link to="/Math"><button class="btn-three"> ดูเพิ่มเติม</button> </router-link> 
    </div>
</div>

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
/* นำเข้าและใช้งานฟอนต์ */
@import url("https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@300&family=Inter:wght@300&family=Monofett&display=swap");

/* กำหนดฟอนต์หลักสำหรับทั้งหน้าเว็บ */
* {
  font-family: "Bai Jamjuree", sans-serif;
}
.btn-one{
  background-color: #555555;
  color: white;
  padding: 10px;
  width: 100px;
  border-radius: 200px;
}
.btn-two{
  background-color: #355DAA;
  color: white;
  padding: 10px;
  width: 100px;
  border-radius: 200px;
}
.btn-three{
  background-color: #8E3232;
  color: white;
  padding: 10px;
  width: 100px;
  border-radius: 200px;
}
.box-card{
  margin-top: 350px;
justify-content: center;
align-items: center;
}
.card-1,.card-2,.card-3{
  margin: 50px;
}
.card-2{
  background-color: #F5F5F5;
  padding: 20px;
}
.box-three{
  margin-top: 320px;
  width: 100%;
  height: 380px;
  background-color: #38719A;
  position: absolute;
}
.text {
  color: white;
  position: relative;
  z-index: 1;
  top: 45%;

}
.text h3{
  font-size: 54px;

}

/* กำหนดระยะห่างด้านบนของคลาส container */
.container {
  margin-top: 120px;
}

/* กำหนดรูปแบบข้อความสำหรับหัวข้อหน้าเว็บ */
.container h3 {
  font-size: 56px;
  font-weight: bold;
}

/* กำหนดรูปแบบข้อความสำหรับคำอธิบายเพิ่มเติม */
.container h4 {
  font-size: 26px;
}

/* กำหนดรูปแบบสำหรับปุ่มเริ่มเลยฟรี */
.btn-sub {
  margin-top: 70px;
}

.btn {
  font-size: 50px;
  background-color: #516EB8;
  border-radius: 200px;
  color: white;
}

/* การเมื่อนำเมาส์ไปชี้ที่ปุ่ม */
.btn:hover {
  background-color: #3e599f;
  color: white;
  cursor: pointer;
}

/* กำหนดรูปแบบสำหรับภาพที่วางบนสองข้าง */
.image-two-side {
  position: relative;
  justify-content: space-around;
  margin-bottom: -200px;
  gap: 362px;
}

/* กำหนดขนาดและรูปแบบของรูปภาพ */
.image-two-side img {
  width: 492px;
  height: 420px;
  margin-bottom: -200px;
  position: relative;
  opacity: 0.5;
  top: -80px;
}

/* กำหนดระยะห่างของรูปแรกด้านขวา */
.first {
  margin-right: 160px;
}
/* สร้าง animation สำหรับข้อความและรูปภาพ */
.animate-float {
  animation: float 3s infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.animate-slide-up {
  animation: slide-up 1.5s forwards;
  opacity: 0;
  transform: translateY(30px);
}

@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.card-text2{
  background-color: #F5F5F5;
}
</style>
