<template>
  <!--TODO นำเข้าคอมโพเนนต์ MenuBar -->

  <MenuBar />

  <!-- ? หัวแถบหลัก หน้า หนังสือ -->

  <div class="head-books">
    <h3>Books</h3>
  </div>

  <!-- ? หัวแถบย่อย input หนังสือ -->

  <div class="mini-books">
    <input
      type="text"
      placeholder="ค้นหาหนังสือ"
      v-model="search"
      @input="filteredbooks"
    />
  </div>

  <!-- ? บอก ประเภท  -->
  <div class="text-books d-flex">
    <h3>การเงิน / ลงทุน {{ shopBooks.length }} เล่ม</h3>
  </div>

  <!-- !  กล่องหนังสือทั้งหมด-->

  <div class="box-books" style="display: flex; flex-wrap: wrap">
    <div
      class="card-c4 text-center"
      style="width: 18rem"
      v-for="(item, index) in filteredbooks"
      @click="showbooksDetails(item, index)"
    >
      <img :src="item.images" class="card-img-top" alt="..." />
      <div class="card-body">
        <h6 class="text-book fw-bold fs-5">{{ item.name }}</h6>
        <p class="card-text"></p>
      </div>
      <!-- ? ส่วนของปุ่ม กด -->
      <div class="button-bookss">
      <a v-if="item.link_se_ed" :href="item.link_se_ed" target="_blank"
        ><button class="btn11 btn-danger m-2">SE-ED</button></a
      >
      <a v-if="item.link_shopee" :href="item.link_shopee" target="_blank"
        ><button class="btn22 btn-danger m-2">Shopee</button></a
      >
      <a v-if="item.link_lazada" :href="item.link_lazada" target="_blank"
        ><button class="btn33 btn-danger m-2">Lazada</button></a
      >
    </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MenuBar from "./MenuBar.vue"

export default {
  components: { MenuBar },
  computed: {
    ...mapGetters(["shopBooks"]), //เรียกใช้ ข้อมูลที่เก็บใน vuex ชื่อ shopBooks

    filteredbooks() {
      // เป็น function ที่ ใช้กรอก หนังสือโดย การ รับค่า คำ ใน input แล้ว มาเช็คกับ ชื่อ หนังสือ ที่ตรงกับคำนั้น และ แสดง ออกมา
      return this.shopBooks.filter(
        (books) => books.name.toLowerCase().includes(this.search.toLowerCase()) // มีการใช้ toLowerCase เพื่อ คำที่กรอกเข้ามา เป็น ตัวเล็ก ตัวของ หนังสือ ก็เหมือน กัน เพื่อง่ายต่อการ เช็ค และ ส่งค่า หนังสือ ที่ตรงกัน ออกไปแสดง
      );
    },
  },
  data() {
    return {
      search: "", // ใช้ค้นหา หนังสือ
    };
  },
};
</script>

<style>
@media only  screen and (min-width: 390px)  {
  .head-books {
  width: 100% !important;
  margin: 0 !important;

}
.head-books h3{
  font-size: 32px !important;
}
  .mini-books {
  width: 100% !important;
  margin: 0 !important;
}
.mini-books input{
  width: 50% !important;
}


}
@media only screen and (min-width: 1440px){
  .head-books {

  width: 85% !important;
  margin: 0px 120px 0px 120px !important;
}
.mini-books {
  background-color: #c0dee3;
  width: 85% !important;
  height: 140px;
  padding-top: 50px;
  display: flex;
  margin: 0px 120px 0px 120px !important;
  justify-content: center;
  align-items: center;
}
.head-books h3 {
  font-size: 120px !important;
}

}
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
.text-books {
  margin-top: 50px;
  margin-left: 120px;
}
.box-books {
  display: flex;
  justify-content: center;
  align-items: center;
}
.card-c4 {
  height: 28rem;
  border-bottom: 5px solid #239506;
  margin: 20px;
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
.btn11,
.btn22,
.btn33 {
  border-radius: 200px;
}
.btn11 {
  background-color: #e04a68;
  border-radius: 200px;
  color: white;
}
.btn22 {
  background-color: #e09f4a;
  border-radius: 200px;
  color: white;
}
.btn33 {
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
