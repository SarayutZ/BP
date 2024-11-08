<template>

  <!--TODO นำเข้าคอมโพเนนต์ MenuBar -->

  <MenuBar />

  <!-- ?  ส่วนหัว -->

  <div class="head-bar">
    <h3>Courses</h3>
  </div>

  <!-- ? ตรงค้นหา -->

  <div class="mini-bar">
    <input
      type="text"
      placeholder="ค้นหาคอร์สเรียน"
      v-model="search"
      @input="filtered"
    />
  </div>

  <!-- ? ตรงข้อความอธิบาย -->
  <div class="text-in m-4">
    <h3>ที่เรียนฟรี จากที่ต่างๆ {{  Ccourse.length}}</h3>
  </div>

  <!-- ? ตรงนี้คือ กล่องเนื้อหา ต่างๆ  -->
  <div class="box-courses" style="display: flex; flex-wrap: wrap">
    <div
      class="card-c "
      style="width: 20rem"
      v-for="(item, index) in filtered"
      @click="showCourseDetails(item, index)"
      
    >
      <!-- ใช้ v-b-modal และ modal-id สำหรับแต่ละ Modal -->
      <a data-bs-toggle="modal" data-bs-target="#exampleModal">
        <img :src="item.images" class="card-img-top" alt="..." />
        <div class="card-body2 mt-3">
          <p class="card-text fw-bold">{{ item.name }}</p>
        </div>
      </a>
    </div>
  </div>

  <!--? Modal -->
  <div class="modal" id="exampleModal" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div class="modal-dialog  modal-fullscreen-xxl-down">
    <div class="modal-content">
      <div class="modal-header">
        <h1  class="modal-title fs-5 fw-bold" id="exampleModalLabel">{{ selectedItem ? selectedItem.name : '' }}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
   <div class="modal-body text-center">

        <p class="fs-5 ">  {{ selectedItem ? selectedItem.description : '' }} </p>
        <img  :src="selectedItem ? selectedItem.images : ''"  alt="" srcset="">
    
      </div> 


      <div class="modal-footer">
        <a :href="selectedItem ? selectedItem.Link :''" target="_blank"> <button type="button" class="btn btn-success">ไปที่เว็บ</button></a>
        <a :href="selectedItem ? selectedItem.page :''" > <button type="button" class="btn btn-danger">ดูคอร์สที่แนะนำ</button></a>
        <button type="button" class="btn2 btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
  </div>

</template>

<script>
import MenuBar from "../MenuBar.vue";
import { mapGetters } from "vuex";

export default {
  components: { MenuBar },
  computed: {
    ...mapGetters(["Ccourse"]),
    
    filtered() {
      return this.Ccourse.filter((course) =>
        course.name.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
  data() {
    return {
      search: "", // ตรงนี้คือ รับค่าค้นหา
      selectedItem: null, // เพิ่มตัวแปร selectedItem เพื่อเก็บ item ที่ถูกคลิก
    };
  },
  methods: {
  showCourseDetails(item, index) {
    this.selectedItem = item; // กำหนด selectedItem เป็น item ที่ถูกคลิก
  },
},
};

</script>

<style>
@media only  screen and (min-width: 390px)  {
  .head-bar {
  width: 100% !important;
  margin: 0 !important;

}
.head-bar h3{
  font-size: 32px !important;
}
  .mini-bar {
  width: 100% !important;
  margin: 0 !important;
}
.mini-bar input{
  width: 50% !important;
}
.modal-body img{
  width: 50% !important;
  height: 50% !important;
}

}
@media only screen and (min-width: 1440px){
  .head-bar {

  width: 85% !important;
  margin: 0px 120px 0px 120px !important;
}
.mini-bar {
  background-color: #c0dee3;
  width: 85% !important;
  height: 140px;
  padding-top: 50px;
  display: flex;
  margin: 0px 120px 0px 120px !important;
  justify-content: center;
  align-items: center;
}
.head-bar h3 {
  font-size: 120px !important;
}

}
.modal-body img{
  width: 400px;
  height: 340px;
}

.head-bar {
  background-color: #1399ab;
  width: 85%;
  height: 240px;
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin: 0px 120px 0px 120px;
}

.mini-bar {
  background-color: #c0dee3;
  width: 85%;
  height: 140px;
  padding-top: 50px;
  display: flex;
  margin: 0px 120px 0px 120px;
  justify-content: center;
  align-items: center;
}

.mini-bar input {
  width: 400px;
  padding: 10px;
  border-radius: 200px;
  font-size: 24px;
}

.head-bar h3 {
  font-size: 120px;
}
a{
  color: black;
  text-decoration: none;
}

.box-courses {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-c img {
  height: 13rem;
}

.card-c {
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  position: relative;
}

.card-c:hover {
  transform: scale(1.05);
}

.card-c {
  border-bottom: 5px solid #1399ab;
}

.card-img-top {
  max-height: 200px;
}

.card-text {
  font-size: 1.2rem;
  margin-bottom: 0;
}

.card-c button,.btn2 {
  background-color: #007bff;
  color: #fff;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.card-c button:hover {
  background-color: #0056b3;
}

.box-courses {
  cursor: pointer;
}

.card-body2 p {
  margin: 20px;
}
</style>
