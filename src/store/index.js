const Vue = require('vue');
const Vuex = require('vuex');
const note = require('./note.js');

Vue.use(Vuex);

module.exports = new Vuex.Store({
	modules: {
		note,
	},
});
