

import './js/index.js'
//import './sass/style.sass'
// import './css/style.css'

window.Vue = require('vue')

import store from './store/index.js'

Vue.component('main-title', require('./components/mainTitle.vue').default)

const app = new Vue({
    store: store,
    el: "#app"
})