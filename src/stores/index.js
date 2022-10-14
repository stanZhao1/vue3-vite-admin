import { defineStore } from "pinia";

export const useIndexStore = defineStore("index", {
  state: () => ({
    selectedMenu: {},
  }),
  actions: {
    changeSelectedMenu(selectedMenu) {
      this.selectedMenu = selectedMenu;
    },
  },
})