<template>

<!-- ? ส่วนหัว -->

  <div class="menubar d-flex">
    <router-link to="/" style="text-decoration: none; color: inherit"
      ><h1>FWHUB</h1></router-link
    >

    <div class="menu-link">
      <div class="bg d-flex mt-1">

        <router-link
          to="/HomePage"
          @click="setCurrentMenu('m1')"
          style="text-decoration: none; color: inherit"
        >
          <h3 :class="{ m1: true, active: currentMenu === 'm1' }" id="menu-f">
            หน้าหลัก
          </h3>
        </router-link>

        <router-link
          @click="setCurrentMenu('m2')"
          style="text-decoration: none; color: inherit"
          to="/Learning"
        >
          <h3 :class="{ m2: true, active: currentMenu === 'm2' }">
            แหล่งเรียนรู้
          </h3>
        </router-link>

        <router-link
          to="/Books"
          @click="setCurrentMenu('m3')"
          style="text-decoration: none; color: inherit"
        >
          <h3 :class="{ m3: true, active: currentMenu === 'm3' }">หนังสือ</h3>
        </router-link>

        <router-link
          to="/Math"
          @click="setCurrentMenu('m4')"
          style="text-decoration: none; color: inherit"
        >
          <h3 :class="{ m4: true, active: currentMenu === 'm4' }">คำนวณ</h3>
        </router-link>

      </div>
    </div>

    <div class="tab">
      <font-awesome-icon
        class="icon"
        :icon="['fas', 'bars']"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      />
    </div>
  </div>

  <!-- ? ตรง 3 ขีด  -->
  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasRightLabel">เมนู</h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">

<div class="menu-phone">

<div class="menu-phone-all">

<a href="/"><h3>หน้าแรก</h3></a>
<a href="/Learning"><h3>แหล่งเรียนรู้</h3></a>
<a href="/Books"><h3>หนังสือ</h3></a>
<a href="/Math"><h3>คำนวณ</h3></a>
<a href="/Recom"><h3>เสนอ</h3></a>




</div>


</div>
      <div class="recom text-center">
        <h3>
          ท่านสามารถเข้าไปประเมินหรือให้คำแนะนำเพิ่มเติมได้ ท่านคิดว่าเราควรเพิ่มสิ่งใด หรือ มีความต้องการให้มีอะไรปรับปรุง
        </h3>
        
        <h5>สามารถเข้าไป แนะนำได้ ตรงนี้เลย</h5>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfHtywWtuqItHFR8dZDo00zsn9bQRE4mvYugTMOohS4qP6J2Q/viewform?usp=sf_link"
          target="_blank"
          >
          <button class="btn2">แนะนำ</button></a>
      </div>
    </div>
  </div>




</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";


library.add(faBars);

export default {
  name: "MenuBar",
  components: {
    FontAwesomeIcon,
  },
  computed: { // ทำงานโดยอัตโนมัติ
    currentMenu() {

      if(!this.$store.state.currentMenu){ //ถ้าไม่มีค่า ใน currentMenu ใน vuex 
        return this.$store.state.currentMenu || "m1"; // จะกำหนด ให้ currentMenu = m1
      }
      else{ // ถ้าไม่ ก็จะ ให้แสดง m ตามที่เรากดไปเลย
        return this.$store.state.currentMenu || this.$store.setCurrentMenu; 
      }
    },
  },
  methods: { // คือฟังก์ชั่น ไว้รับค่า และ ตรวจว่า  มีค่าไม่เท่ากัน  menu กับ currentMenu  ให้ เพิ่มค่า ไป ที่ vuex 
    setCurrentMenu(menu) {
      if (this.currentMenu !== menu) {
        this.$store.commit("setCurrentMenu", menu);
      }
    },
  },
};
</script>

<style scoped>

@import url("https://fonts.googleapis.com/css2?family=Monofett&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@300&family=Inter:wght@300&family=Monofett&display=swap");


.menu-phone{
  display: none;
}
/* เพิ่มเส้นขอบรอบอิลิเมนต์ "menu-phone" */
.menu-phone h3 {
  border: 1px solid #000; /* เส้นขอบสีดำหนา 1 พิกเซล */
  padding: 10px; /* Padding เพิ่มระยะระหว่างเนื้อหา (ตัวเลือก) */
  display: inline-block; /* กำหนดให้อิลิเมนต์พอดีรอบเนื้อหา */
}

/* การสไตล์ลิงค์ภายใน "menu-phone-all" */
.menu-phone-all a {
  display: block; /* กำหนดให้ลิงค์เป็นอิลิเมนต์ประเภทบล็อกเพื่อเพิ่มระยะระหว่างลิงค์ */
  text-decoration: none; /* ลบเส้นใต้งานของลิงค์ */
  color: #000; /* กำหนดสีข้อความเป็นสีดำ */
  padding: 5px 0; /* เพิ่ม Padding ด้านบนและด้านล่างเพื่อสร้างระยะระหว่างลิงค์แนวตั้ง */
  text-align: center; /* จัดการข้อความแนวนอนตรงกลาง */
}

/* ตัวเลือก: เพิ่มเอฟเฟกต์เมื่อเม้าส์ไปชี้ลิงค์ */
.menu-phone-all a:hover {
  background-color: #f0f0f0; /* สีพื้นหลังเมื่อเม้าส์ไปชี้ลิงค์ */
}

.tab {
  cursor: pointer;
}
.menubar {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px 20px;
  margin-bottom: 20px;
}

.menubar h1 {
  font-family: "Monofett", monospace;
  font-size: 45px;
  color: rgb(0, 0, 0);
  margin: 0;
}

.menu-link {
  margin-top: 20px;
  margin: 10px 30px 10px 30px;
  padding: 2px 0 0 2px;
  border-radius: 200px;
  width: 600px;
  height: 53px;
  background: #f7f4f4;
}

.bg {
  display: flex;
  gap: 50px;
  border-radius: 200px;
  position: relative;
}


.m1.active,
.m2.active,
.m3.active,
.m4.active {
  background-color: black;
  color: white;
  padding: 5px 8px;
  border-radius: 200px;
  transform: scale(1.1);
  z-index: 1;
  cursor: pointer;
}

.menu-link h3 {
  font-family: "Bai Jamjuree", sans-serif;
  font-size: 28px;
  margin-left: 2px;
}

#menu-f {
  margin-left: 6.9px;
}

.icon {
  font-size: 50px;
}

/* ทำ version phone samsung galaxy a51/71 */
@media only screen and (max-width: 412px)  {
  .menu-link,.menu-link h3 {
   display: none;
   
  }
  .tab{
 position: relative;
 right: -50px;
  }
  .menubar{
margin-top: 50px;
  }
  .menu-phone{
  display: block;
}
.recom{
  display: none;
}
}

/* ipad air */
@media only screen and (max-width: 820px)  {
  .menu-link,.menu-link h3 {
   display: none;
  }
}

</style>
