import { createStore } from "vuex";

export default createStore({
  state: {
    currenMenu: null, // ตัวแปรที่ใช้ รับค่า m1 m2 m3 m4 จาก ปุม เมนู

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
    ],

    Mahidol:[
      {
        name: "Accounting basics for beginners",
        imagesCourse:"https://mux.mahidol.ac.th/asset-v1:MU-CM+MGMG591+MU-CM_000006+type@asset+block@Banner.jpg",
        Learnlink: "https://mux.mahidol.ac.th/courses/course-v1:MU-CM+MGMG591+MU-CM_000006/about",
        CourseForm: "Mahidol",
      },
      {
        name: "Financial Management",
        imagesCourse:"https://mux.mahidol.ac.th/asset-v1:MU-CM+MGMG513+MU-CM_000003+type@asset+block@fm_banner.jpg",
        Learnlink: "https://mux.mahidol.ac.th/courses/course-v1:MU-CM+MGMG513+MU-CM_000003/about",
        CourseForm: "Mahidol",
      },


    ],

    SpaceByCBS:[
      {
        name: "Personal Financial Planning (การวางแผนการเงินส่วนบุคคล)",
        imagesCourse:"https://space.cbs.chula.ac.th/media/course/2020/01/2223aa1a-81a.jpg",
        Learnlink: "https://space.cbs.chula.ac.th/course/194/",
        CourseForm: "Mahidol",
      },



    ],
    ThaiMooc:[
      {
        name: "การบริหารจัดการในศตวรรษที่ 21 | Management in 21st Century",
        imagesCourse:"https://lms.thaimooc.org/asset-v1:NPRU+NPRU006+2022+type@asset+block@banner_thaimooc_4_%E0%B8%A7_%E0%B8%8A%E0%B8%B2_500px-01.jpg",
        Learnlink: "https://thaimooc.org/course/THAIMOOC%3A%3Acourse--v1%3ANPRU-NPRU006-2022",
        CourseForm: "ThaiMooc"
      },
      {
        name:"เตรียมเกษียณเพื่อเสริมสร้างพฤฒพลัง | pre-retirement preparation to promote active ageing",
        imagesCourse:"https://lms.thaimooc.org/asset-v1:NU+NU036+2021_T1+type@asset+block@nu036_banner002.png",
        Learnlink:"https://thaimooc.org/course/THAIMOOC%3A%3Acourse--v1%3ANU-NU036-2021_T1",
        CourseForm:"ThaiMooc",
      },
      {
        name:"การบริหารความเสี่ยงดิจิทัล | Digital Risk Management",
        imagesCourse:"https://lms.thaimooc.org/asset-v1:OCSC+OCSC007+2019+type@asset+block@14.jpg",
        Learnlink:"https://thaimooc.org/course/THAIMOOC%3A%3Acourse--v1%3AOCSC-OCSC007-2019",
        CourseForm:"",
      },
      {
        name:"ความรู้เบื้องต้นเกี่ยวกับการลงทุนอย่างเป็นระบบ | Introduction to Quantitative Investing",
        imagesCourse:"https://lms.thaimooc.org/asset-v1:K-MOOC+K-MOOC005+2021+type@asset+block@%EA%B3%84%EB%9F%89%EA%B2%BD%EC%A0%9C%ED%95%99.jpg",
        Learnlink:"https://thaimooc.org/course/THAIMOOC%3A%3Acourse--v1%3AK--MOOC-K--MOOC005-2021",
        CourseForm:"",
      },
      {
        name:"การเงินส่วนบุคคล (Personal Finance)",
        imagesCourse:"https://lms.thaimooc.org/asset-v1:NU+NU020+2018+type@asset+block@banner_nu020.png",
        Learnlink:"https://thaimooc.org/course/THAIMOOC%3A%3Acourse--v1%3ANU-NU020-2018",
      },
      {
        name:"เศรษฐศาสตร์ตลาดการเงิน | Economics of Financial Market",
        imagesCourse:"https://lms.thaimooc.org/asset-v1:RSU+RSU002+2017+type@asset+block@cover_rsu002.jpg",
        Learnlink:"https://thaimooc.org/course/THAIMOOC%3A%3Acourse--v1%3ARSU-RSU002-2017"
      }

    ],
    CHULAMOOC:[
      {
        name: "คณิตศาสตร์การเงินในชีวิตประจำวัน",
        imagesCourse:"https://mooc.chula.ac.th/img/upload/%E0%B8%84%E0%B8%93%E0%B8%B4%E0%B8%95%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99%E0%B9%83%E0%B8%99%E0%B8%8A%E0%B8%B5%E0%B8%A7%E0%B8%B4%E0%B8%95%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%88%E0%B8%B3%E0%B8%A7%E0%B8%B1%E0%B8%99.png",
        Learnlink: "https://mooc.chula.ac.th/course-detail/42",
        CourseForm: ""
      },
      {
        name: "การทำความเข้าใจงบการเงิน",
        imagesCourse:"https://mooc.chula.ac.th/img/upload/%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%97%E0%B8%B3%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B9%83%E0%B8%88%E0%B8%87%E0%B8%9A%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99.png",
        Learnlink: "https://mooc.chula.ac.th/course-detail/36",
        CourseForm: ""
      },

    ],
    PSUMOOC:[
      {
        name: "ตั้งแต่ เกิด จนถึง ตาย ต้องจ่ายภาษีอะไรบ้าง?",
        imagesCourse:"https://mooc.psu.ac.th/wp-content/uploads/2023/09/6-300x225.png",
        Learnlink: "https://mooc.psu.ac.th/psumooc-660239/",
        CourseForm: ""
      },
      {
        name: "การบริหารทรัพยากรบุคคลในสถานการณ์การเปลี่ยนแปลง",
        imagesCourse:"https://mooc.psu.ac.th/wp-content/uploads/2022/07/banner-mooc-65_056-300x225.jpg",
        Learnlink: "https://mooc.psu.ac.th/psumooc-650185/",
        CourseForm: ""
      },
      {
        name:"ความรู้บัญชีและภาษีที่ร้านค้าควรรู้",
        imagesCourse:"https://mooc.psu.ac.th/wp-content/uploads/2022/07/banner-mooc-65_054-300x225.jpg",
        Learnlink:"https://mooc.psu.ac.th/psumooc-650184/",
        CourseForm:"",
      },
      {
        name:"การอ่านงบการเงิน (สำหรับผู้ประกอบการที่ไม่มีพื้นฐานด้านบัญชี)",
        imagesCourse:"https://mooc.psu.ac.th/wp-content/uploads/2022/07/banner-mooc-65_018-300x225.png",
        Learnlink:"https://mooc.psu.ac.th/psumooc-650150/",
        CourseForm:"",
      },
      {
        name:"หลักการบัญชี",
        imagesCourse:"https://mooc.psu.ac.th/wp-content/uploads/2021/10/370x277px_feat-principle-of-accounting.jpg",
        Learnlink:"https://mooc.psu.ac.th/psumooc-640106/",
        CourseForm:"",
      },
      {
        name:"ข้อควรรู้ในการเสียภาษีเงินได้บุคคลธรรมดา",
        imagesCourse:"https://mooc.psu.ac.th/wp-content/uploads/2021/09/370x277px_feat-good-to-know-about-personal-income.jpg",
        Learnlink:"https://mooc.psu.ac.th/psumooc-640096/",
        CourseForm:"",
      },
      {
        name:"คำนวณและวางแผน ภาษีเงินได้บุคคลธรรมดา",
        imagesCourse:"https://mooc.psu.ac.th/wp-content/uploads/2021/10/370x277px_feat-calculate-personal-income-tax-2.png",
        Learnlink:"https://mooc.psu.ac.th/psumooc-640054/",
        CourseForm:"",
      },

    ],

    // อันนี้คือส่วนของ เก็บข้อมูล หนังสือ การเงิน การลงทุน ทั้งหมด
    shopBooks: [
      {
        name: "Money Lecture เรียนหนึ่งครั้งใช้ได้ทั้งชีวิต",
        images:
          "https://down-th.img.susercontent.com/file/2f1d6f92cc00f0a293c77cb77a6a7ab7",
        link_se_ed:
          "https://m.se-ed.com/Detail/Money-Lecture-%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B8%AB%E0%B8%99%E0%B8%B6%E0%B9%88%E0%B8%87%E0%B8%84%E0%B8%A3%E0%B8%B1%E0%B9%89%E0%B8%87-%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B9%84%E0%B8%94%E0%B9%89%E0%B8%97%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B8%8A%E0%B8%B5%E0%B8%A7%E0%B8%B4%E0%B8%95/9786161837167",
        link_shopee:
          "https://shopee.co.th/product/689164743/12377857980?gclid=CjwKCAjwyY6pBhA9EiwAMzmfwSRt62HcRNNP_Z9-TJSLhSwozzcBtcFMFDVN_RtMJaeJrTYpWpTCzRoCojsQAvD_BwE",
        link_lazada:
          "https://www.lazada.co.th/products/money-lecture-amarin-i3836213882-s14625196740.html?c=&channelLpJumpArgs=&clickTrackInfo=query%253AMoney%252BLecture%252B%2525E0%2525B9%252580%2525E0%2525B8%2525A3%2525E0%2525B8%2525B5%2525E0%2525B8%2525A2%2525E0%2525B8%252599%2525E0%2525B8%2525AB%2525E0%2525B8%252599%2525E0%2525B8%2525B6%2525E0%2525B9%252588%2525E0%2525B8%252587%2525E0%2525B8%252584%2525E0%2525B8%2525A3%2525E0%2525B8%2525B1%2525E0%2525B9%252589%2525E0%2525B8%252587%2525E0%2525B9%252583%2525E0%2525B8%25258A%2525E0%2525B9%252589%2525E0%2525B9%252584%2525E0%2525B8%252594%2525E0%2525B9%252589%2525E0%2525B8%252597%2525E0%2525B8%2525B1%2525E0%2525B9%252589%2525E0%2525B8%252587%2525E0%2525B8%25258A%2525E0%2525B8%2525B5%2525E0%2525B8%2525A7%2525E0%2525B8%2525B4%2525E0%2525B8%252595%253Bnid%253A3836213882%253Bsrc%253ALazadaMainSrp%253Brn%253A65488f26f09facb6573926ed6beeee93%253Bregion%253Ath%253Bsku%253A3836213882_TH%253Bprice%253A210%253Bclient%253Adesktop%253Bsupplier_id%253A100196181573%253Bpromotion_biz%253A%253Basc_category_id%253A7802%253Bitem_id%253A3836213882%253Bsku_id%253A14625196740%253Bshop_id%253A2583376&fastshipping=0&freeshipping=0&fs_ab=2&fuse_fs=&lang=th&location=%E0%B8%99%E0%B8%99%E0%B8%97%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5&price=2.1E%202&priceCompare=skuId%3A14625196740%3Bsource%3Alazada-search-voucher%3Bsn%3A65488f26f09facb6573926ed6beeee93%3BoriginPrice%3A21000%3BdisplayPrice%3A21000%3BsinglePromotionId%3A-1%3BsingleToolCode%3AmockedSalePrice%3BvoucherPricePlugin%3A0%3Btimestamp%3A1696843506171&ratingscore=5.0&request_id=65488f26f09facb6573926ed6beeee93&review=3&sale=19&search=1&source=search&spm=a2o4m.searchlist.list.i40.830f249bMdFWzd&stock=1",
      },
      {
        name: "เรียนหุ้นกับ ปีเตอร์ ลินซ์",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/935/9786169352808L.jpg?h=abc23fba15355e5766a1b163d05491d0",
        link_se_ed:
          "https://m.se-ed.com/Detail/%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B8%81%E0%B8%B1%E0%B8%9A-%E0%B8%9B%E0%B8%B5%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C-%E0%B8%A5%E0%B8%B4%E0%B8%99%E0%B8%8B%E0%B9%8C-Learn-to-Earn/9786169352808",
        link_shopee:
          "https://shopee.co.th/%F0%9F%94%A5%E0%B8%9E%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%AA%E0%B9%88%E0%B8%87%F0%9F%94%A5-%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%A3%E0%B8%A7%E0%B8%A2-The-Classic-Guide-Learn-to-Earn%E2%9A%A1%EF%B8%8F%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B8%81%E0%B8%B1%E0%B8%9A-%E0%B8%9B%E0%B8%B5%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C-%E0%B8%A5%E0%B8%B4%E0%B8%99%E0%B8%8B%E0%B9%8C-Learn-to-Earn%E2%9A%A1%EF%B8%8F%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B8%94%E0%B8%B5%E0%B8%95%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%A1%E0%B8%B5%E0%B8%9B%E0%B8%A3%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A3%E2%9A%A1%EF%B8%8F-i.10553472.13510774621?sp_atk=f16cafbe-866c-4085-bee7-64be8c9402cd&xptdk=f16cafbe-866c-4085-bee7-64be8c9402cd",
        link_lazada:
          "https://www.lazada.co.th/products/learn-to-earn-one-up-on-wall-street-i4163919770-s19597669679.html?c=&channelLpJumpArgs=&clickTrackInfo=query%253A%2525E0%2525B9%252580%2525E0%2525B8%2525A3%2525E0%2525B8%2525B5%2525E0%2525B8%2525A2%2525E0%2525B8%252599%2525E0%2525B8%2525AB%2525E0%2525B8%2525B8%2525E0%2525B9%252589%2525E0%2525B8%252599%2525E0%2525B8%252581%2525E0%2525B8%2525B1%2525E0%2525B8%25259A%252B%2525E0%2525B8%25259B%2525E0%2525B8%2525B5%2525E0%2525B9%252580%2525E0%2525B8%252595%2525E0%2525B8%2525AD%2525E0%2525B8%2525A3%2525E0%2525B9%25258C%252B%2525E0%2525B8%2525A5%2525E0%2525B8%2525B4%2525E0%2525B8%252599%2525E0%2525B8%25258B%2525E0%2525B9%25258C%253Bnid%253A4163919770%253Bsrc%253ALazadaMainSrp%253Brn%253Acdddd9a60b1eebe2c9409b72574e49e2%253Bregion%253Ath%253Bsku%253A4163919770_TH%253Bprice%253A480%253Bclient%253Adesktop%253Bsupplier_id%253A100206219831%253Bpromotion_biz%253A%253Basc_category_id%253A7827%253Bitem_id%253A4163919770%253Bsku_id%253A19597669679%253Bshop_id%253A3148045&fastshipping=0&freeshipping=0&fs_ab=2&fuse_fs=&lang=th&location=%E0%B8%AA%E0%B8%87%E0%B8%82%E0%B8%A5%E0%B8%B2&price=4.8E%202&priceCompare=skuId%3A19597669679%3Bsource%3Alazada-search-voucher%3Bsn%3Acdddd9a60b1eebe2c9409b72574e49e2%3BoriginPrice%3A48000%3BdisplayPrice%3A48000%3BsinglePromotionId%3A-1%3BsingleToolCode%3AmockedSalePrice%3BvoucherPricePlugin%3A0%3Btimestamp%3A1696843718542&ratingscore=5.0&request_id=cdddd9a60b1eebe2c9409b72574e49e2&review=2&sale=13&search=1&source=search&spm=a2o4m.searchlist.list.i40.532e2867BnUMGx&stock=1",
      },
      {
        name: "ตีแตก : กลยุทธ์การเล่นหุ้นในภาวะวิกฤต",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978974/212/9789742126810L.jpg?h=cb31a9fc34c27c929245c2deb2c6bc41",
        link_se_ed:
          "https://m.se-ed.com/Detail/%E0%B8%95%E0%B8%B5%E0%B9%81%E0%B8%95%E0%B8%81-%E0%B8%81%E0%B8%A5%E0%B8%A2%E0%B8%B8%E0%B8%97%E0%B8%98%E0%B9%8C%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%99%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B9%83%E0%B8%99%E0%B8%A0%E0%B8%B2%E0%B8%A7%E0%B8%B0%E0%B8%A7%E0%B8%B4%E0%B8%81%E0%B8%A4%E0%B8%95/9789742126810",
        link_shopee:
          "https://shopee.co.th/product/84095933/2466711420?gclid=CjwKCAjwyY6pBhA9EiwAMzmfwTDB5UMxkYj8L4aEexZSFhMS-AlEsQS0uKD0GaFU4Tm7kGm6A5yDKhoCqmgQAvD_BwE",
        link_lazada:
          "https://www.lazada.co.th/products/-i4128386736-s16182097607.html?c=&channelLpJumpArgs=&clickTrackInfo=query%253A%2525E0%2525B8%2525AB%2525E0%2525B8%252599%2525E0%2525B8%2525B1%2525E0%2525B8%252587%2525E0%2525B8%2525AA%2525E0%2525B8%2525B7%2525E0%2525B8%2525AD%2525E0%2525B8%252595%2525E0%2525B8%2525B5%2525E0%2525B9%252581%2525E0%2525B8%252595%2525E0%2525B8%252581%253Bnid%253A4128386736%253Bsrc%253ALazadaMainSrp%253Brn%253Aa5e268b569ad711383016eb524b84fee%253Bregion%253Ath%253Bsku%253A4128386736_TH%253Bprice%253A212%253Bclient%253Adesktop%253Bsupplier_id%253A100182144336%253Bpromotion_biz%253A%253Basc_category_id%253A7827%253Bitem_id%253A4128386736%253Bsku_id%253A16182097607%253Bshop_id%253A1380621&fastshipping=0&freeshipping=0&fs_ab=2&fuse_fs=&lang=th&location=%E0%B8%99%E0%B8%99%E0%B8%97%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5&price=212&priceCompare=skuId%3A16182097607%3Bsource%3Alazada-search-voucher%3Bsn%3Aa5e268b569ad711383016eb524b84fee%3BoriginPrice%3A21200%3BdisplayPrice%3A21200%3BsinglePromotionId%3A-1%3BsingleToolCode%3AmockedSalePrice%3BvoucherPricePlugin%3A0%3Btimestamp%3A1696843797426&ratingscore=4.977777777777778&request_id=a5e268b569ad711383016eb524b84fee&review=45&sale=207&search=1&source=search&spm=a2o4m.searchlist.list.i40.5e7e1870woB9Oe&stock=1",
      },
      {
        name: "เพาะหุ้นเป็นเห็นผลยั่งยืน",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/515/9786165156851L.jpg?h=6ef0398884b533b4a59292184d696b18",
        link_se_ed:
          "https://m.se-ed.com/Detail/%E0%B9%80%E0%B8%9E%E0%B8%B2%E0%B8%B0%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99-%E0%B9%80%E0%B8%AB%E0%B9%87%E0%B8%99%E0%B8%9C%E0%B8%A5%E0%B8%A2%E0%B8%B1%E0%B9%88%E0%B8%87%E0%B8%A2%E0%B8%B7%E0%B8%99/9786165156851",
        link_shopee:
          "https://shopee.co.th/%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B7%E0%B8%AD-%E0%B9%80%E0%B8%9E%E0%B8%B2%E0%B8%B0%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99-%E0%B9%80%E0%B8%AB%E0%B9%87%E0%B8%99%E0%B8%9C%E0%B8%A5%E0%B8%A2%E0%B8%B1%E0%B9%88%E0%B8%87%E0%B8%A2%E0%B8%B7%E0%B8%99-(%E0%B8%81%E0%B8%A7%E0%B8%B5-%E0%B8%8A%E0%B8%B9%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B9%80%E0%B8%81%E0%B8%A9%E0%B8%A1)-Nation-i.5111032.19465736479?sp_atk=31d7b8d4-081b-4203-a6fb-02f29bd075e9&xptdk=31d7b8d4-081b-4203-a6fb-02f29bd075e9",
        link_lazada:
          "https://www.lazada.co.th/products/-i339732004-s658404521.html?c=&channelLpJumpArgs=&clickTrackInfo=query%253A%2525E0%2525B9%252580%2525E0%2525B8%25259E%2525E0%2525B8%2525B2%2525E0%2525B8%2525B0%2525E0%2525B8%2525AB%2525E0%2525B8%2525B8%2525E0%2525B9%252589%2525E0%2525B8%252599%2525E0%2525B9%252580%2525E0%2525B8%2525AB%2525E0%2525B9%252587%2525E0%2525B8%252599%2525E0%2525B8%25259C%2525E0%2525B8%2525A5%2525E0%2525B8%2525A2%2525E0%2525B8%2525B1%2525E0%2525B9%252588%2525E0%2525B8%252587%2525E0%2525B8%2525A2%2525E0%2525B8%2525B7%2525E0%2525B8%252599%253Bnid%253A339732004%253Bsrc%253ALazadaMainSrp%253Brn%253A52650747f49eed33705f09e5ca0110fe%253Bregion%253Ath%253Bsku%253A339732004_TH%253Bprice%253A250%253Bclient%253Adesktop%253Bsupplier_id%253A100186344%253Bpromotion_biz%253A%253Basc_category_id%253A7827%253Bitem_id%253A339732004%253Bsku_id%253A658404521%253Bshop_id%253A212584&fastshipping=0&freeshipping=0&fs_ab=2&fuse_fs=&lang=th&location=%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3&price=2.5E%202&priceCompare=skuId%3A658404521%3Bsource%3Alazada-search-voucher%3Bsn%3A52650747f49eed33705f09e5ca0110fe%3BoriginPrice%3A25000%3BdisplayPrice%3A25000%3BsinglePromotionId%3A-1%3BsingleToolCode%3A-1%3BvoucherPricePlugin%3A0%3Btimestamp%3A1696844011569&ratingscore=4.958333333333333&request_id=52650747f49eed33705f09e5ca0110fe&review=96&sale=407&search=1&source=search&spm=a2o4m.searchlist.list.i40.3abb5d70TVW3x6&stock=1",
      },
      {
        name: "Stock Lecture ลงทุนหุ้นได้ในเล่มเดียว",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/829/9786168296080L.jpg?h=ad0529444681b7237c2e333dcf0d8254",
        link_se_ed:
          "https://m.se-ed.com/Detail/Stock-Lecture-%E0%B8%A5%E0%B8%87%E0%B8%97%E0%B8%B8%E0%B8%99%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B9%84%E0%B8%94%E0%B9%89%E0%B9%83%E0%B8%99%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%A1%E0%B9%80%E0%B8%94%E0%B8%B5%E0%B8%A2%E0%B8%A7/9786168296080",
        link_shopee:
          "https://shopee.co.th/product/174332328/21511230558?gclid=CjwKCAjwyY6pBhA9EiwAMzmfwez_isqnt7wYWeZmCr_Kstcg7mStTFwVvGbmicWGzi3j2udMtKWb7RoCl2EQAvD_BwE",
        link_lazada:
          "https://www.lazada.co.th/products/stock-lecture-3-i3814265033-s14526117041.html?c=&channelLpJumpArgs=&clickTrackInfo=query%253A%2525E0%2525B8%2525AB%2525E0%2525B8%252599%2525E0%2525B8%2525B1%2525E0%2525B8%252587%2525E0%2525B8%2525AA%2525E0%2525B8%2525B7%2525E0%2525B8%2525ADstock%252Blecture%253Bnid%253A3814265033%253Bsrc%253ALazadaMainSrp%253Brn%253A9ac98deb33a954685d068b11c571f41c%253Bregion%253Ath%253Bsku%253A3814265033_TH%253Bprice%253A425%253Bclient%253Adesktop%253Bsupplier_id%253A100182144336%253Bpromotion_biz%253A%253Basc_category_id%253A7827%253Bitem_id%253A3814265033%253Bsku_id%253A14526117041%253Bshop_id%253A1380621&fastshipping=0&freeshipping=0&fs_ab=2&fuse_fs=&lang=th&location=%E0%B8%99%E0%B8%99%E0%B8%97%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5&price=425&priceCompare=skuId%3A14526117041%3Bsource%3Alazada-search-voucher%3Bsn%3A9ac98deb33a954685d068b11c571f41c%3BoriginPrice%3A42500%3BdisplayPrice%3A42500%3BsinglePromotionId%3A-1%3BsingleToolCode%3AmockedSalePrice%3BvoucherPricePlugin%3A0%3Btimestamp%3A1696844073534&ratingscore=5.0&request_id=9ac98deb33a954685d068b11c571f41c&review=7&sale=16&search=1&source=search&spm=a2o4m.searchlist.list.i40.606923ecVXpQ65&stock=1",
      },
      {
        name: "เบนจามิน เกรแฮม กับการถอดรหัสงบการเงิน",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/808/9786168085004L.jpg?h=faf08768e90ea384146ab1fc13480d95",
        link_se_ed:
          "https://m.se-ed.com/Detail/%E0%B9%80%E0%B8%9A%E0%B8%99%E0%B8%88%E0%B8%B2%E0%B8%A1%E0%B8%B4%E0%B8%99-%E0%B9%80%E0%B8%81%E0%B8%A3%E0%B9%81%E0%B8%AE%E0%B8%A1-%E0%B8%81%E0%B8%B1%E0%B8%9A%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%96%E0%B8%AD%E0%B8%94%E0%B8%A3%E0%B8%AB%E0%B8%B1%E0%B8%AA%E0%B8%87%E0%B8%9A%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99-The-Interpretation-of-Financial-Statements/9786168085004",
        link_shopee:
          "https://shopee.co.th/%E0%B9%80%E0%B8%9A%E0%B8%99%E0%B8%88%E0%B8%B2%E0%B8%A1%E0%B8%B4%E0%B8%99-%E0%B9%80%E0%B8%81%E0%B8%A3%E0%B9%81%E0%B8%AE%E0%B8%A1-%E0%B8%81%E0%B8%B1%E0%B8%9A%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%96%E0%B8%AD%E0%B8%94%E0%B8%A3%E0%B8%AB%E0%B8%B1%E0%B8%AA%E0%B8%87%E0%B8%9A%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99-The-Interpretation-of-Financial-Statements-i.90314367.1514498403?sp_atk=b79f7185-9f63-454f-9521-4b62a1590d44&xptdk=b79f7185-9f63-454f-9521-4b62a1590d44",
        link_lazada:
          "https://www.lazada.co.th/products/the-interpretation-of-financial-statements-banjamin-graham-i366054312-s715304638.html?c=&channelLpJumpArgs=&clickTrackInfo=query%253A%2525E0%2525B9%252580%2525E0%2525B8%25259A%2525E0%2525B8%252599%2525E0%2525B8%252588%2525E0%2525B8%2525B2%2525E0%2525B8%2525A1%2525E0%2525B8%2525B4%2525E0%2525B8%252599%253Bnid%253A366054312%253Bsrc%253ALazadaMainSrp%253Brn%253Ae38da0e49285e854d81f966c5d837e77%253Bregion%253Ath%253Bsku%253A366054312_TH%253Bprice%253A195%253Bclient%253Adesktop%253Bsupplier_id%253A100186344%253Bpromotion_biz%253A%253Basc_category_id%253A7827%253Bitem_id%253A366054312%253Bsku_id%253A715304638%253Bshop_id%253A212584&fastshipping=0&freeshipping=0&fs_ab=2&fuse_fs=&lang=th&location=%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3&price=195&priceCompare=skuId%3A715304638%3Bsource%3Alazada-search-voucher%3Bsn%3Ae38da0e49285e854d81f966c5d837e77%3BoriginPrice%3A19500%3BdisplayPrice%3A19500%3BsinglePromotionId%3A-1%3BsingleToolCode%3AmockedSalePrice%3BvoucherPricePlugin%3A0%3Btimestamp%3A1696844157087&ratingscore=5.0&request_id=e38da0e49285e854d81f966c5d837e77&review=6&sale=33&search=1&source=search&spm=a2o4m.searchlist.list.i40.47051843LxCgf6&stock=1",
      },
      {
        name: "การประเมินมูลค่าหุ้น",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/808/9786168085011L.jpg?h=897b1a307395d10a95a17d4f804bcd1e",
        link_se_ed:
          "https://m.se-ed.com/Detail/%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%A1%E0%B8%B4%E0%B8%99%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%84%E0%B9%88%E0%B8%B2%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99-The-Little-Book-of-Valuation/9786168085011",
        link_shopee:
          "https://shopee.co.th/product/925532175/20791006449?gclid=CjwKCAjwyY6pBhA9EiwAMzmfwQBucnJCrOa8D7-9V4CPRj5YRWLU-VGCexdk7kIjGFytCTMJHtih6hoCHxUQAvD_BwE",
        link_lazada:
          "https://www.lazada.co.th/products/aswath-damodaran-love-i4482437913-s18119724412.html?from_gmc=1&exlaz=d_1:mm_150050845_51350205_2010350205::12:20536633140!!!!!c!!18119724412!5088595275&gclid=CjwKCAjwyY6pBhA9EiwAMzmfwXwsH_WKVgGIeFfVlaSQGfV-MiZucnl8A_fLbzTBNVKi-imZ9eILaxoCvrAQAvD_BwE",
      },
      {
        name: "ศาสตร์แห่งบัฟเฟตต์",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/515/9786165157094L.jpg?h=75a0289fa7295def70098a24f8ffebb1",
        link_se_ed:
          "https://m.se-ed.com/Detail/%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C%E0%B9%81%E0%B8%AB%E0%B9%88%E0%B8%87%E0%B8%9A%E0%B8%B1%E0%B8%9F%E0%B9%80%E0%B8%9F%E0%B8%95%E0%B8%95%E0%B9%8C-Buffettology/9786165157094",
        link_shopee:
          "https://shopee.co.th/product/691764989/16318490688?gclid=CjwKCAjwyY6pBhA9EiwAMzmfwd8JV5WDbYMFyXfbo9tE1uBxug8vAxt2HF3xPnflc0Rr78GrUuMdexoCJyIQAvD_BwE",
        link_lazada:
          "https://www.lazada.co.th/products/buffettology-i4725193995-s19486222139.html?from_gmc=1&exlaz=d_1:mm_150050845_51350205_2010350205::12:19668221003!!!!!c!!19486222139!5088215135&gclid=CjwKCAjwyY6pBhA9EiwAMzmfwfcNre3_PB2vrqGO5O_JyjWUjTA10AH7-7dAJS3wr9uhkP7hlkKa9BoCl2gQAvD_BwE",
      },
      {
        name: "คัมภีร์วิเคราะห์งบการเงิน",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/722/9786167227764L.jpg?h=2a176ac6107ce5e04a5f7a576d0034a4",
        link_se_ed:
          "https://m.se-ed.com/Detail/%E0%B8%84%E0%B8%B1%E0%B8%A1%E0%B8%A0%E0%B8%B5%E0%B8%A3%E0%B9%8C%E0%B8%A7%E0%B8%B4%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B2%E0%B8%B0%E0%B8%AB%E0%B9%8C%E0%B8%87%E0%B8%9A%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99-%E0%B8%8A%E0%B8%B8%E0%B8%94-%E0%B8%84%E0%B8%A3%E0%B8%9A%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%A5%E0%B8%87%E0%B8%97%E0%B8%B8%E0%B8%99/9786167227764",
        link_shopee:
          "https://shopee.co.th/%E0%B8%84%E0%B8%B1%E0%B8%A1%E0%B8%A0%E0%B8%B5%E0%B8%A3%E0%B9%8C%E0%B8%A7%E0%B8%B4%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B2%E0%B8%B0%E0%B8%AB%E0%B9%8C%E0%B8%87%E0%B8%9A%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99-i.34089831.2788394431",
        link_lazada: "",
      },
      {
        name: "สร้างพอร์ตหุ้นให้รวยมั่งคั่งแบบ วอเร็น บัฟเฟตต์",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/434/9786164342200L.jpg?h=2e68e35a45b2f203f9f7c39b5b502e8d",
        link_se_ed:
          "https://m.se-ed.com/Detail/%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%9E%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%95%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%A3%E0%B8%A7%E0%B8%A2%E0%B8%A1%E0%B8%B1%E0%B9%88%E0%B8%87%E0%B8%84%E0%B8%B1%E0%B9%88%E0%B8%87%E0%B9%81%E0%B8%9A%E0%B8%9A-%E0%B8%A7%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%80%E0%B8%A3%E0%B8%99-%E0%B8%9A%E0%B8%B1%E0%B8%9F%E0%B9%80%E0%B8%9F%E0%B8%95%E0%B8%95%E0%B9%8C-(%E0%B8%89%E0%B8%9A%E0%B8%B1%E0%B8%9A%E0%B8%9B%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%9B%E0%B8%A3%E0%B8%B8%E0%B8%87)-(%E0%B8%9B%E0%B8%81%E0%B9%81%E0%B8%82%E0%B9%87%E0%B8%87)/9786164342200",
        link_shopee:
          "https://shopee.co.th/product/119773841/4778137180?gclid=CjwKCAjwyY6pBhA9EiwAMzmfwbeAv8g1VwRnwDw85qtnjcXbBRPUbiO3HWwohujJt0b3B8VQlVX9fhoCREcQAvD_BwE",
        link_lazada:
          "https://www.lazada.co.th/products/creating-a-portfolio-like-i2673955701-s9628324531.html?from_gmc=1&exlaz=d_1:mm_150050845_51350205_2010350205::12:19668221003!!!!!c!!9628324531!5088159228&gclid=CjwKCAjwyY6pBhA9EiwAMzmfwagdUHfn1x5iaeizevSb2HrUffEUHOTY7FP1lqivG_yI5YOUKUtiBBoCXsgQAvD_BwE",
      },
      {
        name: "วิเคราะห์งบการเงินสำหรับซื้อขายหุ้น",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/789/9786167890319L.jpg?h=5e3877e1ffe74ed41c76f41af45298a0",
        link_se_ed: "https://m.se-ed.com/Product/Detail/9786167890319",
        link_shopee:
          "https://shopee.co.th/product/70800496/1845674675?gclid=CjwKCAjwyY6pBhA9EiwAMzmfwYv_eAm0jEOf6GzdKrjpQs6IVJREDKTe43_F6le9WCzZjkft6xlgcxoCb8QQAvD_BwE",
        link_lazada:
          "https://www.lazada.co.th/products/tactschool-i3139295398-s11698481857.html?from_gmc=1&exlaz=d_1:mm_150050845_51350205_2010350205::12:19668221003!!!!!c!!11698481857!548760828&gclid=CjwKCAjwyY6pBhA9EiwAMzmfwVWsDvOznM70i8jbRNTZSE_g5Yz_rN4v9aCQKo51Gf6v4z1WgOSrVBoCMAYQAvD_BwE",
      },
      {
        name: "ก้าวแรกอ่านงบการเงิน",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/083/9786160830404L.jpg?h=74bf67d29d226da900d1aeef1ad029da",
        link_se_ed: "https://m.se-ed.com/Product/Detail/9786160830404",
        link_shopee:
          "https://shopee.co.th/product/5111032/21177953327?gclid=CjwKCAjwyY6pBhA9EiwAMzmfwaEmj5S69rVhM0anIcDnqGp4QLm6TcN1Ev9a6TnD1Ku75p8IIWAU7xoCs6AQAvD_BwE",
        link_lazada:
          "https://www.lazada.co.th/products/se-ed-i4576367405-s18675724965.html?from_gmc=1&exlaz=d_1:mm_150050845_51350205_2010350205::12:20536633140!!!!!c!!18675724965!506341065&gclid=CjwKCAjwyY6pBhA9EiwAMzmfwT21PV_8OaJxirlHzzZJte5r0-6ElRH4fCUCviliWPG--ufOe221nRoCMOEQAvD_BwE",
      },
      {
        name: "กุญแจอ่านงบการเงิน",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/082/9786160822492L.jpg?h=2e75e812c566fbd29434eaedf10bbad8",
        link_se_ed: "https://m.se-ed.com/Product/Detail/9786160822492",
        link_shopee:
          "https://shopee.co.th/product/5111032/21177953327?gclid=CjwKCAjwyY6pBhA9EiwAMzmfwaEmj5S69rVhM0anIcDnqGp4QLm6TcN1Ev9a6TnD1Ku75p8IIWAU7xoCs6AQAvD_BwE",
        link_lazada:
          "https://www.lazada.co.th/products/se-ed-i4576367405-s18675724965.html?from_gmc=1&exlaz=d_1:mm_150050845_51350205_2010350205::12:20536633140!!!!!c!!18675724965!506341065&gclid=CjwKCAjwyY6pBhA9EiwAMzmfwT21PV_8OaJxirlHzzZJte5r0-6ElRH4fCUCviliWPG--ufOe221nRoCMOEQAvD_BwE",
      },
      {
        name: "คู่มือวีไอ : VI Guidebook",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/787/9786167878102L.jpg?h=35cade894ff54dd71ee2ee8c733c284c",
        link_se_ed:
          "https://m.se-ed.com/Detail/%E0%B8%84%E0%B8%B9%E0%B9%88%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%A7%E0%B8%B5%E0%B9%84%E0%B8%AD-VI-Guidebook/9786167878102",
        link_shopee:
          "https://shopee.co.th/%E0%B8%84%E0%B8%B9%E0%B9%88%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%A7%E0%B8%B5%E0%B9%84%E0%B8%AD-**%E0%B8%9E%E0%B8%B4%E0%B8%A1%E0%B8%9E%E0%B9%8C%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88%E0%B8%A5%E0%B9%88%E0%B8%B2%E0%B8%AA%E0%B8%B8%E0%B8%94**%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%88%E0%B8%B2%E0%B8%81%E0%B9%80%E0%B8%9E%E0%B8%88Dr.VI-%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B8%84%E0%B9%89%E0%B8%B2%E0%B8%A2%E0%B8%B1%E0%B8%87%E0%B8%A1%E0%B8%B5%E0%B8%AD%E0%B8%A2%E0%B8%B9%E0%B9%88--i.19119001.10607593712",
        link_lazada: "",
      },
      {
        name: "ประเมินมูลค่าหุ้น ฉบับใช้งานจริง",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/787/9786167878126L.jpg?h=2819843d773ca575eb194d3f4d369196",
        link_se_ed:
          "https://m.se-ed.com/Detail/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%A1%E0%B8%B4%E0%B8%99%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%84%E0%B9%88%E0%B8%B2%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99-%E0%B8%89%E0%B8%9A%E0%B8%B1%E0%B8%9A%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B8%88%E0%B8%A3%E0%B8%B4%E0%B8%87/9786167878126",
        link_shopee:
          "https://shopee.co.th/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%A1%E0%B8%B4%E0%B8%99%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%84%E0%B9%88%E0%B8%B2%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99-%E0%B8%89%E0%B8%9A%E0%B8%B1%E0%B8%9A%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B8%88%E0%B8%A3%E0%B8%B4%E0%B8%87-Valuation-The-market-approach-Seth-Bernstrom-%E0%B9%80%E0%B8%81%E0%B8%A3%E0%B8%94-B-i.1717727.21284248630?sp_atk=7155b8fa-4698-406b-9d24-43ca1e292cd6&xptdk=7155b8fa-4698-406b-9d24-43ca1e292cd6",
        link_lazada:
          "https://www.lazada.co.th/products/valuation-i2944795995-s10810594869.html?spm=a2o4m.tm80167383.2074280300.1.4292uBmWuBmW4u.4292uBmWuBmW4u",
      },
      {
        name: "วัดมูลค่าหุ้นด้วยตัวคุณเอง",
        images:
          "https://cdn-shop.ookbee.com/Books/00010/2012/20121008/Thumbnails/Cover.jpg",
        link_se_ed: "",
        link_shopee:
          "https://shopee.co.th/%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B7%E0%B8%AD-%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%84%E0%B9%88%E0%B8%B2%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B8%84%E0%B8%B8%E0%B8%93%E0%B9%80%E0%B8%AD%E0%B8%87-%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%95%E0%B8%A5%E0%B8%B2%E0%B8%94%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B9%84%E0%B8%97%E0%B8%A2-%E0%B9%82%E0%B8%94%E0%B8%A2-%E0%B8%AA%E0%B8%B8%E0%B8%A1%E0%B8%B2%E0%B8%AD%E0%B8%B5%E0%B9%89-%E0%B8%99%E0%B8%A3%E0%B8%B4%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B9%8C-%E0%B9%82%E0%B8%AD%E0%B8%AC%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%AD%E0%B8%99%E0%B8%B1%E0%B8%99%E0%B8%95%E0%B9%8C-*%E0%B8%AB%E0%B8%B2%E0%B8%A2%E0%B8%B2%E0%B8%81*-i.76223930.9181841250",
        link_lazada: "",
      },
      {
        name: "คัมภีร์การลงทุนแบบเน้นคุณค่า : The Intelligent Investor",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978974/401/9789744017178L.jpg?h=2199bf58e5a55f5bd309f3007c464dd9",
        link_se_ed:
          "https://m.se-ed.com/Detail/%E0%B8%84%E0%B8%B1%E0%B8%A1%E0%B8%A0%E0%B8%B5%E0%B8%A3%E0%B9%8C%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A5%E0%B8%87%E0%B8%97%E0%B8%B8%E0%B8%99%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B9%80%E0%B8%99%E0%B9%89%E0%B8%99%E0%B8%84%E0%B8%B8%E0%B8%93%E0%B8%84%E0%B9%88%E0%B8%B2-The-Intelligent-Investor-(%E0%B8%9B%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%9B%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88)/9789744017178",
        link_shopee:
          "https://shopee.co.th/product/35797241/4508724411?gclid=CjwKCAjwyY6pBhA9EiwAMzmfwX_G9_FnAX-veGWqysYQFYid3zum0Ve8tdSuFA3vJGWi9zwjcwhUqRoCIPkQAvD_BwE",
        link_lazada:
          "https://www.lazada.co.th/products/the-intelligent-investor-i1020134798-s2254098374.html?c=&channelLpJumpArgs=&clickTrackInfo=query%253A%2525E0%2525B8%2525AB%2525E0%2525B8%252599%2525E0%2525B8%2525B1%2525E0%2525B8%252587%2525E0%2525B8%2525AA%2525E0%2525B8%2525B7%2525E0%2525B8%2525AD%252Bthe%252Bintelligent%252Binvestor%253Bnid%253A1020134798%253Bsrc%253ALazadaMainSrp%253Brn%253A7db8ed38540f42c48f3a8463b136e0f8%253Bregion%253Ath%253Bsku%253A1020134798_TH%253Bprice%253A595%253Bclient%253Adesktop%253Bsupplier_id%253A1000054023%253Bpromotion_biz%253A%253Basc_category_id%253A7827%253Bitem_id%253A1020134798%253Bsku_id%253A2254098374%253Bshop_id%253A299839&fastshipping=0&freeshipping=0&fs_ab=2&fuse_fs=&lang=th&location=%E0%B8%AA%E0%B8%A1%E0%B8%B8%E0%B8%97%E0%B8%A3%E0%B8%9B%E0%B8%A3%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A3&price=595&priceCompare=skuId%3A2254098374%3Bsource%3Alazada-search-voucher%3Bsn%3A7db8ed38540f42c48f3a8463b136e0f8%3BoriginPrice%3A59500%3BdisplayPrice%3A59500%3BsinglePromotionId%3A-1%3BsingleToolCode%3A-1%3BvoucherPricePlugin%3A0%3Btimestamp%3A1696846475646&ratingscore=4.911111111111111&request_id=7db8ed38540f42c48f3a8463b136e0f8&review=315&sale=1206&search=1&source=search&spm=a2o4m.searchlist.list.i40.d9b11071qB5WoW&stock=1",
      },
      {
        name: "เหนือกว่าวอลสตรีท",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/939/9786169399261L.jpg?h=2ab9942c1806ce739177c2928abe67a8",
        link_se_ed:
          "https://m.se-ed.com/Detail/%E0%B9%80%E0%B8%AB%E0%B8%99%E0%B8%B7%E0%B8%AD%E0%B8%81%E0%B8%A7%E0%B9%88%E0%B8%B2%E0%B8%A7%E0%B8%AD%E0%B8%A5%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B8%B5%E0%B8%97-One-Up-On-Wall-Street-(%E0%B8%9B%E0%B8%81%E0%B9%81%E0%B8%82%E0%B9%87%E0%B8%87)/9786169399261",
        link_shopee:
          "https://shopee.co.th/%E0%B9%80%E0%B8%AB%E0%B8%99%E0%B8%B7%E0%B8%AD%E0%B8%81%E0%B8%A7%E0%B9%88%E0%B8%B2%E0%B8%A7%E0%B8%AD%E0%B8%A5%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B8%B5%E0%B8%97-One-Up-On-Wall-Street-(%E0%B8%9B%E0%B8%81%E0%B9%81%E0%B8%82%E0%B9%87%E0%B8%87)-i.90314367.23517755210?sp_atk=9ec0eaf7-57ca-4e0b-a215-0acd6b499625&xptdk=9ec0eaf7-57ca-4e0b-a215-0acd6b499625",
        link_lazada:
          "https://www.lazada.co.th/products/-i4370913710-s17424851009.html?c=&channelLpJumpArgs=&clickTrackInfo=query%253A%2525E0%2525B8%2525AB%2525E0%2525B8%252599%2525E0%2525B8%2525B1%2525E0%2525B8%252587%2525E0%2525B8%2525AA%2525E0%2525B8%2525B7%2525E0%2525B8%2525AD%2525E0%2525B9%252580%2525E0%2525B8%2525AB%2525E0%2525B8%252599%2525E0%2525B8%2525B7%2525E0%2525B8%2525AD%2525E0%2525B8%252581%2525E0%2525B8%2525A7%2525E0%2525B9%252588%2525E0%2525B8%2525B2%2525E0%2525B8%2525A7%2525E0%2525B8%2525AD%2525E0%2525B8%2525A5%2525E0%2525B8%2525AA%2525E0%2525B8%252595%2525E0%2525B8%2525A3%2525E0%2525B8%2525B5%2525E0%2525B8%252597%253Bnid%253A4370913710%253Bsrc%253ALazadaMainSrp%253Brn%253Abdd6ccfc6880b9d906971005992cccee%253Bregion%253Ath%253Bsku%253A4370913710_TH%253Bprice%253A498%253Bclient%253Adesktop%253Bsupplier_id%253A1000054023%253Bpromotion_biz%253A%253Basc_category_id%253A7827%253Bitem_id%253A4370913710%253Bsku_id%253A17424851009%253Bshop_id%253A299839&fastshipping=0&freeshipping=0&fs_ab=2&fuse_fs=&lang=th&location=%E0%B8%AA%E0%B8%A1%E0%B8%B8%E0%B8%97%E0%B8%A3%E0%B8%9B%E0%B8%A3%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A3&price=498&priceCompare=skuId%3A17424851009%3Bsource%3Alazada-search-voucher%3Bsn%3Abdd6ccfc6880b9d906971005992cccee%3BoriginPrice%3A49800%3BdisplayPrice%3A49800%3BsinglePromotionId%3A-1%3BsingleToolCode%3A-1%3BvoucherPricePlugin%3A0%3Btimestamp%3A1696846690876&ratingscore=4.972972972972973&request_id=bdd6ccfc6880b9d906971005992cccee&review=37&sale=92&search=1&source=search&spm=a2o4m.searchlist.list.i40.117f11fb5DAeaE&stock=1",
      },
      {
        name: "ตีแตกวอลสตรีท",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/935/9786169352815L.jpg?h=5356d2df1f4ffd5eb10e477927bfe981",
        link_se_ed:
          "https://m.se-ed.com/Detail/%E0%B8%95%E0%B8%B5%E0%B9%81%E0%B8%95%E0%B8%81%E0%B8%A7%E0%B8%AD%E0%B8%A5%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B8%B5%E0%B8%97-Beating-the-Street/9786169352815",
        link_shopee:
          "https://shopee.co.th/%E0%B8%95%E0%B8%B5%E0%B9%81%E0%B8%95%E0%B8%81-%E0%B8%A7%E0%B8%AD%E0%B8%A5%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B8%B5%E0%B8%97-(Beating-The-Street)-i.115885595.7179358478",
        link_lazada:
          "https://www.lazada.co.th/products/beating-the-street-i1136888059-s2632298746.html?c=&channelLpJumpArgs=&clickTrackInfo=query%253A%2525E0%2525B8%252595%2525E0%2525B8%2525B5%2525E0%2525B9%252581%2525E0%2525B8%252595%2525E0%2525B8%252581%2525E0%2525B8%2525A7%2525E0%2525B8%2525AD%2525E0%2525B8%2525A5%2525E0%2525B8%2525AA%2525E0%2525B8%252595%2525E0%2525B8%2525A3%2525E0%2525B8%2525B5%2525E0%2525B8%252597%253Bnid%253A1136888059%253Bsrc%253ALazadaMainSrp%253Brn%253A62206c2692aefa5ee046ed9b71ae1161%253Bregion%253Ath%253Bsku%253A1136888059_TH%253Bprice%253A286%253Bclient%253Adesktop%253Bsupplier_id%253A1000291135%253Bpromotion_biz%253A%253Basc_category_id%253A7827%253Bitem_id%253A1136888059%253Bsku_id%253A2632298746%253Bshop_id%253A518595&fastshipping=0&freeshipping=0&fs_ab=2&fuse_fs=&lang=th&location=%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3&price=286&priceCompare=skuId%3A2632298746%3Bsource%3Alazada-search-voucher%3Bsn%3A62206c2692aefa5ee046ed9b71ae1161%3BoriginPrice%3A28600%3BdisplayPrice%3A28600%3BsinglePromotionId%3A-1%3BsingleToolCode%3AmockedSalePrice%3BvoucherPricePlugin%3A0%3Btimestamp%3A1696846753799&ratingscore=4.982300884955753&request_id=62206c2692aefa5ee046ed9b71ae1161&review=113&sale=547&search=1&source=search&spm=a2o4m.searchlist.list.i40.cec35e5dqYbFBH&stock=1",
      },
      {
        name: "หุ้นสามัญ กับ กำไรที่ไม่สามัญ",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/916/9786169162841L.jpg?h=36c2eaf74fd1db73c1d8a521f1367fab",
        link_se_ed:
          "https://m.se-ed.com/Detail/%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B8%AA%E0%B8%B2%E0%B8%A1%E0%B8%B1%E0%B8%8D-%E0%B8%81%E0%B8%B1%E0%B8%9A-%E0%B8%81%E0%B8%B3%E0%B9%84%E0%B8%A3%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B8%AA%E0%B8%B2%E0%B8%A1%E0%B8%B1%E0%B8%8D/9786169162841",
        link_shopee:
          "https://shopee.co.th/product/90314367/1524535877?gclid=CjwKCAjwyY6pBhA9EiwAMzmfwSSpEMs7-sXchV0If9Xev3xSIHladtCMajDuAiOHeZhV7aIUdQJx1hoCbS8QAvD_BwE",
        link_lazada:
          "https://www.lazada.co.th/products/bundanjai-i4208835069-s16572391543.html?from_gmc=1&exlaz=d_1:mm_150050845_51350205_2010350205::12:20536633140!!!!!c!!16572391543!658289844&gclid=CjwKCAjwyY6pBhA9EiwAMzmfwQlb9nJ1SbHkFkUFN9maH31M1DdK4a_4WItCc7NGapBUbrpjg9JbEhoCCkUQAvD_BwE",
      },
      {
        name: "หุ้นสามัญกับทางสู่ความมั่งคั่ง",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/916/9786169162858L.jpg?h=2f0976c74815522c0f57944850df6a8d",
        link_se_ed:
          "https://m.se-ed.com/Detail/%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B8%AA%E0%B8%B2%E0%B8%A1%E0%B8%B1%E0%B8%8D%E0%B8%81%E0%B8%B1%E0%B8%9A%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%AA%E0%B8%B9%E0%B9%88%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%A1%E0%B8%B1%E0%B9%88%E0%B8%87%E0%B8%84%E0%B8%B1%E0%B9%88%E0%B8%87/9786169162858",
        link_shopee:
          "https://shopee.co.th/%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B8%AA%E0%B8%B2%E0%B8%A1%E0%B8%B1%E0%B8%8D%E0%B8%81%E0%B8%B1%E0%B8%9A%E0%B8%81%E0%B8%B3%E0%B9%84%E0%B8%A3%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B8%AA%E0%B8%B2%E0%B8%A1%E0%B8%B1%E0%B8%8D-Common-Stocks-and-Uncommon-Profits-and-Other-Writings-i.90314367.1524535877?sp_atk=3e627016-c002-4e25-a92b-82dbf6cc4898&xptdk=3e627016-c002-4e25-a92b-82dbf6cc4898",
        link_lazada:
          "https://www.lazada.co.th/products/common-stocks-and-uncommon-profits-and-other-writings-i557732029-s1023848383.html?spm=a2o4m.tm80167383.just-for-you-pc.d_1.72d5018t018tgk.72d5018t018tgk",
      },
      {
        name: "วิถีแห่งคุณค่า วิถีแห่ง วอเร็น บัฟเฟตต์ : The Warren Buffett Way",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/935/9786169352860L.jpg?h=1a8473fd4d959376dc037353a802c521",
        link_se_ed:
          "https://m.se-ed.com/Detail/%E0%B8%A7%E0%B8%B4%E0%B8%96%E0%B8%B5%E0%B9%81%E0%B8%AB%E0%B9%88%E0%B8%87%E0%B8%84%E0%B8%B8%E0%B8%93%E0%B8%84%E0%B9%88%E0%B8%B2-%E0%B8%A7%E0%B8%B4%E0%B8%96%E0%B8%B5%E0%B9%81%E0%B8%AB%E0%B9%88%E0%B8%87-%E0%B8%A7%E0%B8%AD%E0%B9%80%E0%B8%A3%E0%B9%87%E0%B8%99-%E0%B8%9A%E0%B8%B1%E0%B8%9F%E0%B9%80%E0%B8%9F%E0%B8%95%E0%B8%95%E0%B9%8C-The-Warren-Buffett-Way/9786169352860",
        link_shopee:
          "https://shopee.co.th/Se-ed-(%E0%B8%8B%E0%B8%B5%E0%B9%80%E0%B8%AD%E0%B9%87%E0%B8%94)-%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B7%E0%B8%AD-The-Warren-Buffett-Way-%E0%B8%A7%E0%B8%B4%E0%B8%96%E0%B8%B5%E0%B9%81%E0%B8%AB%E0%B9%88%E0%B8%87%E0%B8%84%E0%B8%B8%E0%B8%93%E0%B8%84%E0%B9%88%E0%B8%B2-%E0%B8%A7%E0%B8%B4%E0%B8%96%E0%B8%B5%E0%B9%81%E0%B8%AB%E0%B9%88%E0%B8%87-%E0%B8%A7%E0%B8%AD%E0%B9%80%E0%B8%A3%E0%B9%87%E0%B8%99-%E0%B8%9A%E0%B8%B1%E0%B8%9F%E0%B9%80%E0%B8%9F%E0%B8%95%E0%B8%95%E0%B9%8C-i.119383836.12242331574?sp_atk=b963e60f-4202-469c-ac7b-dae9a8f60788&xptdk=b963e60f-4202-469c-ac7b-dae9a8f60788",
        link_lazada:
          "https://www.lazada.co.th/products/the-warren-buffett-way-i3158774614-s11808375919.html?c=&channelLpJumpArgs=&clickTrackInfo=query%253Athe%252Bwarren%252Bbuffett%252Bway%253Bnid%253A3158774614%253Bsrc%253ALazadaMainSrp%253Brn%253Aac75e1db043671aad0d69054ffe86de1%253Bregion%253Ath%253Bsku%253A3158774614_TH%253Bprice%253A398%253Bclient%253Adesktop%253Bsupplier_id%253A1000054023%253Bpromotion_biz%253A%253Basc_category_id%253A7827%253Bitem_id%253A3158774614%253Bsku_id%253A11808375919%253Bshop_id%253A299839&fastshipping=0&freeshipping=0&fs_ab=2&fuse_fs=&lang=th&location=%E0%B8%AA%E0%B8%A1%E0%B8%B8%E0%B8%97%E0%B8%A3%E0%B8%9B%E0%B8%A3%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A3&price=398&priceCompare=skuId%3A11808375919%3Bsource%3Alazada-search-voucher%3Bsn%3Aac75e1db043671aad0d69054ffe86de1%3BoriginPrice%3A39800%3BdisplayPrice%3A39800%3BsinglePromotionId%3A-1%3BsingleToolCode%3A-1%3BvoucherPricePlugin%3A0%3Btimestamp%3A1696846940618&ratingscore=4.916666666666667&request_id=ac75e1db043671aad0d69054ffe86de1&review=36&sale=131&search=1&source=search&spm=a2o4m.searchlist.list.i40.11b21e30pPrmD6&stock=1",
      },
      {
        name: "วอเร็น บัฟเฟตต์ ซีอีโอ : The Warren Buffett CEO",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/903/9786169033295L.jpg?h=2b6358f83f6d129f7225895ea6d9c82c",
        link_se_ed:
          "https://m.se-ed.com/Detail/%E0%B8%A7%E0%B8%AD%E0%B9%80%E0%B8%A3%E0%B9%87%E0%B8%99-%E0%B8%9A%E0%B8%B1%E0%B8%9F%E0%B9%80%E0%B8%9F%E0%B8%95%E0%B8%95%E0%B9%8C-%E0%B8%8B%E0%B8%B5%E0%B8%AD%E0%B8%B5%E0%B9%82%E0%B8%AD-The-Warren-Buffett-CEO/9786169033295",
        link_shopee:
          "https://shopee.co.th/%E0%B8%A7%E0%B8%AD%E0%B9%80%E0%B8%A3%E0%B9%87%E0%B8%99-%E0%B8%9A%E0%B8%B1%E0%B8%9F%E0%B9%80%E0%B8%9F%E0%B8%95%E0%B8%95%E0%B9%8C-%E0%B8%8B%E0%B8%B5%E0%B8%AD%E0%B8%B5%E0%B9%82%E0%B8%AD-The-Warren-Buffett-CEO-%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%99-Robert-P.-Miles-%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%81%E0%B8%9B%E0%B8%A5-%E0%B8%94%E0%B8%A3.-%E0%B8%81%E0%B8%B8%E0%B8%A8%E0%B8%A2%E0%B8%B2-%E0%B8%A5%E0%B8%B5%E0%B8%AC%E0%B8%AB%E0%B8%B2%E0%B8%A7%E0%B8%87%E0%B8%A8%E0%B9%8C-i.101431638.20334188108?sp_atk=e5900f9c-fda4-45dc-9bce-26659e292b5d&xptdk=e5900f9c-fda4-45dc-9bce-26659e292b5d",
        link_lazada:
          "https://www.lazada.co.th/products/the-warren-buffett-ceo-i899552103-s1816154703.html?spm=a2o4m.tm80167383.2074280300.1.1f47VgWRVgWRs3.1f47VgWRVgWRs3",
      },
      {
        name: "หาหุ้นเติบใหญ่ให้ไวเหนือเมฆ",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/083/9786160837243L.jpg?h=62bebc5cf5878d92b4380e060561041b",
        link_se_ed:
          "https://m.se-ed.com/Detail/%E0%B8%AB%E0%B8%B2%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B9%80%E0%B8%95%E0%B8%B4%E0%B8%9A%E0%B9%83%E0%B8%AB%E0%B8%8D%E0%B9%88%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B9%84%E0%B8%A7%E0%B9%80%E0%B8%AB%E0%B8%99%E0%B8%B7%E0%B8%AD%E0%B9%80%E0%B8%A1%E0%B8%86/9786160837243",
        link_shopee:
          "https://shopee.co.th/product/691764989/14184450228?gclid=CjwKCAjwyY6pBhA9EiwAMzmfwWFSDNzyeCPK-fL4-_p24ZCwcdZ8rpL1iVZO51girxmpZ7nezGmIZRoCtxYQAvD_BwE",
        link_lazada:
          "https://www.lazada.co.th/products/-i697018730-s1335310202.html?from_gmc=1&exlaz=d_1:mm_150050845_51350205_2010350205::12:20536633140!!!!!c!!1335310202!556520963&gclid=CjwKCAjwyY6pBhA9EiwAMzmfwac7OHBKanjESQKuWeEbQlV5s-ClcbkkKR-kpnvmWA2pSRe9BBcGghoCKJ8QAvD_BwE",
      },
      {
        name: "การลงทุนที่ดีที่สุด คือการลงทุนที่มีคุณภาพ",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/818/9786168187364L.jpg?h=11f986dddd45893116028f92763d1bfc",
        link_se_ed:
          "https://www.se-ed.com/product/%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A5%E0%B8%87%E0%B8%97%E0%B8%B8%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%94%E0%B8%B5%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%AA%E0%B8%B8%E0%B8%94-%E0%B8%84%E0%B8%B7%E0%B8%AD%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A5%E0%B8%87%E0%B8%97%E0%B8%B8%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A1%E0%B8%B5%E0%B8%84%E0%B8%B8%E0%B8%93%E0%B8%A0%E0%B8%B2%E0%B8%9E-Quality-Investing.aspx?no=9786168187364",
        link_shopee:
          "https://shopee.co.th/product/35797241/13730089327?gclid=CjwKCAjwyY6pBhA9EiwAMzmfwTpGjZQx2htXuQ9G_XAfrRCMn2LUjgSseYke2RWVT01rKxGsrKiPQhoC8IQQAvD_BwE",
        link_lazada:
          "https://www.lazada.co.th/products/quality-investing-i3983696788-s15431131468.html?c=&channelLpJumpArgs=&clickTrackInfo=query%253A%2525E0%2525B8%252581%2525E0%2525B8%2525B2%2525E0%2525B8%2525A3%2525E0%2525B8%2525A5%2525E0%2525B8%252587%2525E0%2525B8%252597%2525E0%2525B8%2525B8%2525E0%2525B8%252599%2525E0%2525B8%252597%2525E0%2525B8%2525B5%2525E0%2525B9%252588%2525E0%2525B8%252594%2525E0%2525B8%2525B5%2525E0%2525B8%252597%2525E0%2525B8%2525B5%2525E0%2525B9%252588%2525E0%2525B8%2525AA%2525E0%2525B8%2525B8%2525E0%2525B8%252594%253Bnid%253A3983696788%253Bsrc%253ALazadaMainSrp%253Brn%253A93a3ccca30de3b8a5f282abdd9b93831%253Bregion%253Ath%253Bsku%253A3983696788_TH%253Bprice%253A295%253Bclient%253Adesktop%253Bsupplier_id%253A1000054023%253Bpromotion_biz%253A%253Basc_category_id%253A7827%253Bitem_id%253A3983696788%253Bsku_id%253A15431131468%253Bshop_id%253A299839&fastshipping=0&freeshipping=0&fs_ab=2&fuse_fs=&lang=th&location=%E0%B8%AA%E0%B8%A1%E0%B8%B8%E0%B8%97%E0%B8%A3%E0%B8%9B%E0%B8%A3%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A3&price=295&priceCompare=skuId%3A15431131468%3Bsource%3Alazada-search-voucher%3Bsn%3A93a3ccca30de3b8a5f282abdd9b93831%3BoriginPrice%3A29500%3BdisplayPrice%3A29500%3BsinglePromotionId%3A-1%3BsingleToolCode%3A-1%3BvoucherPricePlugin%3A0%3Btimestamp%3A1696847309624&ratingscore=5.0&request_id=93a3ccca30de3b8a5f282abdd9b93831&review=18&sale=75&search=1&source=search&spm=a2o4m.searchlist.list.i40.7a7b4da0JFhnCk&stock=1",
      },
      {
        name: "ลงทุนแบบ จอห์น เนฟฟ์",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/808/9786168085028L.jpg?h=816ac093339b1239ab4594af482f4513",
        link_se_ed:
          "https://m.se-ed.com/Detail/%E0%B8%A5%E0%B8%87%E0%B8%97%E0%B8%B8%E0%B8%99%E0%B9%81%E0%B8%9A%E0%B8%9A-%E0%B8%88%E0%B8%AD%E0%B8%AB%E0%B9%8C%E0%B8%99-%E0%B9%80%E0%B8%99%E0%B8%9F%E0%B8%9F%E0%B9%8C/9786168085028",
        link_shopee:
          "https://shopee.co.th/product/925532175/22613913302?gclid=CjwKCAjwyY6pBhA9EiwAMzmfwa61GmeZ7uW70HV4nA4CMz_NWVjyOpN36O1SiZpgtVkztPIgRfJRUxoCnYsQAvD_BwE",
        link_lazada:
          "https://www.lazada.co.th/products/-i985298121-s2136390371.html?from_gmc=1&exlaz=d_1:mm_150050845_51350205_2010350205::12:19668221003!!!!!c!!2136390371!556520963&gclid=CjwKCAjwyY6pBhA9EiwAMzmfwfvPtO7iJ4lommJURHaUpU5RO2fB6EUYuaU4SQXVOJWwE70wpDbNfBoCGq0QAvD_BwE",
      },
      {
        name: "นักลงทุนดันโด",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/909/9786169098461L.jpg?h=f740de5e933fce89436886f6f1296c86",
        link_se_ed:
          "https://m.se-ed.com/Detail/%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%A5%E0%B8%87%E0%B8%97%E0%B8%B8%E0%B8%99%E0%B8%94%E0%B8%B1%E0%B8%99%E0%B9%82%E0%B8%94-The-Dhandho-Investor/9786169098461",
        link_shopee:
          "https://shopee.co.th/product/155650054/10741724888?gclid=CjwKCAjwyY6pBhA9EiwAMzmfwWpK8ECs91mkRvOknb40sjyiR8Uvt13m3_ms2CGpQ3R9iA0_D4fLXhoCYiIQAvD_BwE",
        link_lazada:
          "https://www.lazada.co.th/products/the-dhandho-investor-i3513854848-s13087823868.html?from_gmc=1&exlaz=d_1:mm_150050845_51350205_2010350205::12:20536633140!!!!!c!!13087823868!556520963&gclid=CjwKCAjwyY6pBhA9EiwAMzmfwU04ikhEmnb5t03Nq_T6nbx9Nmfl6ET1XxHEGIjB2T4CfuxHcrqfghoCgasQAvD_BwE",
      },
      {
        name: "You Can Be A Stock Market Genius อัจฉริยะหุ้น คุณเป็นได้",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/084/9786160842070L.jpg?h=7609849335c613e366f77a92c1908605",
        link_se_ed:
          "https://m.se-ed.com/Detail/You-Can-Be-A-Stock-Market-Genius-%E0%B8%AD%E0%B8%B1%E0%B8%88%E0%B8%89%E0%B8%A3%E0%B8%B4%E0%B8%A2%E0%B8%B0%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99-%E0%B8%84%E0%B8%B8%E0%B8%93%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B9%84%E0%B8%94%E0%B9%89/9786160842070",
        link_shopee:
          "https://shopee.co.th/product/464759028/11216576368?gclid=CjwKCAjwyY6pBhA9EiwAMzmfwYzGzJH5OP2ii5XyOuRjDs1jdD-sXW_Y5WroTd2icnr15-V64_xiIRoCUc0QAvD_BwE",
        link_lazada:
          "https://www.lazada.co.th/products/bundanjai-you-can-be-a-stock-market-genius-i4206357205-s16557888256.html?from_gmc=1&exlaz=d_1:mm_150050845_51350205_2010350205::12:19668221003!!!!!c!!16557888256!658289844&gclid=CjwKCAjwyY6pBhA9EiwAMzmfwYkB5lslZegEBiht1q3e66qjvoxIQkDvRIrax-RcM1RwzjL842GRLRoCfFQQAvD_BwE",
      },
      {
        name: "หุ้นดีต้องมีปราการ",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/922/9786169229223L.jpg?h=dcbbc67d7b21b826735b904fd220715b",
        link_se_ed:
          "https://m.se-ed.com/Detail/%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B8%94%E0%B8%B5%E0%B8%95%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%A1%E0%B8%B5%E0%B8%9B%E0%B8%A3%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A3/9786169229223",
        link_shopee:
          "https://shopee.co.th/%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B7%E0%B8%AD%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B8%94%E0%B8%B5%E0%B8%95%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%A1%E0%B8%B5%E0%B8%9B%E0%B8%A3%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A3-why-moats-matter-i.15015879.5756637883",
        link_lazada:
          "https://www.lazada.co.th/products/why-moats-matter-1-i2492052903-s8796381454.html?spm=a2o4m.tm80167383.2074280300.1.2f40dPbZdPbZU7.2f40dPbZdPbZU7",
      },
      {
        name: "แก่นการลงทุนแบบเน้นคุณค่า",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/909/9786169098447L.jpg?h=2b78e622cf83d6e21430c9a02d9fbfcb",
        link_se_ed:
          "https://www.se-ed.com/product/%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A5%E0%B8%87%E0%B8%97%E0%B8%B8%E0%B8%99%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B9%80%E0%B8%99%E0%B9%89%E0%B8%99%E0%B8%84%E0%B8%B8%E0%B8%93%E0%B8%84%E0%B9%88%E0%B8%B2-The-Most-Important-Thing-Illuminated.aspx?no=9786169098447&nomobile=true",
        link_shopee: "",
        link_lazada:
          "https://www.lazada.co.th/products/the-most-important-thing-illuminated-warren-buffet-pdf-i4799592660-s19838313738.html?c=&channelLpJumpArgs=&clickTrackInfo=query%253A%2525E0%2525B9%252581%2525E0%2525B8%252581%2525E0%2525B9%252588%2525E0%2525B8%252599%2525E0%2525B8%252581%2525E0%2525B8%2525B2%2525E0%2525B8%2525A3%2525E0%2525B8%2525A5%2525E0%2525B8%252587%2525E0%2525B8%252597%2525E0%2525B8%2525B8%2525E0%2525B8%252599%2525E0%2525B9%252581%2525E0%2525B8%25259A%2525E0%2525B8%25259A%2525E0%2525B9%252580%2525E0%2525B8%252599%2525E0%2525B9%252589%2525E0%2525B8%252599%2525E0%2525B8%252584%2525E0%2525B8%2525B8%2525E0%2525B8%252593%2525E0%2525B8%252584%2525E0%2525B9%252588%2525E0%2525B8%2525B2%253Bnid%253A4799592660%253Bsrc%253ALazadaMainSrp%253Brn%253Ab98257585d7a84732f788bc43959703b%253Bregion%253Ath%253Bsku%253A4799592660_TH%253Bprice%253A669%253Bclient%253Adesktop%253Bsupplier_id%253A1000145213%253Bpromotion_biz%253A%253Basc_category_id%253A7802%253Bitem_id%253A4799592660%253Bsku_id%253A19838313738%253Bshop_id%253A378999&fastshipping=0&freeshipping=1&fs_ab=2&fuse_fs=&lang=th&location=%E0%B8%AD%E0%B8%B8%E0%B8%94%E0%B8%A3%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%B5&price=669&priceCompare=skuId%3A19838313738%3Bsource%3Alazada-search-voucher%3Bsn%3Ab98257585d7a84732f788bc43959703b%3BoriginPrice%3A66900%3BdisplayPrice%3A66900%3BsinglePromotionId%3A-1%3BsingleToolCode%3AmockedSalePrice%3BvoucherPricePlugin%3A0%3Btimestamp%3A1696847793399&ratingscore=5.0&request_id=b98257585d7a84732f788bc43959703b&review=9&sale=44&search=1&source=search&spm=a2o4m.searchlist.list.2&stock=1",
      },
      {
        name: "คมปัญญา วอเร็น บัฟเฟตต์ : ขุมทรัพย์ของนักลงทุนและผู้จัดการ",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/916/9786169162872L.jpg?h=5850d5082e25b392d5878eac81d75c9b",
        link_se_ed:
          "https://m.se-ed.com/Detail/%E0%B8%84%E0%B8%A1%E0%B8%9B%E0%B8%B1%E0%B8%8D%E0%B8%8D%E0%B8%B2-%E0%B8%A7%E0%B8%AD%E0%B9%80%E0%B8%A3%E0%B9%87%E0%B8%99-%E0%B8%9A%E0%B8%B1%E0%B8%9F%E0%B9%80%E0%B8%9F%E0%B8%95%E0%B8%95%E0%B9%8C-%E0%B8%82%E0%B8%B8%E0%B8%A1%E0%B8%97%E0%B8%A3%E0%B8%B1%E0%B8%9E%E0%B8%A2%E0%B9%8C%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%A5%E0%B8%87%E0%B8%97%E0%B8%B8%E0%B8%99%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%88%E0%B8%B1%E0%B8%94%E0%B8%81%E0%B8%B2%E0%B8%A3/9786169162872",
        link_shopee:
          "https://shopee.co.th/%E0%B8%84%E0%B8%A1%E0%B8%9B%E0%B8%B1%E0%B8%8D%E0%B8%8D%E0%B8%B2-%E0%B8%A7%E0%B8%AD%E0%B9%80%E0%B8%A3%E0%B9%87%E0%B8%99-%E0%B8%9A%E0%B8%B1%E0%B8%9F%E0%B9%80%E0%B8%9F%E0%B8%95%E0%B8%95%E0%B9%8C-The-Essays-of-Warren-Buffett-i.90314367.2615532893?sp_atk=6faaced9-90ad-4c3f-9d41-9ae088924ff9&xptdk=6faaced9-90ad-4c3f-9d41-9ae088924ff9",
        link_lazada:
          "https://www.lazada.co.th/products/the-essays-of-warren-buffett-i557646894-s1023826056.html?c=&channelLpJumpArgs=&clickTrackInfo=query%253A%2525E0%2525B8%2525A7%2525E0%2525B8%2525AD%2525E0%2525B9%252580%2525E0%2525B8%2525A3%2525E0%2525B9%252587%2525E0%2525B8%252599%252B%2525E0%2525B8%25259A%2525E0%2525B8%2525B1%2525E0%2525B8%25259F%2525E0%2525B9%252580%2525E0%2525B8%25259F%2525E0%2525B8%252595%2525E0%2525B8%252595%2525E0%2525B9%25258C%253Bnid%253A557646894%253Bsrc%253ALazadaMainSrp%253Brn%253Ab919c4f850f0b8555278e60354c4da12%253Bregion%253Ath%253Bsku%253A557646894_TH%253Bprice%253A310%253Bclient%253Adesktop%253Bsupplier_id%253A1000291135%253Bpromotion_biz%253A%253Basc_category_id%253A7827%253Bitem_id%253A557646894%253Bsku_id%253A1023826056%253Bshop_id%253A518595&fastshipping=0&freeshipping=0&fs_ab=2&fuse_fs=&lang=th&location=%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3&price=3.1E%202&priceCompare=skuId%3A1023826056%3Bsource%3Alazada-search-voucher%3Bsn%3Ab919c4f850f0b8555278e60354c4da12%3BoriginPrice%3A31000%3BdisplayPrice%3A31000%3BsinglePromotionId%3A-1%3BsingleToolCode%3AmockedSalePrice%3BvoucherPricePlugin%3A0%3Btimestamp%3A1696847879762&ratingscore=4.962962962962963&request_id=b919c4f850f0b8555278e60354c4da12&review=27&sale=127&search=1&source=search&spm=a2o4m.searchlist.list.i40.7968d0e1mkhR0p&stock=1",
      },
      {
        name: "Investor Mindset รู้ทันอารมณ์ สร้างกำไรด้วยเหตุผล",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/830/9786168302057L.jpg?h=91b0477c8ba09dc83ba2b796a513348d",
        link_se_ed:
          "https://m.se-ed.com/Detail/Investor-Mindset-%E0%B8%A3%E0%B8%B9%E0%B9%89%E0%B8%97%E0%B8%B1%E0%B8%99%E0%B8%AD%E0%B8%B2%E0%B8%A3%E0%B8%A1%E0%B8%93%E0%B9%8C-%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%81%E0%B8%B3%E0%B9%84%E0%B8%A3%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B9%80%E0%B8%AB%E0%B8%95%E0%B8%B8%E0%B8%9C%E0%B8%A5/9786168302057",
        link_shopee:
          "https://shopee.co.th/product/63537678/12506062340?gclid=CjwKCAjwyY6pBhA9EiwAMzmfwSIhLQWqtFztFvUGpFoswAm-_4Sj1JkIVr5B4BIgeisAzmWAPbTVKRoCsAAQAvD_BwE",
        link_lazada:
          "https://www.lazada.co.th/products/investor-mindset-i2659393479-s9566956287.html?from_gmc=1&exlaz=d_1:mm_150050845_51350205_2010350205::12:20536633140!!!!!c!!9566956287!585289532&gclid=CjwKCAjwyY6pBhA9EiwAMzmfwfKQaNplWhsos66v0brz7Jt52y6Jn4UBrNMrp9ytjvXvxq6hJG5WVBoCI0UQAvD_BwE",
      },
      {
        name: "จิตวิทยาการลงทุน",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/916/9786169162865L.jpg?h=fecf0f1084bc96f93f89724b86f3235c",
        link_se_ed:
          "https://m.se-ed.com/Detail/%E0%B8%9E%E0%B8%A4%E0%B8%95%E0%B8%B4%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%88%E0%B8%B4%E0%B8%95%E0%B8%A7%E0%B8%B4%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A5%E0%B8%87%E0%B8%97%E0%B8%B8%E0%B8%99/9786169162865",
        link_shopee:
          "https://shopee.co.th/product/745695515/18170323889?gclid=CjwKCAjwyY6pBhA9EiwAMzmfwX6TQ1eZSE8PLYCgGmJ1aBmxV0OnS8RvpZJlmurptF85SKjklwl4HRoCc88QAvD_BwE",
        link_lazada: "",
      },
      {
        name: "เต้นรำไปทำเงิน",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978974/228/9789742281489L.jpg?h=e3dd7b94d090f0aff6f789f866029577",
        link_se_ed:
          "https://m.se-ed.com/Detail/%E0%B9%80%E0%B8%95%E0%B9%89%E0%B8%99%E0%B8%A3%E0%B8%B3%E0%B9%84%E0%B8%9B%E0%B8%97%E0%B8%B3%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99-Tap-Dancing-to-Work/9789742281489",
        link_shopee:
          "https://shopee.co.th/%E0%B9%80%E0%B8%95%E0%B9%89%E0%B8%99%E0%B8%A3%E0%B8%B3%E0%B9%84%E0%B8%9B%E0%B8%97%E0%B8%B3%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99-Tap-Dancing-to-Work-%E0%B8%97%E0%B8%B8%E0%B8%81%E0%B9%80%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%A3%E0%B8%B2%E0%B8%A7%E0%B9%80%E0%B8%81%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%A7%E0%B8%81%E0%B8%B1%E0%B8%9A-%E0%B8%A7%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%80%E0%B8%A3%E0%B8%99-%E0%B8%9A%E0%B8%B1%E0%B8%9F%E0%B9%80%E0%B8%9F%E0%B8%95%E0%B8%95%E0%B9%8C-(Warren-Buffett)--i.60079285.7135900891",
        link_lazada:
          "https://www.lazada.co.th/products/-i1093428800-s2479928757.html?spm=a2o4m.tm80167383.2074280300.1.7b4dZbNYZbNY2Z.7b4dZbNYZbNY2Z",
      },
      {
        name: "เทคนิคอล อนาไลซิส : Technical Analysis of The Financial Markets",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/928/9786169289715L.jpg?h=b4abed0e85b1c0f1d6c2ff5f7a7fb0f3",
        link_se_ed:
          "https://m.se-ed.com/Detail/%E0%B9%80%E0%B8%97%E0%B8%84%E0%B8%99%E0%B8%B4%E0%B8%84%E0%B8%AD%E0%B8%A5-%E0%B8%AD%E0%B8%99%E0%B8%B2%E0%B9%84%E0%B8%A5%E0%B8%8B%E0%B8%B4%E0%B8%AA-Technical-Analysis-of-The-Financial-Markets/9786169289715",
        link_shopee:
          "https://shopee.co.th/%E0%B9%80%E0%B8%97%E0%B8%84%E0%B8%99%E0%B8%B4%E0%B8%84%E0%B8%AD%E0%B8%A5%E0%B8%AD%E0%B8%99%E0%B8%B2%E0%B9%84%E0%B8%A5%E0%B8%8B%E0%B8%B4%E0%B8%AA-Technical-Analysis-of-the-Financial-Markets-(%E0%B9%80%E0%B8%97%E0%B8%84%E0%B8%99%E0%B8%B4%E0%B8%84%E0%B8%AD%E0%B8%A5-%E0%B8%AD%E0%B8%99%E0%B8%B2%E0%B9%84%E0%B8%A5%E0%B8%8B%E0%B8%B4%E0%B8%AA)-i.90314367.1657336040?sp_atk=cae6a3d7-9601-4542-a76b-de3f85ba1689&xptdk=cae6a3d7-9601-4542-a76b-de3f85ba1689",
        link_lazada:
          "https://www.lazada.co.th/products/technical-analysis-of-the-financial-markets-i558074242-s1024802294.html?c=&channelLpJumpArgs=&clickTrackInfo=query%253Atechnical%252Banalysis%252Bof%252Bthe%252Bfinancial%252Bmarkets%253Bnid%253A558074242%253Bsrc%253ALazadaMainSrp%253Brn%253A53ad7e492ad38061608209d46fe1cd91%253Bregion%253Ath%253Bsku%253A558074242_TH%253Bprice%253A372%253Bclient%253Adesktop%253Bsupplier_id%253A1000291135%253Bpromotion_biz%253A%253Basc_category_id%253A7827%253Bitem_id%253A558074242%253Bsku_id%253A1024802294%253Bshop_id%253A518595&fastshipping=0&freeshipping=0&fs_ab=2&fuse_fs=&lang=th&location=%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3&price=372&priceCompare=skuId%3A1024802294%3Bsource%3Alazada-search-voucher%3Bsn%3A53ad7e492ad38061608209d46fe1cd91%3BoriginPrice%3A37200%3BdisplayPrice%3A37200%3BsinglePromotionId%3A-1%3BsingleToolCode%3AmockedSalePrice%3BvoucherPricePlugin%3A0%3Btimestamp%3A1696848165369&ratingscore=4.973384030418251&request_id=53ad7e492ad38061608209d46fe1cd91&review=263&sale=1336&search=1&source=search&spm=a2o4m.searchlist.list.i40.510f286fNbIN3y&stock=1",
      },
      {
        name: "Come Into My Trading Room : ห้องเทรดของผม",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/928/9786169289722L.jpg?h=a698226fdafa6c350c911d91639ff853",
        link_se_ed:
          "https://m.se-ed.com/Product/Detail/BK9786169289722?no=bk9786169289722",
        link_shopee:
          "https://shopee.co.th/product/90314367/2390624177?gclid=CjwKCAjwyY6pBhA9EiwAMzmfwYoBlUNy71tA5q6Hw2OzVDA2jmuY5sjj8fzCbvVWEopqEpHCs4KYTxoCvlYQAvD_BwE",
        link_lazada:
          "https://www.lazada.co.th/products/bundanjai-come-into-my-trading-room-i4208706690-s16572414688.html?from_gmc=1&exlaz=d_1:mm_150050845_51350205_2010350205::12:19668221003!!!!!c!!16572414688!658289844&gclid=CjwKCAjwyY6pBhA9EiwAMzmfwSMsERmuqdoyXZq4h7CSXnDSLxM2uBvotpgSgNBNn_8lzpeyZpxgbBoCy1wQAvD_BwE",
      },
      {
        name: "เทรดเพื่อชีวิต : The New Trading for a Living",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/796/9786167966021L.jpg?h=d2d0d019366fed320def59557898ffef",
        link_se_ed:
          "https://m.se-ed.com/Detail/%E0%B9%80%E0%B8%97%E0%B8%A3%E0%B8%94%E0%B9%80%E0%B8%9E%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%8A%E0%B8%B5%E0%B8%A7%E0%B8%B4%E0%B8%95-The-New-Trading-for-a-Living/9786167966021",
        link_shopee:
          "https://shopee.co.th/product/523439500/10264642941?gclid=CjwKCAjwyY6pBhA9EiwAMzmfwXSq4_a8miuxXup3MkcrpGigaypnXUTdxwG0d2Au5B-Q1GXQZFzefBoCgYEQAvD_BwE",
        link_lazada:
          "https://www.lazada.co.th/products/the-new-trading-for-a-living-i558100073-s1024788826.html?c=&channelLpJumpArgs=&clickTrackInfo=query%253Athe%252Bnew%252Btrading%252Bfor%252Ba%252Bliving%253Bnid%253A558100073%253Bsrc%253ALazadaMainSrp%253Brn%253A540ce2aaa41c68c6ca554f09444fa188%253Bregion%253Ath%253Bsku%253A558100073_TH%253Bprice%253A410%253Bclient%253Adesktop%253Bsupplier_id%253A1000291135%253Bpromotion_biz%253A%253Basc_category_id%253A7827%253Bitem_id%253A558100073%253Bsku_id%253A1024788826%253Bshop_id%253A518595&fastshipping=0&freeshipping=0&fs_ab=2&fuse_fs=&lang=th&location=%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3&price=4.1E%202&priceCompare=skuId%3A1024788826%3Bsource%3Alazada-search-voucher%3Bsn%3A540ce2aaa41c68c6ca554f09444fa188%3BoriginPrice%3A41000%3BdisplayPrice%3A41000%3BsinglePromotionId%3A-1%3BsingleToolCode%3AmockedSalePrice%3BvoucherPricePlugin%3A0%3Btimestamp%3A1696848280686&ratingscore=4.947712418300654&request_id=540ce2aaa41c68c6ca554f09444fa188&review=153&sale=716&search=1&source=search&spm=a2o4m.searchlist.list.i40.6ffb3a55vqvkKE&stock=1",
      },
      {
        name: "จับจังหวะหุ้นด้วยปัจจัยเทคนิค : ชุด ครบเครื่องเรื่องลงทุน",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/722/9786167227818L.jpg?h=f005174873040fc3b74d31c74ddb9b5e",
        link_se_ed:
          "https://m.se-ed.com/Detail/%E0%B8%88%E0%B8%B1%E0%B8%9A%E0%B8%88%E0%B8%B1%E0%B8%87%E0%B8%AB%E0%B8%A7%E0%B8%B0%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%9B%E0%B8%B1%E0%B8%88%E0%B8%88%E0%B8%B1%E0%B8%A2%E0%B9%80%E0%B8%97%E0%B8%84%E0%B8%99%E0%B8%B4%E0%B8%84-%E0%B8%8A%E0%B8%B8%E0%B8%94-%E0%B8%84%E0%B8%A3%E0%B8%9A%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%A5%E0%B8%87%E0%B8%97%E0%B8%B8%E0%B8%99/9786167227818",
        link_shopee:
          "https://shopee.co.th/%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B7%E0%B8%AD-%E0%B8%88%E0%B8%B1%E0%B8%9A%E0%B8%88%E0%B8%B1%E0%B8%87%E0%B8%AB%E0%B8%A7%E0%B8%B0%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%9B%E0%B8%B1%E0%B8%88%E0%B8%88%E0%B8%B1%E0%B8%A2%E0%B9%80%E0%B8%97%E0%B8%84%E0%B8%99%E0%B8%B4%E0%B8%84-%E0%B8%8A%E0%B8%B8%E0%B8%94%E0%B8%84%E0%B8%A3%E0%B8%9A%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%A5%E0%B8%87%E0%B8%97%E0%B8%B8%E0%B8%99-%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B7%E0%B8%AD%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99-%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B7%E0%B8%AD%E0%B8%A5%E0%B8%87%E0%B8%97%E0%B8%B8%E0%B8%99-%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B7%E0%B8%AD%E0%B8%81%E0%B8%A3%E0%B8%B2%E0%B8%9F%E0%B9%80%E0%B8%97%E0%B8%84%E0%B8%99%E0%B8%B4%E0%B8%84-i.67939365.12690422577?sp_atk=b9ae40eb-2cae-4786-8380-028fb9e84ddf&xptdk=b9ae40eb-2cae-4786-8380-028fb9e84ddf",
        link_lazada:
          "https://www.lazada.co.th/products/-i3649119419-s13715112080.html?c=&channelLpJumpArgs=&clickTrackInfo=query%253A%2525E0%2525B8%252588%2525E0%2525B8%2525B1%2525E0%2525B8%25259A%2525E0%2525B8%252588%2525E0%2525B8%2525B1%2525E0%2525B8%252587%2525E0%2525B8%2525AB%2525E0%2525B8%2525A7%2525E0%2525B8%2525B0%2525E0%2525B8%2525AB%2525E0%2525B8%2525B8%2525E0%2525B9%252589%2525E0%2525B8%252599%2525E0%2525B8%252594%2525E0%2525B9%252589%2525E0%2525B8%2525A7%2525E0%2525B8%2525A2%2525E0%2525B8%25259B%2525E0%2525B8%2525B1%2525E0%2525B8%252588%2525E0%2525B8%252588%2525E0%2525B8%2525B1%2525E0%2525B8%2525A2%2525E0%2525B9%252580%2525E0%2525B8%252597%2525E0%2525B8%252584%2525E0%2525B8%252599%2525E0%2525B8%2525B4%2525E0%2525B8%252584%253Bnid%253A3649119419%253Bsrc%253ALazadaMainSrp%253Brn%253A5b9e9e45887a5dbd9e8c45a70d9a3642%253Bregion%253Ath%253Bsku%253A3649119419_TH%253Bprice%253A390%253Bclient%253Adesktop%253Bsupplier_id%253A1000342333%253Bpromotion_biz%253A%253Basc_category_id%253A7827%253Bitem_id%253A3649119419%253Bsku_id%253A13715112080%253Bshop_id%253A569126&fastshipping=0&freeshipping=0&fs_ab=2&fuse_fs=&lang=th&location=%E0%B8%A5%E0%B8%9E%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5&price=3.9E%202&priceCompare=skuId%3A13715112080%3Bsource%3Alazada-search-voucher%3Bsn%3A5b9e9e45887a5dbd9e8c45a70d9a3642%3BoriginPrice%3A39000%3BdisplayPrice%3A39000%3BsinglePromotionId%3A-1%3BsingleToolCode%3A-1%3BvoucherPricePlugin%3A0%3Btimestamp%3A1696848388611&ratingscore=0&request_id=5b9e9e45887a5dbd9e8c45a70d9a3642&review=&sale=0&search=1&source=search&spm=a2o4m.searchlist.list.i26.5cf479d3QxvupV&stock=1",
      },
      {
        name: "หุ้นพลิกชีวิต (ฉบับปรับปรุงใหม่)",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/084/9786160842391L.jpg?h=7c3ea8b721b05cdefbf67f82fd2acb95",
        link_se_ed: "https://m.se-ed.com/Product/Detail/9786160842391",
        link_shopee:
          "https://shopee.co.th/product/909147572/21665301333?gclid=CjwKCAjwyY6pBhA9EiwAMzmfwRyfql80bvFoO-EeyTkNqSHLGlmJDbBZyxXKaxQe32JTRG8VMLCfOxoCJGoQAvD_BwE",
        link_lazada:
          "https://www.lazada.co.th/products/-i4725270192-s19486125555.html?from_gmc=1&exlaz=d_1:mm_150050845_51350205_2010350205::12:19668221003!!!!!c!!19486125555!5088215135&gclid=CjwKCAjwyY6pBhA9EiwAMzmfwbMsGLQjzZ4FPXqGvCuwsKi-KGrRrfJzsk3z9LCJhkGxAWeUo7Sz4hoC890QAvD_BwE",
      },
      {
        name: "หุ้นวิ่งไปให้สุดเทรนด์ (ฉบับอัปเดต) : Beyond Stock's Capability",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/084/9786160845187L.jpg?h=2eb6386e3983ee8eff58b67da2fe03f3",
        link_se_ed:
          "https://m.se-ed.com/Detail/%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B8%A7%E0%B8%B4%E0%B9%88%E0%B8%87%E0%B9%84%E0%B8%9B%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%AA%E0%B8%B8%E0%B8%94%E0%B9%80%E0%B8%97%E0%B8%A3%E0%B8%99%E0%B8%94%E0%B9%8C-(%E0%B8%89%E0%B8%9A%E0%B8%B1%E0%B8%9A%E0%B8%AD%E0%B8%B1%E0%B8%9B%E0%B9%80%E0%B8%94%E0%B8%95)-Beyond-Stock-s-Capability/9786160845187",
        link_shopee:
          "https://shopee.co.th/product/968601996/23676497335?gclid=CjwKCAjwyY6pBhA9EiwAMzmfwYBLDK6Ty5qVBk_lFvJeiT0h4Enzy4nmZTNk4ZKxKHHQzBMNYvswrhoCcAgQAvD_BwE",
        link_lazada:
          "https://www.lazada.co.th/products/beyond-stocks-capability-i3899002563-s14973093634.html?from_gmc=1&exlaz=d_1:mm_150050845_51350205_2010350205::12:20536633140!!!!!c!!14973093634!556520963&gclid=CjwKCAjwyY6pBhA9EiwAMzmfwaYUQH1uTS-PiHZO6H8Vo8pCV8A6UeLUoXQ2mfUgi6nTdfVxmlXTjhoCFvEQAvD_BwE",
      },
      {
        name: "CAN SLIM คัดหุ้นชั้นยอด ด้วยระบบชั้นเยี่ยม : How to Make Money in Stocks",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/796/9786167966007L.jpg?h=da31beaf07b4dcff99d3987c8f8e83f8",
        link_se_ed:
          "https://m.se-ed.com/Detail/CAN-SLIM-%E0%B8%84%E0%B8%B1%E0%B8%94%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B8%8A%E0%B8%B1%E0%B9%89%E0%B8%99%E0%B8%A2%E0%B8%AD%E0%B8%94-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E0%B8%8A%E0%B8%B1%E0%B9%89%E0%B8%99%E0%B9%80%E0%B8%A2%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%A1-How-to-Make-Money-in-Stocks/9786167966007",
        link_shopee:
          "https://shopee.co.th/product/162964910/22545864573?gclid=CjwKCAjwyY6pBhA9EiwAMzmfwXe3GSa1ClDR8R0KiAmAthOW6CPWodx9-MRzY8Nsql5N2l6aKC0ICBoCPHMQAvD_BwE",
        link_lazada:
          "https://www.lazada.co.th/products/can-slim-how-to-make-money-in-stocks-william-j-o-nsix-i4204948592-s16551096598.html?from_gmc=1&exlaz=d_1:mm_150050845_51350205_2010350205::12:20536633140!!!!!c!!16551096598!521766044&gclid=CjwKCAjwyY6pBhA9EiwAMzmfwZY9gYsF_eJhch1B9ha-GIyeF_zm2LNMX4SW08CC1ws5li3spKvVrxoCoqMQAvD_BwE",
      },
      {
        name: "โมเมนตัม มาสเตอร์ : Momentum Masters",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/928/9786169289708L.jpg?h=6739c7051ab50eeb4cb71afae249b688",
        link_se_ed: "https://m.se-ed.com/Product/Detail/9786169289708",
        link_shopee:
          "https://shopee.co.th/product/523439500/10641311455?gclid=CjwKCAjwyY6pBhA9EiwAMzmfwdQj5rkuQVWxmEpqQwn42kGGrhZgbboMcNxohN0vawZN898qVAjpmRoCumcQAvD_BwE",
        link_lazada:
          "https://www.lazada.co.th/products/bundanjai-momentum-masters-i4208816160-s16572593124.html?from_gmc=1&exlaz=d_1:mm_150050845_51350205_2010350205::12:19668221003!!!!!c!!16572593124!658289844&gclid=CjwKCAjwyY6pBhA9EiwAMzmfwbdgEwdXs9yS-PvzgqyVtRndvRd03sG6tIPi0-B9ocdoV6fAJNaVNhoCwiQQAvD_BwE",
      },
      {
        name: "Think & Trade Like a Champion : คิดและเทรดอย่างแชมป์เปี้ยน",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/928/9786169289753L.jpg?h=546511fa0387f801b0aef9fec88aa8ad",
        link_se_ed:
          "https://m.se-ed.com/Detail/Think-Trade-Like-a-Champion-%E0%B8%84%E0%B8%B4%E0%B8%94%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B9%80%E0%B8%97%E0%B8%A3%E0%B8%94%E0%B8%AD%E0%B8%A2%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B9%81%E0%B8%8A%E0%B8%A1%E0%B8%9B%E0%B9%8C%E0%B9%80%E0%B8%9B%E0%B8%B5%E0%B9%89%E0%B8%A2%E0%B8%99/9786169289753",
        link_shopee:
          "https://shopee.co.th/%E0%B8%84%E0%B8%B4%E0%B8%94%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B9%80%E0%B8%97%E0%B8%A3%E0%B8%94%E0%B8%AD%E0%B8%A2%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B9%81%E0%B8%8A%E0%B8%A1%E0%B8%9B%E0%B9%8C%E0%B9%80%E0%B8%9B%E0%B8%B5%E0%B9%89%E0%B8%A2%E0%B8%99-THINK-TRADE-LIKE-A-CHAMPION-i.90314367.5065899199?sp_atk=79a6273a-9cba-4f46-9ee2-59e48a55cdcd&xptdk=79a6273a-9cba-4f46-9ee2-59e48a55cdcd",
        link_lazada:
          "https://www.lazada.co.th/products/bundanjai-think-trade-like-a-champion-i4813643271-s19940884851.html?from_gmc=1&exlaz=d_1:mm_150050845_51350205_2010350205::12:20536633140!!!!!c!!19940884851!658289844&gclid=CjwKCAjwyY6pBhA9EiwAMzmfwWk60JGvZxoLvYUYwilVjct6xTQI6cBOIJfkqqp1Q6ELZyUtIFOz0BoCN08QAvD_BwE",
      },
      {
        name: "Trade Like a Stock Market Wizard : เทรดอย่างพ่อมดตลาดหุ้น",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/935/9786169352846L.jpg?h=df76e6b2465481f7ed63cabf41babf7b",
        link_se_ed:
          "https://m.se-ed.com/Detail/Trade-Like-a-Stock-Market-Wizard-%E0%B9%80%E0%B8%97%E0%B8%A3%E0%B8%94%E0%B8%AD%E0%B8%A2%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B8%9E%E0%B9%88%E0%B8%AD%E0%B8%A1%E0%B8%94%E0%B8%95%E0%B8%A5%E0%B8%B2%E0%B8%94%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99/9786169352846",
        link_shopee:
          "https://shopee.co.th/product/523439500/12637493511?gclid=CjwKCAjwyY6pBhA9EiwAMzmfwTj5M43vHwLoCcSgg_-Ks86y3caGuGjBJvtULhmJBdKtU8YK7Y646RoC4AAQAvD_BwE",
        link_lazada:
          "https://www.lazada.co.th/products/trade-like-a-stock-market-wizard-mark-minervini-i4867343011-s20343265081.html?from_gmc=1&exlaz=d_1:mm_150050845_51350205_2010350205::12:19668221003!!!!!c!!20343265081!5088181494&gclid=CjwKCAjwyY6pBhA9EiwAMzmfwVoSV7L57iKnCSR8kXGLBf-7U3DAHMdhInybuxaWGq7xddqYpKm1-RoC68EQAvD_BwE",
      },
      {
        name: "อ่านใจรายใหญ่ด้วยราคาและวอลุ่ม",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/937/9786169378303L.jpg?h=bb8bc3da20c40c3bb61914067a4f1d19",
        link_se_ed:
          "https://m.se-ed.com/Detail/%E0%B8%AD%E0%B9%88%E0%B8%B2%E0%B8%99%E0%B9%83%E0%B8%88%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B9%83%E0%B8%AB%E0%B8%8D%E0%B9%88%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%A3%E0%B8%B2%E0%B8%84%E0%B8%B2%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%A7%E0%B8%AD%E0%B8%A5%E0%B8%B8%E0%B9%88%E0%B8%A1/9786169378303",
        link_shopee:
          "https://shopee.co.th/%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B7%E0%B8%AD-%E2%80%9C%E0%B8%AD%E0%B9%88%E0%B8%B2%E0%B8%99%E0%B9%83%E0%B8%88%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B9%83%E0%B8%AB%E0%B8%8D%E0%B9%88%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%A3%E0%B8%B2%E0%B8%84%E0%B8%B2%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%A7%E0%B8%AD%E0%B8%A5%E0%B8%B8%E0%B9%88%E0%B8%A1%E2%80%9D-i.82687437.23172495155?sp_atk=23644794-5afa-492d-8e7d-37c49d3895c8&xptdk=23644794-5afa-492d-8e7d-37c49d3895c8",
        link_lazada:
          "https://www.lazada.co.th/products/-i4533007691-s18448812080.html?from_gmc=1&exlaz=d_1:mm_150050845_51350205_2010350205::12:19668221003!!!!!c!!18448812080!358888732&gclid=CjwKCAjwyY6pBhA9EiwAMzmfwWlP8jyHqaCLbws3N2CU0ZqMuTJl4JF8kqcG8t0tbLHMnObsQdP3uxoCW9wQAvD_BwE",
      },
      {
        name: "หุ้นขาขึ้นรอบใหญ่",
        images:
          "https://cdn-shop.ookbee.com/Books/VAJRINSGMAILCOM/2019/20190219193757/Thumbnails/Cover.jpg",
        link_se_ed: "",
        link_shopee:
          "https://shopee.co.th/%E2%9C%85%E0%B8%9E%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%AA%E0%B9%88%E0%B8%87%E2%9C%85-%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B8%82%E0%B8%B2%E0%B8%82%E0%B8%B6%E0%B9%89%E0%B8%99%E0%B8%A3%E0%B8%AD%E0%B8%9A%E0%B9%83%E0%B8%AB%E0%B8%8D%E0%B9%88%E2%9A%A1%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B8%8B%E0%B8%B4%E0%B9%88%E0%B8%87%E0%B8%AA%E0%B8%A7%E0%B8%B4%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%A3%E0%B8%94%E2%9A%A1%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%A3%E0%B8%B9%E0%B9%89%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%84%E0%B9%88%E0%B8%B21%E0%B8%A5%E0%B9%89%E0%B8%B2%E0%B8%99%E2%9A%A1%E0%B8%88%E0%B8%B4%E0%B8%95%E0%B8%A7%E0%B8%B4%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%97%E0%B8%A3%E0%B8%94%E2%9A%A1%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%A8%E0%B8%B4%E0%B8%A5%E0%B8%9B%E0%B8%B0%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9B%E0%B8%B1%E0%B8%B1%E0%B9%89%E0%B8%99%E0%B8%9E%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%95%E2%9A%A1-i.10553472.11863229890?sp_atk=0203cea4-a201-4e59-a9f4-6b5e6b1abb78&xptdk=0203cea4-a201-4e59-a9f4-6b5e6b1abb78",
        link_lazada:
          "https://www.lazada.co.th/products/1-i3578091721-s13357518723.html?c=&channelLpJumpArgs=&clickTrackInfo=query%253A%2525E0%2525B8%2525AB%2525E0%2525B8%2525B8%2525E0%2525B9%252589%2525E0%2525B8%252599%2525E0%2525B8%252582%2525E0%2525B8%2525B2%2525E0%2525B8%252582%2525E0%2525B8%2525B6%2525E0%2525B9%252589%2525E0%2525B8%252599%2525E0%2525B8%2525A3%2525E0%2525B8%2525AD%2525E0%2525B8%25259A%2525E0%2525B9%252583%2525E0%2525B8%2525AB%2525E0%2525B8%25258D%2525E0%2525B9%252588%253Bnid%253A3578091721%253Bsrc%253ALazadaMainSrp%253Brn%253Ad3c462797cfbc6afd7f10dbf0a603ff8%253Bregion%253Ath%253Bsku%253A3578091721_TH%253Bprice%253A280%253Bclient%253Adesktop%253Bsupplier_id%253A100206219831%253Bpromotion_biz%253A%253Basc_category_id%253A7827%253Bitem_id%253A3578091721%253Bsku_id%253A13357518723%253Bshop_id%253A3148045&fastshipping=0&freeshipping=0&fs_ab=2&fuse_fs=&lang=th&location=%E0%B8%AA%E0%B8%87%E0%B8%82%E0%B8%A5%E0%B8%B2&price=2.8E%202&priceCompare=skuId%3A13357518723%3Bsource%3Alazada-search-voucher%3Bsn%3Ad3c462797cfbc6afd7f10dbf0a603ff8%3BoriginPrice%3A28000%3BdisplayPrice%3A28000%3BsinglePromotionId%3A-1%3BsingleToolCode%3AmockedSalePrice%3BvoucherPricePlugin%3A0%3Btimestamp%3A1696849051187&ratingscore=4.809523809523809&request_id=d3c462797cfbc6afd7f10dbf0a603ff8&review=21&sale=106&search=1&source=search&spm=a2o4m.searchlist.list.i40.79d41da2bexE84&stock=1",
      },
      {
        name: "พ่อมดแห่งวอลสตรีท : Market Wizards : Interviews with Top Traders",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/916/9786169162834L.jpg?h=105d734c7ae3d89b2a41df20a87d31aa",
        link_se_ed:
          "https://m.se-ed.com/Detail/%E0%B8%9E%E0%B9%88%E0%B8%AD%E0%B8%A1%E0%B8%94%E0%B9%81%E0%B8%AB%E0%B9%88%E0%B8%87%E0%B8%A7%E0%B8%AD%E0%B8%A5%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B8%B5%E0%B8%97-Market-Wizards-Interviews-with-Top-Traders/9786169162834",
        link_shopee:
          "https://shopee.co.th/%E0%B8%9E%E0%B9%88%E0%B8%AD%E0%B8%A1%E0%B8%94%E0%B9%81%E0%B8%AB%E0%B9%88%E0%B8%87%E0%B8%A7%E0%B8%AD%E0%B8%A5%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B8%B5%E0%B8%97-Market-Wizards-Interviews-with-Top-Traders-i.94651099.8087571401",
        link_lazada:
          "https://www.lazada.co.th/products/market-wizards-1-i4102719160-s16037807796.html?c=&channelLpJumpArgs=&clickTrackInfo=query%253A%2525E0%2525B8%25259E%2525E0%2525B9%252588%2525E0%2525B8%2525AD%2525E0%2525B8%2525A1%2525E0%2525B8%252594%2525E0%2525B9%252581%2525E0%2525B8%2525AB%2525E0%2525B9%252588%2525E0%2525B8%252587%2525E0%2525B8%2525A7%2525E0%2525B8%2525AD%2525E0%2525B8%2525A5%2525E0%2525B8%2525AA%2525E0%2525B8%252595%2525E0%2525B8%2525A3%2525E0%2525B8%2525B5%2525E0%2525B8%252597%253Bnid%253A4102719160%253Bsrc%253ALazadaMainSrp%253Brn%253A4d2d062188642b978e0392043069d104%253Bregion%253Ath%253Bsku%253A4102719160_TH%253Bprice%253A1264%253Bclient%253Adesktop%253Bsupplier_id%253A100215486988%253Bpromotion_biz%253A%253Basc_category_id%253A7827%253Bitem_id%253A4102719160%253Bsku_id%253A16037807796%253Bshop_id%253A3300576&fastshipping=0&freeshipping=0&fs_ab=2&fuse_fs=&lang=th&location=%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3&price=1264&priceCompare=skuId%3A16037807796%3Bsource%3Alazada-search-voucher%3Bsn%3A4d2d062188642b978e0392043069d104%3BoriginPrice%3A126400%3BdisplayPrice%3A126400%3BsinglePromotionId%3A-1%3BsingleToolCode%3AmockedSalePrice%3BvoucherPricePlugin%3A0%3Btimestamp%3A1696849123900&ratingscore=0&request_id=4d2d062188642b978e0392043069d104&review=&sale=0&search=1&source=search&spm=a2o4m.searchlist.list.i40.676b2a42mM47pq&stock=1",
      },
      {
        name: "โซนแห่งเทรดเดอร์ : Trading in The Zone",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/796/9786167966014L.jpg?h=6e8186f84fcdd6b7ee13369477b5ec02",
        link_se_ed:
          "https://m.se-ed.com/Detail/%E0%B9%82%E0%B8%8B%E0%B8%99%E0%B9%81%E0%B8%AB%E0%B9%88%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%A3%E0%B8%94%E0%B9%80%E0%B8%94%E0%B8%AD%E0%B8%A3%E0%B9%8C-Trading-in-The-Zone/9786167966014",
        link_shopee:
          "https://shopee.co.th/product/35797241/6509351842?gclid=CjwKCAjwyY6pBhA9EiwAMzmfweE9uSEExduDDKRE3VuBXt1lsc-LE2ZhHPZNjOVLP4CIxBReJGOYyBoCGbkQAvD_BwE",
        link_lazada:
          "https://www.lazada.co.th/products/trading-in-the-zone-i4639627876-s19061782135.html?c=&channelLpJumpArgs=&clickTrackInfo=query%253A%2525E0%2525B9%252582%2525E0%2525B8%25258B%2525E0%2525B8%252599%2525E0%2525B9%252581%2525E0%2525B8%2525AB%2525E0%2525B9%252588%2525E0%2525B8%252587%2525E0%2525B9%252580%2525E0%2525B8%252597%2525E0%2525B8%2525A3%2525E0%2525B8%252594%2525E0%2525B9%252580%2525E0%2525B8%252594%2525E0%2525B8%2525AD%2525E0%2525B8%2525A3%2525E0%2525B9%25258C%252B%25253A%252Btrading%252Bin%252Bthe%252Bzone%253Bnid%253A4639627876%253Bsrc%253ALazadaMainSrp%253Brn%253Ab5d6a6caf1e92fc2ebc41fbcf1cd1c65%253Bregion%253Ath%253Bsku%253A4639627876_TH%253Bprice%253A399%253Bclient%253Adesktop%253Bsupplier_id%253A100189020126%253Bpromotion_biz%253A%253Basc_category_id%253A7827%253Bitem_id%253A4639627876%253Bsku_id%253A19061782135%253Bshop_id%253A1963106&fastshipping=0&freeshipping=0&fs_ab=2&fuse_fs=&lang=th&location=%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3&price=399&priceCompare=skuId%3A19061782135%3Bsource%3Alazada-search-voucher%3Bsn%3Ab5d6a6caf1e92fc2ebc41fbcf1cd1c65%3BoriginPrice%3A39900%3BdisplayPrice%3A39900%3BsinglePromotionId%3A-1%3BsingleToolCode%3A-1%3BvoucherPricePlugin%3A0%3Btimestamp%3A1696849207564&ratingscore=5.0&request_id=b5d6a6caf1e92fc2ebc41fbcf1cd1c65&review=2&sale=7&search=1&source=search&spm=a2o4m.searchlist.list.i40.22bb2aaaQ8FC6Q&stock=1",
      },
      {
        name: "ตามติดชีวิตโคตรแชมป์เดย์เทรด : Pit Bull (Lessons from Wall Street's Champion Day Trader)",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/928/9786169289746L.jpg?h=f001565dcb75c4d790b39b040fa01d62",
        link_se_ed:
          "https://m.se-ed.com/Detail/%E0%B8%95%E0%B8%B2%E0%B8%A1%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B8%8A%E0%B8%B5%E0%B8%A7%E0%B8%B4%E0%B8%95%E0%B9%82%E0%B8%84%E0%B8%95%E0%B8%A3%E0%B9%81%E0%B8%8A%E0%B8%A1%E0%B8%9B%E0%B9%8C%E0%B9%80%E0%B8%94%E0%B8%A2%E0%B9%8C%E0%B9%80%E0%B8%97%E0%B8%A3%E0%B8%94-Pit-Bull-(Lessons-from-Wall-Street-s-Champion-Day-Trader)/9786169289746",
        link_shopee:
          "https://shopee.co.th/%E0%B8%95%E0%B8%B2%E0%B8%A1%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B8%8A%E0%B8%B5%E0%B8%A7%E0%B8%B4%E0%B8%95%E0%B9%82%E0%B8%84%E0%B8%95%E0%B8%A3%E0%B9%81%E0%B8%8A%E0%B8%A1%E0%B8%9B%E0%B9%8C%E0%B9%80%E0%B8%94%E0%B8%A2%E0%B9%8C%E0%B9%80%E0%B8%97%E0%B8%A3%E0%B8%94-Pit-Bull-(Lessons-from-Wall-Street's-Champion-Day-Trader)-i.90314367.3216092949?sp_atk=9f757205-4b3a-47f4-9aab-ab03e754f41a&xptdk=9f757205-4b3a-47f4-9aab-ab03e754f41a",
        link_lazada:
          "https://www.lazada.co.th/products/pit-bull-lessons-from-wall-streets-champion-day-trader-i4838884784-s20222247904.html?spm=a2o4m.tm80167383.2074280300.1.56baTSHZTSHZ7i.56baTSHZTSHZ7i",
      },
      {
        name: "Robust Trading System : 31 เคล็ดลับการเทรดเพื่อเอาชนะตลาดอย่างยั่งยืน ถอดบทเรียนจากเซียนและกูรูเทรดเดอร์ระดับโลก",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/935/9786169352839L.jpg?h=3949f7a1558b90f150e67e01f7ca88be",
        link_se_ed:
          "https://m.se-ed.com/Detail/Robust-Trading-System-31-%E0%B9%80%E0%B8%84%E0%B8%A5%E0%B9%87%E0%B8%94%E0%B8%A5%E0%B8%B1%E0%B8%9A%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%97%E0%B8%A3%E0%B8%94%E0%B9%80%E0%B8%9E%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B9%80%E0%B8%AD%E0%B8%B2%E0%B8%8A%E0%B8%99%E0%B8%B0%E0%B8%95%E0%B8%A5%E0%B8%B2%E0%B8%94%E0%B8%AD%E0%B8%A2%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B8%A2%E0%B8%B1%E0%B9%88%E0%B8%87%E0%B8%A2%E0%B8%B7%E0%B8%99-%E0%B8%96%E0%B8%AD%E0%B8%94%E0%B8%9A%E0%B8%97%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B8%88%E0%B8%B2%E0%B8%81%E0%B9%80%E0%B8%8B%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%81%E0%B8%B9%E0%B8%A3%E0%B8%B9%E0%B9%80%E0%B8%97%E0%B8%A3%E0%B8%94%E0%B9%80%E0%B8%94%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%A3%E0%B8%B0%E0%B8%94%E0%B8%B1%E0%B8%9A%E0%B9%82%E0%B8%A5%E0%B8%81/9786169352839",
        link_shopee:
          "https://shopee.co.th/%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B7%E0%B8%AD%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%AA%E0%B8%AD%E0%B8%87-31-%E0%B9%80%E0%B8%84%E0%B8%A5%E0%B9%87%E0%B8%94%E0%B8%A5%E0%B8%B1%E0%B8%9A%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%97%E0%B8%A3%E0%B8%94%E0%B9%80%E0%B8%9E%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B9%80%E0%B8%AD%E0%B8%B2%E0%B8%8A%E0%B8%99%E0%B8%B0%E0%B8%95%E0%B8%A5%E0%B8%B2%E0%B8%94%E0%B8%AD%E0%B8%A2%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B8%A2%E0%B8%B1%E0%B9%88%E0%B8%87%E0%B8%A2%E0%B8%B7%E0%B8%99-ROBUST-TRADING-SYSTEM-i.15423714.11561627847",
        link_lazada:
          "https://www.lazada.co.th/products/robust-trading-system-31-i2332877593-s7891599325.html?spm=a2o4m.tm80167383.2074280300.1.70e5FTQYFTQY5d.70e5FTQYFTQY5d",
      },
      {
        name: "ความลับระบบเทรด : Trade Your Way to Financial Freedom",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/935/9786169352884L.jpg?h=d82b4ddac13d5bdcca91f36ca5877c79",
        link_se_ed:
          "https://m.se-ed.com/Detail/%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%A5%E0%B8%B1%E0%B8%9A%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E0%B9%80%E0%B8%97%E0%B8%A3%E0%B8%94-Trade-Your-Way-to-Financial-Freedom/9786169352884",
        link_shopee:
          "https://shopee.co.th/product/90314367/10879244312?gclid=CjwKCAjwyY6pBhA9EiwAMzmfwUutyHp13r9bid4u8fmMcf8tsFKHKOZrIbfupCIThFw8-88qbGSAFhoCdxkQAvD_BwE",
        link_lazada:
          "https://www.lazada.co.th/products/trade-your-way-to-financial-freedom-i3778098070-s14357489528.html?from_gmc=1&exlaz=d_1:mm_150050845_51350205_2010350205::12:20536633140!!!!!c!!14357489528!585350211&gclid=CjwKCAjwyY6pBhA9EiwAMzmfwaYlkY1m51AjK8w1vUGos4AUrwLZy81SXgog4szvmUbMuOQFPaRG0hoCR30QAvD_BwE",
      },
      {
        name: "แมงเม่าคลับ : แบ่งปันความรู้ในการเล่นหุ้น อย่างเป็นระบบ",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/922/9786169227601L.jpg?h=6a4d7afcb5a83621ce9a7631f1817fc6",
        link_se_ed: "https://m.se-ed.com/Product/Detail/9786169227601",
        link_shopee:
          "https://shopee.co.th/%E2%9C%85%E0%B8%9E%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%AA%E0%B9%88%E0%B8%87%E2%9C%85-%E0%B9%81%E0%B8%A1%E0%B8%87%E0%B9%80%E0%B8%A1%E0%B9%88%E0%B8%B2%E0%B8%84%E0%B8%A5%E0%B8%B1%E0%B8%9A-%E2%80%93-%E0%B9%81%E0%B8%9A%E0%B9%88%E0%B8%87%E0%B8%9B%E0%B8%B1%E0%B8%99%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%A3%E0%B8%B9%E0%B9%89%E0%B9%83%E0%B8%99%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%99%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99-%E2%80%9C%E0%B8%AD%E0%B8%A2%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E2%80%9D%E2%9A%A1%EF%B8%8F-i.10553472.17273171617?sp_atk=456334cb-3649-4ad3-bb68-327014e11cc4&xptdk=456334cb-3649-4ad3-bb68-327014e11cc4",
        link_lazada: "",
      },
      {
        name: "กลยุทธ์เก็งกำไรอย่างเซียนหุ้น",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/434/9786164342170L.jpg?h=c149cbf45dd97354f25dfc4a99703605",
        link_se_ed:
          "https://m.se-ed.com/Detail/%E0%B8%81%E0%B8%A5%E0%B8%A2%E0%B8%B8%E0%B8%97%E0%B8%98%E0%B9%8C%E0%B9%80%E0%B8%81%E0%B9%87%E0%B8%87%E0%B8%81%E0%B8%B3%E0%B9%84%E0%B8%A3%E0%B8%AD%E0%B8%A2%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B9%80%E0%B8%8B%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99/9786164342170",
        link_shopee:
          "https://shopee.co.th/product/22041360/23367751920?gclid=CjwKCAjwyY6pBhA9EiwAMzmfwYCrHaZ3r5S0LpLu-_ED2xfoyPsD3N20fTYdbn0Y0aBwAkWsjWQJdRoCri0QAvD_BwE",
        link_lazada:
          "https://lazada.co.th/products/how-to-trade-in-stocks-i4358861423-s17380144378.html?from_gmc=1&exlaz=d_1:mm_150050845_51350205_2010350205::12:19668221003!!!!!c!!17380144378!5088171138&gclid=CjwKCAjwyY6pBhA9EiwAMzmfwV-9Ojx-rYMtKUbzo1E1gyNDcDImlOcaCDH9AG8HAUeH1OOayuTAaRoCVi8QAvD_BwE",
      },
      {
        name: "ผมทำเงิน 2 ล้านในตลาดหุ้นได้อย่างไร : How I Made $2,000,000 in the Stock Market",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/922/9786169226147L.jpg?h=8de313807c25edcee67efa7736f2af26",
        link_se_ed:
          "https://m.se-ed.com/Detail/%E0%B8%9C%E0%B8%A1%E0%B8%97%E0%B8%B3%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99-2-%E0%B8%A5%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B9%83%E0%B8%99%E0%B8%95%E0%B8%A5%E0%B8%B2%E0%B8%94%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B9%84%E0%B8%94%E0%B9%89%E0%B8%AD%E0%B8%A2%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B9%84%E0%B8%A3-How-I-Made-2-000-000-in-the-Stock-Market/9786169226147",
        link_shopee:
          "https://shopee.co.th/%E0%B8%9C%E0%B8%A1%E0%B8%97%E0%B8%B3%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99-2-%E0%B8%A5%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B9%83%E0%B8%99%E0%B8%95%E0%B8%A5%E0%B8%B2%E0%B8%94%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B9%84%E0%B8%94%E0%B9%89%E0%B8%AD%E0%B8%A2%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B9%84%E0%B8%A3-How-I-Made-2-000-000-in-the-Stock-Market-i.60079285.7510705323",
        link_lazada:
          "https://www.lazada.co.th/products/2-how-i-made-2000000-in-the-stock-market-i618830136-s1177944732.html?spm=a2o4m.tm80167383.2074280300.1.745bmsDzmsDzos.745bmsDzmsDzos",
      },
      {
        name: "พ่อมดตลาดหุ้น เล่ม 1 : The New Market Wizards",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/775/9786167752754L.jpg?h=206c6db05a5d2023345f17b0ad85a21d",
        link_se_ed:
          "https://m.se-ed.com/Detail/%E0%B8%9E%E0%B9%88%E0%B8%AD%E0%B8%A1%E0%B8%94%E0%B8%95%E0%B8%A5%E0%B8%B2%E0%B8%94%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99-%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%A1-1-The-New-Market-Wizards/9786167752754",
        link_shopee:
          "https://shopee.co.th/product/75143731/22945896249?gclid=CjwKCAjwyY6pBhA9EiwAMzmfwWaYYzOiBZnQy7CuBXRSdLzeTi9AU-84hGwwWQe9eUE5Wctl8IO-LxoCAGQQAvD_BwE",
        link_lazada:
          "https://www.lazada.co.th/products/1-the-new-market-wizards-i4540542719-s18478508199.html?from_gmc=1&exlaz=d_1:mm_150050845_51350205_2010350205::12:19668221003!!!!!c!!18478508199!138911217&gclid=CjwKCAjwyY6pBhA9EiwAMzmfwRnUo8ah9rHKPGjgg_x0JEnTB3uCDit3u8gzFWjLP33SuWy3-vwFABoCJB8QAvD_BwE",
      },
      {
        name: "พ่อมดตลาดหุ้น เล่ม 2 : The New Market Wizards",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/775/9786167752761L.jpg?h=7d8a76f2d265af85393314188cd49b13",
        link_se_ed:
          "https://m.se-ed.com/Detail/%E0%B8%9E%E0%B9%88%E0%B8%AD%E0%B8%A1%E0%B8%94%E0%B8%95%E0%B8%A5%E0%B8%B2%E0%B8%94%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99-%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%A1-2-The-New-Market-Wizards/9786167752761",
        link_shopee:
          "https://shopee.co.th/product/371246957/15497093047?gclid=CjwKCAjwyY6pBhA9EiwAMzmfwR_SSw71NV8BvUDAuu3MIdW0bEfdqqE509FknyR1hMyrRfqoMd5C1hoC9fMQAvD_BwE",
        link_lazada:
          "https://www.lazada.co.th/products/2-the-new-market-wizards-i4540890318-s18478963980.html?from_gmc=1&exlaz=d_1:mm_150050845_51350205_2010350205::12:19668221003!!!!!c!!18478963980!138911217&gclid=CjwKCAjwyY6pBhA9EiwAMzmfwVi8cNT4izDqgyCi8MG9nEvHBklib29huJSYM2XRamZZqjo_CGJiIxoCjnMQAvD_BwE",
      },
      {
        name: "เซียนหุ้นยังรู้พลั้ง",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/826/9786168266267L.jpg?h=97333307c67392a10172ad0ecc5138a2",
        link_se_ed:
          "https://m.se-ed.com/Detail/%E0%B9%80%E0%B8%8B%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B8%A2%E0%B8%B1%E0%B8%87%E0%B8%A3%E0%B8%B9%E0%B9%89%E0%B8%9E%E0%B8%A5%E0%B8%B1%E0%B9%89%E0%B8%87/9786168266267",
        link_shopee:
          "https://shopee.co.th/L6WGNJ6W%E0%B8%A5%E0%B8%9445%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%84%E0%B8%A3%E0%B8%9A300%F0%9F%94%A5-Big-Mistakes-%E0%B9%80%E0%B8%8B%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B8%A2%E0%B8%B1%E0%B8%87%E0%B8%A3%E0%B8%B9%E0%B9%89%E0%B8%9E%E0%B8%A5%E0%B8%B1%E0%B9%89%E0%B8%87-%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%95%E0%B8%B1%E0%B8%94%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B9%83%E0%B8%88%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%9C%E0%B8%B4%E0%B8%94%E0%B8%9E%E0%B8%A5%E0%B8%B2%E0%B8%94%E0%B8%82%E0%B8%AD%E0%B8%87-16-%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%A5%E0%B8%87%E0%B8%97%E0%B8%B8%E0%B8%99%E0%B8%8A%E0%B8%B1%E0%B9%89%E0%B8%99%E0%B9%80%E0%B8%8B%E0%B8%B5%E0%B8%A2%E0%B8%99-i.389055116.10287024252?sp_atk=d951767d-8447-4bf7-a9a1-50425555d204&xptdk=d951767d-8447-4bf7-a9a1-50425555d204",
        link_lazada:
          "https://www.lazada.co.th/products/-i4868098332-s20354381437.html?c=&channelLpJumpArgs=&clickTrackInfo=query%253A%2525E0%2525B9%252580%2525E0%2525B8%25258B%2525E0%2525B8%2525B5%2525E0%2525B8%2525A2%2525E0%2525B8%252599%2525E0%2525B8%2525AB%2525E0%2525B8%2525B8%2525E0%2525B9%252589%2525E0%2525B8%252599%2525E0%2525B8%2525A2%2525E0%2525B8%2525B1%2525E0%2525B8%252587%2525E0%2525B8%2525A3%2525E0%2525B8%2525B9%2525E0%2525B9%252589%2525E0%2525B8%25259E%2525E0%2525B8%2525A5%2525E0%2525B8%2525B1%2525E0%2525B9%252589%2525E0%2525B8%252587%253Bnid%253A4868098332%253Bsrc%253ALazadaMainSrp%253Brn%253A7b34e81f4f779d42283152870f58fc9a%253Bregion%253Ath%253Bsku%253A4868098332_TH%253Bprice%253A272%253Bclient%253Adesktop%253Bsupplier_id%253A100431568141%253Bpromotion_biz%253A%253Basc_category_id%253A6913%253Bitem_id%253A4868098332%253Bsku_id%253A20354381437%253Bshop_id%253A4362514&fastshipping=0&freeshipping=0&fs_ab=2&fuse_fs=&lang=th&location=%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99&price=272&priceCompare=skuId%3A20354381437%3Bsource%3Alazada-search-voucher%3Bsn%3A7b34e81f4f779d42283152870f58fc9a%3BoriginPrice%3A27200%3BdisplayPrice%3A27200%3BsinglePromotionId%3A-1%3BsingleToolCode%3AmockedSalePrice%3BvoucherPricePlugin%3A0%3Btimestamp%3A1696849840652&ratingscore=0&request_id=7b34e81f4f779d42283152870f58fc9a&review=&sale=0&search=1&source=search&spm=a2o4m.searchlist.list.i40.41bdcf3fUkaINs&stock=1",
      },
      {
        name: "เข้าใจให้ลึกซึ้ง 3 แผนการเทรด บริหารเงิน (Money Management) บริหารผลขาดทุน (Stop Loss) บริหารกำไร (Take Profit)",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/830/9786168302064L.jpg?h=45602352c5dc9627376d89458d2099af",
        link_se_ed:
          "https://m.se-ed.com/Detail/%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B9%83%E0%B8%88%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%A5%E0%B8%B6%E0%B8%81%E0%B8%8B%E0%B8%B6%E0%B9%89%E0%B8%87-3-%E0%B9%81%E0%B8%9C%E0%B8%99%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%97%E0%B8%A3%E0%B8%94-%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99-(Money-Management)-%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B8%9C%E0%B8%A5%E0%B8%82%E0%B8%B2%E0%B8%94%E0%B8%97%E0%B8%B8%E0%B8%99-(Stop-Loss)-%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%B3%E0%B9%84%E0%B8%A3-(Take-Profit)/9786168302064",
        link_shopee:
          "https://shopee.co.th/(%E0%B8%9E%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%AA%E0%B9%88%E0%B8%87)-%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B9%83%E0%B8%88%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%A5%E0%B8%B6%E0%B8%81%E0%B8%8B%E0%B8%B6%E0%B9%89%E0%B8%87-3-%E0%B9%81%E0%B8%9C%E0%B8%99%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%97%E0%B8%A3%E0%B8%94-%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99-%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B8%9C%E0%B8%A5%E0%B8%82%E0%B8%B2%E0%B8%94%E0%B8%97%E0%B8%B8%E0%B8%99-%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%B3%E0%B9%84%E0%B8%A3-Daddy-Trader-%E0%B8%9E%E0%B8%A3%E0%B8%B2%E0%B8%A7-i.43181059.10758357013?sp_atk=56857e19-534d-44ad-a329-e23a0cc18d10&xptdk=56857e19-534d-44ad-a329-e23a0cc18d10",
        link_lazada:
          "https://www.lazada.co.th/products/3-money-management-stop-loss-take-profit-i2832214620-s10333002226.html?spm=a2o4m.tm80167383.2074280300.1.228amo41mo413X.228amo41mo413X",
      },
      {
        name: "จากหนุ่มโรงงานสู่เทรดเดอร์มืออาชีพ",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/927/9786169273189L.jpg?h=9975e9b4367db65dd49e606aa279b4e1",
        link_se_ed:
          "https://m.se-ed.com/Detail/%E0%B8%88%E0%B8%B2%E0%B8%81%E0%B8%AB%E0%B8%99%E0%B8%B8%E0%B9%88%E0%B8%A1%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B8%AA%E0%B8%B9%E0%B9%88%E0%B9%80%E0%B8%97%E0%B8%A3%E0%B8%94%E0%B9%80%E0%B8%94%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%AD%E0%B8%B2%E0%B8%8A%E0%B8%B5%E0%B8%9E/9786169273189",
        link_shopee:
          "https://shopee.co.th/%E0%B8%88%E0%B8%B2%E0%B8%81%E0%B8%AB%E0%B8%99%E0%B8%B8%E0%B9%88%E0%B8%A1%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B8%AA%E0%B8%B9%E0%B9%88%E0%B9%80%E0%B8%97%E0%B8%A3%E0%B8%94%E0%B9%80%E0%B8%94%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%AD%E0%B8%B2%E0%B8%8A%E0%B8%B5%E0%B8%9E-%F0%9F%9A%A8%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B7%E0%B8%AD%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88-%E0%B8%A1%E0%B8%B7%E0%B8%AD1-%F0%9F%9A%A8-i.171342684.10717727588",
        link_lazada:
          "https://www.lazada.co.th/products/1-60-70-i2148358474-s7175094964.html?spm=a2o4m.tm80167383.2074280300.1.790ehCokhCokJl.790ehCokhCokJl",
      },
      {
        name: "พ่อรวยสอนลูก",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/081/9786160814077L.jpg?h=3cf4fb0b3b6d5c892e33f462ff5d709d",
        link_se_ed:
          "https://m.se-ed.com/Detail/%E0%B8%9E%E0%B9%88%E0%B8%AD%E0%B8%A3%E0%B8%A7%E0%B8%A2%E0%B8%AA%E0%B8%AD%E0%B8%99%E0%B8%A5%E0%B8%B9%E0%B8%81-Rich-Dad-Poor-Dad/9786160814077",
      },

      {
        name: "Money 101",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/085/9786160850396L.jpg?h=c8564d753dd8d3b22aee7df8dfc0817f",
        link_se_ed:
          "https://m.se-ed.com/Detail/Money-101-(%E0%B8%9B%E0%B8%81%E0%B8%AD%E0%B9%88%E0%B8%AD%E0%B8%99)/9786160850396",
      },
      {
        name: "เศรษฐีชี้ทางรวย ฉบับปกแข็ง ",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/084/9786160849000L.jpg?h=9837c1366798bc48640e998be2698082",
        link_se_ed:
          "https://m.se-ed.com/Detail/%E0%B9%80%E0%B8%A8%E0%B8%A3%E0%B8%A9%E0%B8%90%E0%B8%B5%E0%B8%8A%E0%B8%B5%E0%B9%89%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%A3%E0%B8%A7%E0%B8%A2-%E0%B8%89%E0%B8%9A%E0%B8%B1%E0%B8%9A%E0%B8%9B%E0%B8%81%E0%B9%81%E0%B8%82%E0%B9%87%E0%B8%87-(The-Richest-Man-in-Babylon-Millionaire-s-Edition)/9786160849000",
      },
      {
        name: "บริหารเงินล้านหลังเกษียณ ให้มีเงินใช้ทุกเดือน",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/578/9786165789226L.jpg?h=9aed9d07ebd2d5209bfa26122c163d79",
        link_se_ed:
          "https://m.se-ed.com/Detail/%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99%E0%B8%A5%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B9%80%E0%B8%81%E0%B8%A9%E0%B8%B5%E0%B8%A2%E0%B8%93-%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%A1%E0%B8%B5%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B8%97%E0%B8%B8%E0%B8%81%E0%B9%80%E0%B8%94%E0%B8%B7%E0%B8%AD%E0%B8%99/9786165789226",
      },
      {
        name: "คิดแล้ว..ต้องรวย : Think and Grow Rich",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/603/9786166039238L.jpg?h=eb9d05b4bd8ce4b5b0e4ef119f5bad62",
        link_se_ed:
          "https://m.se-ed.com/Detail/%E0%B8%84%E0%B8%B4%E0%B8%94%E0%B9%81%E0%B8%A5%E0%B9%89%E0%B8%A7-%E0%B8%95%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%A3%E0%B8%A7%E0%B8%A2-Think-and-Grow-Rich/9786166039238",
      },
      {
        name: "เงิน มา ง่าย ๆ",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/578/9786165789370L.jpg?h=d5440c8a9c9196988b2da0ccea7058bf",
        link_se_ed:
          "https://m.se-ed.com/Detail/%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99-%E0%B8%A1%E0%B8%B2-%E0%B8%87%E0%B9%88%E0%B8%B2%E0%B8%A2-%E0%B9%86/9786165789370",
      },
      {
        name: "วิธีสร้างกำไรในตลาดหุ้น : How to Profit in the Stock Market",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/434/9786164343580L.jpg?h=a955b214ce296b14da95f6b649bb5c22",
        link_se_ed:
          "https://m.se-ed.com/Detail/%E0%B8%A7%E0%B8%B4%E0%B8%98%E0%B8%B5%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%81%E0%B8%B3%E0%B9%84%E0%B8%A3%E0%B9%83%E0%B8%99%E0%B8%95%E0%B8%A5%E0%B8%B2%E0%B8%94%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99-How-to-Profit-in-the-Stock-Market/9786164343580",
      },
      {
        name: "ศาสตร์แห่งบัฟเฟตต์ : Buffettology",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/601/9786166011432L.jpg?h=a93d4f37d38e5482889c91b598381ee2",
        link_se_ed:
          "https://m.se-ed.com/Detail/%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C%E0%B9%81%E0%B8%AB%E0%B9%88%E0%B8%87%E0%B8%9A%E0%B8%B1%E0%B8%9F%E0%B9%80%E0%B8%9F%E0%B8%95%E0%B8%95%E0%B9%8C-Buffettology/9786166011432",
      },
      {
        name: "บล็อกเชนเข้าใจง่าย",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/818/9786168187586L.jpg?h=6b78d5b030cfdbc753b94cb30d72d209",
        link_se_ed:
          "https://m.se-ed.com/Detail/%E0%B8%9A%E0%B8%A5%E0%B9%87%E0%B8%AD%E0%B8%81%E0%B9%80%E0%B8%8A%E0%B8%99%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B9%83%E0%B8%88%E0%B8%87%E0%B9%88%E0%B8%B2%E0%B8%A2/9786168187586",
      },
      {
        name: "7 เคล็ดลับการลงทุนแบบวอร์เรน บัฟเฟ็ตต์ : 7 Secrets to Investing Like Warren Buffett",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/388/9786163886743L.jpg?h=d905f31079fbaf69b6d25ed969854180",
        link_se_ed:
          "https://m.se-ed.com/Detail/7-%E0%B9%80%E0%B8%84%E0%B8%A5%E0%B9%87%E0%B8%94%E0%B8%A5%E0%B8%B1%E0%B8%9A%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A5%E0%B8%87%E0%B8%97%E0%B8%B8%E0%B8%99%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%A7%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%80%E0%B8%A3%E0%B8%99-%E0%B8%9A%E0%B8%B1%E0%B8%9F%E0%B9%80%E0%B8%9F%E0%B9%87%E0%B8%95%E0%B8%95%E0%B9%8C-7-Secrets-to-Investing-Like-Warren-Buffett/9786163886743",
      },
      {
        name: "7 ลูกค้าที่สร้างเงินล้านให้คุณ",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/578/9786165789233L.jpg?h=a59b6974ad677c96b16c44e958ef5c06",
        link_se_ed:
          "https://m.se-ed.com/Detail/7-%E0%B8%A5%E0%B8%B9%E0%B8%81%E0%B8%84%E0%B9%89%E0%B8%B2%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99%E0%B8%A5%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%84%E0%B8%B8%E0%B8%93/9786165789233",
      },
      {
        name: "รวยและรอดด้วยกราฟเทคนิค (New Edition)",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/430/9786164304420L.jpg?h=8e341d42e32715410ba6398aa9e9cf25",
        link_se_ed:
          "https://m.se-ed.com/Detail/%E0%B8%A3%E0%B8%A7%E0%B8%A2%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%A3%E0%B8%AD%E0%B8%94%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%81%E0%B8%A3%E0%B8%B2%E0%B8%9F%E0%B9%80%E0%B8%97%E0%B8%84%E0%B8%99%E0%B8%B4%E0%B8%84-(New-Edition)/9786164304420",
      },
      {
        name: "The Sniper Trade วิธีเทรดแบบ Sniper ทำกำไรหลักล้าน",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/937/9786169378372L.jpg?h=7135d053e0099b3441706a1f85fd6a09",
        link_se_ed:
          "https://m.se-ed.com/Detail/The-Sniper-Trade-%E0%B8%A7%E0%B8%B4%E0%B8%98%E0%B8%B5%E0%B9%80%E0%B8%97%E0%B8%A3%E0%B8%94%E0%B9%81%E0%B8%9A%E0%B8%9A-Sniper-%E0%B8%97%E0%B8%B3%E0%B8%81%E0%B8%B3%E0%B9%84%E0%B8%A3%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%81%E0%B8%A5%E0%B9%89%E0%B8%B2%E0%B8%99/9786169378372",
      },
      {
        name: "คู่มือลงทุนคริปโทเคอร์เรนซีฉบับครบครัน : Cryptocurrency Investing For Dummies",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/449/9786164494190L.jpg?h=33e8ce55eaab64cf3a0411025d4982fe",
        link_se_ed:
          "https://m.se-ed.com/Detail/%E0%B8%84%E0%B8%B9%E0%B9%88%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%A5%E0%B8%87%E0%B8%97%E0%B8%B8%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%B4%E0%B8%9B%E0%B9%82%E0%B8%97%E0%B9%80%E0%B8%84%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%80%E0%B8%A3%E0%B8%99%E0%B8%8B%E0%B8%B5%E0%B8%89%E0%B8%9A%E0%B8%B1%E0%B8%9A%E0%B8%84%E0%B8%A3%E0%B8%9A%E0%B8%84%E0%B8%A3%E0%B8%B1%E0%B8%99-Cryptocurrency-Investing-For-Dummies/9786164494190",
      },
      {
        name: "พิชิตตลาด Forex ด้วยกราฟเปล่า",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/578/9786165789035L.jpg?h=6780912578915f1e6273287f8bdd1952",
        link_se_ed:
          "https://m.se-ed.com/Detail/%E0%B8%9E%E0%B8%B4%E0%B8%8A%E0%B8%B4%E0%B8%95%E0%B8%95%E0%B8%A5%E0%B8%B2%E0%B8%94-Forex-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%81%E0%B8%A3%E0%B8%B2%E0%B8%9F%E0%B9%80%E0%B8%9B%E0%B8%A5%E0%B9%88%E0%B8%B2/9786165789035",
      },
      {
        name: "Swing Trade Game กลยุทธ์ทำกำไรหุ้นด้วย Swing Trade",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/578/9786165789134L.jpg?h=8320162558071135c5c8ebf382100081",
        link_se_ed:
          "https://m.se-ed.com/Detail/Swing-Trade-Game-%E0%B8%81%E0%B8%A5%E0%B8%A2%E0%B8%B8%E0%B8%97%E0%B8%98%E0%B9%8C%E0%B8%97%E0%B8%B3%E0%B8%81%E0%B8%B3%E0%B9%84%E0%B8%A3%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-Swing-Trade/9786165789134",
      },
      {
        name: "อัจฉริยะวิธีสร้างตัวให้รวยสิบล้าน",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/885973/541/8859735412693L.jpg?h=1f3f4985e149abc9accd45b50f868566",
        link_se_ed:
          "https://m.se-ed.com/Detail/%E0%B8%AD%E0%B8%B1%E0%B8%88%E0%B8%89%E0%B8%A3%E0%B8%B4%E0%B8%A2%E0%B8%B0%E0%B8%A7%E0%B8%B4%E0%B8%98%E0%B8%B5%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%A3%E0%B8%A7%E0%B8%A2%E0%B8%AA%E0%B8%B4%E0%B8%9A%E0%B8%A5%E0%B9%89%E0%B8%B2%E0%B8%99/8859735412693",
      },
      {
        name: "คนจะรวย ช่วยไม่ได้",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/885973/541/8859735412785L.jpg?h=4d4d853ef7fcd7086e67ba4e09f31baa",
        link_se_ed:
          "https://m.se-ed.com/Detail/%E0%B8%84%E0%B8%99%E0%B8%88%E0%B8%B0%E0%B8%A3%E0%B8%A7%E0%B8%A2-%E0%B8%8A%E0%B9%88%E0%B8%A7%E0%B8%A2%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B9%84%E0%B8%94%E0%B9%89/8859735412785",
      },
      {
        name: "Mindset Secrets for Winning : ถอดความคิดเทรดเดอร์ผู้ชนะ",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/942/9786169420002L.jpg?h=1b88a424e75bcf40db69080b247662d5",
        link_se_ed:
          "https://m.se-ed.com/Detail/Mindset-Secrets-for-Winning-%E0%B8%96%E0%B8%AD%E0%B8%94%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%84%E0%B8%B4%E0%B8%94%E0%B9%80%E0%B8%97%E0%B8%A3%E0%B8%94%E0%B9%80%E0%B8%94%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%8A%E0%B8%99%E0%B8%B0/9786169420002",
      },
      {
        name: "เพาะหุ้นเป็น เห็นผลยั่งยืน",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/601/9786166010145L.jpg?h=19557a7b167d2fc4505b7a7d0799b2be",
        link_se_ed:
          "https://m.se-ed.com/Detail/%E0%B9%80%E0%B8%9E%E0%B8%B2%E0%B8%B0%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99-%E0%B9%80%E0%B8%AB%E0%B9%87%E0%B8%99%E0%B8%9C%E0%B8%A5%E0%B8%A2%E0%B8%B1%E0%B9%88%E0%B8%87%E0%B8%A2%E0%B8%B7%E0%B8%99/9786166010145",
      },
      {
        name: "Super Easy เล่นหุ้น Online ฉบับอ่านง่ายเป็นเร็ว",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/381/9786163813480L.jpg?h=22c83c1cb9f54466971d53e790ca964d",
        link_se_ed:
          "https://m.se-ed.com/Detail/Super-Easy-%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%99%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99-Online-%E0%B8%89%E0%B8%9A%E0%B8%B1%E0%B8%9A%E0%B8%AD%E0%B9%88%E0%B8%B2%E0%B8%99%E0%B8%87%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B9%80%E0%B8%A3%E0%B9%87%E0%B8%A7/9786163813480",
      },
      {
        name: "ลงทุนหุ้นเติบโต 101 Investing in Growth Stock 101",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/578/9786165788540L.jpg?h=2761982f2b95e70140958e13c4d74339",
        link_se_ed:
          "https://m.se-ed.com/Detail/%E0%B8%A5%E0%B8%87%E0%B8%97%E0%B8%B8%E0%B8%99%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B9%80%E0%B8%95%E0%B8%B4%E0%B8%9A%E0%B9%82%E0%B8%95-101-Investing-in-Growth-Stock-101/9786165788540",
      },
      {
        name: "เปลี่ยนหนี้เป็นกลยุทธ์สร้างเงินล้าน",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/578/9786165788267L.jpg?h=aa27f6a526bf81cff7b46ce34fc8f554",
        link_se_ed:
          "https://m.se-ed.com/Detail/%E0%B9%80%E0%B8%9B%E0%B8%A5%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%99%E0%B8%AB%E0%B8%99%E0%B8%B5%E0%B9%89%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B8%81%E0%B8%A5%E0%B8%A2%E0%B8%B8%E0%B8%97%E0%B8%98%E0%B9%8C%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99%E0%B8%A5%E0%B9%89%E0%B8%B2%E0%B8%99/9786165788267",
      },
      {
        name: "เทรด Forex ให้ถูกวิธี ทำรายได้เพิ่มเป็น 100 เท่า 100 วิธีชนะ Forex ด้วย Graph และ Mind Mapping (ปรับปรุงใหม่)",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/275/9786162759987L.jpg?h=cccc6906f181ac495828d011e8d810a0",
        link_se_ed:
          "https://m.se-ed.com/Detail/%E0%B9%80%E0%B8%97%E0%B8%A3%E0%B8%94-Forex-%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%96%E0%B8%B9%E0%B8%81%E0%B8%A7%E0%B8%B4%E0%B8%98%E0%B8%B5-%E0%B8%97%E0%B8%B3%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B9%84%E0%B8%94%E0%B9%89%E0%B9%80%E0%B8%9E%E0%B8%B4%E0%B9%88%E0%B8%A1%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99-100-%E0%B9%80%E0%B8%97%E0%B9%88%E0%B8%B2-100-%E0%B8%A7%E0%B8%B4%E0%B8%98%E0%B8%B5%E0%B8%8A%E0%B8%99%E0%B8%B0-Forex-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-Graph-%E0%B9%81%E0%B8%A5%E0%B8%B0-Mind-Mapping-(%E0%B8%9B%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%9B%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88)/9786162759987",
      },
      {
        name: "Forex Science เพื่อประสบการณ์ที่ดีในการเทรด Forex ของคุณ",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/210/9786162106170L.jpg?h=d7df27e63eba9246464eb2f9a04d857a",
        link_se_ed:
          "https://m.se-ed.com/Detail/Forex-Science-%E0%B9%80%E0%B8%9E%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%AA%E0%B8%9A%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%93%E0%B9%8C%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%94%E0%B8%B5%E0%B9%83%E0%B8%99%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%97%E0%B8%A3%E0%B8%94-Forex-%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%84%E0%B8%B8%E0%B8%93/9786162106170",
      },
      {
        name: "งบการเงินหุ้นที่คุณต้องอ่าน",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/937/9786169376569L.jpg?h=fe31944625bdbb5b5408ce4509f73c84",
        link_se_ed:
          "https://m.se-ed.com/Detail/%E0%B8%87%E0%B8%9A%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%84%E0%B8%B8%E0%B8%93%E0%B8%95%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%AD%E0%B9%88%E0%B8%B2%E0%B8%99/9786169376569",
      },
      {
        name: "จัดการเงินดี เงินก็ไม่หนี ไปหาคนอื่น",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/941/9786169414216L.jpg?h=5a1368f598c4176a2755c99ceebd0b3e",
        link_se_ed:
          "https://m.se-ed.com/Detail/%E0%B8%88%E0%B8%B1%E0%B8%94%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99%E0%B8%94%E0%B8%B5-%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99%E0%B8%81%E0%B9%87%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B8%AB%E0%B8%99%E0%B8%B5-%E0%B9%84%E0%B8%9B%E0%B8%AB%E0%B8%B2%E0%B8%84%E0%B8%99%E0%B8%AD%E0%B8%B7%E0%B9%88%E0%B8%99/9786169414216",
      },
      {
        name: "The Laws of Wealth มั่งคั่งด้วยกฎแห่งการลงทุน",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/818/9786168187579L.jpg?h=a56cf491cf9577aee21c78ee1431c667",
        link_se_ed:
          "https://m.se-ed.com/Detail/The-Laws-of-Wealth-%E0%B8%A1%E0%B8%B1%E0%B9%88%E0%B8%87%E0%B8%84%E0%B8%B1%E0%B9%88%E0%B8%87%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%81%E0%B8%8E%E0%B9%81%E0%B8%AB%E0%B9%88%E0%B8%87%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A5%E0%B8%87%E0%B8%97%E0%B8%B8%E0%B8%99/9786168187579",
      },
      {
        name: "Money Mastery มั่งคั่งทั้งชีวิต",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/822/9786168224434L.jpg?h=943bec0d4115035c515da60396efe0e1",
        link_se_ed:
          "https://m.se-ed.com/Detail/Money-Mastery-%E0%B8%A1%E0%B8%B1%E0%B9%88%E0%B8%87%E0%B8%84%E0%B8%B1%E0%B9%88%E0%B8%87%E0%B8%97%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B8%8A%E0%B8%B5%E0%B8%A7%E0%B8%B4%E0%B8%95/9786168224434",
      },
      {
        name: "เลือกที่จะรวย",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/084/9786160845767L.jpg?h=7a8f975a2bf18d87637a6d0125132871",
        link_se_ed:
          "https://m.se-ed.com/Detail/%E0%B9%80%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%81%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%88%E0%B8%B0%E0%B8%A3%E0%B8%A7%E0%B8%A2/9786160845767",
      },
      {
        name: "ไล่ล่าหา หุ้นเด็ด",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/578/9786165787871L.jpg?h=b18421aff2068916183a26a1664a53fa",
        link_se_ed:
          "https://m.se-ed.com/Detail/%E0%B9%84%E0%B8%A5%E0%B9%88%E0%B8%A5%E0%B9%88%E0%B8%B2%E0%B8%AB%E0%B8%B2-%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B9%80%E0%B8%94%E0%B9%87%E0%B8%94/9786165787871",
      },
      {
        name: "มือใหม่เข้าใจการเงิน : Money for Beginners",
        images:
          "https://images-se-ed.com/ws/Storage/Originals/978616/818/9786168187531L.jpg?h=335c7425236dba2249fe1495d24eee18",
        link_se_ed:
          "https://m.se-ed.com/Detail/%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B9%83%E0%B8%88%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99-Money-for-Beginners/9786168187531",
      },
    ],

    // อันนี้คือ ส่วน ที่ เอามาแสดง กล่งอ SET,Youtube,Tiktok,Facebook
    Ccourse: [
      {
        name: "SET e learning",
        images:
          "https://www.thebangkokinsight.com/wp-content/uploads/2018/12/set-2.jpg",
        Link: "https://elearning.set.or.th/",
        description:
          "SET e-Learning แหล่งความรู้การเงินการลงทุนแบบดิจิทัล ที่ผสมผสานเทคโนโลยีมัลติมีเดียและเนื้อหาบทเรียน เหมาะสำหรับนิสิต นักศึกษา และนักลงทุนที่ต้องการพัฒนาตนเองไปสู่นักลงทุนมืออาชีพแบบ Step by Step",
        page: "/CourseSET",
      },
      {
        name: "Mahidol University Extension",
        images:
          "data:image/png;base64,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",
        Link: "https://mux.mahidol.ac.th/courses",
        description:
          "มหาวิทยาลัยมหิดลเปิดแหล่งเรียนรู้ MUx ที่ตอบสนองต่อความต้องการของผู้เรียนให้สามารถเข้าถึงแหล่งข้อมูลการเรียนรู้ได้ทุกที่ ทุกเวลา",
          page:"/Mahidol"
      },
    
      {
        name: " Space By CBS",
        images:
          "https://space.cbs.chula.ac.th/media/config/image/CBS_logo_SPACE-03.png",
        Link: "https://space.cbs.chula.ac.th/",
        description:
          " ความรู้เกี่ยวกับธุรกิจ ทั้งด้านการตลาด การบัญชี การเงิน และสถิติ ทางออนไลน์  โดยไม่มีค่าใช้จ่ายใด ๆ",
          page:"/SpaceByCBS"
      },
      {
        name: " ThaiMooc",
        images:
          "https://online.pubhtml5.com/futx/xmul/files/large/1.jpg?1594364360",
        Link: "https://thaimooc.org/",
        description:
          "‘Thai MOOC’ แพลตฟอร์มการศึกษาออนไลน์ พร้อมให้คนไทยทุกคนเรียนรู้ได้ตลอดชีวิต ฟรี!  มีหลักสูตรมากกว่า 2,700 หลักสูตร มีผู้เรียนมากกว่า 35 ล้านคน ",
          page:"/ThaiMooc"
      },
      {
        name: "CHULA MOOC",
        images:
          "https://mooc.chula.ac.th/img/upload/%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%9B%E0%B8%814.png",
        Link: "https://mooc.chula.ac.th/home",
        description:
          "เรียนกับคณาจารย์จุฬาลงกรณ์มหาวิทยาลัย เรียนฟรี เรียนได้ทุกที่ ทุกเวลา พร้อมรับ Certificate",
          page:"/CHULAMOOC"
      },
      {
        name: "PSUMOOC",
        images:
          "https://computing.psu.ac.th/th/wp-content/uploads/2021/06/PSU-MOOC15-6-64-cover.jpg",
        Link: "https://mooc.psu.ac.th/business-management/",
        description:
          " เป็นแพลตฟอร์มเรียนออนไลน์แบบไม่เสียค่าใช้จ่าย ซึ่งถูกจัดขึ้นโดยมหาวิทยาลัยสงขลานครินทร์",
          page:"/PSUMOOC"
      },
    ],
    // อันนี้คือ ส่วน ของ ช่อง youtube ทั้งหมด
    Youtube: [
      {
        name: "THE MONEY COACH ",
        images:
          "https://yt3.googleusercontent.com/RS_LpE4e_S0C4A4HURMgNYn-VkzTxaR5Er7p7wSKEhoyb25VQtZ5toSAymEydmjUpJM8gpGW3w=s176-c-k-c0x00ffffff-no-rj",
        link: "https://www.youtube.com/@THEMONEYCOACHTH",
      },
      {
        name: "Paul Pattarapon พอล ภัทรพล",
        images:
          "https://yt3.googleusercontent.com/ytc/APkrFKYjPZw4Nd-aQcYU2ZfiGu0CaqMgHA4RQhOz_JML2g=s176-c-k-c0x00ffffff-no-rj",
        link: "https://www.youtube.com/@PaulPattarapon",
      },
      {
        name: "THE MONEY GAME by Tanin Kunkamedee ",
        images:
          "https://yt3.googleusercontent.com/ytc/APkrFKartMr4jQGbyBiouBk3KxeokEuSxf_WJ1en24znaFU=s176-c-k-c0x00ffffff-no-rj",
        link: "https://www.youtube.com/@THEMONEYGAMEbyTaninKunkamedee",
      },
      {
        name: "THE STANDARD WEALTH ",
        images:
          "https://yt3.googleusercontent.com/z4n2jSYsCBoStNTG9XNOyI0eQIT0OnWbvoAE0Etdqkz5-9hfEEsWYH8fuVNAQ9dGMDTMIENeKeE=s176-c-k-c0x00ffffff-no-rj",
        link: "https://www.youtube.com/@TheStandardWealth",
      },
      {
        name: "THE STANDARD PODCAST ",
        images:
          "https://yt3.googleusercontent.com/ytc/APkrFKZ6Z-V9zXpL4UvNvTwqeKsSnH7hThjnxXpizJ9t=s176-c-k-c0x00ffffff-no-rj",
        link: "https://www.youtube.com/playlist?list=PLUaBTRNM7hIUXgoq2Ggg11IQwgRZRN39T",
      },
      {
        name: "NANAKE555 ",
        images:
          "https://yt3.googleusercontent.com/zyhI0S4bqHAKe1WNsTvRpLRxKFnANS2JvUsE2xoDXs-tQgVekXSxc5Zi0Jz8P2PnVHhzxoxB=s176-c-k-c0x00ffffff-no-rj",
        link: "https://www.youtube.com/playlist?list=PLeL-QeEgyQmA-9R6jVFlOQ6i9AtzAajVE",
      },
      {
        name: "aomMONEY",
        images:
          "https://yt3.googleusercontent.com/5KbRXXLxELS2i5RXUWMctfzFuWPNXpsT8DA602EyTrNNA8Tbqd8zwAS9N3VBspN6uP3rdLI4Mw=s176-c-k-c0x00ffffff-no-rj",
        link: "https://www.youtube.com/@AommoneyTH",
      },
      {
        name: "Than Money Trick",
        images:
          "https://yt3.googleusercontent.com/Ipy3V-nZ-i7k7ApaCIZqEK7nWwWhI_7L-sJQu-o3o4esbdhiJtb-LHDoYGgNF5Sv1oa2UHafyg=s176-c-k-c0x00ffffff-no-rj",
        link: "https://www.youtube.com/@thanmoneytrick",
      },
      ,
      {
        name: "FINNOMENA",
        images:
          "https://yt3.googleusercontent.com/ytc/APkrFKbSLfEalyv0RRpac5bkA_X5AT8C_U_qMeKdiwayjQ=s176-c-k-c0x00ffffff-no-rj",
        link: "https://www.youtube.com/@FINNOMENA",
      },
      {
        name: "Wealth Me Up",
        images:
          "https://yt3.googleusercontent.com/P5buqjBsACpqJfW1kD6_i-NfdmzHGQ62YOCXRou6W5otwzC0lBJz7WLfiIBJdAcJOx9nj4UG=s176-c-k-c0x00ffffff-no-rj",
        link: "https://www.youtube.com/@wealthmeup",
      },
      {
        name: "Kim Property Live",
        images:
          "https://yt3.googleusercontent.com/ytc/APkrFKb05OCIKhlgIFlHPAHuDIIWIHP_q7UXapxtCY6K9ks=s176-c-k-c0x00ffffff-no-rj",
        link: "https://www.youtube.com/user/kimchatchawan",
      },
      {
        name: "ลงทุนศาสตร์ Investerest",
        images:
          "https://yt3.googleusercontent.com/ytc/APkrFKYmPQnbtWfkjU-N55v90cuROZSsoJhzPuLqgzEx=s176-c-k-c0x00ffffff-no-rj",
        link: "https://www.youtube.com/@investerest5198/videos",
      },
      {
        name: "NopPongsatorn ",
        images:
          "https://yt3.googleusercontent.com/ytc/APkrFKaXQiWtDP9868lykbct8QpXGpfKxKtU9-WO9DUU=s176-c-k-c0x00ffffff-no-rj",
        link: "https://www.youtube.com/channel/UCJIZQVifKydwChTBvJzRIkg",
      },
      {
        name: "Startyourway Official ",
        images:
          "https://yt3.googleusercontent.com/ytc/APkrFKYoI6bR0BMgyfNqKUNCvTHFyWWqDhtT6VazMPML=s176-c-k-c0x00ffffff-no-rj",
        link: "https://www.youtube.com/c/Startyourway/featured",
      },
      {
        name: "SET Thailand",
        images:
          "https://yt3.googleusercontent.com/ytc/APkrFKbrbzyNoG0VYMZLRAfTxclP8xNUpb3B3hIxFl785w=s176-c-k-c0x00ffffff-no-rj",
        link: "https://www.youtube.com/user/setgroupofficial",
      },
      {
        name: "Jitta Wealth",
        images:
          "https://yt3.googleusercontent.com/AxVOgs6rhej3xV-1Tc-BHk5OlhpOYX5LbCxfitPfUeWeV4feVoU4NOWNmT4nisy9CTjE1hPLLyI=s176-c-k-c0x00ffffff-no-rj",
        link: "https://www.youtube.com/@jittawealth",
      },
      {
        name: "ลงทุนกล้วยๆ - Bananas Investment",
        images:
          "https://yt3.googleusercontent.com/ytc/APkrFKYT1CLx7SsDfc1JhDR3kk9GenB8_EArLyQOE0Eg=s176-c-k-c0x00ffffff-no-rj",
        link: "https://www.youtube.com/@bananasinvestment",
      },
      {
        name: "ไดอารี่การเงิน - Money Diaries",
        images:
          "https://yt3.googleusercontent.com/ytc/APkrFKaBKbyroDC9OGVOvPK6n7J7157jhxxXz5lu-r7TbQ=s176-c-k-c0x00ffffff-no-rj",
        link: "https://www.youtube.com/@moneydiariesth",
      },
      {
        name: "Guru Living",
        images:
          "https://yt3.googleusercontent.com/JmWST_SPRjMBg8JlfcatXaCmELWHIb7IVaJ9Wc_xXhY7l7GIjGPNYOcJIyM2s7Sq53bPOZ2b0g=s176-c-k-c0x00ffffff-no-rj",
        link: "https://www.youtube.com/@guruliving",
      },
    ],
    // อันนี้คือ ส่วน ของ ช่อง Tiktok ทั้งหมด
    Tiktok: [
      {
        name: "themoneycoachth",
        images:"https://scontent.fbkk29-1.fna.fbcdn.net/v/t39.30808-6/278601508_7571224746250933_1395048062731050015_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=QoZdYota6jYAX8JBIib&_nc_ht=scontent.fbkk29-1.fna&oh=00_AfClI0Swnjb3ZTcipv2_chkwea3LMc6JUAnEVBw-xIDKlw&oe=652FE0C6",
        link: "https://www.tiktok.com/@themoneycoachth",
      },
      {
        name: "apex.wealth",
        images: "https://scontent.fbkk29-1.fna.fbcdn.net/v/t39.30808-6/353010499_118452174603712_7189275250112694362_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEx0wFKylqswa6yA6MvkAdyR4qBLcX0hQhHioEtxfSFCBwTvXreTp2tm0-igeOvQrOTwIN9idZp9ljatNNnLIww&_nc_ohc=MdHC4Y5DyS0AX8TZ9e3&_nc_oc=AQkiiGiaYU6CDTm9fYPW4VPdm7mjd2n7V32uuHfNrBfrPhQ4oOtWyBu17bGysSJxbtI&_nc_ht=scontent.fbkk29-1.fna&oh=00_AfAz7tY0APpppGFgw_-GS0MHHaE13GYR3W-G1n26sBcPHg&oe=652FC987",
        link: "https://www.tiktok.com/@apex.wealth",
      },
      {
        name: " investmentfrappe",
        images:"https://scontent.fbkk29-1.fna.fbcdn.net/v/t39.30808-6/361211770_673447241467850_5790332926629383185_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG4GeFhN7vuEm818iKOQ94lnZn8KLdSgiCdmfwot1KCIA6i8o-CDFCBfugUsW-sMq1TmuxQV4Yb1xYulvzWyhmA&_nc_ohc=uaVS47daZ6wAX_RniUr&_nc_ht=scontent.fbkk29-1.fna&oh=00_AfB8B2hMO3Crslhnqn5iyEz5vLvwrf8mf1aX0N5HBGMeog&oe=65310B0B",
        link: "https://www.tiktok.com/@investmentfrappe",
      },
      {
        name: "moneyduckth",
        images:"https://scontent.fbkk29-1.fna.fbcdn.net/v/t1.6435-9/186486225_261833572356226_2593471884870837336_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=be3454&_nc_ohc=-8ZF5_rxcWgAX9gmfq5&_nc_ht=scontent.fbkk29-1.fna&oh=00_AfD8RwwR3RzUnZ6-_oYPOxDER3U-sCmzcjZTcsizKZgy8A&oe=6552FEE9",
        link: "https://www.tiktok.com/@moneyduckth",
      },
      {
        name: "themoneygame_bytanin",
        images:
          "https://ugc.production.linktr.ee/CC3dQAIBTziC2s0DvtUn_5o2k7uCU2jO4qoNX?io=true&size=avatar-v1",
        link: "https://www.tiktok.com/@themoneygame_bytanin",
      },
      {
        name: "paulpattarapon",
        images:
          "https://ugc.production.linktr.ee/iZCtCIoIRUypL9RSRio9_tj90UCpFHP6zYqrw?io=true&size=avatar",
        link: "https://www.tiktok.com/@paulpattarapon",
      },
      {
        name: "money6pack",
        images:
          "https://obs.line-scdn.net/0hZgkfU396BUhWHyhVCKt6H2paCyUhMQMALn9LK3EeWC0sKkMbbntNKiNMXyh5K0ceaXgeLSMWCy0v?0",
        link: "https://www.tiktok.com/@money6pack",
      },
      {
        name:"set_thailand",
        images:"https://thaipublica.org/wp-content/uploads/2022/11/logo-set-1000x600-1.jpg",
        link:"https://www.tiktok.com/@set_thailand"
      },
      {
        name:"moneychatthailand ",
        images:"https://scontent.fbkk10-1.fna.fbcdn.net/v/t39.30808-6/285554079_410033464465729_1765976847751759247_n.png?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFMGsezEtsCiw3ZB3t93kDfuIBd6FPqD4G4gF3oU-oPge4B0zuIvaIaW9dT7losqmcS_KulGgSwjUEIBkniYLZw&_nc_ohc=bjbGpJ6sU3YAX_k3N07&_nc_ht=scontent.fbkk10-1.fna&oh=00_AfAN6m4SdRxUGVeaH_wP9HPTHpfjFDlDdNky1SAvu1CC2A&oe=652FE1AD",
        link:"https://www.tiktok.com/@moneychatthailand"
      },
      {
        name:"timetomakemoneyy",
        images:"https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/f69f7441c195c098574c6843b9d06e91~c5_100x100.jpeg?x-expires=1697540400&x-signature=HCZIT28Sk4WG41b8l5SWO1GOnBY%3D",
        link:"https://www.tiktok.com/@timetomakemoneyy"
      },
      {
        name:"sinefinechannel",
        images:"https://scontent.fbkk10-1.fna.fbcdn.net/v/t39.30808-1/366372212_888288596200072_7273587492870599353_n.jpg?stp=dst-jpg_p160x160&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFRvqbEsAtehdHptcJJn1rdX__GMh05S9Jf_8YyHTlL0iXphH_0bF8RQTlTWDkUquoyCCMnfgoWBhBgNJAMd7nY&_nc_ohc=DBJ8w8dG1CAAX9HO_JG&_nc_ht=scontent.fbkk10-1.fna&oh=00_AfBKeq8Veg8YOUgBkQcRkGtgW-DrdfvSsI30eU1XaGyhmQ&oe=652FD425",
        link:"https://www.facebook.com/sinefine.money"
      },
      {
        name:"pratanmeow",
        images:"https://scontent.fbkk10-1.fna.fbcdn.net/v/t39.30808-1/313943713_186952093842890_2790927210452144841_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFTGr2NS4lu_y99FMyTjCB0_bCGVm28CTH9sIZWbbwJMRtF0tsazVQ2Lexy3_kMQdAh9PNpyyKHI3D6CyVcZnk7&_nc_ohc=F1D2-ndmitQAX9HlaGN&_nc_ht=scontent.fbkk10-1.fna&oh=00_AfA_-03zO6TFVJfjWWZhvelSiNqVffYydB0mWQb76tNnNw&oe=6531024C",
        link:"https://www.tiktok.com/@pratanmeow"
      },
      {
        name:"nacksiwakorn",
        images:"https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/974d345324d31dbfe6396d69ec421cfb.jpeg?x-expires=1697540400&x-signature=qbmGJ6Q4UJwYtfnfAE9gCcSOpE0%3D",
        link:"https://www.tiktok.com/@nacksiwakorn"
      },
      {
        name:"bowmoneystory",
        images:"https://scontent.fbkk10-1.fna.fbcdn.net/v/t39.30808-6/328893437_1037812367176094_1839449262517915392_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEJSorWGDrzhb_fB62QaYugblBzStFoBv5uUHNK0WgG_nfuiCSW3PYsWtl2MJAOcA9oz9HX8i9cRDndX06Mal7q&_nc_ohc=d2TC5WQ9FkAAX_j-a6S&_nc_ht=scontent.fbkk10-1.fna&oh=00_AfAvwqxRuaY2Jszmlb4DjoGrTPladG6qeBOqiS6tlWMmkg&oe=653099F9",
        link:"https://www.tiktok.com/@bowmoneystory"
      },
      {
        name:"bizwithturb",
        images:"https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/187bb8d2369f5a4976e1ba2902be7c7b~c5_100x100.jpeg?x-expires=1697540400&x-signature=UuhatmWohd99%2BtB3ZjtyXQ%2BdiXw%3D",
        link:"https://www.tiktok.com/@bizwithturb"
      }
    ],
    // อันนี้คือ ส่วน ของ ช่อง Facebook ทั้งหมด
    Facebook: [
      {
        name: "Stock JourNoey",
        images:
          "https://scontent.fbkk10-1.fna.fbcdn.net/v/t39.30808-6/293629300_1180214072550015_3310376360582476193_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHLUfRb9XFkFeTCYjGGI_tQJ7i_nzA5Z2gnuL-fMDlnaHlxazTvJ5xQjzvA0QUHg_FJ9IpvBG1Xv390DoWY7fzJ&_nc_ohc=VQ-ovnGZ7M4AX-gCARP&_nc_ht=scontent.fbkk10-1.fna&oh=00_AfCZS9PuP1MyyMqmiH79Dbg9vitigfU7QmWedxHAzaV4zA&oe=652EA5C6",
        link: "https://www.facebook.com/stockjournoey",
      },
      {
        name: "Investment Frappe",
        images:"https://scontent.fbkk10-1.fna.fbcdn.net/v/t39.30808-6/361211770_673447241467850_5790332926629383185_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG4GeFhN7vuEm818iKOQ94lnZn8KLdSgiCdmfwot1KCIA6i8o-CDFCBfugUsW-sMq1TmuxQV4Yb1xYulvzWyhmA&_nc_ohc=uaVS47daZ6wAX_PAq2F&_nc_ht=scontent.fbkk10-1.fna&oh=00_AfBkhCw4eDYja66ejHzgUpkU0V9NKlLqFAzEW1TsZsmzuw&oe=652F10CB",
        link: "https://www.facebook.com/Investmentfrappe",
      },
      {
        name: "Money Coach",
        images:"https://scontent.fbkk29-1.fna.fbcdn.net/v/t39.30808-6/278601508_7571224746250933_1395048062731050015_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG-xWsLgQeGh1-UPQmlrq1qPNAJ72S4ulg80AnvZLi6WC14KdjgC4d915dxZZ_lNJ4ejjIJhFB8TEcOE5dyhUtn&_nc_ohc=vibkhPWAtzYAX_rHnh9&_nc_ht=scontent.fbkk29-1.fna&oh=00_AfBzdrqSQRZPCOLr-bYfx10obs-lw8okXpa5DGOn_hXHog&oe=652FE0C6",
        link: "https://www.facebook.com/TheMoneyCoachTH",
      },
      {
        name: "INVESTING.in.th",
        images:"https://scontent.fbkk29-8.fna.fbcdn.net/v/t39.30808-6/293560508_6052434264783063_4853789415745879816_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEZNPFl6sWBPINUli1DA4JiDewAVCJABjwN7ABUIkAGPINrwzPEyVLfZemO037WacYPs_g7Iofup0ewF30IMkOz&_nc_ohc=8upM2dGjUpcAX_hC0N1&_nc_ht=scontent.fbkk29-8.fna&oh=00_AfA0BZ0UeVQYQGDBDSbj8MAr012GZIBW0CsoEm6MLOU9rA&oe=652F6932",
        link: "https://www.facebook.com/investing.in.th",
      },
      {
        name: "TaxBugnoms",
        images:
          "https://scontent.fbkk14-1.fna.fbcdn.net/v/t1.6435-1/183689453_320073166152335_1702706590148963192_n.jpg?stp=dst-jpg_p200x200&_nc_cat=100&ccb=1-7&_nc_sid=c6021c&_nc_eui2=AeFjnZ7i4siQ2bbqgWPJ4iG7l62RqWVnyyeXrZGpZWfLJ0nx55agXHW6SBD5j5aToLRGXLQKwlXs_m-1MZ_R4AIn&_nc_ohc=qqgesNf72zAAX-LGWyV&_nc_ht=scontent.fbkk14-1.fna&oh=00_AfCkDsAqD0Tqv88l_znBTPemGPoBu903jeLlXvU6alFdZg&oe=654B5FFC",
        link: "https://www.facebook.com/TaxBugnoms",
      },
      {
        name: "ข้าราชการลงทุน",
       images:"https://scontent.fbkk29-1.fna.fbcdn.net/v/t39.30808-1/285753286_328742722748950_4725658836205873861_n.jpg?stp=dst-jpg_s200x200&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFLwOER7WczW1MPO9tw0GHr4HSKdOPFgjngdIp048WCORpaA8dKu2CJBVSBnya4Cu17zh1C1ezbBF02rTQliM0y&_nc_ohc=L4KFwBo6qVkAX8eF9kT&_nc_ht=scontent.fbkk29-1.fna&oh=00_AfDovVPt0aAssaOk2Yx5BhnfOu1Rat2NdQYGWD4H6dnxfg&oe=652F442C",
        link: "https://www.facebook.com/karnlongtoon",
      },
      {
        name: "Than Money Trick",
        images:"https://scontent.fbkk29-7.fna.fbcdn.net/v/t39.30808-6/242228042_873907686580510_5118412723528762177_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE60PwDn3Onvf8XtiAXn7TAvjydtSROuGG-PJ21JE64YfHddDQ2LXcsSdsapB4i4yPqh-Tt7kmqKQ0uI08BOlSE&_nc_ohc=v8d1oSX5nsAAX-gqY2_&_nc_ht=scontent.fbkk29-7.fna&oh=00_AfBq6G3ja88MT5puDO9cjPS7l9jBK3QAZdTxo83OxjXKFA&oe=652FE4DA",
        link: "https://www.facebook.com/thanmoneytrick",
      },
      {
        name: "MONEY LAB",
       images:"https://scontent.fbkk29-4.fna.fbcdn.net/v/t39.30808-6/357494908_566944112321478_7432436929023359969_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFhhVThDGrYTOSaqx8YaEXWnCY4yx8SY3ycJjjLHxJjfAbAJRTugRQPg2KdRWqmMwGVTFO8CJxeCgVgVCWdeQx8&_nc_ohc=h6HM1ySPA2oAX8kisxo&_nc_ht=scontent.fbkk29-4.fna&oh=00_AfChKXwHCZJF3rASD4CKd_GWexC5rxTOkpnY0tWPpCc2pw&oe=652F5023",
        link: "https://www.facebook.com/moneylabstory",
      },
      {
        name: "เล่าการเงิน - laofinance Financial Freedom",
        images:"https://scontent.fbkk29-7.fna.fbcdn.net/v/t39.30808-6/314414680_505105148297404_2927626865019750878_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=zwvw646VGbYAX_y9HHT&_nc_ht=scontent.fbkk29-7.fna&oh=00_AfBnDSMYRBpH-QPHpYufaKAjRvgVcjGqM7JVFM0Py6-qPA&oe=65300E11",
        link: "https://www.facebook.com/laofinance",
      },
      {
        name: "เด็กการเงิน DekFinance",
        images:
          "https://scontent.fbkk29-7.fna.fbcdn.net/v/t39.30808-6/347581227_777904640618399_8878646109776476790_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF4SmKE_pS_luEMlnL_zMsIMzcM-4kpaRozNwz7iSlpGgK8oJhZavceeMuby38JbkwoaGf6vl_mLKpQVxlIGvty&_nc_ohc=8bzwWW7SoAoAX_bs1DE&_nc_ht=scontent.fbkk29-7.fna&oh=00_AfCSFjBfHI6Kwwy8to3qEiJdazEXi0Xedo3HGMrmoQdvPg&oe=6530ACFB",
        link: "https://www.facebook.com/DekFinance101",
      },
      {
        name: "ลงทุน หุ้น การเงิน Tactschool ส่งต่อความรู้ทางการเงิน",
        images:
          "https://scontent.fbkk10-1.fna.fbcdn.net/v/t39.30808-6/339566019_910341070236676_6954890492405523743_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeF47LJNOfZ0A02Zz7guUmf8i6xtBkKp5HuLrG0GQqnkeyqHwKf9yRjzgswepIqBbebw7ix9a6NNVpo7ciIas_ss&_nc_ohc=3vMmfzJFj3QAX8QLoAc&_nc_ht=scontent.fbkk10-1.fna&oh=00_AfC6ljULimpUjJ7n68iD3umV6yHtdgGMSBycXCZWOjS0QQ&oe=652969CAhttps://scontent.fbkk29-9.fna.fbcdn.net/v/t39.30808-6/339566019_910341070236676_6954890492405523743_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF47LJNOfZ0A02Zz7guUmf8i6xtBkKp5HuLrG0GQqnkeyqHwKf9yRjzgswepIqBbebw7ix9a6NNVpo7ciIas_ss&_nc_ohc=iDNXvIFRxrQAX-nGSOM&_nc_ht=scontent.fbkk29-9.fna&oh=00_AfCYQPcerY3Q0Z0sJ4t3HcRmWt9-fcScMvw3GL-HCd_jHQ&oe=653152CA",
        link: "https://www.facebook.com/Tactschool",
      },
      {
        name: "วัคซีนการเงิน by หมอสอง",
        images:
          "https://scontent.fbkk29-5.fna.fbcdn.net/v/t39.30808-6/306645862_533949378735827_1057492399178410720_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGDEoJIH0gD3Hc1PCYL47cuWhpjqUTyqC1aGmOpRPKoLXHNKOJvqTIbC8VLG8ywPqM8ER-sX2pyL7SXMWCJMm_U&_nc_ohc=o9bQ2esKD-UAX8Ckzca&_nc_ht=scontent.fbkk29-5.fna&oh=00_AfBYFcwjDfuHmj8NJweUN3_IErSxdye2xqqxgr9XvNfIxA&oe=6530D4A5",
        link: "https://www.facebook.com/FinancialVaccine",
      },
      {
        name: "Mr.LikeStock อ่านงบการเงิน หุ้น การลงทุน",
        images:"https://scontent.fbkk29-1.fna.fbcdn.net/v/t39.30808-6/347443313_184689484530563_5011791377636539036_n.png?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHAT7m9sAPTBgT4YJGVaA5We0sgskVsuDp7SyCyRWy4OlWHceMfDLjgkCdQ77HNFrbw7QSaCq28UgI93S2pEYAC&_nc_ohc=s7YiD9eWgXgAX-6dg7O&_nc_ht=scontent.fbkk29-1.fna&oh=00_AfAP01tEc0Runc_i2vbwMaiP-vP_4gEaO30JZkRJKqfEvA&oe=653056C9",
        link: "https://www.facebook.com/mr.likestock",
      },
      {
        name: "นิทานการเงิน",
        images:
          "https://scontent.fbkk29-1.fna.fbcdn.net/v/t39.30808-6/352202731_258833210156112_817544606100307531_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHkL7tjyaB74jFIC-k6wOEbbFj_swObjoBsWP-zA5uOgFohiv7otgP7cIfk21VbPkuXTCeF3Vq3ysVwDhnsJvNI&_nc_ohc=Zvh3sata2RMAX8e207i&_nc_ht=scontent.fbkk29-1.fna&oh=00_AfDGaihm776BwlKJb6tU8Fnc7cDGLBXO8lTyhqUiOGcvxA&oe=6530E629",
        link: "https://www.facebook.com/moneystorythailand",
      },
      {
        name: "การเงินธนาคาร",
        images:
          "https://scontent.fbkk29-8.fna.fbcdn.net/v/t39.30808-6/324422351_1257501894796326_591667914592935815_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGi2lL1F11TgtV0piGxO4YAD9rk4ruiuycP2uTiu6K7J0jG_AqwBefVwEGeV4I3lSg7v0VJnwFvzhmtLW0YNi3_&_nc_ohc=RzeqGSa07JMAX8GdZgB&_nc_ht=scontent.fbkk29-8.fna&oh=00_AfCCnV0S6jN5FWqITMyNwtHifOxwIGI1yHFgH7-PwzB-Ow&oe=652F7DD1",
        link: "https://www.facebook.com/moneyandbanking",
      },
      {
        name: "ความลับของเงิน",
        images:
          "https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.6435-1/150588198_257768349140262_2868318055400702512_n.jpg?stp=dst-jpg_p320x320&_nc_cat=104&ccb=1-7&_nc_sid=c6021c&_nc_eui2=AeGw4uyBu-UECf18Fgfq1yStKL9r683YqwEov2vrzdirAXPH-aDhb55QgvVc3i5rM6dAygN5iVtrS_s-qkZ8YR5q&_nc_ohc=uyTxt7NHANsAX_imr5M&_nc_ht=scontent.fbkk10-1.fna&oh=00_AfCGdef8X3Bqu9r-rXYx2wvJ2Z--wXkji0e5Suct5_WaiA&oe=654B5DC1",
        link: "https://www.facebook.com/moneydiary.co",
      },
      {
        name: "อภินิหารเงินออม",
        images:
          "https://scontent.fbkk29-6.fna.fbcdn.net/v/t39.30808-6/339569915_606906131304611_2980485070489593300_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHIhwsBZkeLZjMjU5JunqltsQLAaB7qPxWxAsBoHuo_Fb7spXxxhAAXtEMffl8EhyDrXWZnc4eqOkGNEpxvtITq&_nc_ohc=ix1Q5aZLXGMAX_yCgpn&_nc_ht=scontent.fbkk29-6.fna&oh=00_AfBRpPeEy9Bgmcrq3NxBbRSdAttAWOGb8h8LCr2BNhc1MA&oe=65311BF4",
        link: "https://www.facebook.com/miracleofsaving",
      },
      {
        name:"MeeMoney",
        images:"https://scontent.fbkk10-1.fna.fbcdn.net/v/t39.30808-6/290141099_685110019401510_3199136026190954464_n.png?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeH34yDrd_PPT1TS4uNQd9o-Dgte052gREoOC17TnaBESsJ_4_5nFiYf3_garIUAFruDicudAArvbBqspPnBGx8k&_nc_ohc=SwOpRLmlyP8AX-ZFWZl&_nc_ht=scontent.fbkk10-1.fna&oh=00_AfDgLSrnxNhFdTnGibxAxobVxol2HPcokpvK3fDBC1VUQQ&oe=65303647",
        link:"https://www.facebook.com/MeeMoneyTH",
      },
      {
        name:"เกลาหุ้น",
        images:"https://scontent.fbkk10-1.fna.fbcdn.net/v/t39.30808-1/241274612_110289454726281_1141796321054413093_n.png?stp=dst-png_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=jSR2S-V4f-EAX8S_2Wo&_nc_ht=scontent.fbkk10-1.fna&oh=00_AfCK2Svap3I7Ps0R61EQyybvZ56z7X9zxNta7MScz9j_hA&oe=652FBE76",
        link:"https://www.facebook.com/profile.php?id=100075996244475"
      },
      {
        name:"Money Buffalo",
        images:"https://scontent.fbkk14-1.fna.fbcdn.net/v/t39.30808-6/329655789_3260570344254332_4171940168231773439_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=3xYZO8jyTaoAX-iM_uT&_nc_ht=scontent.fbkk14-1.fna&oh=00_AfBRXMOMwPDn0hJsoyf1C96QS_5Al2BfR7cNFYi71f3g_w&oe=6531A91F",
        link:"https://www.facebook.com/moneybuffalo"
      },
      {
        name:"ออมให้เงินโต แบบเข้าใจง่ายๆ",
        images:"https://scontent.fbkk14-1.fna.fbcdn.net/v/t39.30808-6/238831188_227273959402512_3260697978867738551_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=WaZnIiV9AzMAX9ld0rt&_nc_oc=AQkj4leUoaEFWeWQxvMeY5yWGeFCtenzJQBFuOnNacBHtzyG-SKOr-FB1xa0vJTk_P8&_nc_ht=scontent.fbkk14-1.fna&oh=00_AfAr9-R8DF9CuCSC8MAFTjLJy0jrdNOZk9iQ-Y9qlhCVZg&oe=653112AE",
        link:"https://www.facebook.com/EzyFinPlan"
      },
      {
        name:"การลงทุน เพื่อ เกษียณอย่างมีความสุข",
        images:"https://scontent.fbkk10-1.fna.fbcdn.net/v/t39.30808-6/313042919_161602363160244_2202771640859852170_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=FpcK2CRCL44AX8oxy56&_nc_ht=scontent.fbkk10-1.fna&oh=00_AfCPoWRVF5ue1c_cO1pAtLHj9E3N1j9n8LiAO7sexKd4ng&oe=65317E02",
        link:"https://www.facebook.com/profile.php?id=100079314447467"
      },
      {
        name:"เล่นหุ้นไม่เป็น เราใจดีสอนฟรี",
        images:"https://scontent.fbkk14-1.fna.fbcdn.net/v/t39.30808-1/292717037_579434600219977_5306852669920368361_n.png?stp=dst-png_p320x320&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Oy3XLrAFWlUAX8_9SwU&_nc_ht=scontent.fbkk14-1.fna&oh=00_AfCP5VMVTFZwelJNM_T0S9jtAxaMgSR8Te6v5dau_kK2TA&oe=65302EA2",
        link:"https://www.facebook.com/rakhoon"
      },
      {
        name:"ออมเงินและประกันชีวิต",
        images:"https://scontent.fbkk10-1.fna.fbcdn.net/v/t39.30808-6/336013492_732426925250736_1718869667409080340_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ZrlxF1QwYCQAX_vWg3B&_nc_ht=scontent.fbkk10-1.fna&oh=00_AfCWQsUVVBB87Yx6tqgTiJC0IFqOwGUQsxPGRzwtps4YCQ&oe=652FCF50",
        link:"https://www.facebook.com/moneyinsurethailand"
      }
    ],
    // อันนี้คือ ส่วน ของ ชื่อ Math ทั้งหมด
    Math: [
      {
        name: "ดอกเบี้ยทบต้น",
        images:
          "https://cdn.pixabay.com/photo/2023/10/02/14/00/egg-8289259_1280.png",
        link: "/CompoundInterest",
      },

      {
        name: "คำนวณเงินเกษียณอายุ",
        images:
          "https://cdn.pixabay.com/photo/2023/10/02/14/00/egg-8289259_1280.png",
        link: "/ReTire",
      },
      {
        name:"กฎของตัวเลข 72",
        images: "https://cdn.pixabay.com/photo/2023/10/02/14/00/egg-8289259_1280.png",
        link:"/seventwo"
      },
      {
        name:"เงินออม และ เงินลงทุน",
        images: "https://cdn.pixabay.com/photo/2023/10/02/14/00/egg-8289259_1280.png",
        link:"/moneyincome"
      },
      {
        name:"ความมั่งคั่งสุทธิ",
        images: "https://cdn.pixabay.com/photo/2023/10/02/14/00/egg-8289259_1280.png",
        link:"/wealthy"
      },
    ],
  },
  // ใน Vuex, getters ใช้ในการเข้าถึงข้อมูลจากสถานะ (state) นำมาใช้ในคอมโพเนนต์ Vue
  // หรือส่วนอื่น ๆ
  getters: {
    CourseL: (state) => state.CourseL,
    shopBooks: (state) => state.shopBooks,
    CourseYT: (state) => state.CourseYT,
    Mahidol: (state) => state.Mahidol,
    ThaiMooc: (state) => state.ThaiMooc,
    SpaceByCBS: (state) => state.SpaceByCBS,
    CHULAMOOC: (state) => state.CHULAMOOC,
    PSUMOOC: (state) => state.PSUMOOC,
    

    Ccourse: (state) => state.Ccourse,
    Youtube: (state) => state.Youtube,
    Tiktok: (state) => state.Tiktok,
    Facebook: (state) => state.Facebook,
    Math: (state) => state.Math,
  },

  // ใช้เพื่อ รับค่า ว่า กด เมนูไหน ละ ให้ สีดำ hover ไป แสดงที่เมนูนั้น
  mutations: {
    setCurrentMenu(state, menu) {
      state.currentMenu = menu;
    },
  },

  actions: {},
  modules: {},
});
