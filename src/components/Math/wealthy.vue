<template>
    <MenuBar />
    <div class="box-side2 d-flex justify-content-center">
      <div class="seventwo">
        <h1>คำนวณความมั่งคั่งสุทธิ</h1>
        <div class="form-group">
          <label for="assets">สินทรัพย์รวม (บาท):</label>
          <input type="number" v-model="assets" id="assets" class="input-field" />
        </div>
        <div class="form-group">
          <label for="liabilities">หนี้สินรวม (บาท):</label>
          <input type="number" v-model="liabilities" id="liabilities" class="input-field" />
        </div>
        <div class="form-group">
          <button @click="calculateNetWorth" class="calculate-button">คำนวณ</button>
        </div>
        <div v-if="netWorth " class="result">
          <p>ความมั่งคั่งสุทธิ: {{ netWorth.toLocaleString(undefined, {
            //จัดรูปแบบให้มีทศนิยม 2 ตำแหน่งตัวเลขทั้งตัวเลขที่เป็นส่วนจำนวนเต็มและทศนิยม
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }) }} บาท</p>
        </div>
      </div>
  
      <!-- อธิบายสูตร -->
      <div class="explan2">
        <p>คำนวณความมั่งคั่งสุทธิ</p>
        <h6>ความมั่งคั่งสุทธิ = สินทรัพย์รวม - หนี้สินรวม</h6>
        <h6>ถ้า ผลออกมาเป็น + ถือว่าดี</h6>
      </div>
    </div>
  </template>
  
  <script>
  import MenuBar from "../MenuBar.vue";
  
  export default {
    data() {
      return {
        assets: 0,
        liabilities: 0,
        netWorth: 0,
      };
    },
    methods: {
      calculateNetWorth() {
        this.netWorth = this.assets - this.liabilities;
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
  