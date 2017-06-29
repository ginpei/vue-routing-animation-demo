const Vue = require('vue');
const Vuex = require('vuex');
const task = require('./task.js');

Vue.use(Vuex);

module.exports = new Vuex.Store({
	modules: {
		task,
	},
});
