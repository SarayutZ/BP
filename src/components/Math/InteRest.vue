    <template>
        <div class="savings-calculator">
        <h1>คำนวณดอกเบี้ยฝากออมทรัพย์</h1>
    
        <div class="form-group">
            <label for="principal">จำนวนเงินต้น:</label>
            <input type="number" v-model="principal" id="principal">
        </div>
    
        <div class="form-group">
            <label for="interestRate">อัตราดอกเบี้ยปีละ (%):</label>
            <input type="number" v-model="interestRate" id="interestRate">
        </div>
    
        <div class="form-group">
            <label for="days">จำนวนวันที่ฝากในงวดนั้น:</label>
            <input type="number" v-model="days" id="days">
        </div>
    
        <div class="form-group">
            <label for="totalDays">จำนวนวันทั้งปี:</label>
            <input type="number" v-model="totalDays" id="totalDays">
        </div>
    
        <button @click="calculateInterest">คำนวณดอกเบี้ย</button>
    
        <p class="result">จำนวนดอกเบี้ย: {{ formatNumber(interestAmount) }} บาท</p>
        </div>
    </template>
    
    <script setup>
    import { ref } from 'vue';
    
    const principal = ref();
    const interestRate = ref();
    const days = ref();
    const totalDays = ref(365);
    const interestAmount = ref(0);
    
    const calculateInterest = () => {
        const p = parseFloat(principal.value);
        const r = parseFloat(interestRate.value) / 100;
        const d = parseFloat(days.value);
        const n = parseFloat(totalDays.value);
    
        const interest = (p * r * d) / n;
        interestAmount.value = interest.toFixed(2);
    };
    const formatNumber = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    </script>
    
    <style scoped>
    .savings-calculator {
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
    