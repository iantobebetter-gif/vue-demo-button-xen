import MyButton from './components/MyButton.vue';

const VueDemoButton = {
  install(Vue) {
    Vue.component('MyButton', MyButton);
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueDemoButton);
}

export default VueDemoButton;
export { MyButton };
