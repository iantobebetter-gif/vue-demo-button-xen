import XENButton from './components/XENButton.vue';
import XENInput from './components/XENInput.vue';

const XENComponents = {
  install(Vue) {
    Vue.component('XENButton', XENButton);
    Vue.component('XENInput', XENInput);
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(XENComponents);
}

export default XENComponents;
export { XENButton, XENInput };
