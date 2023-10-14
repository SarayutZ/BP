<template>

      <!--TODO นำเข้าคอมโพเนนต์ MenuBar -->

    <MenuBar />


<!-- ! ส่วนนี้ คือ ที่คำนวณ -->
    <div class="box-side2 d-flex justify-content-center">
      <div class="seventwo">
        <h1>อัตราส่วนเงินออม และ เงินออมและเงินลงทุน</h1>
        <div class="form-group">
          <label for="rate">รายได้รวมทั้งเดือน (บาท):</label>
          <input type="number" v-model="income" id="income" class="input-field" />
        </div>
        <div class="form-group">
          <label for="savings">เงินออมและเงินลงทุน (บาท)/ เดือน :</label>
          <input type="number" v-model="savings" id="savings" class="input-field" />
        </div>
        <div class="form-group">
          <button @click="calculateYears" class="calculate-button">คำนวณ</button>
        </div>
        <div v-if="money >= 0" class="result">
          <p>สภาวะการเงิน: {{ money }} </p>
        </div>
      </div>
  
      <!-- อธิบายสูตร -->
      <div class="explan2">
        <p>อัตราส่วนเงินออม และ เงินออมและเงินลงทุน</p>
        <h6>บ่งบอกความสามารถในการสะสมความมั่งคั่งเก็บได้มากกว่า 10% ถือว่าดี</h6>
      </div>
    </div>
  </template>
  
  <script>
  import MenuBar from "../MenuBar.vue";
  
  export default {
    data() {
      return {
        income: 0,
        savings: 0,
        money: -1,
      };
    },
    methods: {
      calculateYears() {
        if (this.income > 0) {
          this.money = (100 * this.savings) / this.income;
        } else {
          this.money = -1;
        }
      },
    },
    components: { MenuBar },
  };
  </script>
  
  <style scoped>
  @media only  screen and (max-width: 400px)  {
.box-side2{
  display: inline !important;
}
.explan2 p{
  width: 390px !important;
}
.explan2 h6{
  width: 390px !important;
  font-size: 15px !important;

}

}
@media only screen and (width: 768px) and (height: 1024px) 
  {
.box-side{
  display: inline !important;
}
.retirement-calculator{
  margin-left: 150px !important;
  
}
.explan2 p{
  width: 770px !important;
}
.explan h5{
  width: 770px !important;
  font-size: 15px !important;

}

}
  .seventwo {
    max-width: 500px;
    margin: 0 auto;
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
  
  .input-field {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }
  
  .calculate-button {
    background-color: #4caf50;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
  }
  .explan2 {
    margin-right: 150px;
  }
  .explan2 p {
    width: 500px;
    word-wrap: break-word;
  
    background-color: #42994f;
    font-weight: bolder;
    color: white;
    padding: 20px;
    text-align: center;
  }
  .explan2 h6 {
    width: 500px;
    word-wrap: break-word;
    background-color: #555;
    color: white;
    font-weight: bold;
    padding: 10px;
    text-align: center;
  }
  .result {
    margin-top: 16px;
    font-weight: bold;
    color: #333;
  }
  </style>
  