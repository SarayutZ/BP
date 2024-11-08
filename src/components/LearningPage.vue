<template>
    <!--TODO นำเข้าคอมโพเนนต์ MenuBar -->

  <MenuBar />

  <!--! ตรงนี้คือ ตรง รูปที่เลื่อนๆ -->

  <div
    id="carouselExampleAutoplaying"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="/src/images/never-stop-learning-3653430_1280.jpg"
          class="d-block mx-auto"
          alt="..."
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg"
          class="d-block mx-auto"
          alt="..."
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://cdn.pixabay.com/photo/2017/09/21/13/32/girl-2771936_1280.jpg"
          class="d-block mx-auto"
          alt="..."
        />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleAutoplaying"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleAutoplaying"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

  <!-- ? ตรงนี้คือ ตรงที่ กล่อง คอร์ส ต่างๆ  -->



  <div class="box-learn d-flex justify-content-center">

    <!-- * กล่องที่ 1 set  -->
    <div class="card-course" style="width: 18rem">
      <router-link style="text-decoration: none; color: inherit" to="/Courses">
        <div class="color-box-learn1">
          <h3>Course</h3>
        </div>
        <div class="card-body text-center m-3">
          <p class="card-text m3">
            คอร์สเรียนฟรี จากแหล่ง เรียน เช่น SET , Mooc และ อื่นๆ
          </p>
        </div>
      </router-link>
    </div>

   <!-- * กล่องที่ 2 Youtube  -->
    <div class="card-course" style="width: 18rem">
      <router-link to="/Youtube" style="text-decoration: none; color: inherit">
        <div class="color-box-learn2">
          <h3>Youtube</h3>
        </div>
        <div class="card-body text-center">
          <p class="card-text m-3">
            วิดิโอ จากช่องต่างๆ ที่สอนเกี่ยวกับ การเงิน การลงทุน ต่างๆ
          </p>
        </div>
      </router-link>
    </div>

       <!-- * กล่องที่ 3 Tiktok  -->
    <div class="card-course" style="width: 18rem">
      <router-link to="/Tiktok" style="text-decoration: none; color: inherit">
        <div class="color-box-learn3">
          <h3>Tiktok</h3>
        </div>
        <div class="card-body text-center">
          <p class="card-text m-3">ช่องที่ให้ความรู้ ทางการเงิน ใน Tiktok</p>
        </div>
      </router-link>
    </div>

    <!-- * กล่องที่ 4 Facebook -->
    <div class="card-course" style="width: 18rem">
      <router-link to="/Facebook" style="text-decoration: none; color: inherit">
        <div class="color-box-learn4">
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


.card-course {
  width: 18rem;
  margin-right: 20px; 
  opacity: 0;
  transform: translateX(-100px);
  animation: slide-in 0.5s forwards;
}

@keyframes slide-in {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Ipone 12 pro */
@media only  screen and (max-width: 400px)  {
  .carousel-inner img {
  width: 351px !important;
  height: 188px !important;

}
.box-learn{
  display: inline !important;
}
.card-course{
  margin-left:22px  !important;
}

/* Ipad */
}
@media only  screen and (max-width: 800px)  {

  .carousel-inner img {
  width: 751px !important;
  height: 188px !important;
  object-fit: cover; /* ให้รูปภาพ fill พื้นที่ให้เต็ม */
  flex-shrink: 0;
}
.box-learn{
  display: inline !important;
  width: 100vw !important;
}
.card-course{
  width: 90vw !important;
}


}




.carousel-inner img {
  width: 1251px;
  height: 288px;
  object-fit: cover; /* ให้รูปภาพ fill พื้นที่ให้เต็ม */
  flex-shrink: 0;
}
.card-course {
  margin: 40px;
}
.card-course:hover {
  transform: scale(1.05);
}
.color-box-learn1 {
  background-color: #1399ab;
  width: 100%;
  height: 100%;
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
.color-box-learn2 {
  background-color: #e35e5e;
  width: 100%;
  height: 100%;
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
.color-box-learn3 {
  background-color: #5e5959;
  width: 100%;
  height: 100%;
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
.color-box-learn4 {
  background-color: #688ce9;
  width: 100%;
  height: 100%;
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
.color-box-learn1 h3,
.color-box-learn2 h3,
.color-box-learn3 h3,
.color-box-learn4 h3 {
  font-size: 50px;
}

.card-body button {
  padding: 10px;
}
.card-body {
  padding: 0 10px 20px 0;
}
.box-learn {
  margin-bottom: 280px;
  transition: transform 0.2s ease;
}
.card-course:hover {
  transform: scale(1.05);
}
.carousel-control-next-icon,.carousel-control-prev-icon{
  background-color: #5e5959;
width: 10%;
color: #5e5959;
}
</style>
