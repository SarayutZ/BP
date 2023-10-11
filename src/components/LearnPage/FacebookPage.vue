<template>
  <!--  -->
  <!--TODO นำเข้าคอมโพเนนต์ MenuBar -->

  <MenuBar />

  <!-- ?  ส่วนหัว -->

  <div class="head-bar4">
    <h3>Facebook</h3>
  </div>

  <!-- ? ตรงค้นหา -->

  <div class="mini-bar4">
    <input
      type="text"
      placeholder="ค้นหาช่องสอนการเงินการลงทุน"
      v-model="search"
      @input="filtered"
    />
  </div>

  <!-- ? ตรงข้อความอธิบาย -->

  <div class="text-coures-facebook d-flex">
    <h3>Page {{ Facebook.length }}</h3>
  </div>

  <!-- ? ตรงนี้คือ กล่องเนื้อหา ต่างๆ  -->

  <div class="box-facebook" style="display: flex; flex-wrap: wrap">
    <div
      class="card-c5"
      style="width: 20rem"
      v-for="(item, index) in filtered"
      @click="showCourseDetails(item, index)"
    >
      <a :href="item.link" target="_blank">
        <img :src="item.images" class="card-img-top" alt="..." />
        <div class="card-body mt-3">
          <p class="card-text fw-bold">{{ item.name }}</p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import MenuBar from "../MenuBar.vue";
import { mapGetters } from "vuex";

export default {
  components: { MenuBar },
  computed: {
    ...mapGetters(["Facebook"]),
    filtered() {
      return this.Facebook.filter((Facebook) =>
        Facebook.name.toLowerCase().includes(this.search.toLowerCase())
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
  .head-bar4 {
  width: 100% !important;
  margin: 0 !important;

}
.head-bar4 h3{
  font-size: 32px !important;
}
  .mini-bar4 {
  width: 100% !important;
  margin: 0 !important;
}
.mini-bar4 input{
  width: 50% !important;
}


}
@media only screen and (min-width: 1440px){
  .head-bar4 {

  width: 85% !important;
  margin: 0px 120px 0px 120px !important;
}
.mini-bar4 {

  width: 85% !important;

  margin: 0px 120px 0px 120px !important;

}
.head-bar2 h4 {
  font-size: 120px !important;
}

}
.head-bar4 {
  background-color: #688ce9;
  width: 80%;
  height: 240px;
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin: 0px 120px 0px 120px;
}
.mini-bar4 {
  background-color: #d2deff;
  width: 80%;
  height: 140px;
  padding-top: 50px;
  display: flex;
  margin: 0px 120px 0px 120px;
  justify-content: center;
  align-items: center;
}
.mini-bar4 input {
  width: 400px;
  padding: 10px;
  border-radius: 200px;
  font-size: 24px;
}
.head-bar4 h3 {
  font-size: 120px;
}
.text-coures-facebook {
  margin-top: 50px;
  margin-left: 120px;
}
.box-facebook {
  /* margin-top: 50px;
        margin-left: 120px; */
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-c5 img {
  height: 13rem;
}

.card-c5 {
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  position: relative;
}

.card-c5:hover {
  transform: scale(1.05);
}

.card-c5 {
  border-bottom: 5px solid #688ce9;
}
</style>
