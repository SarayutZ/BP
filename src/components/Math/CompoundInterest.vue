<template>
    <div class="compound-interest-calculator">
      <h1>คำนวณดอกเบี้ยทบต้น</h1>
  
      <div class="form-group">
        <label for="principal">เงินต้น:</label>
        <input v-model="principal" type="number" id="principal" />
      </div>
  
      <div class="form-group">
        <label for="interestRate">อัตราดอกเบี้ย (%):</label>
        <input v-model="interestRate" type="number" id="interestRate" />
      </div>
  
      <div class="form-group">
        <label for="numberOfInstallments">จำนวนงวด:</label>
        <input v-model="numberOfInstallments" type="number" id="numberOfInstallments" />
      </div>
  
      <button @click="calculateTotalPrincipal">คำนวณ</button>
  
      <div class="result">
        เงินต้นทั้งหมด: {{ totalPrincipal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}
      </div>
    </div>
  </template>
  
  <script>
  import { ref, computed } from 'vue';
  
  export default {
    data() {
      return {
        principal: 0,
        interestRate: 0,
        numberOfInstallments: 0,
      };
    },
    setup() {
      const principal = ref(0);
      const interestRate = ref(0);
      const numberOfInstallments = ref(0);
  
      const totalPrincipal = computed(() => {
        return principal.value * Math.pow(1 + interestRate.value / 100, numberOfInstallments.value);
      });
  
      const calculateTotalPrincipal = () => {
        // คำนวณเงินต้นทั้งหมด
        // อาจจะใช้ได้ถ้าคุณต้องการคำนวณเมื่อผู้ใช้คลิกที่ปุ่ม
        console.log('เงินต้นทั้งหมด:', totalPrincipal.value);
      };
  
      return {
        principal,
        interestRate,
        numberOfInstallments,
        totalPrincipal,
        calculateTotalPrincipal,
      };
    },
  };
  </script>
  
  <style scoped>
  .compound-interest-calculator {
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
  