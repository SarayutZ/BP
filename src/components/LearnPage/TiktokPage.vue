<template>
  <MenuBar />

  <div class="head-bar3">
    <h3>Tiktok</h3>
  </div>
  <div class="mini-bar3">
    <input
      type="text"
      placeholder="ค้นหาช่องสอนการเงินการลงทุน"
      v-model="searchQuery"
      @input="filteredCourses"
    />
  </div>

  <div class="text-coures-set d-flex">
    <h3>channel</h3>
  </div>

  <div class="box-courses" style="display: flex; flex-wrap: wrap">
    <div
      class="card-c3"
      style="width: 20rem"
      v-for="(item, index) in filteredCourses"
      @click="showCourseDetails(item, index)"
    >
      <!-- ใช้ v-b-modal และ modal-id สำหรับแต่ละ Modal -->
      <a :href="item.link" target="_blank">
        <img :src="item.images" class="card-img-top" alt="..." />
        <div class="card-body2 mt-3">
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
    ...mapGetters(["Tiktok"]),
    filteredCourses() {
      return this.Tiktok.filter((course) =>
        course.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  data() {
    return {
      searchQuery: "",
    };
  },
};
</script>

<style>
.head-bar3 {
  background-color: #5e5959;
  width: 80%;
  height: 240px;
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin: 0px 120px 0px 120px;
}
.mini-bar3 {
  background-color: #e6e6e6;
  width: 80%;
  height: 140px;
  padding-top: 50px;
  display: flex;
  margin: 0px 120px 0px 120px;
  justify-content: center;
  align-items: center;
}
.mini-bar3 input {
  width: 400px;
  padding: 10px;
  border-radius: 200px;
  font-size: 24px;
}
.head-bar3 h3 {
  font-size: 120px;
}
.text-coures-set {
  margin-top: 50px;
  margin-left: 120px;
}
.box-courses {
  /* margin-top: 50px;
        margin-left: 120px; */
  display: flex;
  justify-content: center;
  align-items: center;
}
.card-c3 {
  margin: 20px;
}
.card-c3 img {
  height: 13rem;
}

.card-c3 {
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  position: relative;
}

.card-c3:hover {
  transform: scale(1.05);
}

.card-c3 {
  border-bottom: 5px solid #5e5959;
}
</style>
