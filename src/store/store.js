// store.js
import { createStore } from "vuex";

export default createStore({
  state: {
    currentMenu: null,
  },
  mutations: {
    setCurrentMenu(state, menu) {
      state.currentMenu = menu;
    },
  },
  actions: {
    // อาจจะไม่จำเป็นต้องมี actions ถ้าคุณไม่ได้ใช้ฟังก์ชันนี้ในโปรเจกต์ของคุณ
  },
});
