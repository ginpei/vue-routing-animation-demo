<style scoped>
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
	<router-link :to="url" class="task-item">
		{{task.title}}
	</router-link>
</template>

<script>
module.exports = {
	props: [
		'task',
	],

	computed: {
		url() {
			return `/tasks/${this.task.id}`;
		},
	},
};
</script>
