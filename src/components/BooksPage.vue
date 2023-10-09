<template>
  <MenuBar />

  <div class="head-books">
    <h3>Books</h3>
  </div>
  <div class="mini-books">
    <input type="text" placeholder="ค้นหาหนังสือ"  v-model="searchQuery"
      @input="filteredCourses"/>
  </div>

  <div class="text-coures-set d-flex">
    <h3>การเงิน / ลงทุน</h3>
  </div>

  <div class="box-courses" style="display: flex; flex-wrap: wrap">
    <div
      class="card-c4 text-center"
      style="width: 18rem"
      v-for="(item, index) in filteredCourses"
      @click="showCourseDetails(item, index)"
    >
      <img :src="item.imagesBooks" class="card-img-top" alt="..." />
      <div class="card-body">
        <h6 class="text-book fw-bold fs-5">{{ item.name }}</h6>
        <p class="card-text"></p>
      </div>
      <div class="button-bookss">
        <a :href="item.Shoplink" target="_blank"><button class="btn11 btn-danger m-2">SE-ED</button></a>
        <button class="btn22 btn-danger m-2">Shopee</button>
        <button class="btn33 btn-danger m-2">Lazada</button>
      </div>
    </div>
  </div>
</template>

<script>
import MenuBar from "./MenuBar.vue";
import { mapGetters } from "vuex";

export default {
  components: { MenuBar },
  computed: {
    ...mapGetters(["shopBooks"]),
    filteredCourses() {
      return this.shopBooks.filter((course) =>
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
.head-books {
  background-color: #239506;
  width: 80%;
  height: 240px;
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin: 0px 120px 0px 120px;
}
.mini-books {
  background-color: #9bd58c;
  width: 80%;
  height: 140px;
  padding-top: 50px;
  display: flex;
  margin: 0px 120px 0px 120px;
  justify-content: center;
  align-items: center;
}
.mini-books input {
  width: 400px;
  padding: 10px;
  border-radius: 200px;
  font-size: 24px;
}
.head-books h3 {
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
.card-c4 {
  height: 28rem;
  border-bottom: 5px solid #239506;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  position: relative;
}

.card-c4:hover {
  transform: scale(1.05);
}
.text-book {
  color: #239506;
}
.btn11,.btn22,.btn33{

  border-radius: 200px;
}
.btn11{

  background-color: #e04a68;
  border-radius: 200px;
  color: white;
}
.btn22{

  background-color: #e09f4a;
  border-radius: 200px;
  color: white;
}
.btn33{

  background-color: #4a90e0;
  border-radius: 200px;
  color: white;
}
.button-bookss {
  position: absolute;
  bottom: 0;
  margin: 10px;
}
</style>
