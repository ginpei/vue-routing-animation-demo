<style scoped>
.task-list {
	display: flex;
	flex-wrap: wrap;
}

.task-item {
	border: 1px solid #009;
	box-sizing: border-box;
	height: 5em;
	margin: 1em;
	padding: 1em;
	width: calc(100% / 3 - 2em);
}
</style>

<template>
	<base-layout>
		<h1 routing-animation>Tasks</h1>
		<div class="task-list">
			<task-item v-for="d in tasks" :task="d"></task-item>
		</div>
	</base-layout>
</template>

<script>
const BaseLayout = require('../../layouts/BaseLayout.vue');
const TaskItem = require('./Index-TaskItem.vue');

module.exports = {
	components: {
		BaseLayout,
		TaskItem,
	},

	data() {
		return {
			tasks: this.$store.state.task.items,
		};
	},
};
</script>
