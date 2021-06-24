import Vue from "vue"; export const store = Vue.observable({ isNavOpen: false
}); export const mutations = { setIsNavOpen(toggle) { store.isNavOpen = toggle;
}, toggleNav() { store.isNavOpen = !store.isNavOpen;
document.getElementById("pages").classList.toggle("blurPage");
document.getElementById("pages").classList.toggle("preventTouch"); } };
