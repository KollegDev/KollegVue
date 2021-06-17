import Vue from "vue";

export const store = Vue.observable({
  isNavOpen: false
});

export const mutations = {
  setIsNavOpen(toggle) {
    store.isNavOpen = toggle;
  },
  toggleNav() {
    store.isNavOpen = !store.isNavOpen;  
    // var y = window.scrollY;
    // window.onscroll=function(){};
    // if(store.isNavOpen)window.onscroll = function () { window.scrollTo(0, y); };
    document.getElementById("pages").classList.toggle("blurPage");
  }
};
