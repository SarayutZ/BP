<template>

    <!--TODO นำเข้าคอมโพเนนต์ MenuBar -->

  <MenuBar />

    <!-- ?  ส่วนหัว -->

  <div class="head-Math">
    <h3>คำนวณต่างๆ</h3>
  </div>

  <!-- ? ตรงค้นหา -->

  <div class="mini-Math">
    <input
      type="text"
      placeholder="ค้นหา"
      v-model="search"
      @input="filtered"
    />
  </div>

  <!-- ? ตรงข้อความอธิบาย -->

  <div class="text-coures-set d-flex">
    <h3>การเงินส่วนบุคคล</h3>
  </div>

  <!-- ? กล่องสุด  -->

  <div class="box-math" style="display: flex; flex-wrap: wrap">
    <div
      class="card-c6"
      style="width: 18rem"
      v-for="(item, index) in filtered"
      @click="showCourseDetails(item, index)"
    >
      <router-link :to="item.link">
        <img :src="item.images" class="card-img-top" alt="..." />
        <div class="card-body text-center">
          <h6 class="fw-bold fs-5">{{ item.name }}</h6>
          <p class="card-text"></p>
        </div>
      </router-link>
    </div>
  </div>

</template>

<script>
import MenuBar from "../MenuBar.vue";
import { mapGetters } from "vuex";

export default {
  components: { MenuBar },
  computed: {
    ...mapGetters(["Math"]),
    filtered() {
      return this.Math.filter((course) =>
        course.name.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
  data() {
    return {
      search: "",
    };
  },
};
</script>

<style>
@media only  screen and (min-width: 390px)  {
  .head-Math {
  width: 100% !important;
  margin: 0 !important;

}
.head-Math h3{
  font-size: 32px !important;
}
  .mini-Math {
  width: 100% !important;
  margin: 0 !important;
}
.mini-Math input{
  width: 50% !important;
}


}
@media only screen and (min-width: 1440px){
  .head-Math {

  width: 85% !important;
  margin: 0px 120px 0px 120px !important;
}
.mini-Math {
  background-color: #c0dee3;
  width: 85% !important;
  height: 140px;
  padding-top: 50px;
  display: flex;
  margin: 0px 120px 0px 120px !important;
  justify-content: center;
  align-items: center;
}
.head-Math h3 {
  font-size: 120px !important;
}

}
.head-Math {
  background-color: #8c6333;
  width: 80%;
  height: 240px;
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin: 0px 120px 0px 120px;
}
.mini-Math {
  background-color: #b4926a;
  width: 80%;
  height: 140px;
  padding-top: 50px;
  display: flex;
  margin: 0px 120px 0px 120px;
  justify-content: center;
  align-items: center;
}
.mini-Math input {
  width: 400px;
  padding: 10px;
  border-radius: 200px;
  font-size: 24px;
}
.head-Math h3 {
  font-size: 120px;
}
.text-coures-set {
  margin-top: 50px;
  margin-left: 120px;
}
.box-math {
  /* margin-top: 50px;
        margin-left: 120px; */
  display: flex;
  justify-content: center;
  align-items: center;
}
.card-c6 {
  border-bottom: 5px solid #8c6333;
  margin: 10px;

  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  position: relative;
}

.card-c6:hover {
  transform: scale(1.05);
}
</style>
