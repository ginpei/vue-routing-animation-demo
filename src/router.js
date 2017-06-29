const About = require('./components/views/misc/About.vue');
const Home = require('./components/views/misc/Home.vue');
const NotesIndex = require('./components/views/notes/Index.vue');
const NotesShow = require('./components/views/notes/Show.vue');
const Vue = require('vue');
const VueRouter = require('vue-router');

Vue.use(VueRouter);

module.exports = new VueRouter({
	routes: [
		{ path: '/', component: Home },
		{ path: '/about', component: About },
		{ path: '/notes/', component: NotesIndex },
		{ path: '/notes/:id', component: NotesShow },
	],
});
