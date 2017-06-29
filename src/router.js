const Home = require('./components/views/misc/Home.vue');
const TasksIndex = require('./components/views/tasks/Index.vue');
const TasksShow = require('./components/views/tasks/Show.vue');
const Vue = require('vue');
const VueRouter = require('vue-router');

Vue.use(VueRouter);

module.exports = new VueRouter({
	routes: [
		{ path: '/', component: Home },
		{ path: '/tasks/', component: TasksIndex },
		{ path: '/tasks/:id', component: TasksShow },
	],
});
