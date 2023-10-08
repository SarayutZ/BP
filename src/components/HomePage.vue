<template>
  <!-- นำเข้าคอมโพเนนต์ MenuBar -->
  <MenuBar />

  <div class="container">
    <!-- หัวข้อหน้าเว็บ -->
    <h3 class="head text-center animate-slide-up fw-bold">
      หมดปัญหาไม่รู้จะหา ความรู้ทางงานการเงินได้ ที่ไหน?
    </h3>

    <!-- คำอธิบายเพิ่มเติม -->
    <h4 class="text-center mt-4 animate-slide-up">
      เรามาช่วยคุณค้นหาแหล่งเรียนรู้ที่คัดสรรมาดีที่สุด และ อื่นๆอีกมากมาย
      ที่รอให้คุณค้นพบ!
    </h4>

    <!-- ปุ่มเริ่มเลย -->
    <div class="btn-sub text-center">
      <router-link to="/Learning"
        ><button type="button" class="btn animate-slide-up">
          เริ่มเลยฟรี
        </button></router-link
      >
    </div>

    <!-- รูปภาพที่วางบนสองข้าง -->
    <div class="image-two-side d-flex animate-float">
      <div class="first">
        <!-- รูปภาพแรก -->
        <img src="../images/picture1.png" alt="" srcset="" />
      </div>
      <div class="two">
        <!-- รูปภาพที่สอง -->
        <img src="../images/แหล่งความรู็.png" alt="" srcset="" />
      </div>
    </div>
  </div>

  <div class="box-three">
    <div class="text">
      <h3 class="text-center">
        การลงทุนที่ดีที่สุด ที่คุณสามารถทำได้ คือ การลงทุนในตัวเอง
      </h3>
    </div>

    <div class="box-card d-flex justify-content-center">
      <router-link to="/Learning" style="text-decoration: none; color: inherit"
      >
      <div class="card-1">
        <img
          src="/src/images/แหล่งความรู้1.png"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body text-center">
          <h5 class="card-title fw-bold">แหล่งเรียนรู้</h5>
          <p class="card-text">
            รวบรวมแหล่งเรียนรู้จากหลากหลายแหล่ง
            เพื่อให้คุณสามารถเรียนรู้โดยไม่ต้องเสียค่าใช้จ่ายใด ๆ ทั้งสิ้น
          </p>


          </div>
        </div>
          </router-link>

      <router-link to="/Books" style="text-decoration: none; color: inherit"
      >
      <div class="card-2">
        <img src="/src/images/หนังสือ.png" class="card-img-top" alt="..." />
        <div class="card-body text-center">
          <h5 class="card-title fw-bold">หนังสือ</h5>
          <p class="card-text">
            เราได้ทำการ รวบรวม แหล่งขายหนังสือ ที่ดี และ แนะนำหนังสือการเงิน
            การลงทุน ที่ดี
          </p>



        </div>
      </div>
          </router-link>

          <router-link to="/Math" style="text-decoration: none; color: inherit"
          >
          <div class="card-3">
            <img src="/src/images/คำนวณ.png" class="card-img-top" alt="..." />
            <div class="card-body text-center">
              <h5 class="card-title fw-bold">คำนวนการเงิน</h5>
              <p class="card-text">
                รวบรวมสูตร การเงินพื้นฐานไว้ให้ เช่น คำนวณเงินออม เงินเกษียณ และ
                อื่นๆ
              </p>




            </div>
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
/* นำเข้าและใช้งานฟอนต์ */
@import url("https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@300&family=Inter:wght@300&family=Monofett&display=swap");

/* กำหนดฟอนต์หลักสำหรับทั้งหน้าเว็บ */
* {
  font-family: "Bai Jamjuree", sans-serif;
}
.container {
  width: 98.9vw;
  height: 100%;
  background: url("https://cdn.pixabay.com/photo/2016/03/26/13/12/pencils-1280558_1280.jpg")
    no-repeat;
  background-size: cover;
  background-position: center;
  padding-top: 50px;

  color: white;
}


.box-card {
  display: flex;
  justify-content: center;
  gap: 20px; /* Add some spacing between cards */
}

/* Style each individual card */
.card-1,
.card-2,
.card-3 {
  width: 26rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
  margin-bottom: 200px
}

.btn-onee,
.btn-twoo,
.btn-threee,
.btn-fourr {
  margin: 10px;
}

/* Style card images */
.card-img-top {
  width: 100%; /* Make sure images have the same width */
  max-height: 150px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 15px; /* Adjust spacing between image and text */
}

/* Center card text content */
.card-body {
  text-align: center;
  flex-grow: 1;
}

/* Style card titles */
.card-title {
  font-weight: bold;
  margin-top: 10px;
  font-size: 1.5rem; /* Increase title font size */
}

/* Style card descriptions */
.card-body p {
  font-size: 16px;
}

/* Style buttons */
.btn-one,
.btn-two,
.btn-three {
  background-color: #007bff; /* Change button background color */
  color: #fff; /* Change button text color */
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 1rem; /* Increase button font size */
}

/* Add some margin to the buttons */
.btn-one,
.btn-two,
.btn-three {
  margin-top: 10px;
}

/* Hover effect for cards */
.card-1:hover,
.card-2:hover,
.card-3:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Add a shadow on hover */
  transform: scale(1.05); /* Add a slight scale effect on hover for dimension */
}


.box-card {
  margin-top: 350px;
  justify-content: center;
  align-items: center;

}

.box-three {
  margin-top: 320px;
  width: 100%;
  height: 380px;
  background-color: #355daa;
  position: absolute;
}
.text {
  color: white;
  position: relative;
  z-index: 1;
  top: 45%;
}
.text h3 {
  font-size: 54px;
}

/* กำหนดระยะห่างด้านบนของคลาส container */
.container {
  margin-top: 40px;
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
  background-color: #516eb8;
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
  opacity: 1;
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
  0%,
  100% {
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
</style>
