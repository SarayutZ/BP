<template>
  <MenuBar />

  <div class="head-bar2">
    <h3>Youtube</h3>
  </div>
  <div class="mini-bar2">
    <input type="text" placeholder="ค้นหาช่องสอนการเงินการลงทุน" v-model="searchQuery"
      @input="filteredCourses" />
  </div>

  <div class="text-coures-set d-flex">
    <h3>channel</h3>
  </div>

  <div class="box-courses" style="display: flex; flex-wrap: wrap">
    
    <div class="card-c2" style="width: 18rem"  v-for="(item, index) in filteredCourses"
      @click="showCourseDetails(item, index)">
      <a :href="item.link" target="_blank">

  <img
        :src="item.images"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body text-center">
        <h6 class="fw-bold fs-5">{{ item.name }}</h6>
        <p class="card-text">
          
        </p>
        
        
        
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
    ...mapGetters(["Youtube"]),
    filteredCourses() {
      return this.Youtube.filter((course) =>
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
.head-bar2 {
  background-color: #e35e5e;
  width: 80%;
  height: 240px;
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin: 0px 120px 0px 120px;
}
.mini-bar2 {
  background-color: #fcdada;
  width: 80%;
  height: 140px;
  padding-top: 50px;
  display: flex;
  margin: 0px 120px 0px 120px;
  justify-content: center;
  align-items: center;
}
.mini-bar2 input {
  width: 400px;
  padding: 10px;
  border-radius: 200px;
  font-size: 24px;
}
.head-bar2 h3 {
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

.card-c2 {
  border-bottom: 5px solid #e35e5e;
  margin: 10px;

  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  position: relative;
}

.card-c2:hover {
  transform: scale(1.05);
}
</style>
