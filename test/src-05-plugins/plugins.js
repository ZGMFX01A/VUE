export default {
  install(Vue) {
    Vue.filter("xx", function (value) {
      return value.slice(0, 4);
    });
    Vue.directive("fbind", {
      bind(element, binding) {
        element.value = binding.value;
      },
      inserted(element, binding) {// eslint-disable-line no-unused-vars
        element.focus();
      },
      update(element, binding) {
        element.value = binding.value;
      },
    });
  },
};
