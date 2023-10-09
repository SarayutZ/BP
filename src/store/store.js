import { createStore } from "vuex";

export default createStore({
  state: {
    currenMenu: null,

    // อันนี้คือส่วนของ เก็บข้อมูล หนังสือ การเงิน การลงทุน ทั้งหมด
    shopBooks: [
      {
        name: "พ่อรวยสอนลูก",
        imagesBooks:
          "https://images-se-ed.com/ws/Storage/Originals/978616/081/9786160814077L.jpg?h=3cf4fb0b3b6d5c892e33f462ff5d709d",
        Shoplink:
          "https://m.se-ed.com/Detail/%E0%B8%9E%E0%B9%88%E0%B8%AD%E0%B8%A3%E0%B8%A7%E0%B8%A2%E0%B8%AA%E0%B8%AD%E0%B8%99%E0%B8%A5%E0%B8%B9%E0%B8%81-Rich-Dad-Poor-Dad/9786160814077",
      },
    
      {
        name:"Money 101",
        imagesBooks:"https://images-se-ed.com/ws/Storage/Originals/978616/085/9786160850396L.jpg?h=c8564d753dd8d3b22aee7df8dfc0817f",
        Shoplink:"https://m.se-ed.com/Detail/Money-101-(%E0%B8%9B%E0%B8%81%E0%B8%AD%E0%B9%88%E0%B8%AD%E0%B8%99)/9786160850396"
      },
      {
        name:"เศรษฐีชี้ทางรวย ฉบับปกแข็ง ",
        imagesBooks:"https://images-se-ed.com/ws/Storage/Originals/978616/084/9786160849000L.jpg?h=9837c1366798bc48640e998be2698082",
        Shoplink:"https://m.se-ed.com/Detail/%E0%B9%80%E0%B8%A8%E0%B8%A3%E0%B8%A9%E0%B8%90%E0%B8%B5%E0%B8%8A%E0%B8%B5%E0%B9%89%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%A3%E0%B8%A7%E0%B8%A2-%E0%B8%89%E0%B8%9A%E0%B8%B1%E0%B8%9A%E0%B8%9B%E0%B8%81%E0%B9%81%E0%B8%82%E0%B9%87%E0%B8%87-(The-Richest-Man-in-Babylon-Millionaire-s-Edition)/9786160849000"
      },
      {
        name:"บริหารเงินล้านหลังเกษียณ ให้มีเงินใช้ทุกเดือน",
        imagesBooks:"https://images-se-ed.com/ws/Storage/Originals/978616/578/9786165789226L.jpg?h=9aed9d07ebd2d5209bfa26122c163d79",
        Shoplink:"https://m.se-ed.com/Detail/%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99%E0%B8%A5%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B9%80%E0%B8%81%E0%B8%A9%E0%B8%B5%E0%B8%A2%E0%B8%93-%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%A1%E0%B8%B5%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B8%97%E0%B8%B8%E0%B8%81%E0%B9%80%E0%B8%94%E0%B8%B7%E0%B8%AD%E0%B8%99/9786165789226"
      },
      {
        name:"คิดแล้ว..ต้องรวย : Think and Grow Rich",
        imagesBooks:"https://images-se-ed.com/ws/Storage/Originals/978616/603/9786166039238L.jpg?h=eb9d05b4bd8ce4b5b0e4ef119f5bad62",
        Shoplink:"https://m.se-ed.com/Detail/%E0%B8%84%E0%B8%B4%E0%B8%94%E0%B9%81%E0%B8%A5%E0%B9%89%E0%B8%A7-%E0%B8%95%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%A3%E0%B8%A7%E0%B8%A2-Think-and-Grow-Rich/9786166039238"
      },
      {
        name:"เงิน มา ง่าย ๆ",
        imagesBooks:"https://images-se-ed.com/ws/Storage/Originals/978616/578/9786165789370L.jpg?h=d5440c8a9c9196988b2da0ccea7058bf",
        Shoplink:"https://m.se-ed.com/Detail/%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99-%E0%B8%A1%E0%B8%B2-%E0%B8%87%E0%B9%88%E0%B8%B2%E0%B8%A2-%E0%B9%86/9786165789370"
      },
      {
        name:"วิธีสร้างกำไรในตลาดหุ้น : How to Profit in the Stock Market",
        imagesBooks:"https://images-se-ed.com/ws/Storage/Originals/978616/434/9786164343580L.jpg?h=a955b214ce296b14da95f6b649bb5c22",
        Shoplink:"https://m.se-ed.com/Detail/%E0%B8%A7%E0%B8%B4%E0%B8%98%E0%B8%B5%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%81%E0%B8%B3%E0%B9%84%E0%B8%A3%E0%B9%83%E0%B8%99%E0%B8%95%E0%B8%A5%E0%B8%B2%E0%B8%94%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99-How-to-Profit-in-the-Stock-Market/9786164343580"
      },
      {
        name:"ศาสตร์แห่งบัฟเฟตต์ : Buffettology",
        imagesBooks:"https://images-se-ed.com/ws/Storage/Originals/978616/601/9786166011432L.jpg?h=a93d4f37d38e5482889c91b598381ee2",
        Shoplink:"https://m.se-ed.com/Detail/%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C%E0%B9%81%E0%B8%AB%E0%B9%88%E0%B8%87%E0%B8%9A%E0%B8%B1%E0%B8%9F%E0%B9%80%E0%B8%9F%E0%B8%95%E0%B8%95%E0%B9%8C-Buffettology/9786166011432"
      },
      {
        name:"บล็อกเชนเข้าใจง่าย",
        imagesBooks:"https://images-se-ed.com/ws/Storage/Originals/978616/818/9786168187586L.jpg?h=6b78d5b030cfdbc753b94cb30d72d209",
        Shoplink:"https://m.se-ed.com/Detail/%E0%B8%9A%E0%B8%A5%E0%B9%87%E0%B8%AD%E0%B8%81%E0%B9%80%E0%B8%8A%E0%B8%99%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B9%83%E0%B8%88%E0%B8%87%E0%B9%88%E0%B8%B2%E0%B8%A2/9786168187586"
      },
      {
        name:"7 เคล็ดลับการลงทุนแบบวอร์เรน บัฟเฟ็ตต์ : 7 Secrets to Investing Like Warren Buffett",
        imagesBooks:"https://images-se-ed.com/ws/Storage/Originals/978616/388/9786163886743L.jpg?h=d905f31079fbaf69b6d25ed969854180",
        Shoplink:"https://m.se-ed.com/Detail/7-%E0%B9%80%E0%B8%84%E0%B8%A5%E0%B9%87%E0%B8%94%E0%B8%A5%E0%B8%B1%E0%B8%9A%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A5%E0%B8%87%E0%B8%97%E0%B8%B8%E0%B8%99%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%A7%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%80%E0%B8%A3%E0%B8%99-%E0%B8%9A%E0%B8%B1%E0%B8%9F%E0%B9%80%E0%B8%9F%E0%B9%87%E0%B8%95%E0%B8%95%E0%B9%8C-7-Secrets-to-Investing-Like-Warren-Buffett/9786163886743"
      },
      {
        name:"7 ลูกค้าที่สร้างเงินล้านให้คุณ",
        imagesBooks:"https://images-se-ed.com/ws/Storage/Originals/978616/578/9786165789233L.jpg?h=a59b6974ad677c96b16c44e958ef5c06",
        Shoplink:"https://m.se-ed.com/Detail/7-%E0%B8%A5%E0%B8%B9%E0%B8%81%E0%B8%84%E0%B9%89%E0%B8%B2%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99%E0%B8%A5%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%84%E0%B8%B8%E0%B8%93/9786165789233"
      },
      {
        name:"รวยและรอดด้วยกราฟเทคนิค (New Edition)",
        imagesBooks:"https://images-se-ed.com/ws/Storage/Originals/978616/430/9786164304420L.jpg?h=8e341d42e32715410ba6398aa9e9cf25",
        Shoplink:"https://m.se-ed.com/Detail/%E0%B8%A3%E0%B8%A7%E0%B8%A2%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%A3%E0%B8%AD%E0%B8%94%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%81%E0%B8%A3%E0%B8%B2%E0%B8%9F%E0%B9%80%E0%B8%97%E0%B8%84%E0%B8%99%E0%B8%B4%E0%B8%84-(New-Edition)/9786164304420"
      },
      {
        name:"The Sniper Trade วิธีเทรดแบบ Sniper ทำกำไรหลักล้าน",
        imagesBooks:"https://images-se-ed.com/ws/Storage/Originals/978616/937/9786169378372L.jpg?h=7135d053e0099b3441706a1f85fd6a09",
        Shoplink:"https://m.se-ed.com/Detail/The-Sniper-Trade-%E0%B8%A7%E0%B8%B4%E0%B8%98%E0%B8%B5%E0%B9%80%E0%B8%97%E0%B8%A3%E0%B8%94%E0%B9%81%E0%B8%9A%E0%B8%9A-Sniper-%E0%B8%97%E0%B8%B3%E0%B8%81%E0%B8%B3%E0%B9%84%E0%B8%A3%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%81%E0%B8%A5%E0%B9%89%E0%B8%B2%E0%B8%99/9786169378372"
      },
      {
        name:"คู่มือลงทุนคริปโทเคอร์เรนซีฉบับครบครัน : Cryptocurrency Investing For Dummies",
        imagesBooks:"https://images-se-ed.com/ws/Storage/Originals/978616/449/9786164494190L.jpg?h=33e8ce55eaab64cf3a0411025d4982fe",
        Shoplink:"https://m.se-ed.com/Detail/%E0%B8%84%E0%B8%B9%E0%B9%88%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%A5%E0%B8%87%E0%B8%97%E0%B8%B8%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%B4%E0%B8%9B%E0%B9%82%E0%B8%97%E0%B9%80%E0%B8%84%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%80%E0%B8%A3%E0%B8%99%E0%B8%8B%E0%B8%B5%E0%B8%89%E0%B8%9A%E0%B8%B1%E0%B8%9A%E0%B8%84%E0%B8%A3%E0%B8%9A%E0%B8%84%E0%B8%A3%E0%B8%B1%E0%B8%99-Cryptocurrency-Investing-For-Dummies/9786164494190"
      },
      {
        name:"พิชิตตลาด Forex ด้วยกราฟเปล่า",
        imagesBooks:"https://images-se-ed.com/ws/Storage/Originals/978616/578/9786165789035L.jpg?h=6780912578915f1e6273287f8bdd1952",
        Shoplink:"https://m.se-ed.com/Detail/%E0%B8%9E%E0%B8%B4%E0%B8%8A%E0%B8%B4%E0%B8%95%E0%B8%95%E0%B8%A5%E0%B8%B2%E0%B8%94-Forex-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%81%E0%B8%A3%E0%B8%B2%E0%B8%9F%E0%B9%80%E0%B8%9B%E0%B8%A5%E0%B9%88%E0%B8%B2/9786165789035"
      },
      {
        name:"Swing Trade Game กลยุทธ์ทำกำไรหุ้นด้วย Swing Trade",
        imagesBooks:"https://images-se-ed.com/ws/Storage/Originals/978616/578/9786165789134L.jpg?h=8320162558071135c5c8ebf382100081",
        Shoplink:"https://m.se-ed.com/Detail/Swing-Trade-Game-%E0%B8%81%E0%B8%A5%E0%B8%A2%E0%B8%B8%E0%B8%97%E0%B8%98%E0%B9%8C%E0%B8%97%E0%B8%B3%E0%B8%81%E0%B8%B3%E0%B9%84%E0%B8%A3%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-Swing-Trade/9786165789134"
      },
      {
        name:"อัจฉริยะวิธีสร้างตัวให้รวยสิบล้าน",
        imagesBooks:"https://images-se-ed.com/ws/Storage/Originals/885973/541/8859735412693L.jpg?h=1f3f4985e149abc9accd45b50f868566",
        Shoplink:"https://m.se-ed.com/Detail/%E0%B8%AD%E0%B8%B1%E0%B8%88%E0%B8%89%E0%B8%A3%E0%B8%B4%E0%B8%A2%E0%B8%B0%E0%B8%A7%E0%B8%B4%E0%B8%98%E0%B8%B5%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%A3%E0%B8%A7%E0%B8%A2%E0%B8%AA%E0%B8%B4%E0%B8%9A%E0%B8%A5%E0%B9%89%E0%B8%B2%E0%B8%99/8859735412693"
      },
      {
        name:"คนจะรวย ช่วยไม่ได้",
        imagesBooks:"https://images-se-ed.com/ws/Storage/Originals/885973/541/8859735412785L.jpg?h=4d4d853ef7fcd7086e67ba4e09f31baa",
        Shoplink:"https://m.se-ed.com/Detail/%E0%B8%84%E0%B8%99%E0%B8%88%E0%B8%B0%E0%B8%A3%E0%B8%A7%E0%B8%A2-%E0%B8%8A%E0%B9%88%E0%B8%A7%E0%B8%A2%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B9%84%E0%B8%94%E0%B9%89/8859735412785"
      },
      {
        name:"Mindset Secrets for Winning : ถอดความคิดเทรดเดอร์ผู้ชนะ",
        imagesBooks:"https://images-se-ed.com/ws/Storage/Originals/978616/942/9786169420002L.jpg?h=1b88a424e75bcf40db69080b247662d5",
        Shoplink:"https://m.se-ed.com/Detail/Mindset-Secrets-for-Winning-%E0%B8%96%E0%B8%AD%E0%B8%94%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%84%E0%B8%B4%E0%B8%94%E0%B9%80%E0%B8%97%E0%B8%A3%E0%B8%94%E0%B9%80%E0%B8%94%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%8A%E0%B8%99%E0%B8%B0/9786169420002"
      },
      {
        name:"เพาะหุ้นเป็น เห็นผลยั่งยืน",
        imagesBooks:"https://images-se-ed.com/ws/Storage/Originals/978616/601/9786166010145L.jpg?h=19557a7b167d2fc4505b7a7d0799b2be",
        Shoplink:"https://m.se-ed.com/Detail/%E0%B9%80%E0%B8%9E%E0%B8%B2%E0%B8%B0%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99-%E0%B9%80%E0%B8%AB%E0%B9%87%E0%B8%99%E0%B8%9C%E0%B8%A5%E0%B8%A2%E0%B8%B1%E0%B9%88%E0%B8%87%E0%B8%A2%E0%B8%B7%E0%B8%99/9786166010145"
      },
      {
        name:"Super Easy เล่นหุ้น Online ฉบับอ่านง่ายเป็นเร็ว",
        imagesBooks:"https://images-se-ed.com/ws/Storage/Originals/978616/381/9786163813480L.jpg?h=22c83c1cb9f54466971d53e790ca964d",
        Shoplink:"https://m.se-ed.com/Detail/Super-Easy-%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%99%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99-Online-%E0%B8%89%E0%B8%9A%E0%B8%B1%E0%B8%9A%E0%B8%AD%E0%B9%88%E0%B8%B2%E0%B8%99%E0%B8%87%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B9%80%E0%B8%A3%E0%B9%87%E0%B8%A7/9786163813480"
      },
      {
        name:"ลงทุนหุ้นเติบโต 101 Investing in Growth Stock 101",
        imagesBooks:"https://images-se-ed.com/ws/Storage/Originals/978616/578/9786165788540L.jpg?h=2761982f2b95e70140958e13c4d74339",
        Shoplink:"https://m.se-ed.com/Detail/%E0%B8%A5%E0%B8%87%E0%B8%97%E0%B8%B8%E0%B8%99%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B9%80%E0%B8%95%E0%B8%B4%E0%B8%9A%E0%B9%82%E0%B8%95-101-Investing-in-Growth-Stock-101/9786165788540"
      },
      {
        name:"เปลี่ยนหนี้เป็นกลยุทธ์สร้างเงินล้าน",
        imagesBooks:"https://images-se-ed.com/ws/Storage/Originals/978616/578/9786165788267L.jpg?h=aa27f6a526bf81cff7b46ce34fc8f554",
        Shoplink:"https://m.se-ed.com/Detail/%E0%B9%80%E0%B8%9B%E0%B8%A5%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%99%E0%B8%AB%E0%B8%99%E0%B8%B5%E0%B9%89%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B8%81%E0%B8%A5%E0%B8%A2%E0%B8%B8%E0%B8%97%E0%B8%98%E0%B9%8C%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99%E0%B8%A5%E0%B9%89%E0%B8%B2%E0%B8%99/9786165788267"
      },
      {
        name:"เทรด Forex ให้ถูกวิธี ทำรายได้เพิ่มเป็น 100 เท่า 100 วิธีชนะ Forex ด้วย Graph และ Mind Mapping (ปรับปรุงใหม่)",
        imagesBooks:"https://images-se-ed.com/ws/Storage/Originals/978616/275/9786162759987L.jpg?h=cccc6906f181ac495828d011e8d810a0",
        Shoplink:"https://m.se-ed.com/Detail/%E0%B9%80%E0%B8%97%E0%B8%A3%E0%B8%94-Forex-%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%96%E0%B8%B9%E0%B8%81%E0%B8%A7%E0%B8%B4%E0%B8%98%E0%B8%B5-%E0%B8%97%E0%B8%B3%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B9%84%E0%B8%94%E0%B9%89%E0%B9%80%E0%B8%9E%E0%B8%B4%E0%B9%88%E0%B8%A1%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99-100-%E0%B9%80%E0%B8%97%E0%B9%88%E0%B8%B2-100-%E0%B8%A7%E0%B8%B4%E0%B8%98%E0%B8%B5%E0%B8%8A%E0%B8%99%E0%B8%B0-Forex-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-Graph-%E0%B9%81%E0%B8%A5%E0%B8%B0-Mind-Mapping-(%E0%B8%9B%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%9B%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88)/9786162759987"
      },
      {
        name:"Forex Science เพื่อประสบการณ์ที่ดีในการเทรด Forex ของคุณ",
        imagesBooks:"https://images-se-ed.com/ws/Storage/Originals/978616/210/9786162106170L.jpg?h=d7df27e63eba9246464eb2f9a04d857a",
        Shoplink:"https://m.se-ed.com/Detail/Forex-Science-%E0%B9%80%E0%B8%9E%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%AA%E0%B8%9A%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%93%E0%B9%8C%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%94%E0%B8%B5%E0%B9%83%E0%B8%99%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%97%E0%B8%A3%E0%B8%94-Forex-%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%84%E0%B8%B8%E0%B8%93/9786162106170"
      },
      {
        name:"งบการเงินหุ้นที่คุณต้องอ่าน",
        imagesBooks:"https://images-se-ed.com/ws/Storage/Originals/978616/937/9786169376569L.jpg?h=fe31944625bdbb5b5408ce4509f73c84",
        Shoplink:"https://m.se-ed.com/Detail/%E0%B8%87%E0%B8%9A%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%84%E0%B8%B8%E0%B8%93%E0%B8%95%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%AD%E0%B9%88%E0%B8%B2%E0%B8%99/9786169376569"
      },
      {
        name:"จัดการเงินดี เงินก็ไม่หนี ไปหาคนอื่น",
        imagesBooks:"https://images-se-ed.com/ws/Storage/Originals/978616/941/9786169414216L.jpg?h=5a1368f598c4176a2755c99ceebd0b3e",
        Shoplink:"https://m.se-ed.com/Detail/%E0%B8%88%E0%B8%B1%E0%B8%94%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99%E0%B8%94%E0%B8%B5-%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99%E0%B8%81%E0%B9%87%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B8%AB%E0%B8%99%E0%B8%B5-%E0%B9%84%E0%B8%9B%E0%B8%AB%E0%B8%B2%E0%B8%84%E0%B8%99%E0%B8%AD%E0%B8%B7%E0%B9%88%E0%B8%99/9786169414216"
      },
      {
        name:"The Laws of Wealth มั่งคั่งด้วยกฎแห่งการลงทุน",
        imagesBooks:"https://images-se-ed.com/ws/Storage/Originals/978616/818/9786168187579L.jpg?h=a56cf491cf9577aee21c78ee1431c667",
        Shoplink:"https://m.se-ed.com/Detail/The-Laws-of-Wealth-%E0%B8%A1%E0%B8%B1%E0%B9%88%E0%B8%87%E0%B8%84%E0%B8%B1%E0%B9%88%E0%B8%87%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%81%E0%B8%8E%E0%B9%81%E0%B8%AB%E0%B9%88%E0%B8%87%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A5%E0%B8%87%E0%B8%97%E0%B8%B8%E0%B8%99/9786168187579"
      },
      {
        name:"Money Mastery มั่งคั่งทั้งชีวิต",
        imagesBooks:"https://images-se-ed.com/ws/Storage/Originals/978616/822/9786168224434L.jpg?h=943bec0d4115035c515da60396efe0e1",
        Shoplink:"https://m.se-ed.com/Detail/Money-Mastery-%E0%B8%A1%E0%B8%B1%E0%B9%88%E0%B8%87%E0%B8%84%E0%B8%B1%E0%B9%88%E0%B8%87%E0%B8%97%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B8%8A%E0%B8%B5%E0%B8%A7%E0%B8%B4%E0%B8%95/9786168224434"
      },
      {
        name:"เลือกที่จะรวย",
        imagesBooks:"https://images-se-ed.com/ws/Storage/Originals/978616/084/9786160845767L.jpg?h=7a8f975a2bf18d87637a6d0125132871",
        Shoplink:"https://m.se-ed.com/Detail/%E0%B9%80%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%81%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%88%E0%B8%B0%E0%B8%A3%E0%B8%A7%E0%B8%A2/9786160845767"
      },
      {
        name:"ไล่ล่าหา หุ้นเด็ด",
        imagesBooks:"https://images-se-ed.com/ws/Storage/Originals/978616/578/9786165787871L.jpg?h=b18421aff2068916183a26a1664a53fa",
        Shoplink:"https://m.se-ed.com/Detail/%E0%B9%84%E0%B8%A5%E0%B9%88%E0%B8%A5%E0%B9%88%E0%B8%B2%E0%B8%AB%E0%B8%B2-%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B9%80%E0%B8%94%E0%B9%87%E0%B8%94/9786165787871"
      },
      {
        name:"มือใหม่เข้าใจการเงิน : Money for Beginners",
        imagesBooks:"https://images-se-ed.com/ws/Storage/Originals/978616/818/9786168187531L.jpg?h=335c7425236dba2249fe1495d24eee18",
        Shoplink:"https://m.se-ed.com/Detail/%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B9%83%E0%B8%88%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99-Money-for-Beginners/9786168187531"
      },
    
    ],

    // อันนี้คือส่วนของ เก็บข้อมูล คอร์ส จาก ตลาด หลักทรัพย์ SET ทั้งหมด
    CourseL: [
      {
        name: "มือใหม่หัดลงทุน Digital Asset",
        imagesCourse:
          "https://elearning.set.or.th/_c_/data-file/assets/courses/thumbnail/041122095300-Thumbnail-Digital-Asset-480x270px.png",
        Learnlink: "https://elearning.set.or.th/SETGroup/courses/861/info",
        CourseForm: "ตลาดหลักทรัพทย์",
      },
      {
        name: "เป็นหนี้แล้วจัดการยังไง",
        imagesCourse:
          "https://elearning.set.or.th/_c_/data-file/assets/courses/thumbnail/161022111437-Thumbnail_EP2_%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B8%AB%E0%B8%99%E0%B8%B5%E0%B9%89%E0%B9%81%E0%B8%A5%E0%B9%89%E0%B8%A7%E0%B8%88%E0%B8%B1%E0%B8%94%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A2%E0%B8%B1%E0%B8%87%E0%B9%84%E0%B8%87.png",
        Learnlink: "https://elearning.set.or.th/SETGroup/courses/819/info",
        CourseForm: "ตลาดหลักทรัพทย์",
      },
      {
        name: "เงินทองต้องวางแผน",
        imagesCourse:
          "https://elearning.set.or.th/_c_/data-file/assets/courses/thumbnail/130819031109-WMD1001.png",
        Learnlink: "https://elearning.set.or.th/SETGroup/courses/182/info",
        CourseForm: "ตลาดหลักทรัพทย์",
      },
      {
        name: "วางแผนการเงินหลังเกษียณ สไตล์วัยเก๋า",
        imagesCourse:
          "https://elearning.set.or.th/_c_/data-file/assets/courses/thumbnail/300819091702-WMD1202.png",
        Learnlink: "https://elearning.set.or.th/SETGroup/courses/193/info",
        CourseForm: "ตลาดหลักทรัพทย์",
      },
      {
        name: "วางแผนเกษียณ สไตล์มนุษย์เงินเดือน",
        imagesCourse:
          "https://elearning.set.or.th/_c_/data-file/assets/courses/thumbnail/130819073006-WMD1201.png",
        Learnlink: "https://elearning.set.or.th/SETGroup/courses/183/info",
        CourseForm: "ตลาดหลักทรัพทย์",
      },
      {
        name: "หลักการลงทุน",
        imagesCourse:
          "https://elearning.set.or.th/_c_/data-file/assets/courses/thumbnail/220218061908-INV101.png",
        Learnlink: "https://elearning.set.or.th/SETGroup/courses/15/info",
        CourseForm: "ตลาดหลักทรัพทย์",
      },
      {
        name: "การลงทุนในหุ้น",
        imagesCourse:
          "https://elearning.set.or.th/_c_/data-file/assets/courses/thumbnail/210918134729-inv102_cover.jpg",
        Learnlink: "https://elearning.set.or.th/SETGroup/courses/16/info",
        CourseForm: "ตลาดหลักทรัพทย์",
      },
      {
        name: "การกำหนดเป้าหมายการพัฒนาที่ยั่งยืนของธุรกิจ",
        imagesCourse:
          "https://elearning.set.or.th/_c_/data-file/assets/courses/thumbnail/181220062003-shutterstock_557079442-resize_S01.jpg",
        Learnlink: "https://elearning.set.or.th/SETGroup/courses/271/info",
        CourseForm: "ตลาดหลักทรัพทย์",
      },
      {
        name: "การวิเคราะห์ห่วงโซ่คุณค่าและผู้มีส่วนได้เสีย",
        imagesCourse:
          "https://elearning.set.or.th/_c_/data-file/assets/courses/thumbnail/181220062028-shutterstock_562244602-resize_S02.jpg",
        Learnlink: "https://elearning.set.or.th/SETGroup/courses/272/info",
        CourseForm: "ตลาดหลักทรัพทย์",
      },
      {
        name: "การกำหนดกลยุทธ์และวิธีการดำเนินงานด้านความยั่งยืนขององค์กร",
        imagesCourse:
          "https://elearning.set.or.th/_c_/data-file/assets/courses/thumbnail/181220062051-shutterstock_564043102-resize_S03.jpg",
        Learnlink: "https://elearning.set.or.th/SETGroup/courses/273/info",
        CourseForm: "ตลาดหลักทรัพทย์",
      },
      {
        name: "เศรษฐกิจหมุนเวียน หรือ Circular Economy",
        imagesCourse:
          "https://elearning.set.or.th/_c_/data-file/assets/courses/thumbnail/090123012205-Banner%20e-learning%20%E0%B9%83%E0%B8%99%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%20Thai%20LiveStream_Circular%20Economy_480x270%20px.png",
        Learnlink: "https://elearning.set.or.th/SETGroup/courses/901/info",
        CourseForm: "ตลาดหลักทรัพทย์",
      },
      {
        name: "พื้นฐานด้านความยั่งยืนของธุรกิจ",
        imagesCourse:
          "https://elearning.set.or.th/_c_/data-file/assets/courses/thumbnail/181220062106-shutterstock_523767853-resize.jpg",
        Learnlink: "https://elearning.set.or.th/SETGroup/courses/174/info",
        CourseForm: "ตลาดหลักทรัพทย์",
      },
      {
        name: "วางแผนภาษี สไตล์มนุษย์เงินออม",
        imagesCourse:
          "https://elearning.set.or.th/_c_/data-file/assets/courses/thumbnail/300819070849-WMD1501.png",
        Learnlink: "https://elearning.set.or.th/SETGroup/courses/192/info",
        CourseForm: "ตลาดหลักทรัพทย์",
      },
      {
        name: "ลงทุนตราสารหนี้ฉบับมือใหม่",
        imagesCourse:
          "https://elearning.set.or.th/_c_/data-file/assets/courses/thumbnail/060219111506-DBD1001.png",
        Learnlink: "https://elearning.set.or.th/SETGroup/courses/124/info",
        CourseForm: "ตลาดหลักทรัพทย์",
      },
      {
        name: "ลงทุนหุ้นมั่นใจ ต้องเข้าใจกราฟเทคนิค",
        imagesCourse:
          "https://elearning.set.or.th/_c_/data-file/assets/courses/thumbnail/EQD1103_1.png",
        Learnlink: "https://elearning.set.or.th/SETGroup/courses/30/info",
        CourseForm: "ตลาดหลักทรัพทย์",
      },
      {
        name: "",
        imagesCourse: "",
        Learnlink: "",
        CourseForm: "",
      },
      {
        name: "",
        imagesCourse: "",
        Learnlink: "",
        CourseForm: "",
      },
      // เพิ่มข้อมูล  ของ คอร์ส ตลาดหลักทรัพทย์  ได้เลื่อยๆ
    ],

    // อันนี้คือส่วนของ เก็บข้อมูล คอร์ส จาก youtube
    CourseYT: [
      {
        name: "มือใหม่จัดการเงิน MONEY STARTER",
        Video:
          "https://www.youtube.com/embed/videoseries?si=yGaqYPZlSJm7_m8r&amp;list=PLb60bms3dmUVqzuK2BzXOHQ_3BlB2xwRK",
        LinkYT:
          "https://www.youtube.com/playlist?list=PLb60bms3dmUVqzuK2BzXOHQ_3BlB2xwRK",
      },
      {
        name: "",
        Video: "",
        LinkYT: "",
      },
      {
        name: "",
        Video: "",
        LinkYT: "",
      },
    ],

    // อันนี้คือส่วนของ เก็บข้อมูล แหล่งความรู้อื่นๆ
    CourseAT: [
      {
        name: "ข้าราชการลงทุน",
        imagesAT:
          "https://scontent.fbkk14-1.fna.fbcdn.net/v/t39.30808-6/292495812_387361293569091_3725921563780392478_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=52f669&_nc_eui2=AeEYIDg35_yvbVGQhXK0E-_5ATGGPfxJe78BMYY9_El7v7JIncjf3uL182xk4b07_qE5IhSGjOl6N22AlYV0owuk&_nc_ohc=poD7xsPLBPkAX_siZtD&_nc_ht=scontent.fbkk14-1.fna&oh=00_AfA3NK01Wg_TbFt9E24x00w9UHBRDAas8ake3QuQ3ylBOw&oe=6519F177",
        LinkAT: "https://www.facebook.com/karnlongtoon",
      },
      {
        name: "",
        imagesAT: "",
        LinkAT: "",
      },
      {
        name: "",
        imagesAT: "",
        LinkAT: "",
      },
    ],
    Ccourse: [
{
  name:"SET e learning",
  images:"https://www.thebangkokinsight.com/wp-content/uploads/2018/12/set-2.jpg",
  Link:"https://elearning.set.or.th/",
  description:"SET e-Learning แหล่งความรู้การเงินการลงทุนแบบดิจิทัล ที่ผสมผสานเทคโนโลยีมัลติมีเดียและเนื้อหาบทเรียน เหมาะสำหรับนิสิต นักศึกษา และนักลงทุนที่ต้องการพัฒนาตนเองไปสู่นักลงทุนมืออาชีพแบบ Step by Step",
  page:"/HomePage"
},
      {
        name: "Mahidol University Extension",
        images:
          "https://mux.mahidol.ac.th/static/sbs-themes/images/mux/logo_mooc_mux_new.png",
        Link: "https://mux.mahidol.ac.th/courses",
        description:"มหาวิทยาลัยมหิดลเปิดแหล่งเรียนรู้ MUx ที่ตอบสนองต่อความต้องการของผู้เรียนให้สามารถเข้าถึงแหล่งข้อมูลการเรียนรู้ได้ทุกที่ ทุกเวลา"

      },
      {
        name: " Space By CBS",
        images:
          "https://space.cbs.chula.ac.th/media/config/image/CBS_logo_SPACE-03.png",
        Link: "https://space.cbs.chula.ac.th/",
      description:" ความรู้เกี่ยวกับธุรกิจ ทั้งด้านการตลาด การบัญชี การเงิน และสถิติ ทางออนไลน์  โดยไม่มีค่าใช้จ่ายใด ๆ"
      },
      {
        name: " ThaiMooc",
        images:
          "https://online.pubhtml5.com/futx/xmul/files/large/1.jpg?1594364360",
        Link: "https://thaimooc.org/",
      description:"‘Thai MOOC’ แพลตฟอร์มการศึกษาออนไลน์ พร้อมให้คนไทยทุกคนเรียนรู้ได้ตลอดชีวิต ฟรี!  มีหลักสูตรมากกว่า 2,700 หลักสูตร มีผู้เรียนมากกว่า 35 ล้านคน "
      },
      {
        name: "CHULA MOOC",
        images:
          "https://mooc.chula.ac.th/img/upload/%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%9B%E0%B8%814.png",
        Link: "https://mooc.chula.ac.th/home",
      description:"เรียนกับคณาจารย์จุฬาลงกรณ์มหาวิทยาลัย เรียนฟรี เรียนได้ทุกที่ ทุกเวลา พร้อมรับ Certificate"
      },
      {
        name: "PSUMOOC",
        images:
          "https://computing.psu.ac.th/th/wp-content/uploads/2021/06/PSU-MOOC15-6-64-cover.jpg",
        Link: "https://mooc.psu.ac.th/business-management/",
      description:" เป็นแพลตฟอร์มเรียนออนไลน์แบบไม่เสียค่าใช้จ่าย ซึ่งถูกจัดขึ้นโดยมหาวิทยาลัยสงขลานครินทร์"
      },


    ],

    mu:[
      {
        name:"Accounting basics for beginners",
        images:"https://mux.mahidol.ac.th/asset-v1:MU-CM+MGMG591+MU-CM_000006+type@asset+block@Banner.jpg",
        Link:"https://mux.mahidol.ac.th/courses/course-v1:MU-CM+MGMG591+MU-CM_000006/about",
      },
      {
        name:"Accounting basics for beginners",
        images:"",
        Link:"",
      },
      {
        name:"Accounting basics for beginners",
        images:"",
        Link:"",
      },
    ],

    yu:[{
      name:"THE MONEY COACH ",
      images:"https://yt3.googleusercontent.com/RS_LpE4e_S0C4A4HURMgNYn-VkzTxaR5Er7p7wSKEhoyb25VQtZ5toSAymEydmjUpJM8gpGW3w=s176-c-k-c0x00ffffff-no-rj",
      link:"https://www.youtube.com/@THEMONEYCOACHTH"
    },
    {
      name:"Paul Pattarapon พอล ภัทรพล",
      images:"https://yt3.googleusercontent.com/ytc/APkrFKYjPZw4Nd-aQcYU2ZfiGu0CaqMgHA4RQhOz_JML2g=s176-c-k-c0x00ffffff-no-rj",
      link:"https://www.youtube.com/@PaulPattarapon"
    },
    {
      name:"THE MONEY GAME by Tanin Kunkamedee ",
      images:"https://yt3.googleusercontent.com/ytc/APkrFKartMr4jQGbyBiouBk3KxeokEuSxf_WJ1en24znaFU=s176-c-k-c0x00ffffff-no-rj",
      link:"https://www.youtube.com/@THEMONEYGAMEbyTaninKunkamedee"
    },
    {
      name:"THE STANDARD WEALTH ",
      images:"https://yt3.googleusercontent.com/z4n2jSYsCBoStNTG9XNOyI0eQIT0OnWbvoAE0Etdqkz5-9hfEEsWYH8fuVNAQ9dGMDTMIENeKeE=s176-c-k-c0x00ffffff-no-rj",
      link:"https://www.youtube.com/@TheStandardWealth"
    },
    {
      name:"THE STANDARD PODCAST ",
      images:"https://yt3.googleusercontent.com/ytc/APkrFKZ6Z-V9zXpL4UvNvTwqeKsSnH7hThjnxXpizJ9t=s176-c-k-c0x00ffffff-no-rj",
      link:"https://www.youtube.com/playlist?list=PLUaBTRNM7hIUXgoq2Ggg11IQwgRZRN39T"
    },
    {
      name:"NANAKE555 ",
      images:"https://yt3.googleusercontent.com/zyhI0S4bqHAKe1WNsTvRpLRxKFnANS2JvUsE2xoDXs-tQgVekXSxc5Zi0Jz8P2PnVHhzxoxB=s176-c-k-c0x00ffffff-no-rj",
      link:"https://www.youtube.com/playlist?list=PLeL-QeEgyQmA-9R6jVFlOQ6i9AtzAajVE"
    },
    {
      name:"aomMONEY",
      images:"https://yt3.googleusercontent.com/5KbRXXLxELS2i5RXUWMctfzFuWPNXpsT8DA602EyTrNNA8Tbqd8zwAS9N3VBspN6uP3rdLI4Mw=s176-c-k-c0x00ffffff-no-rj",
      link:"https://www.youtube.com/@AommoneyTH"
    },
    {
      name:"Than Money Trick",
      images:"https://yt3.googleusercontent.com/Ipy3V-nZ-i7k7ApaCIZqEK7nWwWhI_7L-sJQu-o3o4esbdhiJtb-LHDoYGgNF5Sv1oa2UHafyg=s176-c-k-c0x00ffffff-no-rj",
      link:"https://www.youtube.com/@thanmoneytrick"
    },,
    {
      name:"FINNOMENA",
      images:"https://yt3.googleusercontent.com/ytc/APkrFKbSLfEalyv0RRpac5bkA_X5AT8C_U_qMeKdiwayjQ=s176-c-k-c0x00ffffff-no-rj",
      link:"https://www.youtube.com/@FINNOMENA"
    },
    {
      name:"Wealth Me Up",
      images:"https://yt3.googleusercontent.com/P5buqjBsACpqJfW1kD6_i-NfdmzHGQ62YOCXRou6W5otwzC0lBJz7WLfiIBJdAcJOx9nj4UG=s176-c-k-c0x00ffffff-no-rj",
      link:"https://www.youtube.com/@wealthmeup"     
    }

  ],
  tk:[
    {
      name:"themoneycoachth",
      images:"https://scontent.fbkk29-1.fna.fbcdn.net/v/t39.30808-6/278601508_7571224746250933_1395048062731050015_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeG-xWsLgQeGh1-UPQmlrq1qPNAJ72S4ulg80AnvZLi6WC14KdjgC4d915dxZZ_lNJ4ejjIJhFB8TEcOE5dyhUtn&_nc_ohc=np3ZYRjV5aUAX9Ylh8B&_nc_ht=scontent.fbkk29-1.fna&oh=00_AfCEYmk95BJAIY72yI5aL9u9P-Cf9rVNBDELWx0Z-NPWkA&oe=6527F7C6",
      link:"https://www.tiktok.com/@themoneycoachth",
    },
    {
      name:"apex.wealth",
      images:"https://scontent.fbkk29-1.fna.fbcdn.net/v/t39.30808-6/353010499_118452174603712_7189275250112694362_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeEx0wFKylqswa6yA6MvkAdyR4qBLcX0hQhHioEtxfSFCBwTvXreTp2tm0-igeOvQrOTwIN9idZp9ljatNNnLIww&_nc_ohc=GhcHawtckwkAX92VGgF&_nc_oc=AQk9lV3gWwF83HYQ1Od6EuGzklTlxRzQYYNydwBRuI5eYxe8kbjpQtuVgGGuLyEiIFg&_nc_ht=scontent.fbkk29-1.fna&oh=00_AfAlMZxcE0N0r5YrRpQC4waqRcah2IcFecYRhZmSqhBpRQ&oe=6527E087",
      link:"https://www.tiktok.com/@apex.wealth"
    },
    {
      name:" investmentfrappe",
      images:"https://scontent.fbkk10-1.fna.fbcdn.net/v/t39.30808-6/361211770_673447241467850_5790332926629383185_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeG4GeFhN7vuEm818iKOQ94lnZn8KLdSgiCdmfwot1KCIA6i8o-CDFCBfugUsW-sMq1TmuxQV4Yb1xYulvzWyhmA&_nc_ohc=GdDZfalW4MwAX-2Qmvc&_nc_ht=scontent.fbkk10-1.fna&oh=00_AfBS-4LMSHkKojgqp7uLnVDdHG0j28qDa1NFOKBsiwseqg&oe=652727CB",
      link:"https://www.tiktok.com/@investmentfrappe"
    }
  ]

  },
  // ใน Vuex, getters ใช้ในการเข้าถึงข้อมูลจากสถานะ (state) นำมาใช้ในคอมโพเนนต์ Vue
  // หรือส่วนอื่น ๆ
  getters: {
    CourseL: (state) => state.CourseL,
    shopBooks: (state) => state.shopBooks,
    CourseYT: (state) => state.CourseYT,
    CourseAT: (state) => state.CourseAT,
    Ccourse: (state) => state.Ccourse,
    mu: (state) => state.mu,
    yu: (state) => state.yu,
    tk: (state) => state.tk,
  },
  mutations: {
    setCurrentMenu(state, menu) {
      state.currentMenu = menu;
    },
  },
  actions: {},
  modules: {},
});
