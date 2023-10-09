<template>
    <div class="retirement-calculator">
      <h1>คำนวณเงินเกษียณอายุ</h1>
  
      <div class="form-group">
        <label for="monthlyExpenses">เงินใช้จ่ายหลังเกษียณ ต่อ เดือน (บาท): </label>
        <input v-model="monthlyExpenses" type="number" id="monthlyExpenses">
      </div>
  
      <!-- Remove the input for retirement age -->
      <!-- <div class="form-group">
        <label for="retirementAge">อายุเกษียณ (ปี): </label>
        <input v-model="retirementAge" type="number" id="retirementAge">
      </div> -->
  
      <div class="form-group">
        <label for="retirementDuration">ระยะเวลาหลังเกษียณ (ปี): </label>
        <input v-model="retirementDuration" type="number" id="retirementDuration">
      </div>
  
      <button @click="calculateRetirement">คำนวณ</button>
  
      <div v-if="retirementFund !== null" class="result">
        <p>จำนวนเงินที่ต้องการเมื่อเกษียณ: {{ formatNumber(retirementFund) }} บาท</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const monthlyExpenses = ref();
  // Set default retirement age to 12
  const retirementAge = ref(12);
  const retirementDuration = ref();
  const retirementFund = ref(null);
  
  const calculateRetirement = () => {
    const totalRetirementFund =
      monthlyExpenses.value * 12 * retirementDuration.value;
    retirementFund.value = totalRetirementFund.toFixed(2);
  };
  
  const formatNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  </script>
  
  <style scoped>
  .retirement-calculator {
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
  