import MyButton from './components/MyButton.vue';

const XENButton = {
  install(Vue) {
    Vue.component('MyButton', MyButton);
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(XENButton);
}

export default XENButton;
export { MyButton };
