const Vue = require('vue');
const App = require('./components/App.vue');
const store = require('./store/index.js');
const router = require('./router.js');

new Vue({  // eslint-disable-line no-new
	el: '#app',
	store,
	router,
	render: f=>f(App),
});
