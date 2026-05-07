import XENButton from './components/XENButton.vue';

const XENButtonPlugin = {
  install(Vue) {
    Vue.component('XENButton', XENButton);
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(XENButtonPlugin);
}

export default XENButtonPlugin;
export { XENButton };
