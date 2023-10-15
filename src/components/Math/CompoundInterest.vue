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

      <!-- ?? แสดงผลลัพท์  -->
      <div class="result2 mt-3" v-if="showResult">
        เงินสะสม :
        {{
          totalPrincipal.toLocaleString(undefined, {
            //จัดรูปแบบให้มีทศนิยม 2 ตำแหน่งตัวเลขทั้งตัวเลขที่เป็นส่วนจำนวนเต็มและทศนิยม
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })
        }}
        <br />
        เงินส่วนต่าง :
        {{
          resultsZ.toLocaleString(undefined, {
            //จัดรูปแบบให้มีทศนิยม 2 ตำแหน่งตัวเลขทั้งตัวเลขที่เป็นส่วนจำนวนเต็มและทศนิยม
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })
        }}

        บาท
      </div>
    </div>

    <!-- ?? ตรงที่อธิบาย -->
    <div class="explan">
      <p>
        สูตรสำหรับการคำนวณเงินออมสิ้นปี (Future Value) หรือ
        จำนวนเงินที่คุณจะมีหลังจากลงทุน หรือ ออมเงิน เรียบร้อยในระยะเวลาที่กำหนด
        โดยใช้อัตราผลตอบแทน <br />
        (Rate of Return) ต่อปีและระยะเวลาในปี (Time Period)
      </p>
      <h5>เงินออมสิ้นปี = เงินออมต้นปี x (1 + ผลตอบแทนต่อปี) ^ ระยะเวลาปี</h5>

      <div class="know">

<a href="https://www.set.or.th/th/education-research/education/happymoney/knowledge/article/17-learn-about-compound-interest-if-you-want-to-be-rich" target="_blank"><button class="btn btn-warning">อธิบายเพิ่มเติม</button></a>


</div>



    </div>  
   
  </div>

  <!-- ? แสดง ตราราง -->
  <div class="result" v-if="showResult"> 
    <table>
      <thead>
        <tr>
          <th>ปี</th>
          <th>มูลค่า (บาท)</th>
        </tr>
      </thead>
      <tbody>
        <!-- ทำการวนลูป  เพื่อแสดง ค่า  -->
        <tr v-for="(result, index) in results" :key="index"> 
          <td>{{ result.year }}</td>
          <td>{{ result.value }}</td>
        </tr>
      </tbody>
    </table>
  


  
  
  
  </div>


</template>

<script>
import { ref } from "vue";
import MenuBar from "../MenuBar.vue";

export default {
  setup() {
    const results = ref([]); // เป็น ตัวแปร เก็บผลลัพธ์  
    const principal = ref(0); // เงินต้น
    const interestRate = ref(0); //ผลตอบแทนรายปี
    const numberOfInstallments = ref(0); //ระยะเวลา
    const showResult = ref(false); // ใช้ เพื่อ ไม่ให้มันแสดง ค่า เมื่อ ยังไม่กดปุ่ม 
    const totalPrincipal = ref(0); // ผลจากการคำนวณ
    const resultsZ = ref(0); //  เงินส่วนต่าง

    const calculateTotalPrincipal = () => {
      totalPrincipal.value = principal.value *  Math.pow(1 + interestRate.value / 100, numberOfInstallments.value); // คำนวณสูตรดอกเบี้ยทบต้น
      resultsZ.value = totalPrincipal.value - principal.value;  // หาเงินส่วนต่าง
      showResult.value = true;
      showYear();
    };

    const showYear = () => {
      results.value = []; // ไว้เก็บค่า
      for (let i = 1; i <= numberOfInstallments.value; i++) {
        const result =
          principal.value * Math.pow(1 + interestRate.value / 100, i);
        results.value.push({
          year: i,
          value: result.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }),
        });
      }
    };

    return {
      principal,
      interestRate,
      numberOfInstallments,
      calculateTotalPrincipal,
      showResult,
      results,
      resultsZ,
      totalPrincipal,
    };
  },
  components: { MenuBar },
};
</script>

<style scoped>
table td {
  white-space: pre-line;
}

table {
  width: 100%;
  border-collapse: collapse;
}

table,
th,
td {
  border: 1px solid #008000; /* สีเขียว */
}

th,
td {
  padding: 10px;
  text-align: center;
}

th {
  background-color: #008000; /* สีเขียว */
  color: #fff; /* สีข้อความสีขาว */
}

td {
  background-color: #f0f0f0; /* สีเทาเพื่อเนื้อหาข้อมูล */
  color: #008000; /* สีข้อความสีเขียว */
}

td::before {
  content: attr(data-content);
  white-space: pre-line;
}

@media only screen and (max-width: 400px) {
  .box-side {
    display: inline !important;
  }
  .explan p {
    width: 390px !important;
  }
  .explan h5 {
    width: 390px !important;
    font-size: 15px !important;
  }
}
@media only screen and (width: 768px) and (height: 1024px) {
  .box-side {
    display: inline !important;
  }
  .compound-interest-calculator {
    margin-left: 150px !important;
  }
  .explan p {
    width: 770px !important;
  }
  .explan h5 {
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
.explan h5 {
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

.box-side button {
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
