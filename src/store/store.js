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
        Shopee: "dasdasdasda",
        Lazada: "dasdasdasda",
      },

      {
        name: "Money 101",
        imagesBooks:
          "https://images-se-ed.com/ws/Storage/Originals/978616/085/9786160850396L.jpg?h=c8564d753dd8d3b22aee7df8dfc0817f",
        Shoplink:
          "https://m.se-ed.com/Detail/Money-101-(%E0%B8%9B%E0%B8%81%E0%B8%AD%E0%B9%88%E0%B8%AD%E0%B8%99)/9786160850396",
      },
      {
        name: "เศรษฐีชี้ทางรวย ฉบับปกแข็ง ",
        imagesBooks:
          "https://images-se-ed.com/ws/Storage/Originals/978616/084/9786160849000L.jpg?h=9837c1366798bc48640e998be2698082",
        Shoplink:
          "https://m.se-ed.com/Detail/%E0%B9%80%E0%B8%A8%E0%B8%A3%E0%B8%A9%E0%B8%90%E0%B8%B5%E0%B8%8A%E0%B8%B5%E0%B9%89%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%A3%E0%B8%A7%E0%B8%A2-%E0%B8%89%E0%B8%9A%E0%B8%B1%E0%B8%9A%E0%B8%9B%E0%B8%81%E0%B9%81%E0%B8%82%E0%B9%87%E0%B8%87-(The-Richest-Man-in-Babylon-Millionaire-s-Edition)/9786160849000",
      },
      {
        name: "บริหารเงินล้านหลังเกษียณ ให้มีเงินใช้ทุกเดือน",
        imagesBooks:
          "https://images-se-ed.com/ws/Storage/Originals/978616/578/9786165789226L.jpg?h=9aed9d07ebd2d5209bfa26122c163d79",
        Shoplink:
          "https://m.se-ed.com/Detail/%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99%E0%B8%A5%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B9%80%E0%B8%81%E0%B8%A9%E0%B8%B5%E0%B8%A2%E0%B8%93-%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%A1%E0%B8%B5%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B8%97%E0%B8%B8%E0%B8%81%E0%B9%80%E0%B8%94%E0%B8%B7%E0%B8%AD%E0%B8%99/9786165789226",
      },
      {
        name: "เศรษฐีข้างบ้าน",
        imagesBooks:
          "https://images-se-ed.com/ws/Storage/Originals/978616/815/9786168158807L.jpg?h=fd11cc49b80d841dd36f64e18acc803f",
        Shoplink:
          "https://m.se-ed.com/Detail/%E0%B9%80%E0%B8%A8%E0%B8%A3%E0%B8%A9%E0%B8%90%E0%B8%B5%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99/9786168158807",
      },
      {
        name: "เงินหรือชีวิต : Your Money Your Life",
        imagesBooks:
          "https://images-se-ed.com/ws/Storage/Originals/978616/798/9786167982229L.jpg?h=50b8c008cd25de4e696145acf94e008c",
        Shoplink:
          "https://m.se-ed.com/Detail/%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99%E0%B8%AB%E0%B8%A3%E0%B8%B7%E0%B8%AD%E0%B8%8A%E0%B8%B5%E0%B8%A7%E0%B8%B4%E0%B8%95-Your-Money-Your-Life/9786167982229",
      },
      {
        name: "ผมจะสอนให้คุณรวย : I Will Teach You To Be Rich",
        imagesBooks:
          "https://images-se-ed.com/ws/Storage/Originals/978616/256/9786162562327L.jpg?h=193e82e0f836cfa60110dd52c9288059",
        Shoplink:
          "https://m.se-ed.com/Detail/%E0%B8%9C%E0%B8%A1%E0%B8%88%E0%B8%B0%E0%B8%AA%E0%B8%AD%E0%B8%99%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%84%E0%B8%B8%E0%B8%93%E0%B8%A3%E0%B8%A7%E0%B8%A2-I-Will-Teach-You-To-Be-Rich/9786162562327",
      },
      {
        name: "เด็กวัดดอน ชีวิต ความฝัน และการลงทุน",
        imagesBooks:
          "https://images-se-ed.com/ws/Storage/Originals/978616/084/9786160847525L.jpg?h=dcfc6d30c9e5c16586828f967cedba46",
        Shoplink:
          "https://m.se-ed.com/Detail/%E0%B9%80%E0%B8%94%E0%B9%87%E0%B8%81%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%94%E0%B8%AD%E0%B8%99-%E0%B8%8A%E0%B8%B5%E0%B8%A7%E0%B8%B4%E0%B8%95-%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%9D%E0%B8%B1%E0%B8%99-%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A5%E0%B8%87%E0%B8%97%E0%B8%B8%E0%B8%99/9786160847525",
      },
      {
        name: "ถอดรหัสลับสมองเงินล้าน",
        imagesBooks:
          "https://storage.naiin.com/system/application/bookstore/resource/product/201408/145458/1000162661_front_XXL.jpg?imgname=%E0%B8%96%E0%B8%AD%E0%B8%94%E0%B8%A3%E0%B8%AB%E0%B8%B1%E0%B8%AA%E0%B8%A5%E0%B8%B1%E0%B8%9A%E0%B8%AA%E0%B8%A1%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99%E0%B8%A5%E0%B9%89%E0%B8%B2%E0%B8%99-(%E0%B8%9B%E0%B8%81%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88)",
        Shoplink: "https://www.naiin.com/product/detail/145458",
      },
      {
        name: "คัมภีร์การลงทุนแบบเน้นคุณค่า",
        imagesBooks:
          "https://images-se-ed.com/ws/Storage/Originals/978974/401/9789744017178L.jpg?h=2199bf58e5a55f5bd309f3007c464dd9",
        Shoplink:
          "https://m.se-ed.com/Detail/%E0%B8%84%E0%B8%B1%E0%B8%A1%E0%B8%A0%E0%B8%B5%E0%B8%A3%E0%B9%8C%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A5%E0%B8%87%E0%B8%97%E0%B8%B8%E0%B8%99%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B9%80%E0%B8%99%E0%B9%89%E0%B8%99%E0%B8%84%E0%B8%B8%E0%B8%93%E0%B8%84%E0%B9%88%E0%B8%B2-The-Intelligent-Investor-(%E0%B8%9B%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%9B%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88)/9789744017178",
      },
      {
        name: "",
        imagesBooks: "",
        Shoplink: "",
      },
      {
        name: "",
        imagesBooks: "",
        Shoplink: "",
      },
      // เพิ่มข้อมูล  ของ หนังสือ ได้เลื่อยๆ
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
  name:"SET",
  images:"https://www.thebangkokinsight.com/wp-content/uploads/2018/12/set-2.jpg",
  Link:"https://elearning.set.or.th/",
},
      {
        name: "Mahidol University Extension",
        images:
          "https://mux.mahidol.ac.th/static/sbs-themes/images/mux/logo_mooc_mux_new.png",
        Link: "",
      },
      {
        name: " Space By CBS",
        images:
          "https://space.cbs.chula.ac.th/media/config/image/CBS_logo_SPACE-03.png",
        Link: "",
      },
      {
        name: " ThaiMooc",
        images:
          "https://online.pubhtml5.com/futx/xmul/files/large/1.jpg?1594364360",
        Link: "",
      },
      {
        name: "CHULA MOOC",
        images:
          "https://mooc.chula.ac.th/img/upload/%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%9B%E0%B8%814.png",
        Link: "https://mooc.chula.ac.th/home",
      },
      {
        name: "PSUMOOC",
        images:
          "https://computing.psu.ac.th/th/wp-content/uploads/2021/06/PSU-MOOC15-6-64-cover.jpg",
        Link: "https://mooc.psu.ac.th/business-management/",
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
