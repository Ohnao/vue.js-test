
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));

Vue.component('todo-item',{
  props: ['todo'],
  template: '<li>{ {todo.txt }}</li>'
})

const app7 = new Vue({
    el: '#app-7',
    data: {
      groceryList: [
        {id:0, text: 'ghost-0'},
        {id:1, text: 'pumpkin-0'},
        {id:2, text: 'doracula-0'}
      ]
    }
});
