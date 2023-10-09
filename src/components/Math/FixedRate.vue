<template>
    <div class="simple-interest-calculator">
      <h1>คำนวณดอกเบี้ยคงที่</h1>
  
      <div class="form-group">
        <label for="principal">เงินต้น (บาท):</label>
        <input v-model="principal" type="number" id="principal" />
      </div>
  
      <div class="form-group">
        <label for="annualInterestRate">อัตราดอกเบี้ย (%ต่อปี):</label>
        <input v-model="annualInterestRate" type="number" id="annualInterestRate" />
      </div>
  
      <div class="form-group">
        <label for="loanTerm">จำนวนปี:</label>
        <input v-model="loanTerm" type="number" id="loanTerm" />
      </div>
  
      <button @click="calculateTotalInterest">คำนวณ</button>
  
      <div v-if="totalInterest !== null" class="result">
        <p>ดอกเบี้ยคงที่ทั้งหมด: {{ totalInterest }} บาท</p>
      </div>
    </div>
  </template>
  
  <script >
  import { ref } from 'vue';

  const principal = ref(0);
  const annualInterestRate = ref(0);
  const loanTerm = ref(0);
  const totalInterest = ref('');
  
  const calculateTotalInterest = () => {
    const interestRatePerYear = annualInterestRate.value / 100;
    totalInterest.value = (principal.value * interestRatePerYear * loanTerm.value).toLocaleString(undefined, { maximumFractionDigits: 2 });
  };
  </script>
  
  <style scoped>
  .simple-interest-calculator {
    max-width: 400px;
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
  
  input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }
  
  button {
    background-color: #4caf50;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
  }
  
  .result {
    margin-top: 16px;
    font-weight: bold;
    color: #333;
  }
  </style>
  