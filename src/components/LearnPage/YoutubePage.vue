<template>
  
   <!--TODO นำเข้าคอมโพเนนต์ MenuBar -->

  <MenuBar />

     <!-- ?  ส่วนหัว -->

  <div class="head-bar2">
    <h3>Youtube</h3>
  </div>

   <!-- ? ตรงค้นหา -->

  <div class="mini-bar2">
    <input type="text" placeholder="ค้นหาช่องสอนการเงินการลงทุน" v-model="search"
      @input="filtered" />
  </div>

    <!-- ? ตรงข้อความอธิบาย -->

  <div class="text-coures-yt d-flex">
    <h3>channel {{Youtube.length}} ช่อง</h3>
  </div>

    <!-- ? ตรงนี้คือ กล่องเนื้อหา ต่างๆ  -->

  <div class="box-youtube" style="display: flex; flex-wrap: wrap">
    
    <div class="card-c2" style="width: 18rem"  v-for="(item, index) in filtered"
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
    filtered() {
      return this.Youtube.filter((Youtube) =>
        Youtube.name.toLowerCase().includes(this.search.toLowerCase())
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
  .head-bar2 {
  width: 100% !important;
  margin: 0 !important;

}
.head-bar2 h3{
  font-size: 32px !important;
}
  .mini-bar2 {
  width: 100% !important;
  margin: 0 !important;
}
.mini-bar2 input{
  width: 50% !important;
}


}
@media only screen and (min-width: 1440px){
  .head-bar2 {

  width: 85% !important;
  margin: 0px 120px 0px 120px !important;
}
.mini-bar2 {
  background-color: #c0dee3;
  width: 85% !important;
  height: 140px;
  padding-top: 50px;
  display: flex;
  margin: 0px 120px 0px 120px !important;
  justify-content: center;
  align-items: center;
}
.head-bar2 h3 {
  font-size: 120px !important;
}

}
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
.text-coures-yt {
  margin-top: 50px;
  margin-left: 120px;
}
.box-youtube {
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
