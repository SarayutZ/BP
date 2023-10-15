<template>
  <MenuBar />

  <div class="head-bar">
    <h3>Mahidol</h3>
  </div>

  <div class="mini-bar">
    <input
      type="text"
      placeholder="ค้นหาคอร์สเรียน"
      v-model="search"
      @input="filtered"
    />
  </div>

  <div class="container2 text-center">
    <div class="row">
      <div class="col mt-5" v-for="(Course, index) in filtered" :key="index">
        <div style="width: 15rem">
          <img :src="Course.imagesCourse" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title mt-4">{{ Course.name }}</h5>

            <a :href="Course.Learnlink" target="_blank">
              <button
                class="btn mt-3 rounded-pill w-50"
                style="background-color: #3b48bd; color: white"
              >
                ดูรายละเอียด
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MenuBar from "../MenuBar.vue";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      search: "",
    };
  },
  components: { MenuBar },
  computed: {
    ...mapGetters(["Mahidol"]),
    filtered() {
      return this.Mahidol.filter((course) =>
        course.name.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
};
</script>

<style scoped>


.container2 {
  margin: 0;
}
</style>
