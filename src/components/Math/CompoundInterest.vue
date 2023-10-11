<template>
  
  <!--TODO นำเข้าคอมโพเนนต์ MenuBar -->

  <MenuBar />

  <!-- !! ส้วนของ form กรอกเลข -->

  <div class="box-side d-flex justify-content-center">
    <div class="compound-interest-calculator">
      <h1>คำนวณดอกเบี้ยทบต้น</h1>

      <div class="form-group">
        <label for="principal">เงินต้น :</label>
        <input v-model="principal" type="number" id="principal" />
      </div>

      <div class="form-group">
        <label for="interestRate">ผลตอบแทนรายปี (%) :</label>
        <input v-model="interestRate" type="number" id="interestRate" />
      </div>

      <div class="form-group">
        <label for="numberOfInstallments">ระยะเวลา (ปี) :</label>
        <input
          v-model="numberOfInstallments"
          type="number"
          id="numberOfInstallments"
        />
      </div>

      <button @click="calculateTotalPrincipal">คำนวณ</button>

      <div class="result" v-if="showResult">
        เงินสะสมสิ้นงวด :
        {{
          totalPrincipal.toLocaleString(undefined, {
            //จัดรูปแบบให้มีทศนิยม 2 ตำแหน่งตัวเลขทั้งตัวเลขที่เป็นส่วนจำนวนเต็มและทศนิยม
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })
        }}
        บาท
      </div>
    </div>

    <div class="explan">
      <p>
        สูตรสำหรับการคำนวณเงินออมสิ้นปี (Future Value)
        หรือ จำนวนเงินที่คุณจะมีหลังจากลงทุน หรือ ออมเงิน เรียบร้อยในระยะเวลาที่กำหนด
        โดยใช้อัตราผลตอบแทน <br/>  (Rate of Return) ต่อปีและระยะเวลาในปี (Time Period)
      </p>
      <h5>เงินออมสิ้นปี = เงินออมต้นปี x (1 + ผลตอบแทนต่อปี) ^ ระยะเวลาปี</h5>
    </div>
  </div>

</template>

<script>
import { ref, computed } from "vue";
import MenuBar from "../MenuBar.vue";

export default {
  data() {
    return {
      principal: 0, // เงินต้น
      interestRate: 0,  // ผลตอบแทนรายปี
      numberOfInstallments: 0, //ระยะเวลา (ปี)
    };
  },
  setup() {
    const principal = ref(0);
    const interestRate = ref(0);
    const numberOfInstallments = ref(0);
    const showResult = ref(false);
    const totalPrincipal = computed(() => {
      return (
        principal.value * //* ใช้สำหรับการคูณในภาษา JavaScript ดังนั้น principal.value * จะทำการคูณค่าที่อยู่ใน principal.value กับค่าอื่นๆ
        Math.pow(1 + interestRate.value / 100, numberOfInstallments.value) //สูตรคำนวณ เงินต้น
      );
    });
    const calculateTotalPrincipal = () => {
      console.log("เงินต้นทั้งหมด:", totalPrincipal.value);
      showResult.value = true;
    };
    return {
      // ส่งค่ากลับไป
      principal,
      interestRate,
      numberOfInstallments,
      totalPrincipal,
      calculateTotalPrincipal,
      showResult,
    };
  },
  components: { MenuBar },
};
</script>

<style scoped>
@media only  screen and (max-width: 400px)  {
.box-side{
  display: inline !important;
}
.explan p{
  width: 390px !important;
}
.explan h5{
  width: 390px !important;
  font-size: 15px !important;

}

}
@media only screen and (width: 768px) and (height: 1024px) 
  {
.box-side{
  display: inline !important;
}
.compound-interest-calculator{
  margin-left: 150px !important;
  
}
.explan p{
  width: 770px !important;
}
.explan h5{
  width: 770px !important;
  font-size: 15px !important;

}

}


.box-side {
  gap: 120px;
}

.explan p {
  width: 600px;
  word-wrap: break-word;

  background-color: #42994f;
  font-weight: bolder;
color: white;
  padding: 20px;
  text-align: center;
}
.explan h5{
  width: 600px;
  word-wrap: break-word;
background-color: #555;
color: white;
font-weight: bold;
  padding: 20px;
  text-align: center;
}
.compound-interest-calculator {
  max-width: 450px;

  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  color: #333;
}

.form-group {
  margin-bottom: 16px;
}

label {
  display: block;
  margin-bottom: 8px;
  color: #555;
}

input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #4caf50;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  font-size: 16px;
}

.result {
  margin-top: 16px;
  font-weight: bold;
  color: #333;
  font-size: 18px;
}
</style>
